# Site Content

All wording for the redesigned site, in one place. Phases 4–7 build the sections from this file.

**Sources:** your current Google Doc résumé (Dane_Dalton_Resume, Nov 2026), your LinkedIn Experience section, your TPGM write-up, and the old site's text (`src/constants/`).
**Status:** done. Phases 4–7 build the sections from this file.

Conventions: `TODO` = needs your input. *Draft* = I wrote new wording; edit freely.

---

## Landing

- **Greeting:** Hello, my name is
- **Name:** Dane Dalton
- **Location line:** 39.80° N, 89.64° W — Springfield, IL
- **Availability dot:** Open to inquiries
- **Pitch** (*draft*, one line):
  > Software developer in Springfield, IL. I build driver and vehicle services software for state DOTs, and full-stack web apps for small businesses on the side.

## About

- **Catalog label:** UMa-01 · ABOUT
- **Heading:** Who I am
- **Subtitle** (*draft*): Problem solver, consultant, and always learning.

**Bio** (*draft*):

> I took my first computer science classes in high school and kept taking them at Iowa State, where I earned a degree in Environmental Science. After graduating, I pivoted back to what I enjoyed most: building software. A small Etch-A-Sketch web app I built to sharpen the basics led to my first developer job, building the e-learning portal for Adventures with Mr. Math. The portal grew to 3,000+ users, and I grew into a Senior Software Developer who interviewed, onboarded and code-reviewed for the front-end team.
>
> Today I'm an Implementation Consultant at Fast Enterprises, building driver and vehicle services software for state Departments of Transportation and working directly with DOT directors and project managers from requirements to demos. On the side I build full-stack web apps for small businesses, most recently a property search site and admin portal for TPGM, a Chicago leasing company.
>
> What I love most is problem solving, especially problems that feel a little above me. I also enjoy the people side of software: consulting with clients, leading and mentoring developers, and learning more about project management. AI tools are part of how I work now. They multiply what I can do when I direct them well, with clear goals, a written plan before code, and careful review of everything before it ships.

> Outside of software, I'm usually on a bouldering wall. I spent nearly a year route-setting at my local climbing gym, designing problems for other climbers to work out. You can watch some of my climbing on YouTube.

- **Headshot:** `src/assets/photoOfMe.png`
  - Alt text (*draft*): Dane Dalton, smiling, wearing round gold glasses and a gray hoodie.
- **YouTube:** https://www.youtube.com/@danedalton

**Skills** (grouped from your current résumé, plus a few from TPGM):

| Group | Skills |
|---|---|
| Frontend | React, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, Vite, React Router, Astro, UI/UX, web accessibility (WCAG / ARIA) |
| Backend & data | C#, .NET / ASP.NET Core, REST APIs, SQL, PostgreSQL, Supabase (row-level security, Auth, Storage), SQL Server |
| Tools & delivery | Git / GitHub, Docker, AWS, Azure, Vercel, Postman, Playwright, SSMS, Azure Data Studio, Linux |
| AI-assisted development | Claude (planning, code review, security audits, testing) |
| Also | Ruby on Rails, C, C++ |

- **Certification:** Salesforce Certified Administrator stays on the résumé only.
- Your current résumé already dropped the hardware list, Godot, Excel and similar, so I left those off.

## Experience

- **Catalog label:** UMa-02 · EXPERIENCE
- **Heading:** Where I've worked
- **Subtitle** (*draft*): Roles, most recent first.
- **Order:** Fast Enterprises first (your full-time job), then TPGM, then Mr. Math, then TA director.

### Implementation Consultant · Fast Enterprises, LLC

- **Dates:** Apr 2025 – Present
- **Location:** Springfield, IL
- **Bullets** (from your résumé, lightly tightened):
  - Build and customize driver and vehicle services software for state Departments of Transportation, including North Dakota DOT and the Illinois Secretary of State's new Driver Services project.
  - Lead front-end and back-end development of NDDOT's driver pre-application, working with DOT directors and project managers from requirements through stakeholder demos.
  - Modernized AAMVA API endpoints with REST, and built .NET integrations with the third-party vendors eDealer and VINtelligence.
  - Implemented North Dakota HB 1345: backfilled GVWR data on nearly 1 million titled trucks and updated registration weight and fee calculations for in-office and automated invoicing.
  - Reduced database deadlocks through SQL optimization, set up Postman API testing for the team, and mentor new hires.
- **Tech:** C#, .NET, SQL, REST APIs, Postman

### Freelance Web Developer · TPGM LLC

- **Dates:** May 2026 – Present
- **Location:** Remote
- **Client name:** TPGM LLC (OK to name). Live site: https://www.tpgmllc.com/
- **Bullets** (*condensed* from your write-up and résumé):
  - Designed and built a full-stack real estate website and admin portal for a Chicago property management and leasing company, from the client's written spec and mockups to MVP launch.
  - Built a housing search with combinable filters kept in the page address, so searches can be bookmarked and shared, plus an advanced search with live match counts and listing pages with photo galleries, floor plans and Google Maps.
  - Secured the staff admin portal with Supabase Auth and PostgreSQL row-level security, with a full change history recorded by database triggers.
  - Made accessibility a core requirement and verified it with Playwright tests across screen sizes. Shipped with feature flags and separate staging and production deploys on Vercel.
  - Used Claude to turn the spec into detailed plans and to audit code and security, while directing the decisions and reviewing all output.
- **Tech:** React 19, Vite, Tailwind CSS v4, Supabase (PostgreSQL), Vercel, Google Maps Embed API, Playwright, Claude
- **Longer write-up:** saved at the bottom of this file. It could become a case-study page later.

### Adventures with Mr. Math (Remote) · Jan 2023 – Mar 2026

Shown as one company with two titles, like LinkedIn does.

**Senior Software Developer** · May 2025 – Mar 2026
- Interviewed and onboarded front-end developers, ran code reviews, and approved pull requests.
- Deployed Docker images to AWS for staging and production.

**Software Developer** · Jan 2023 – May 2025
- Built a React and Tailwind CSS e-learning portal for 3,000+ students, parents, TAs and teachers, including authentication, class scheduling, interactive worksheets, timed contests and messaging.
- Engineered a client-side caching system for the call-heavy worksheets, smoothing multi-problem work and reducing server load.
- Integrated with an ASP.NET Core REST API and wrote SQL for testing in SSMS and Azure Data Studio.
- Created and led the QA process with the lead QA engineer, and reviewed security vectors with a senior full-stack developer.

- **Tech:** React, Tailwind CSS, JavaScript, Docker, AWS, ASP.NET Core REST API, SQL Server

### Director of Teaching Assistants · Adventures with Mr. Math

- **Dates:** Jul 2022 – Feb 2025
- **Location:** Remote
- **Bullets:**
  - Managed, scheduled and interviewed 60+ teaching assistants, including staffing for national student competitions.
  - Wrote a C# tool on the Google Sheets API that automates monthly TA hours, saving 4–6 hours a month and $7,000–$11,000 a year while reducing payment errors.
- **Tech:** C#, Google Sheets API
- My recommendation: keep it on the site, short. It shows leadership and a real automation win.

### Earlier (not on the site)

Ecological restoration and lab work, 2019–2022 (Stantec, Citizens for Conservation, Crumpton Wetland Research Facility) and a teaching assistant role at Iowa State. Left off the site and out of the bio.

## Selected projects

Shown as compact cards below the timeline. I'd feature 4. Code links come from your public GitHub repos.

| Project | One-liner (*draft*) | Tech | Live | Code | Feature? |
|---|---|---|---|---|---|
| **TPGM property site** | Property search and admin portal for a Chicago leasing company. | React, Supabase, Vercel | https://www.tpgmllc.com/ | — (client code) | Yes |
| **Mr. Math student portal** | An e-learning portal for 3,000+ students, parents, TAs and teachers, with class scheduling, interactive worksheets, timed contests and messaging. | React, Tailwind CSS, Docker, AWS | — (sign-in only) | — (client code) | Yes |
| **TA hours automation** | A C# tool that reads TA timesheets through the Google Sheets API and calculates monthly hours, saving 4–6 hours of work a month and $7,000–$11,000 a year. | C#, Google Sheets API | — | https://github.com/dane-dalton/c-sharp-google-sheets | Yes |
| **This portfolio** | A space-themed portfolio rebuilt in Astro, with a hand-drawn starfield and a Big Dipper you can navigate by. | Astro, TypeScript, Tailwind CSS, Vercel | https://www.danezdalton.com | https://github.com/dane-dalton/my-portfolio | Yes |
| **Mastermind solver** | A computer player that cracks your code in five guesses or fewer using Knuth's minimax algorithm, with pruning to cut solve time. | Ruby | — | https://github.com/dane-dalton/mastermind | No |
| **Knight Travails** | Finds the shortest path for a chess knight between any two squares with a breadth-first search. | Ruby | — | https://github.com/dane-dalton/knight_travails | No |
| **Etch-A-Sketch** | A browser sketchpad with adjustable grid size, color palette and opacity. It's the project that led to my first developer job. | JavaScript, HTML, CSS | https://dane-dalton.github.io/etch-a-sketch/ | https://github.com/dane-dalton/etch-a-sketch | No |
| **Arduino LED strip** | Custom twinkling light patterns for an RGB LED strip, from a self-directed semester project. | Arduino (C++) | — | — | No |

- **Featured:** TPGM, Mr. Math student portal, TA hours automation, and this portfolio. The others stay in this file for reference and aren't shown.
- The Mr. Math portal card has no outside link (there's little to see without an account). It points to the Mr. Math Experience entry instead.
- Also on your GitHub but left out: tutorials and course exercises (T3 social media clone, Next.js, Prisma, Three.js, OpenGL, The Odin Project exercises) and `schedule-demo`, an early React scheduling demo.
- **Card style:** text-only, matching the theme drafts.

## Contact

- **Catalog label:** UMa-03 · CONTACT
- **Heading:** Say hello
- **Invitation** (*draft*): Have a question, an idea, or a project in mind? Send me a note and I'll get back to you by email.
- **Form fields:** Name, Email, Company (optional), Message
- **Success message** (*draft*): Thanks, your message is on its way. I'll reply by email soon.
- **Error message** (*draft*): Something went wrong and your message wasn't sent. Please try again, or email me directly at danezdalton1@gmail.com.
- **Email:** danezdalton1@gmail.com
- **GitHub:** https://github.com/dane-dalton
- **LinkedIn:** https://www.linkedin.com/in/dane-dalton/
- **YouTube:** https://www.youtube.com/@danedalton
- **Résumé:** `public/Dane_Dalton_Resume.pdf` (served at `/Dane_Dalton_Resume.pdf`), updated Nov 2026 to match your current Google Doc, without your phone number.
- **Not on the site:**
  - The TS/SCI clearance sponsorship line. It stays on the résumé only.
  - Your phone number, to avoid spam calls. The website's résumé PDF leaves it out too.

## Footer

- © {current year} Dane Dalton
- Built with Astro and Tailwind CSS. Source on GitHub → https://github.com/dane-dalton/my-portfolio

---

## Open TODOs

None.

---

## Reference: TPGM write-up

Your full write-up, kept as source material for the Experience entry and a possible case-study page later. Not shown on the site as-is.

**TPGM Property Website and Admin Portal**
Freelance Web Developer · Chicago property management and leasing company

I designed and built a full-stack website for a Chicago real estate company, taking it from the client's written spec and mockups to an MVP launch. The site lets prospective residents browse and filter housing, view detailed listings and send inquiries. Current tenants can find resources. Staff manage everything through a secure admin portal.

**Public site**
- Housing search with combinable filters (region and neighborhood, bedroom size, parking, laundry, included utilities, availability). The filters live in the page address, so searches can be bookmarked and shared.
- An Advanced Search page with a region-to-neighborhood picker, folding filter sections and a live match count.
- Listing detail pages with a photo gallery and zoomable lightbox, floor plans by unit, utilities and amenities, and an embedded Google Map that opens a larger map pop-up.
- Favorites saved in the browser, and an inquiry questionnaire that stores submissions and links them to the listing.
- A tenant resources section and a home page photo strip of randomly picked neighborhoods.
- Mobile-first, responsive layouts with a strong accessibility focus: semantic markup, keyboard support, focus management and screen reader announcements.

**Admin portal**
- Secure sign-in with an admin-only role enforced in the database itself (row-level security), not just in the interface.
- Add, edit and delete regions, neighborhoods, properties, units, photos and tenant resources, with no SQL needed.
- Photos resized and converted to WebP in the browser before upload, with reordering and required alt text.
- Formatting editors for page content, a show/hide switch for listings, previews of everything a delete will remove, an inquiries inbox and a full change history recorded by database triggers.

**AI-assisted development**
I used Claude (Anthropic's AI assistant) throughout this project as a planning partner, reviewer and pair programmer, while I kept ownership of the decisions and the client relationship.
- Planning: turned each section of the client's spec into a written plan with goals, open questions, risks and step-by-step tasks before writing code. I reviewed every plan, answered its questions and adjusted the scope myself.
- Best practices: checked my approaches against current standards for security (database access rules, admin roles, public vs secret keys), accessibility and responsive design.
- Auditing and testing: used AI to review code, write automated browser tests and run security checks that try each user role against the database. It also caught real problems, like a deploy that was missing a setting and an API key with typos.
- Research and troubleshooting: looked into third-party pricing and limits (such as Google Maps options) so I could give the client clear cost tradeoffs, and diagnosed hosting configuration issues.
- Documentation: kept a living conventions doc and wrote a plain-language guide for the client's staff.

The biggest lesson was that AI multiplies what you can do when you direct it well. Clear goals, specific feedback and careful review of everything it produces matter more than ever.

**Delivery**
- Feature flags so unfinished sections stay hidden while finished ones ship.
- Separate staging and production environments on Vercel, and a custom domain.
- Automated tests across many screen sizes.

**What I learned**
- Turning a client's spreadsheet-style data idea into a properly related database, and keeping security in the database layer.
- Using the page address as the source of truth for search state.
- How build-time environment variables behave, and when a key is safe to expose.
- Accessible patterns for complex forms.
- Working with a client on scope, wording and cost to reach a focused MVP.
- Building an effective workflow with AI tools: planning before building, asking for audits, and verifying everything before it ships.

**Skills/technologies:** React 19, JavaScript, Vite, Tailwind CSS v4, React Router, Supabase (PostgreSQL, row-level security, SQL/PLpgSQL functions and triggers, Auth, Storage), Vercel, Google Maps Embed API, Google Cloud, Playwright, ESLint, Git/GitHub, Claude (AI-assisted development), responsive design, web accessibility (WCAG/ARIA).
