# Astro notes

A running log of the Astro concepts used in each phase of the redesign: what they are, why we used them, and where to find them in the code.

---

## Phase 1: Astro scaffold & tooling

### Project structure
Astro is a framework built on top of Vite, so a lot will feel familiar: `npm run dev`, a `dist/` build folder, and imports that "just work." The main difference is that Astro builds **HTML at build time** and ships no JavaScript by default. The old site shipped a React app that drew the page in the browser.

| Path | What it is |
|---|---|
| `astro.config.mjs` | Astro's config file. It sets the site URL, the output mode, and Vite plugins (Tailwind). |
| `src/pages/` | **File-based routing.** Every `.astro` file here becomes a URL: `index.astro` → `/`, `404.astro` → the not-found page. No router library needed. |
| `src/styles/global.css` | Global stylesheet. Imported by a page or layout. |
| `src/assets/` | Files Astro **processes** at build time (images get optimized, files get hashed names). |
| `public/` | Files copied **as-is** to the site root (`public/robots.txt` → `/robots.txt`). |
| `.astro/` | Types Astro generates for you (git-ignored). |

### `.astro` components
Open `src/pages/index.astro`. It has two parts:
1. **Frontmatter**, between the `---` fences. This is TypeScript that runs **at build time** on your machine or Vercel's, never in the visitor's browser. Here it just imports the stylesheet.
2. **Template**, below the fences. It's HTML, with the option of `{expressions}` like JSX. Here it's a full `<html>` page. In Phase 3 that moves into a reusable layout.

### Output mode: static
`output: "static"` in `astro.config.mjs` means every page is prerendered to a plain `.html` file at build time. It's the default, but it's written out so the choice is visible. In Phase 7 the contact form needs a server, so we'll add the Vercel adapter. The page stays static; only the form's action runs on demand.

### `site`
`site: "https://www.danezdalton.com"` tells Astro the final URL. Astro uses it to build absolute URLs for canonical tags, the sitemap and social preview images (Phase 9).

### TypeScript
`tsconfig.json` extends `astro/tsconfigs/strict`. Astro ships three presets (`base`, `strict`, `strictest`), and `strict` matches the old project's `"strict": true`. We picked `strict` over `strictest` because `strictest` adds rules like `exactOptionalPropertyTypes` that mostly create friction on a small site. `include` adds `.astro/types.d.ts` so the types Astro generates are always loaded.

### `astro check` in the build
`npm run build` runs `astro check && astro build`. `astro build` alone does **not** type-check, just as Vite didn't. `astro check` type-checks `.astro` files as well as `.ts` files, so type errors fail the build on Vercel instead of reaching production.

### Tailwind 4
Tailwind 4 plugs in as a Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`), and `global.css` contains just `@import "tailwindcss";`. There's no `tailwind.config.js` or PostCSS config any more. Theme values (colors, fonts) will live in CSS with `@theme` in Phase 2. `npx astro add tailwind` does this setup automatically. We did it by hand so each piece is visible.

### Dev, build, preview
- `npm run dev`: a fast dev server with hot reload, at http://localhost:4321 (Astro's default port, Vite's was 5173).
- `npm run build`: writes the finished site to `dist/`.
- `npm run preview`: serves `dist/` locally, so you can check the real build before deploying.

### Vercel
Vercel detects Astro automatically, but your Vercel project was created with the **Vite** preset. `vercel.json` now says `"framework": "astro"`, so Vercel uses Astro's build settings regardless of the dashboard. The old `rewrites` rule was removed. It sent every URL to `index.html`, which made sense for a React single-page app, but it would hide Astro's real 404 page.

### Linting and formatting
- `eslint-plugin-astro` lets ESLint read `.astro` files, and its `jsx-a11y-recommended` config adds accessibility checks (for example, missing `alt` text).
- `prettier-plugin-astro` teaches Prettier the `.astro` format.
- `prettier-plugin-tailwindcss` sorts Tailwind classes. With Tailwind 4 it needs `tailwindStylesheet` pointing at `global.css`, since there's no JS config to read.
