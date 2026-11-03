// Content collections: jobs and projects, one YAML file per entry.
// Astro validates every file against these schemas at build time.
import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// "YYYY-MM" or a full date in YAML, or the word "present" for ongoing roles.
const startDate = z.coerce.date();
const endDate = z.union([z.literal("present"), z.coerce.date()]);

const role = z.object({
  title: z.string(),
  start: startDate,
  end: endDate,
  bullets: z.array(z.string()).min(1),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    location: z.string(),
    url: z.url().optional(),
    /** Display order, lowest first. Lets the full-time role lead the timeline. */
    order: z.number().int(),
    /** One or more titles held at this company, most recent first. */
    roles: z.array(role).min(1),
    tech: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    /** The job this project came from, if any. Must match an experience file name. */
    experience: reference("experience").optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(100),
  }),
});

export const collections = { experience, projects };
