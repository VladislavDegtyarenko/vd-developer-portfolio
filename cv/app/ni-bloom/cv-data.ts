import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "ni-bloom",
  pdfFilename: "Vladyslav-Dihtiarenko-Senior-Frontend-Developer-N-I-Bloom.pdf",
  eyebrow: "Senior Frontend Developer",
  summary:
    "Senior Frontend Developer with 5+ years building polished, responsive products with Next.js, React, TypeScript, and Tailwind CSS. Experienced owning user-facing features from design handoff through release, building reusable UI systems, and applying motion, accessibility, and AI-assisted development in remote product teams.",
  skills: [
    {
      label: "Frontend",
      value: "Next.js, React, TypeScript, JavaScript, HTML, CSS",
    },
    {
      label: "UI systems",
      value:
        "Tailwind CSS, shadcn/ui, SCSS Modules, Styled Components, Redux, Zustand",
    },
    {
      label: "Motion & graphics",
      value: "Framer Motion, Lottie, GSAP, Three.js",
    },
    {
      label: "Quality & UX",
      value:
        "Jest, Vitest, React Testing Library, Playwright, accessibility, responsive UI",
    },
    {
      label: "Delivery & APIs",
      value:
        "Node.js, REST APIs, Next.js Route Handlers, Vercel, GitHub Actions, Git",
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
        "Built customer-facing UI including personalized homepage banners, promotional cards, configurable popups, and audience-targeted landing pages.",
        "Upgraded a production application from Next.js 15 to 16 and used Route Handlers for webhooks and dynamic sitemaps.",
        "Delivered approximately 500 frontend tickets while supporting weekly releases and urgent fixes, maintaining 90% automated test coverage.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer - Project-based - Remote",
      dates: "Jun 2023 - Jan 2024",
      projects: [
        {
          label: "Mobile development company:",
          text: "built a deeply animated, responsive multi-page Next.js experience with Framer Motion, Lottie, touch-enabled sliders, text reveals, cursor interactions, parallax, and scroll-driven effects.",
        },
        {
          label: "Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js and TypeScript product website with Styled Components, localization, a contact flow, and a dynamically loaded Three.js 3D preview.",
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
        "Built pixel-accurate, responsive websites from design layouts using HTML, CSS, and JavaScript, with attention to accessibility, performance, and SEO.",
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
