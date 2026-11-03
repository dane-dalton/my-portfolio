// About section content. Wording comes from docs/content.md.

export interface Skill {
  name: string;
  /** Simple Icons name (https://simpleicons.org). Omit when the brand has no icon. */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
  /** Optional line shown under the chips. */
  note?: string;
}

export const about = {
  label: "UMa-01 · About",
  title: "Who I am",
  subtitle: "Problem solver, consultant, and always learning.",
  photoAlt:
    "Dane Dalton, smiling, wearing round gold glasses and a gray hoodie.",
  bio: [
    "I took my first computer science classes in high school and kept taking them at Iowa State, where I earned a degree in Environmental Science. After graduating, I pivoted back to what I enjoyed most: building software. A small Etch-A-Sketch web app I built to sharpen the basics led to my first developer job, building the e-learning portal for Adventures with Mr. Math. The portal grew to 3,000+ users, and I grew into a Senior Software Developer who interviewed, onboarded and code-reviewed for the front-end team.",
    "Today I'm an Implementation Consultant at Fast Enterprises, building driver and vehicle services software for state Departments of Transportation and working directly with DOT directors and project managers from requirements to demos. On the side I build full-stack web apps for small businesses, most recently a property search site and admin portal for TPGM, a Chicago leasing company.",
    "What I love most is problem solving, especially problems that feel a little above me. I also enjoy the people side of software: consulting with clients, leading and mentoring developers, and learning more about project management. AI tools are part of how I work now. They multiply what I can do when I direct them well, with clear goals, a written plan before code, and careful review of everything before it ships.",
  ],
  climbing:
    "Outside of software, I'm usually on a bouldering wall. I spent nearly a year route-setting at my local climbing gym, designing problems for other climbers to work out.",
  climbingLinkText: "Watch some of my climbing on YouTube",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Vite", icon: "vite" },
      { name: "React Router", icon: "reactrouter" },
      { name: "Astro", icon: "astro" },
      { name: "UI/UX" },
      { name: "Accessibility (WCAG / ARIA)", icon: "w3c" },
    ],
  },
  {
    title: "Backend & data",
    skills: [
      { name: "C#", icon: "csharp" },
      { name: ".NET / ASP.NET Core", icon: "dotnet" },
      { name: "REST APIs" },
      { name: "SQL" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
    ],
  },
  {
    title: "Tools & delivery",
    skills: [
      { name: "Git / GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Azure" },
      { name: "Vercel", icon: "vercel" },
      { name: "Postman", icon: "postman" },
      { name: "Playwright", icon: "playwright" },
      { name: "SSMS & Azure Data Studio" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    title: "AI-assisted development",
    note: "Planning, code review, security audits and testing.",
    skills: [{ name: "Claude", icon: "claude" }],
  },
  {
    title: "Also",
    skills: [
      { name: "Ruby on Rails", icon: "rubyonrails" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
];
