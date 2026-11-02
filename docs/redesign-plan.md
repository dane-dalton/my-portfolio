# Portfolio Redesign Plan

Status: **decisions made — no code changed yet.** Next step: Prompt 0 (collect content).

| Decision | Status |
|---|---|
| Theme | **Combo 1 · Horizon Chart** (Star Chart layout + Afterglow sunset glow): https://claude.ai/artifact/Az236gnzYNvT8VKmE1rj9e |
| Stack | **Astro** + TypeScript + Tailwind 4, no React, all other stack suggestions accepted |
| Sections | Landing → About → Experience (with Selected projects) → Contact, single page, sticky header nav |
| Contact | Form handled by an Astro Action on Vercel, email sent with Resend (section 5.4) |
| Hosting | Vercel; `staging` for previews, `main` for production |
| Open questions | None — all answered in section 6 |

First-round drafts (A, B, C), for reference: https://claude.ai/artifact/SSYyzESvxvgwREJJiqFWGK

---

## 1. Goals

1. **Update content** with new work experience and projects. You'll be job hunting soon, so a hiring manager should be able to scan the site in under a minute.
2. **Keep the identity**: night sky, sunset gradient, twinkling stars, Big Dipper with stars used as navigation.
3. **Modernize** into a single scrolling page with a sticky header nav that scrolls to each section.
4. **Learn Astro** along the way, with each Astro concept explained as we use it (see section 5.3).

## 2. Where the site is today

| Area | Current state | Notes |
|---|---|---|
| Build | Vite 4, React 18, TypeScript 5 | Being replaced by Astro. |
| Styling | Tailwind 3 + custom CSS (`src/index.css`) | Colors live in `tailwind.config.js` (`purple-bg-1` … `orange-bg-1`). |
| Motion | Framer Motion 11, Aceternity-style UI pieces (`sparkles`, `glare-card`, `text-generate-effect`, etc.) | Will be replaced by small, purpose-built pieces. |
| Stars | `@tsparticles/*` (sparkles) + hand-placed `.star` divs at fixed `rem` positions | tsParticles is heavy for what it does. Fixed `rem` positions are why wide/short screens needed special handling. |
| Navigation | `react-router-dom` with 3 routes; nav stars only on desktop, `MobileNav` on mobile | Routing goes away with a single page. |
| Icons | Both `@phosphor-icons/react` and `react-icons` | Will use one icon set. |
| Content | `src/constants/pageText.ts`, `projectInfo.ts` | Text and project data to carry over. |
| Layout | Content sits inside a white bezel frame with rounded corners | Going full-bleed. |

## 3. What I took from the inspiration sites

**benscott.dev**
- Starfield behind a very short hero with one clear button ("View my work").
- Takeaway: one sentence + one call to action in the landing section is enough.

**ajseven.me**
- Name, title, location, **"Available for work"** dot and social links all above the fold.
- Experience as a **timeline**, projects as compact cards with tech tags and Live / Code links.
- Contact shows the email with a **copy** button.
- Built with Astro (they wrote about migrating from Vite).
- Takeaway: scan-ability. Each section opens with a heading and a one-line subtitle.

**General 2025–26 portfolio practice**
- Sticky header with scroll-spy (current section highlighted), smooth scrolling, deep links (`/#experience`).
- Real numbers and outcomes in experience bullets.
- Subtle scroll-reveal animation, always honoring `prefers-reduced-motion`.
- Fast: very little JavaScript, optimized images, good Lighthouse scores.
- Real `<title>`, meta description, Open Graph image for when the link is shared on LinkedIn / Slack.

## 4. Theme: Star Chart at sunset

Base: **Draft C (Star Chart)**: Instrument Serif display type, mono "catalog" labels, clickable Big Dipper whose stars are the four sections, coordinates in the header.
Accent: **Draft B (Afterglow)**: orange → rose sunset gradient, horizon glow, availability dot (worded "Open to inquiries"), experience timeline.

Three combos to pick from (https://claude.ai/artifact/Az236gnzYNvT8VKmE1rj9e):

| Combo | Where the sunset lives | Sunset strength |
|---|---|---|
| **1 · Horizon Chart** | A big glow rising from the bottom of the landing section; sunset on last name, main button, active nav, dates | Medium |
| **2 · Twilight Atlas** | The page background itself shifts from night (top) to sunset (bottom) as you scroll; sections on frosted panels | High |
| **3 · Ember Constellation** | Night-dark page; the Big Dipper stars, constellation lines, dividers and timeline dots glow in sunset colors | Low per element, everywhere |

Mixing pieces is fine (e.g. "Combo 1's glow + Combo 3's ember stars").

## 5. Tech stack

### 5.1 New stack

| Piece | Choice | Why |
|---|---|---|
| Framework | **Astro** (current stable) | Builds the page to static HTML with almost no JavaScript. Fast, great for SEO. You learn something new. |
| Language | **TypeScript** (strict) | Astro has first-class TS support; keeps your TS skills in use. |
| Styling | **Tailwind 4** via its Vite plugin | Theme tokens as CSS variables, which the starfield canvas can read too. |
| Content | **Astro content collections** with schemas | Experience and projects as data files with type-checked fields. Adding a job = adding one file. |
| Interactivity | Small TypeScript `<script>`s inside Astro components (starfield, scroll-spy, mobile menu, contact form) | None of these need React. Shipping less JS keeps the site fast. |
| Animation | **Motion** (vanilla JS API: `animate`, `inView`) | Same library as Framer Motion, without needing React. |
| React | **Not used.** `npx astro add react` can add an island later if a piece ever needs it. | Decided in question 10. |
| Contact form backend | **Astro Actions** + `@astrojs/vercel` adapter + **Resend** | See section 5.4. |
| Node | Pinned to **24.x** in `package.json` `engines` | Matches your local Node and fixes the failing Vercel builds. |
| Images | `astro:assets` `<Image />` | Automatic resizing and modern formats for your headshot and project images. |
| SEO | `@astrojs/sitemap`, meta/OG tags in the layout | Better link previews and search indexing. |
| Icons | One set (e.g. `astro-icon` with Simple Icons for tech logos + one UI icon set) | Replaces the two React icon libraries. |
| Lint/format | ESLint (`eslint-plugin-astro`) + Prettier (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`) | Keeps code consistent. |
| Hosting | Vercel. The page is prerendered static HTML; only the contact form's action runs as a Vercel Function. | Fast page plus a real backend for the form, on one host. |

**Removed:** `react`, `react-dom`, `react-router-dom`, `@tsparticles/*`, `framer-motion`, the Aceternity UI components, `@phosphor-icons/react`, `react-icons`, `clsx`, `tailwind-merge`.

### 5.2 Astro in one minute

- An **`.astro` component** has two parts: a "frontmatter" script between `---` fences that runs **at build time** (fetch data, import components), and an HTML-like template below it. By default it ships **zero JavaScript** to the browser.
- When something needs to run **in the browser** (twinkling stars, scroll-spy), you add a `<script>` tag in the component. Astro bundles and optimizes it.
- **Islands**: if you want a React component to be interactive, you add it with a `client:*` directive (e.g. `client:visible`). Only that island loads React; the rest of the page stays static HTML.
- **Content collections**: you put data in `src/content/...` (Markdown, JSON, YAML), describe its shape with a schema in `src/content.config.ts`, and query it with typed functions like `getCollection("experience")`.
- **File-based routing**: `src/pages/index.astro` becomes `/`. We only need that one page (plus a 404).

### 5.3 How you'll be kept informed about Astro

- Every phase ends with a short **"Astro notes"** section in Claude's reply: which Astro concepts that phase used, why, and where to see them in the code.
- The same notes are appended to **`docs/astro-notes.md`**, a running learning log you can reread later.
- When Astro offers more than one way to do something, Claude names the options and why it chose one.
- This is written into `CLAUDE.md` in Phase 1 so every session follows it.

### 5.4 Contact form

**How it works**

1. The visitor fills in name, email and message (plus an optional "company" field).
2. The form submits to an **Astro Action** (`src/actions/index.ts`). An action is a typed server function: Astro validates the input against a schema, runs your code on the server, and returns either data or field-level errors.
3. Because the action needs a server, we add the **`@astrojs/vercel` adapter**. The page itself stays prerendered static HTML; only the action runs on demand as a Vercel Function.
4. The action sends you an email through **Resend**, with the visitor's address as **Reply-To**, so you can answer by hitting Reply in Gmail.

**Why this setup**

- It's the Vercel-function approach you wanted, written the Astro way, and each piece is something you'll learn: Actions, adapters, on-demand rendering, and environment variables.
- Resend has a simple API and a free tier far larger than a portfolio needs.
- **No React needed.** The form is a plain HTML `<form>` that still works with JavaScript off, plus a small script for inline "Sending…", success and error states. A React island would add React (about 45–60 KB) to the page just for one form.

**Best practices we'll follow**

- **Validate on the server** with the action's schema (required fields, valid email, length limits). Browser validation is just for convenience.
- **Spam protection, in layers:** a hidden honeypot field bots fill in, and a minimum time-to-submit check. If spam still gets through after launch, add Cloudflare Turnstile or Vercel BotID, both free, invisible to most visitors.
- **Secrets stay out of the code:** the Resend API key lives in Vercel's environment variables (Production and Preview) and a local `.env` that git ignores. It's declared with Astro's `astro:env` schema so a missing key fails loudly.
- **Send from your own domain** (e.g. `contact@danezdalton.com`) after verifying it in Resend, so messages don't land in spam.
- **No database and no auto-reply** to the visitor. Auto-replies can be abused to send email to strangers.
- **Clear feedback:** a success message that says you'll reply by email, and an error message that shows your email address as a fallback.

**What you'll need to do yourself** (I'll walk you through it in Phase 7; I can't create accounts or handle your keys):

1. Create a Resend account.
2. Add your domain in Resend and copy the DNS records it gives you into wherever danezdalton.com's DNS is managed (Vercel or your registrar).
3. Create a Resend API key and add it to Vercel as `RESEND_API_KEY` for Production and Preview, and to a local `.env` file.

## 6. Questions for you

All answered.

1. **Theme combo:** Combo 1 · Horizon Chart.
2. **Projects:** (b) a compact "Selected projects" list inside Experience.
3. **New content:** you'll provide it in Prompt 0 (résumé text, new roles and projects).
4. **Contact section:** a real contact form, backed by a Vercel function. Setup in section 5.4. Your email and social links stay visible beside it.
5. **Photo:** keep the headshot, in About.
6. **Bouldering / YouTube:** keep it in About.
7. **Availability indicator:** keep it, worded **"Open to inquiries"**. Not "open to work" or "looking for roles", since you're not actively job hunting.
8. **Light mode:** dark only.
9. **Hosting:** Vercel, with `staging` previews.
10. **React:** left out entirely. The contact form doesn't need it (section 5.4).

## 7. Phases

Each phase is one focused session with Claude, on its own branch cut from `staging` and merged back into `staging` when done, ending with a working build you can look at and an "Astro notes" summary. Phases 4–7 can be reordered.

**Branching:** `main` is production — Vercel deploys every push to it to danezdalton.com. All redesign work happens on `staging` (and short-lived phase branches off it). Pushing `staging` gives a Vercel preview URL, not a production deploy. `staging` merges into `main` only in Phase 10, after you approve the preview.

| # | Phase | Output | Main Astro concepts |
|---|---|---|---|
| 0 | Decisions & content | Answers to section 6, `docs/content.md` | — |
| 1 | Astro scaffold & tooling | Astro project replaces Vite app on a branch; `CLAUDE.md`; lint/format; Vercel build works | Project structure, `astro.config.mjs`, dev/build/preview, static output |
| 2 | Design foundation | Theme tokens, fonts, `<Starfield />`, `<BigDipper />` | `.astro` components, props, client `<script>`s, global styles |
| 3 | Single-page shell | Layout, sticky header, sections, smooth scroll, scroll-spy, mobile menu | Layouts, `<slot />`, page structure |
| 4 | Landing section | Hero, CTAs, socials, Big Dipper nav | Composing components |
| 5 | About section | Bio, photo, skills, bouldering | `astro:assets` `<Image />`, icons |
| 6 | Experience section | Timeline + selected projects from data | Content collections, schemas, `getCollection` |
| 7 | Contact form + footer | Working form that emails you, links, résumé | Actions, adapters, on-demand rendering, `astro:env`, `public/` vs `src/assets/` |
| 8 | Motion & polish | Load sequence, reveals, hover states | Bundled npm packages in client scripts |
| 9 | Quality pass | Accessibility, performance, SEO/OG, sitemap | Integrations (`@astrojs/sitemap`), `<head>` management |
| 10 | Ship | Vercel preview, final review, PR | Deploying static Astro |

## 8. Prompts

How these are written (current prompting practice):
- **Context first, then one clear task.** Each prompt says where we are and what already exists.
- **Point at files** instead of describing them.
- **Explicit requirements and an out-of-scope list**, so a session doesn't wander into the next phase.
- **"Done when" criteria** that can be checked (build passes, specific behavior in the browser).
- **Plan before code** on bigger phases: Claude proposes, you approve, then it builds.
- **Verify, don't assume:** each prompt asks Claude to run the build and check the result in the browser.
- **Persistent context in `CLAUDE.md`** (created in Phase 1) so you don't repeat background in every prompt, including the "Astro notes" habit.
- **One branch per phase, small commits**, so any phase can be reverted on its own.

Fill in anything in `[brackets]` before sending.

---

### Prompt 0 — Collect content

```
We're redesigning my portfolio (plan: docs/redesign-plan.md). Before any code, I want
all site content in one place.

Create docs/content.md with these sections: Landing (headline, one-line pitch),
About (bio paragraphs, skills grouped by category, hobbies), Experience (one entry per
role: company, title, dates, location, 2–4 impact bullets, tech list), Projects (name,
one-liner, tech, live URL, repo URL), Contact (email, GitHub, LinkedIn, YouTube, résumé).

Pre-fill it from src/constants/pageText.ts, src/constants/projectInfo.ts and my current
résumé PDF in src/assets. Then add this new information:
[paste résumé text / new roles / new projects here]

Rewrite my bullets to lead with outcomes and include numbers where my input supports them.
Don't invent metrics; mark anything you're unsure of with TODO.

Out of scope: any code changes.
Done when: docs/content.md exists, every section is filled or marked TODO, and you've
listed the TODOs at the end of your reply.
```

### Prompt 1 — Astro scaffold & tooling

```
We're starting the portfolio redesign in docs/redesign-plan.md. Read it, especially
sections 4–6 (my answers are in section 6).

Phase 1 only: replace the Vite + React app with an Astro project. No design work yet.

1. From `staging`, create branch `redesign/01-astro`. Never commit to `main`.
2. Remove the Vite app (index.html, vite.config.ts, src/main.tsx, React-only deps) but
   keep src/assets/ (images, résumé PDF) and move src/constants/ to docs/legacy/ so we
   can reuse the text. Don't delete anything else without listing it first.
3. Set up current stable Astro with: TypeScript strict, Tailwind 4 via @tailwindcss/vite,
   static output, `site` set to https://www.danezdalton.com. No React. Pin Node with
   `"engines": { "node": "24.x" }` in package.json (Vercel builds currently fail on an
   outdated Node setting). Add `.env` to .gitignore.
4. ESLint (flat config, eslint-plugin-astro, TypeScript) and Prettier
   (prettier-plugin-astro, prettier-plugin-tailwindcss). Keep my existing .prettierrc
   settings. Add `lint` and `format` scripts.
5. A placeholder src/pages/index.astro ("Redesign in progress") and src/pages/404.astro.
6. Create CLAUDE.md at the repo root with: project purpose, stack, commands, folder
   layout, design direction (Star Chart at sunset, Combo 1), content lives in content
   collections, conventions (TypeScript strict, no `any`, Tailwind for styling, tokens
   for every color, prefer .astro components + small client scripts over framework
   islands), "run build and lint before saying you're done", and this rule:
   "I'm learning Astro. End every task with an 'Astro notes' section explaining the
   Astro concepts used, why, and where they are in the code, and append the same notes
   to docs/astro-notes.md under a heading for the phase."
7. Remove vercel.json if Astro's defaults on Vercel make it unnecessary; explain.

Out of scope: design, sections, components.
Done when: `npm run build`, `npm run lint` pass; `npm run dev` shows the placeholder in
the browser; after I push, the Vercel preview for this branch builds; commits are small
and logical; you end with Astro notes.
```

### Prompt 2 — Design foundation

```
Phase 2 of docs/redesign-plan.md. Read CLAUDE.md first. Theme: Star Chart at sunset,
Combo 1 (Horizon Chart) [plus any tweaks] from https://claude.ai/artifact/Az236gnzYNvT8VKmE1rj9e
(read it with the Artifact tool for exact colors, fonts and layout).

Branch: `redesign/02-foundation`. First propose a short plan and wait for my OK.

Build:
1. Theme tokens in src/styles/global.css using Tailwind 4's @theme: colors (night
   blues, ink, muted, sun, amber, rose, plum, the sunset gradient), fonts (Instrument
   Serif, Manrope, JetBrains Mono), radii, spacing. Every color is a token.
2. Self-host or load the fonts with fallbacks and font-display: swap. Explain the option
   you chose.
3. src/components/Starfield.astro: one full-viewport <canvas> with a client <script>.
   Twinkling stars, count scaled to screen area, devicePixelRatio aware, redraw on
   resize, pauses when the tab is hidden, static under prefers-reduced-motion. Reads
   colors from the CSS tokens.
4. src/components/BigDipper.astro: SVG with the seven stars and lines, positioned
   relative to its own box (no fixed rem offsets). Props map four stars to section ids
   (home, about, experience, contact) and render them as real links with labels and
   accessible names. Style per Combo 1.
5. A temporary src/pages/dev.astro showing tokens, type scale, Starfield and BigDipper.

Out of scope: real sections, navigation behavior.
Done when: build and lint pass; you've checked /dev at 375px and 1280px in the browser
and sent me screenshots; you end with Astro notes.
```

### Prompt 3 — Single-page shell & navigation

```
Phase 3 of docs/redesign-plan.md. Read CLAUDE.md. Branch: `redesign/03-shell`.

1. src/layouts/BaseLayout.astro: <html lang="en">, <head> (title, description,
   viewport, fonts, global styles; props for page title/description), Starfield behind
   everything, <slot />.
2. src/pages/index.astro: sections in order #home, #about, #experience, #contact, each
   a separate component in src/components/sections/ with a placeholder heading.
3. src/components/Header.astro: sticky header in the Star Chart style (name +
   coordinates on the left, nav on the right). Smooth scrolling (CSS scroll-behavior,
   off under reduced motion), scroll-margin-top so headings aren't hidden under the
   header, URL hash updates, /#experience lands on that section.
4. Scroll-spy with IntersectionObserver in a client script: active nav item styled per
   Combo 1.
5. Mobile: menu button opening an accessible menu (aria-expanded, Esc closes, focus
   returns to the button, closes after a link is tapped).
6. Semantic landmarks: <header>, <nav>, <main>, <section aria-labelledby>, <footer>.

Out of scope: real section content.
Done when: build/lint pass; in the browser, each nav item scrolls to the right section,
the active item updates while scrolling, deep links work, and keyboard-only navigation
works at mobile and desktop widths. End with Astro notes.
```

### Prompt 4 — Landing section

```
Phase 4 of docs/redesign-plan.md. Read CLAUDE.md and docs/content.md.
Branch: `redesign/04-landing`.

Build src/components/sections/Home.astro to match Combo 1:
- Coordinates line (city and coordinates from content.md) + a small green "Open to inquiries" dot. Keep the
  wording low-key; I'm not actively job hunting.
- "Dane Dalton" in Instrument Serif with the sunset treatment from the combo.
- One-line pitch from content.md.
- Primary CTA to #experience, secondary to my résumé PDF, GitHub / LinkedIn links with
  accessible labels.
- <BigDipper /> as section navigation on desktop; on mobile, propose whether it stays
  interactive or becomes decorative.
- The sunset horizon glow rising from the bottom of the section.
- Height fits content (no forced 100vh).

Out of scope: other sections, animation.
Done when: build/lint pass; checked at 375px, 768px, 1280px and 1920×800 in the
browser; screenshots sent; Astro notes.
```

### Prompt 5 — About section

```
Phase 5 of docs/redesign-plan.md. Read CLAUDE.md and docs/content.md.
Branch: `redesign/05-about`.

Build src/components/sections/About.astro: catalog label ("UMa-01 · ABOUT"), heading,
one-line subtitle, bio from content.md (max ~70 characters per line), my headshot
(src/assets/photoOfMe.png) via astro:assets <Image /> with descriptive alt text and a
treatment that fits the theme, skills grouped by category with
icons, and the bouldering / YouTube note. Put the About text in a data file (a
content collection or src/data/about.ts — explain which you picked and why).

Out of scope: animation, other sections.
Done when: build/lint pass, checked at mobile and desktop widths, screenshots sent,
Astro notes (cover how astro:assets optimizes the image).
```

### Prompt 6 — Experience section

```
Phase 6 of docs/redesign-plan.md. Read CLAUDE.md and docs/content.md.
Branch: `redesign/06-experience`.

1. Define content collections in src/content.config.ts:
   - experience: company, title, start (date), end (date | "present"), location,
     bullets (string[]), tech (string[]), url (optional).
   - projects: name, summary, tech, liveUrl?, repoUrl?, image?, featured (boolean).
   One file per entry under src/content/, populated from content.md.
2. Build src/components/sections/Experience.astro: timeline per Combo 1, most recent
   first, dates formatted like "2021 — 2024" / "2024 — NOW", tech chips.
3. A "Selected projects" sub-section below the timeline: compact cards for featured
   projects, with tech chips and Live / Code links.
4. No horizontal scroll on mobile.

Out of scope: animation.
Done when: build/lint pass; adding a role means adding one data file; a schema error
(e.g. missing title) fails the build with a clear message (show me); screenshots sent;
Astro notes (cover collections, schemas, getCollection, and the generated types).
```

### Prompt 7 — Contact form & footer

```
Phase 7 of docs/redesign-plan.md. Read CLAUDE.md, docs/content.md, and section 5.4 of
the plan. Branch: `redesign/07-contact`. First propose a plan and wait for my OK.

1. Walk me through the Resend setup I need to do myself (account, domain DNS records,
   API key, Vercel env vars for Production + Preview, local .env). Wait until I confirm
   it's done before testing real sends.
2. Add the @astrojs/vercel adapter. Keep the page prerendered; only the action runs
   on demand. Declare RESEND_API_KEY (secret, server) and CONTACT_TO_EMAIL with the
   astro:env schema.
3. src/actions/index.ts: a `contact` action accepting form data. Schema: name (1–100),
   email (valid), company (optional, ≤100), message (10–5000), a honeypot field that
   must be empty, and a submitted-too-fast check. Send via the Resend SDK from
   contact@danezdalton.com to CONTACT_TO_EMAIL, Reply-To set to the visitor, subject
   "Portfolio inquiry from {name}". Never log message contents or the API key. Return
   clear errors.
4. src/components/sections/Contact.astro: catalog label, heading, one-line invitation,
   the form (labels, autocomplete attributes, inline field errors, aria-live status),
   working without JavaScript and enhanced with a small client script (Sending…,
   success, error with my email as fallback). Beside it: my email as selectable text
   with a Copy button, GitHub / LinkedIn / YouTube links, résumé button.
5. Footer: © year computed at build time, one line on how the site was built (Astro +
   Tailwind), link to the repo.

Out of scope: animation, extra spam services (Turnstile / BotID) unless spam shows up.
Done when: build/lint pass; with JS on and off, a valid submission reaches my inbox on
the Vercel preview and an invalid one shows field errors; the honeypot rejects bots;
screenshots at mobile and desktop; Astro notes (cover Actions, adapters, on-demand vs
prerendered routes, astro:env, and public/ vs src/assets/ for the résumé PDF).
```

### Prompt 8 — Motion & polish

```
Phase 8 of docs/redesign-plan.md. Read CLAUDE.md. Branch: `redesign/08-motion`.

Add motion with restraint using Motion's vanilla API (animate, inView):
- One orchestrated load sequence in the landing section (name, pitch, CTAs, Big
  Dipper stars lighting up in order).
- Subtle reveal-on-scroll for section headings and cards, starting from a visible
  state so nothing is ever stuck invisible if JS fails.
- Hover/focus states for links, buttons, nav stars, chips.
- All of it off or reduced under prefers-reduced-motion.

Then review the page for consistency (spacing scale, type scale, every color from
tokens) and fix issues. List what you changed.

Done when: build/lint pass; tested with reduced motion on and off; no layout shift
from animations; Astro notes (cover how client scripts bundle npm packages).
```

### Prompt 9 — Quality pass

```
Phase 9 of docs/redesign-plan.md. Read CLAUDE.md. Branch: `redesign/09-quality`.

Audit and fix, reporting findings before and after:
1. Accessibility: WCAG AA contrast (especially text over sunset colors), heading
   order, alt text, focus visibility, keyboard path through the page, aria on the menu
   and Big Dipper links.
2. Performance: production build, total JS shipped (list it per script), image sizes,
   starfield cost on a throttled mid-range phone profile.
3. SEO & sharing: title, description, canonical, Open Graph + Twitter tags, an OG image
   in the site's style (1200×630), favicon set, robots.txt, @astrojs/sitemap,
   JSON-LD Person.
4. Cross-browser: Chrome, Firefox, Safari/WebKit, mobile widths.
5. Delete src/pages/dev.astro.

Done when: build/lint pass; you give me a short table of issues found and fixed plus
anything you couldn't fix; Astro notes.
```

### Prompt 10 — Ship

```
Phase 10 of docs/redesign-plan.md. All phase branches are merged into
`staging` [or: list the branches].

1. Update README.md for the new site (stack, how to run, how to add a job or project
   to the content collections).
2. Remove dead code, unused dependencies, and docs/legacy/ once nothing uses it.
3. Push the branch and open a PR to main with a summary and before/after screenshots.
4. Confirm the Vercel preview deployment builds and give me the preview URL so I can
   check it on my phone.
5. Final Astro notes: a one-page recap in docs/astro-notes.md of everything Astro we
   used, and what I'd learn next.

Don't merge — I'll merge after reviewing the preview.
```

## 9. Other suggestions

- **Update the résumé PDF** at the same time so the site and résumé tell the same story.
- **Write the content before the code.** Prompt 0 is the most valuable step.
- **Keep the old site live** until the new one ships (it stays on `main`; the redesign lives on `staging`).
- **Optional later:** Vercel Analytics to see whether visitors reach Experience; a "Writing" section using an Astro Markdown collection, which is one of Astro's strengths.
