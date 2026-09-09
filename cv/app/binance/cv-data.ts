import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "binance",
  pdfFilename: "Vladyslav-Dihtiarenko-Senior-Frontend-Engineer-Binance.pdf",
  eyebrow: "Senior Frontend Engineer",
  summary:
    "Senior Frontend Engineer with 5+ years building and maintaining production web applications with React, Next.js, and TypeScript. Experienced in frontend technical ownership, reusable architecture, responsive UI, Redux, SCSS, performance, testing, and production incident support. Uses Claude, Codex, and Cursor for AI-assisted development.",
  skills: [
    {
      label: "Frontend",
      value: "React, Next.js, TypeScript, JavaScript (ES6+), HTML, CSS",
    },
    {
      label: "Architecture & state",
      value:
        "Redux, Zustand, React Hooks, React Server Components, shared packages",
    },
    {
      label: "UI & performance",
      value:
        "SCSS Modules, Tailwind CSS, Styled Components, responsive UI, accessibility",
    },
    {
      label: "Quality",
      value: "Jest, Vitest, React Testing Library, Playwright, test coverage",
    },
    {
      label: "Delivery",
      value: "Node.js, GitHub Actions, CI/CD, Vercel, GCP, Git, Gulp",
    },
    {
      label: "AI tools",
      value: "Claude, Codex, Cursor",
    },
  ],
  experience: [
    {
      company: "Patrianna Limited",
      title: "Frontend Engineer - Full-time - Remote",
      dates: "May 2024 - Present",
      bullets: [
        "Sole implementing engineer and feature lead for frontend initiatives across eight brands sharing approximately 80% of their codebase, working directly with Product, Design, QA, and content teams.",
        "Reduced cross-brand implementation effort by an estimated 70% through reusable, versioned shared packages.",
        "Built customer-facing UI including personalized homepage banners, promotional cards, configurable popups, and responsive audience-targeted landing pages.",
        "Delivered approximately 500 frontend tickets while supporting weekly releases, urgent production fixes, code review, and Vercel-based incident investigation.",
        "Raised automated test coverage to 90% and made it a mandatory pre-commit quality gate.",
        "Built a Node.js and Playwright workflow covering approximately 2,000 CMS test cases, reducing related QA effort by up to 80%.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer - Project-based - Remote",
      dates: "Jun 2023 - Jan 2024",
      projects: [
        {
          label: "Mobile development company:",
          text: "built a responsive multi-page Next.js website with Framer Motion, Lottie, touch-enabled custom sliders, cursor interactions, parallax, and scroll-driven effects.",
        },
        {
          label: "Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js and TypeScript website with Styled Components, localization, a contact flow, and a dynamically loaded Three.js product preview.",
        },
      ],
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Oct 2021 - Feb 2023",
      summary:
        "Maintained the Japanese localization of a major e-commerce storefront under NDA, shipping production fixes and UI improvements with React, Next.js, TypeScript, and Tailwind CSS while expanding Jest and React Testing Library coverage.",
    },
    {
      company: "While Web Production",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Nov 2020 - Sep 2021",
      summary:
        "Built responsive, pixel-accurate websites with HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp, with attention to performance, accessibility, and SEO.",
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
