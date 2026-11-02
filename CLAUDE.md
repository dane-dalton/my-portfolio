# CLAUDE.md

Dane Dalton's personal portfolio, danezdalton.com, being redesigned as a single-page Astro site. The full plan, phases and prompts are in `docs/redesign-plan.md`. All site wording is in `docs/content.md`.

## Stack

- Astro 7 (static output), TypeScript strict
- Tailwind CSS 4 via `@tailwindcss/vite`, styles in `src/styles/global.css`
- Content collections for experience and projects (from Phase 6)
- Small client `<script>`s inside `.astro` components for interactivity. **No React** unless a piece clearly needs it.
- Motion's vanilla JS API for animation (from Phase 8)
- Contact form: Astro Action + `@astrojs/vercel` adapter + Resend (Phase 7)
- Hosted on Vercel. Node 24 (`engines` in package.json).

## Commands

- `npm run dev`: dev server at http://localhost:4321
- `npm run build`: type-check (`astro check`) then build to `dist/`
- `npm run preview`: serve the built site
- `npm run lint`: ESLint (TypeScript, Astro and accessibility rules)
- `npm run format` / `npm run format:check`: Prettier

## Layout

- `src/pages/`: routes. `index.astro` is the single page; `404.astro` is the not-found page.
- `src/components/`: components. Page sections go in `src/components/sections/`.
- `src/layouts/`: page layouts.
- `src/styles/global.css`: Tailwind import and theme tokens.
- `src/data/`: shared profile details and links (`site.ts`).
- `src/assets/`: images, processed and optimized by Astro.
- `public/`: files served as-is at a stable URL (résumé PDF, robots.txt, favicons).
- `docs/`: plan, content, Astro notes, and `legacy/` (old site's text and styles, reference only, deleted in Phase 10).

## Design direction

"Star Chart at sunset," Combo 1 (Horizon Chart): https://claude.ai/artifact/Az236gnzYNvT8VKmE1rj9e
Deep night-blue page, twinkling canvas starfield, a clickable Big Dipper whose stars link to the four sections, mono "catalog" labels, Instrument Serif display type. A sunset glow rises from the bottom of the landing section. Sunset gradient (orange to rose) on the last name, main button, active nav item and dates. Dark only.

## Conventions

- TypeScript strict. No `any`.
- Style with Tailwind. Every color comes from a theme token; no hard-coded colors in components.
- Prefer `.astro` components and small client scripts over framework islands.
- Content lives in data files or content collections, not hard-coded in markup.
- Accessible by default: semantic landmarks, visible focus, keyboard support, alt text, `prefers-reduced-motion`.
- Match the existing Prettier config. Keep commits small and logical.
- Work on `staging` or a branch off it. Never commit to `main`; Vercel deploys `main` to production.
- Run `npm run build` and `npm run lint` before saying a task is done.

## Learning Astro

I'm learning Astro. End every task with an **"Astro notes"** section explaining the Astro concepts used, why, and where they are in the code. Append the same notes to `docs/astro-notes.md` under a heading for the phase. When Astro offers more than one way to do something, name the options and why you chose one.
