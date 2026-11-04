// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.danezdalton.com",
  output: "static",
  // One page, one stylesheet: inline it so first paint doesn't wait on a request.
  build: { inlineStylesheets: "always" },
  // Pages stay prerendered; only routes that opt out (the contact action and
  // its no-JavaScript result page) run as Vercel Functions.
  adapter: vercel(),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      CONTACT_TO_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      CONTACT_FROM_EMAIL: envField.string({
        context: "server",
        access: "public",
        default: "Dane Dalton's portfolio <contact@danezdalton.com>",
      }),
    },
  },
  // The old React site had separate pages; send those links to the matching section.
  redirects: {
    "/about": "/#about",
    "/projects": "/#experience",
  },
  fonts: [
    {
      name: "Instrument Serif",
      cssVariable: "--font-display-src",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal", "italic"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      name: "Manrope",
      cssVariable: "--font-body-src",
      provider: fontProviders.google(),
      weights: ["300 700"],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-mono-src",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  integrations: [
    icon(),
    // Only real pages: skip the form's result page and the 404.
    sitemap({
      filter: (page) => !page.includes("/contact/") && !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
