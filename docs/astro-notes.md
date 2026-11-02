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

### Dev toolbar
When you run `npm run dev`, a small toolbar appears at the bottom of the page. It's Astro's **dev toolbar**: it can highlight islands, run a quick accessibility and performance audit, and show page settings. It only appears in development, never on the live site.

---

## Phase 2: Design foundation

### Fonts API (`fonts` in `astro.config.mjs`, `<Font />`)
The three fonts are listed in `astro.config.mjs` under `fonts`, each with a provider (`fontProviders.google()`), the weights and styles we need, fallbacks, and a `cssVariable` name. At build time Astro downloads only those files, serves them from your own site (`/_astro/fonts/…`), and writes the `@font-face` rules.

`src/components/Fonts.astro` renders `<Font cssVariable="…" />` from `astro:assets` for each font, inside `<head>`. That's what actually outputs the CSS. `preload` adds `<link rel="preload">` for the display and body fonts so they start downloading right away. The mono font isn't preloaded since it's only used for small labels.

The fallbacks matter: because the last fallback is a generic family (`serif`, `sans-serif`, `monospace`), Astro generates a fallback font whose size and spacing match the real font. If you look at the computed `font-family` on the `<h1>`, you'll see `"Instrument Serif-… fallback: Times New Roman"`. That's the metric-matched fallback, which keeps text from jumping when the real font finishes loading.

Options we didn't pick: a Google Fonts `<link>` (an extra connection to Google on every visit, plus a layout shift) or `@fontsource` npm packages (also self-hosted, but you write the fallbacks yourself).

### Connecting the fonts to Tailwind
In `global.css`, `@theme inline { --font-display: var(--font-display-src); … }` maps the Fonts API variables to Tailwind's `font-display`, `font-sans` and `font-mono` classes. `inline` tells Tailwind to use the variable's value directly instead of creating another variable that points at it.

### Props (`Astro.props`)
`Starfield.astro` and `BigDipper.astro` declare an `interface Props` in their frontmatter, and Astro type-checks every place they're used. For example, passing `links={{ Saturn: … }}` to `<BigDipper />` fails `astro check`. Default values come from destructuring: `const { density = 0.00025 } = Astro.props;`.

### Template expressions
`BigDipper.astro` builds the SVG with `{stars.map((star) => …)}`, just like JSX. It runs at build time, so the browser receives plain SVG with no JavaScript. `class:list={[…]}` is an Astro directive that joins classes and skips empty values, similar to the `clsx` / `cn()` helper in the old React site.

### Scoped styles
The `<style>` block at the bottom of `BigDipper.astro` is **scoped**: Astro adds a `data-astro-cid-…` attribute to the component's elements and rewrites the selectors, so `.label` there can't affect a `.label` anywhere else. Use `<style is:global>` if you ever need the opposite. We used scoped CSS here instead of Tailwind classes because SVG styling (`fill`, `stroke`, `stroke-dasharray`) and the hover/focus rules for groups of shapes read more clearly as CSS.

### Client scripts
The `<script>` in `Starfield.astro` is a **processed client script**: Astro type-checks it as TypeScript, bundles it, and loads it as a module in the browser. Two things to know:
1. **It runs once per page**, even if the component appears several times. That's why it uses `querySelectorAll("canvas[data-starfield]")` and starts every canvas it finds instead of assuming there's one.
2. **It can't see `Astro.props`**, because props exist only at build time. To pass `density` and `maxStars` to the browser, the component writes them into `data-*` attributes on the canvas, and the script reads `canvas.dataset`.

The alternative is `<script define:vars={{ density }}>`, which injects props directly. But it turns the script into an un-bundled inline script that is repeated for every use of the component, so data attributes are the usual choice.

### Reading theme tokens from a script
The canvas can't use Tailwind classes, so the script reads the tokens directly: `getComputedStyle(document.documentElement).getPropertyValue("--color-ink")`. Tailwind 4 exposes every `@theme` value as a CSS variable, so the starfield and the CSS stay in sync.

### Dev server tip
When a brand-new `.astro` file is added while `npm run dev` is running, Tailwind sometimes doesn't pick up its classes until the dev server restarts. That happened here with `/dev`: the production build was fine, the dev server was stale. If styles look missing in dev, restart the server before debugging.

---

## Phase 3: Single-page shell & navigation

### Layouts and `<slot />`
`src/layouts/BaseLayout.astro` is a **layout**: an ordinary Astro component that renders the whole `<html>` document (head, fonts, global CSS, starfield) and puts a `<slot />` where the page's content goes. A page uses it by wrapping its content:

```astro
<BaseLayout title="Page not found">
  <main>…</main>
</BaseLayout>
```

Everything between the tags is passed in and appears where `<slot />` sits. There's nothing special about the `layouts/` folder; it's a convention. Layouts are just components that happen to contain `<html>`. The home page, 404 page and `/dev` page now share one `<head>`, so Phase 9's SEO tags only need to be added in one place.

### Composing a page from components
`src/pages/index.astro` is now short: the layout, the header, and four section components from `src/components/sections/`. Each section is its own file, so Phases 4–7 each touch one file. `SectionHeading.astro` is shared by About, Experience and Contact, so the catalog label and heading style are defined once. It also has a `<slot />` for an optional subtitle.

### Build-time values
The footer's `{new Date().getFullYear()}` runs **at build time**, not in the browser, so the year is baked into the HTML when Vercel builds the site. It updates the next time the site is deployed after New Year's, not automatically at midnight. For a portfolio that's redeployed now and then, that's fine. A client script would be the only way to make it truly live.

### Redirects
`redirects` in `astro.config.mjs` sends the old React site's `/about` and `/projects` URLs to `/#about` and `/#experience`, so old links (LinkedIn, résumés you've sent) still work. With static output, Astro writes a tiny HTML page at each old path that redirects instantly. In Phase 7, once the Vercel adapter is added, these become real server redirects automatically, with no config change.

### The header script and page navigation
The `<script>` in `Header.astro` runs once when the page loads. That works because this is a single page and the browser never navigates away. If the site ever gets multiple pages with Astro's `<ClientRouter />` (view transitions between pages), scripts like this would need to listen for the `astro:page-load` event instead, because the page wouldn't fully reload on navigation.

### Not Astro-specific, but worth knowing
- **Smooth scrolling and the header offset are pure CSS:** `scroll-behavior: smooth` and `scroll-padding-top` on `html` in `global.css`. No JavaScript scrolls the page.
- **Scroll-spy** uses an `IntersectionObserver` that watches a thin band across the middle of the screen (`rootMargin: "-45% 0px -50% 0px"`). Whichever section crosses that band becomes active.
- **The active link** gets `aria-current="location"`, which tells screen readers "you are here." Tailwind styles it with the `aria-[current=location]:` variant, so the visual state and the accessible state can't drift apart.
- **The URL** is updated with `history.replaceState`, so scrolling doesn't fill the back button's history.
