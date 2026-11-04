# danezdalton.com

My personal portfolio: a single page under a night sky, with a twinkling starfield, a sunset glow on the horizon, and a Big Dipper whose stars link to each section.

**Live:** https://www.danezdalton.com

![The landing section: "Dane Dalton" with the sunset gradient, the Big Dipper navigation and the horizon glow](docs/screenshots/after-desktop.png)

The first version of this site (2024) was React + Vite and taught me TypeScript. This rebuild is in Astro and taught me Astro: the notes I kept along the way are in [`docs/astro-notes.md`](docs/astro-notes.md).

## Stack

- **[Astro 7](https://astro.build)**: pages are prebuilt to static HTML; only the contact form runs on a server.
- **TypeScript** (strict) and **Tailwind CSS 4**, with the color palette and type scale as theme tokens in `src/styles/global.css`.
- **Content collections** for jobs and projects, validated by schemas at build time.
- **Motion** (`motion/mini`) for the load sequence and scroll reveals, about 4 KB.
- **Astro Actions** + **Resend** for the contact form, deployed as a Vercel Function.
- **Vercel** hosting. No React on the page; a few small TypeScript scripts handle the starfield, navigation and form.

Lighthouse (mobile): Accessibility 100, Best Practices 100, SEO 100, Performance 97+.

## Run it locally

Requires Node 24.

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321.

The contact form needs these in a `.env` file (and in Vercel's environment variables for deploys):

```bash
RESEND_API_KEY=        # Resend API key with sending access
CONTACT_TO_EMAIL=      # where messages are delivered
# CONTACT_FROM_EMAIL=  # optional; defaults to contact@danezdalton.com
```

Without them, the site builds and runs; the form shows an error instead of sending.

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Type-check, then build for production |
| `npm run preview` | Serve the production build            |
| `npm run lint`    | ESLint, including accessibility rules |
| `npm run format`  | Format with Prettier                  |

## Editing content

All wording lives in data files, not in the components.

**Add a job:** create a file in `src/content/experience/`, for example `new-company.yaml`:

```yaml
company: New Company
location: Springfield, IL
url: https://example.com # optional
order: 1 # position in the timeline, lowest first
roles:
  - title: Software Engineer
    start: "2027-01"
    end: present # or a date like "2028-06"
    bullets:
      - What you built, and the result.
tech: [TypeScript, Astro]
```

Bump the `order` of the other jobs if it should go first. If a field is missing or misspelled, the build stops and names the file and field.

**Add a project:** create a file in `src/content/projects/`. Set `featured: true` to show it as a card under Selected projects:

```yaml
name: Project name
summary: One sentence about what it does.
tech: [React, Supabase]
liveUrl: https://example.com # optional
repoUrl: https://github.com/dane-dalton/example # optional
experience: new-company # optional: links the card to that job
featured: true
order: 1
```

**Everything else:**

- Name, pitch, location and links: `src/data/site.ts`
- About bio and skills: `src/data/about.ts`
- Contact wording: `src/data/contact.ts`
- Headshot: `src/assets/photoOfMe.png` (Astro resizes it at build time)
- Résumé: replace `public/Dane_Dalton_Resume.pdf`; the link stays the same

## Project layout

```
src/
  pages/        index.astro (the page), 404.astro, contact/sent.astro (no-JS form result)
  layouts/      BaseLayout.astro: <head>, SEO tags, fonts, starfield, motion
  components/   Header, Footer, BigDipper, Starfield, sections/ (Home, About, Experience, Contact)
  content/      experience/ and projects/ YAML files; schemas in content.config.ts
  data/         site.ts, about.ts, contact.ts
  actions/      the contact form action
  scripts/      motion.ts
  styles/       global.css: Tailwind and theme tokens
public/         résumé PDF, share image, favicons, robots.txt
docs/           redesign plan, content, Astro notes, screenshots
```

## Deploying

`main` deploys to danezdalton.com on Vercel. Work happens on `staging` (or a branch off it), which gets its own preview URL; `staging` is merged into `main` to go live.

## Contact

Use the form at [danezdalton.com/#contact](https://www.danezdalton.com/#contact).
