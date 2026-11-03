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

---

## Phase 4: Landing section

### Importing data into a component
`src/data/site.ts` is a plain TypeScript module with your profile and links. `Home.astro` imports it in its frontmatter (`import { links, profile } from "../../data/site";`) and uses the values in the template with `{profile.pitch}`. This runs at build time, so the browser gets finished HTML and never downloads `site.ts`. About and Contact will import the same file, so your email or LinkedIn URL lives in exactly one place.

For short, one-off data like this, a `.ts` file is simpler than a content collection. Collections (Phase 6) pay off when you have many entries of the same shape, like jobs or projects, that need schema validation.

### `public/` vs `src/assets/` (the résumé)
The résumé moved from `src/assets/resume.pdf` to `public/Dane_Dalton_Resume.pdf`.
- **`src/assets/`**: Astro processes files when you import them. A PDF there would get a hashed name like `/_astro/resume.Bx3k9.pdf`, which changes every time the file changes. That's great for caching images, but bad for a link you paste into emails.
- **`public/`**: files are copied untouched to the site root. The résumé is always at `danezdalton.com/Dane_Dalton_Resume.pdf`, so old links keep working after you update it.

Images (your headshot in Phase 5) stay in `src/assets/` so Astro can resize and convert them.

### Whitespace in templates
`{profile.name.first}` followed by `<em>` on the next line rendered as "DaneDalton". Like JSX, Astro doesn't keep the line break between an expression and an element as a space. `{" "}` adds an explicit one. Watch for this whenever an expression sits next to an inline element.

### Not Astro-specific
- The **sunset glow** is a blurred `radial-gradient` positioned at the bottom of the section. Its colors come from the theme tokens through `color-mix(in srgb, var(--color-sun) 60%, transparent)`, which lets CSS fade a token color without hard-coding an `rgba()` value.
- The section uses `isolate` to create its own stacking layer, so the glow can sit behind the text with `-z-10` without disappearing behind the page's starfield.
- External links open in a new tab, and each one carries hidden "(opens in a new tab)" text for screen readers. The résumé link also says "PDF".

---

## Phase 5: About section

### Optimizing images with `astro:assets`
`About.astro` imports the photo like a module: `import photo from "../../assets/photoOfMe.png";`. The import doesn't give you a URL string. It gives you an object with the image's path, width, height and format, which Astro reads at build time.

`<Image src={photo} … />` (from `astro:assets`) uses that object to generate optimized files when the site builds:
- **Format:** converts the 4.6 MB PNG to WebP, the default output format.
- **`widths={[192, 240, 384, 480]}`:** writes one file per width. They came out at 8, 11, 27 and 41 kB.
- **`sizes="(min-width: 768px) 240px, 192px"`:** tells the browser how wide the image will display, so it can pick the right file from the `srcset`. A phone downloads the 192 or 384 px version (the 384 is for sharp screens). A desktop downloads 240 or 480.
- **`width={480}`:** sets the fallback `src` and the `width`/`height` attributes. Without it, Astro also made a full-resolution 572 kB copy as the fallback, which nobody needed.
- **Layout shift:** Astro writes `width` and `height` on the `<img>` automatically, so the browser reserves the space before the image loads and the text doesn't jump.
- **Lazy loading:** it adds `loading="lazy"` and `decoding="async"` by default. That suits images below the fold like this one. For an image at the very top of a page you'd pass `loading="eager"`.

The other options: `<Picture />` outputs several formats (for example AVIF with a WebP fallback) inside a `<picture>` element, which helps for large photos. For a 240 px headshot, WebP alone is already tiny. A plain `<img src="/photo.png">` from `public/` would skip all optimization.

In dev, the image URL looks like `/_image?href=…&w=480&f=webp`. That's the dev server converting images on demand. The real files are only written during `npm run build`.

### Integrations (`astro-icon`)
`astro add`-style **integrations** extend Astro itself. `astro-icon` is registered in `astro.config.mjs` under `integrations: [icon()]`. Its `<Icon name="simple-icons:react" />` component looks the icon up in the installed `@iconify-json/simple-icons` set **at build time** and inlines the SVG into the HTML. No icon font and no JavaScript, and only the 26 icons actually used are included.

The other options: copying SVG files into `src/assets/icons` by hand (fine for a few icons, tedious for 26), or the React icon libraries from the old site, which would mean adding React.

A few brands have no icon in Simple Icons (Azure, for example, was removed at Microsoft's request). The data file leaves `icon` out for those, and the component shows an amber ✦ instead.

### Why `src/data/about.ts` and not a content collection
The prompt left this choice open. About is **one** block of content with a custom shape (bio paragraphs plus skill groups with optional icons). A typed `.ts` file gives autocomplete and type-checking with no setup. Content collections shine for **many entries of the same shape** that you add over time, like jobs and projects, which is exactly what Phase 6 uses them for.

### Nested slots
`SectionHeading` has a `<slot />`, and About passes its subtitle into it:

```astro
<SectionHeading id="about-heading" label={about.label} title={about.title}>
  <p>…subtitle…</p>
</SectionHeading>
```

The heading component doesn't need to know a subtitle exists. Whatever is passed in appears under the title.

---

## Phase 6: Experience section

### Content collections
A **content collection** is a folder of entries that all share a shape. You declare each collection in `src/content.config.ts`:

```ts
const experience = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/experience" }),
  schema: z.object({ company: z.string(), roles: z.array(role).min(1), … }),
});
export const collections = { experience, projects };
```

- **The loader** says where entries come from. `glob()` reads every `.yaml` file in a folder, and each file name becomes the entry's `id` (`tpgm.yaml` → `tpgm`). Other loaders exist: `file()` reads one JSON or YAML file holding many entries, and custom loaders can pull from a CMS or an API. We chose one file per entry so adding a job or project is just adding one file.
- **The schema** is written with Zod (`z`, imported from `astro/zod`). Every entry is checked against it when the site builds.
- **YAML vs Markdown entries:** jobs and projects are pure data (lists of bullets, not long prose), so YAML fits. A collection of blog posts would use `.md` files, whose Markdown body Astro renders for you.

### Schemas catch mistakes at build time
To test this, I deleted the `title` from TPGM's role and ran the build. It stopped with:

```
[InvalidContentEntryDataError] experience → tpgm data does not match collection schema.
  roles.0.title: Required
  Location: src/content/experience/tpgm.yaml
```

That's the goal: a typo in a data file fails the build on Vercel with a message naming the file and field, instead of shipping a broken section.

A few schema details worth knowing:
- `z.coerce.date()` turns `"2025-04"` from YAML into a real `Date`. Plain `z.date()` would reject a string.
- `end: z.union([z.literal("present"), z.coerce.date()])` accepts either the word `present` or a date. The literal comes first so `"present"` isn't fed to the date parser.
- `featured: z.boolean().default(false)` means non-featured projects can leave the field out.
- `z.url()` rejects malformed links.

### Querying: `getCollection` and `getEntry`
In `Experience.astro`'s frontmatter:
- `await getCollection("experience")` returns every job as `{ id, data }`, where `data` is the validated, typed result of the schema. Collections don't guarantee an order, so we sort by the `order` field.
- `await getCollection("projects", ({ data }) => data.featured)` passes a **filter**, so only the four featured projects come back.
- `await getEntry(project.data.experience)` follows a **reference** (below) to the full job entry.

These run at build time. The page ships as finished HTML, and the YAML files never reach the browser.

### References between collections
In the projects schema, `experience: reference("experience").optional()` means "this field holds the id of an entry in the experience collection." `ta-hours.yaml` says `experience: mr-math-ta`. If that id doesn't exist (a typo, or a deleted job), the build fails. That's how each project card can link to "The role at …" safely.

### Generated types
When Astro syncs content (on `npm run dev`, `npm run build`, or `npx astro sync`), it writes TypeScript types into `.astro/` from your schemas. That's why `data.roles[0].title` autocompletes in your editor, and why `astro check` flagged nothing: `role.end` is known to be `Date | "present"`, so the template has to handle both cases. Edit a schema and the types follow automatically.

### Deviation from the plan's schema
The plan had one flat `title`/`start`/`end` per job. Your Mr. Math entry has two titles (Software Developer, then Senior), and `content.md` asked to show them under one company. So each job has a `roles` array instead. A single-role job just has one item. I also added an `order` field because you chose to put Fast Enterprises first even though TPGM started later.

### Dev server tip (again)
Adding `content.config.ts` restarted the dev server's content layer, and `astro-icon` lost its virtual module ("Cannot find module 'virtual:astro-icon'"). The production build was fine. Restarting `npm run dev` fixed it. After adding config-level files (integrations, content config), restart the dev server first if something looks broken.

---

## Phase 7: Contact form & footer

### Actions
`src/actions/index.ts` exports `server = { contact: defineAction({ … }) }`. An **action** is a typed function that runs on the server, and Astro turns it into an endpoint at `/_actions/contact` automatically.
- `accept: "form"` means it takes `FormData`, so a plain `<form>` can submit to it.
- `input: z.object({ … })` is a Zod schema, like the content collections in Phase 6. Astro validates the submission **before** the handler runs, and bad input comes back as field-by-field errors.
- `handler` runs only on valid input. Throwing an `ActionError({ code: "INTERNAL_SERVER_ERROR", … })` sends a typed error to the caller.

Two ways to call it, both used here:
1. **From a client script** (`Contact.astro`): `const { error } = await actions.contact(new FormData(form))`. `isInputError(error)` tells field errors (`error.fields.email`) apart from server failures, so the script can put each message under the right input.
2. **From a plain HTML form** with JavaScript off: `action={"/contact/sent" + actions.contact}` makes the form POST to `/contact/sent?_action=contact`. Astro runs the action and then renders that page, which reads the result with `Astro.getActionResult(actions.contact)`.

Astro checks the `Origin` header on these POSTs. When I tested a submission claiming to come from another site, it got `403 Forbidden`. That's built-in CSRF protection we didn't have to write.

### Adapters and on-demand rendering
Actions need a server, so `astro.config.mjs` now has `adapter: vercel()`. The adapter translates Astro's output into Vercel's format (`.vercel/output/`).

- **Prerendered (static), the default:** pages are built once into HTML, like before. `index.astro`, `404.astro` and `dev.astro` stay this way.
- **On demand:** a page with `export const prerender = false` runs on every request. Only `src/pages/contact/sent.astro` does this, plus the `/_actions/*` endpoint.

The build log shows the result: `mode: "server"` because a server exists, but every page still says `prerendering static routes`, and Vercel gets **one** function (`_render.func`) for the on-demand routes. Visitors still get static HTML. Only a form submission wakes the function.

Why not make the home page on-demand so the form could use `Astro.getActionResult` directly? Then every visit would run a function: slower first byte, and wasted work for a page that never changes. A small separate result page keeps the home page static and still works without JavaScript.

The adapter also turned the `redirects` from Phase 3 into real 301 redirects in Vercel's routing config, instead of HTML pages with a meta refresh.

### `astro:env`: typed environment variables
`env.schema` in `astro.config.mjs` declares each variable with `envField`:
- `context: "server"` means it's only importable in server code (`astro:env/server`). Import it in a client script and the build fails.
- `access: "secret"` means it's read from the real environment at runtime and never written into the built files. `access: "public"` (used for `CONTACT_FROM_EMAIL`) is inlined at build time, which is fine for a non-secret.
- `optional: true` on the secrets lets the site build without them (on previews before you've added them, for example). The action checks for them and fails with a clear log line if they're missing.
- `default` on `CONTACT_FROM_EMAIL` means you only set it to override, like using Resend's test sender while DNS verifies.

Compare `import.meta.env.RESEND_API_KEY`, the older Vite way: it's untyped, easy to leak into the browser by mistake, and gives no error when the variable is missing.

### `public/` vs `src/assets/` (revisited)
The résumé link in Contact uses `links.resume` (`/Dane_Dalton_Resume.pdf`), served from `public/` so the URL never changes when you update the file (see Phase 4). Files in `public/` skip Astro's processing entirely. Anything in `src/assets/` gets a content-hashed name.

### Not Astro-specific
- **Spam traps:** `website` is a hidden input real people never see. `elapsed` is measured in the browser (`performance.now()`), so a visitor's wrong system clock can't trip it. Bots get a fake "success" so they don't learn what gave them away.
- **The email** is plain text with `Reply-To` set to the visitor, so hitting Reply in Gmail answers them directly. Newlines are stripped from the name before it goes into the subject line.
- **Accessibility:** every input has a `<label>`, errors are linked with `aria-describedby` and marked `aria-invalid`, and the status line is `role="status"` so screen readers announce "Sending…", success and errors.
