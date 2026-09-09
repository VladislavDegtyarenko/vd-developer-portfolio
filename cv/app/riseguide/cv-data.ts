import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "riseguide",
  pdfFilename: "Vladyslav-Dihtiarenko-Senior-Frontend-Engineer-RiseGuide.pdf",
  eyebrow: "Senior Frontend Engineer",
  summary:
    "Senior Frontend Engineer with 5+ years building production web applications with JavaScript, TypeScript, HTML, and CSS. Experienced making frontend architecture decisions, owning features from requirements through release, and improving shared systems iteratively across a multi-brand product ecosystem. Hands-on with React and Next.js, including framework upgrades and production incident support.",
  skills: [
    {
      label: "Frontend",
      value: "JavaScript, TypeScript, HTML, CSS, React, Next.js",
    },
    {
      label: "Architecture & state",
      value:
        "Shared packages, React Server Components, Redux, Zustand, React Hooks",
    },
    {
      label: "Styling & UI",
      value:
        "SCSS Modules, Tailwind CSS, Styled Components, shadcn/ui, responsive UI",
    },
    {
      label: "Quality",
      value: "Jest, Vitest, React Testing Library, Playwright, code review",
    },
    {
      label: "Delivery",
      value: "Node.js, GitHub Actions, CI/CD, Vercel, GCP, Git",
    },
    {
      label: "Content platforms",
      value: "Builder.io, Prismic, Directus, Crowdin, next-intl",
    },
  ],
  experience: [
    {
      company: "Patrianna Limited",
      title: "Frontend Engineer - Full-time - Remote",
      dates: "May 2024 - Present",
      bullets: [
        "Sole implementing engineer and feature lead for frontend initiatives across eight brands sharing approximately 80% of their codebase, clarifying requirements and working directly with Product, Design, QA, and content teams.",
        "Reduced implementation effort for cross-brand changes by an estimated 70% by moving reusable functionality into versioned shared packages.",
        "Upgraded a production codebase from Next.js 15 to 16, migrating deprecated conventions and updating route and page code for asynchronous request APIs.",
        "Delivered approximately 500 frontend tickets across product features, production bugs, and iterative improvements while supporting weekly releases and urgent fixes.",
        "Raised automated test coverage to 90% and enforced it as a pre-commit quality gate, nearly eliminating regressions in expanding CMS functionality.",
        "Onboarded developers through hands-on guidance and code reviews, and presented technical demos to give reviewers context for complex frontend changes.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer - Project-based - Remote",
      dates: "Jun 2023 - Jan 2024",
      projects: [
        {
          label: "Mobile development company:",
          text: "built a responsive multi-page Next.js interface with Framer Motion, Lottie, touch-enabled custom sliders, parallax, and scroll-driven effects.",
        },
        {
          label: "Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js and TypeScript website with localization, a contact flow, and a dynamically loaded Three.js product preview.",
        },
      ],
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Oct 2021 - Feb 2023",
      summary:
        "Maintained the Japanese localization of a major e-commerce storefront under NDA, shipping React, Next.js, TypeScript, and Tailwind CSS fixes while expanding Jest and React Testing Library coverage in an international team.",
    },
    {
      company: "While Web Production",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Nov 2020 - Sep 2021",
      summary:
        "Built responsive, pixel-accurate websites from design layouts using HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp, with attention to performance, accessibility, and SEO.",
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
