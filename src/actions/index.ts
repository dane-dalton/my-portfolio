// Server actions. `contact` validates the contact form and emails it through Resend.
import { ActionError, defineAction } from "astro:actions";
import {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  RESEND_API_KEY,
} from "astro:env/server";
import { z } from "astro/zod";
import { Resend } from "resend";

// Real people take more than a few seconds to fill in a form.
const MIN_FILL_MS = 3000;

const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string({ error: "Please enter your name." })
        .trim()
        .min(1, "Please enter your name.")
        .max(100, "Please keep your name under 100 characters."),
      email: z
        .email({ error: "Please enter a valid email address." })
        .max(200, "Please use a shorter email address."),
      company: z
        .string()
        .trim()
        .max(100, "Please keep the company name under 100 characters.")
        .optional(),
      message: z
        .string({ error: "Please write a message." })
        .trim()
        .min(10, "Please write at least 10 characters.")
        .max(5000, "Please keep your message under 5,000 characters."),
      // Spam checks. `website` is a hidden field people never see; `elapsed` is
      // how long the form was open, in milliseconds, measured in the browser.
      website: z.string().optional(),
      elapsed: z.coerce.number().optional(),
    }),
    handler: async (input) => {
      const filledHoneypot = Boolean(input.website);
      const tooFast =
        input.elapsed !== undefined &&
        input.elapsed > 0 &&
        input.elapsed < MIN_FILL_MS;
      // Report success to bots so they learn nothing, but don't send anything.
      if (filledHoneypot || tooFast) {
        console.info(
          `Contact form: dropped as spam (${filledHoneypot ? "hidden field filled" : "sent too fast"}).`,
        );
        return { sent: true };
      }

      if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
        console.error(
          "Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.",
        );
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "The contact form isn't configured.",
        });
      }

      const name = singleLine(input.name);
      const company = input.company ? singleLine(input.company) : "";
      const resend = new Resend(RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        replyTo: input.email,
        subject: `Portfolio inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${input.email}`,
          ...(company ? [`Company: ${company}`] : []),
          "",
          input.message,
        ].join("\n"),
      });

      if (error) {
        // Log the error type only, never the visitor's message or the API key.
        console.error(
          `Contact form: Resend rejected the email (${error.name}).`,
        );
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "The email service rejected the message.",
        });
      }

      // The Resend email id lets you look the message up in Resend's dashboard.
      console.info(`Contact form: sent (Resend id ${data?.id ?? "unknown"}).`);
      return { sent: true };
    },
  }),
};
