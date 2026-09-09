import type { CvContent } from "../types";

export const cv: CvContent = {
  variant: "general",
  pdfFilename: "Vladyslav-Dihtiarenko-Frontend-Developer.pdf",
  eyebrow: "Frontend Developer",
  summary:
    "Frontend Developer with 5+ years of experience building production web applications with React, Next.js, and TypeScript. Strong in feature ownership, CMS integrations, shared frontend packages, release support, performance-minded UI, and remote product delivery.",
  skills: [
    {
      label: "Frontend",
      value:
        "React, Next.js, TypeScript, JavaScript, Redux, Zustand, HTML, CSS",
    },
    {
      label: "Styling & motion",
      value:
        "Tailwind CSS, SCSS Modules, Styled Components, shadcn/ui, GSAP, Framer Motion, Lottie",
    },
    {
      label: "Testing",
      value: "Jest, Vitest, React Testing Library, Playwright",
    },
    {
      label: "Platforms",
      value: "Vercel, GCP, GitHub Actions, Node.js, Git, Gulp",
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
      title: "Frontend Developer · Full-time · Remote",
      dates: "May 2024 — Present",
      bullets: [
        "Owned frontend delivery for Builder.io, Prismic, and Crowdin CMS and localization flows across multiple brands.",
        "Built reusable shared-package features including offer popup management, banners, promotions, and Builder custom components.",
        "Closed approximately 500 frontend tickets across features, bugs, and improvements.",
        "Covered approximately 2,000 CMS test cases by building a Node.js and Playwright QA automation workflow.",
        "Supported releases and code reviews, created documentation, and helped teammates ship consistently.",
      ],
      technologies:
        "Next.js 14–16, TypeScript, Redux, SCSS Modules, Tailwind CSS, Jest, Vitest, Builder.io, Prismic, Crowdin, Vercel, GCP, Node.js, Playwright",
    },
    {
      company: "Freelance",
      title: "Frontend Developer · Project-based",
      dates: "Jun 2023 — Dec 2023",
      projects: [
        {
          label: "Portfolio website — NDA client:",
          text: "built a static multi-page Next.js website with precise responsive layouts and complex Framer Motion and Lottie animations.",
        },
        {
          label: "Airlogix.io — Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js, TypeScript, Styled Components, and next-intl website with a dynamically loaded Three.js 3D drone preview and a contact form.",
        },
      ],
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer · Full-time · Remote",
      dates: "Oct 2021 — Feb 2023",
      bullets: [
        "Worked in an international team on a long-term e-commerce project under NDA.",
        "Delivered frontend fixes, UI improvements, and Japanese localization updates using React, Next.js 12 Pages Router, Tailwind CSS, and TypeScript.",
        "Expanded Jest and React Testing Library coverage and earned positive feedback for on-time delivery.",
      ],
    },
    {
      company: "While Web Production",
      title: "Frontend Developer · Full-time · Remote",
      dates: "Nov 2020 — Sep 2021",
      bullets: [
        "Developed responsive frontends for Ukrainian companies including Ocular, His, Knigolove, Inseed Agency, and Estudy.",
        "Built pixel-accurate interfaces with HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp.",
        "Delivered production websites with performance, SEO, and accessibility fundamentals.",
      ],
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
