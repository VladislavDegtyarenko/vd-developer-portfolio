import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "supabase",
  pdfFilename: "Vladyslav-Dihtiarenko-Frontend-Engineer-Supabase.pdf",
  eyebrow: "Frontend Engineer",
  summary:
    "Frontend Engineer with 5+ years building React, Next.js, and TypeScript applications and owning end-to-end initiatives across an eight-brand ecosystem. Strong in shared packages, quality gates, Playwright, AI-assisted development, and written-first remote collaboration.",
  skills: [
    {
      label: "Frontend",
      value: "React, Next.js, TypeScript, JavaScript, HTML, CSS",
    },
    {
      label: "State & UI",
      value:
        "Redux, Zustand, Tailwind CSS, SCSS Modules, Styled Components, shadcn/ui",
    },
    {
      label: "Quality",
      value: "Vitest, Jest, React Testing Library, Playwright, accessibility",
    },
    {
      label: "Delivery",
      value: "GitHub Actions, CI/CD, Vercel, GCP, Node.js, Git",
    },
    {
      label: "CMS",
      value: "Builder.io, Prismic, Directus, Crowdin, next-intl",
    },
    {
      label: "AI tools",
      value: "Claude, Codex, Cursor",
    },
  ],
  experience: [
    {
      company: "Patrianna Limited",
      title: "Frontend Engineer · Remote",
      dates: "May 2024 — Present",
      bullets: [
        "Sole implementing engineer and feature lead for frontend initiatives across eight brands sharing approximately 80% of their codebase, partnering directly with Product, Design, QA, and content teams.",
        "Reduced cross-brand implementation effort by an estimated 70% through reusable, versioned shared packages.",
        "Upgraded a production application from Next.js 15 to 16 and migrated Proxy and asynchronous request APIs; used Route Handlers for webhooks and dynamic sitemaps.",
        "Raised automated test coverage to 90% and made it a mandatory pre-commit quality gate.",
        "Built a Node.js and Playwright workflow covering approximately 2,000 CMS cases, scheduled nightly through GitHub Actions and available on demand; reduced related QA effort by up to 80%.",
        "Supported weekly releases with code review, deployments, Vercel debugging, documentation, and asynchronous walkthroughs.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer · Remote",
      dates: "Jun 2023 — Jan 2024",
      projects: [
        {
          label: "NDA portfolio website:",
          text: "built a deeply animated multi-page Next.js experience with Framer Motion, Lottie, touch-enabled sliders, text reveals, cursor interactions, parallax, and scroll-driven effects.",
        },
        {
          label: "Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js and TypeScript website with localization, contact flow, and a dynamically loaded Three.js product preview.",
        },
      ],
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer · Remote",
      dates: "Oct 2021 — Feb 2023",
      summary:
        "Maintained the Japanese localization of a major e-commerce storefront under NDA, shipping React, Next.js, TypeScript, and Tailwind CSS fixes while expanding coverage with Jest and React Testing Library in an international team.",
    },
    {
      company: "While Web Production",
      title: "Frontend Developer · Remote",
      dates: "Nov 2020 — Sep 2021",
      summary:
        "Built responsive websites from design layouts using HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp, with attention to accessibility, performance, and SEO.",
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
