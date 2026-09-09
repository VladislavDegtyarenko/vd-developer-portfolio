import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "gismart",
  pdfFilename: "Vladyslav-Dihtiarenko-Frontend-Developer-Gismart.pdf",
  eyebrow: "Frontend Developer",
  summary:
    "Frontend Developer with 5+ years building production web applications with React, Next.js, and TypeScript. Experienced in audience-targeted landing pages, commercial web flows, reusable frontend packages, and visual content platforms such as Builder.io. Hands-on with Zustand, Styled Components, React testing, and remote product delivery.",
  skills: [
    {
      label: "Frontend",
      value:
        "JavaScript (ES6+), TypeScript, React, React Hooks, Next.js, HTML, CSS",
    },
    {
      label: "State",
      value: "Zustand, Redux",
    },
    {
      label: "Styling & UI",
      value:
        "Styled Components, SCSS Modules, Tailwind CSS, shadcn/ui, Bootstrap",
    },
    {
      label: "Visual platforms",
      value: "Builder.io, Prismic, Directus, Crowdin, next-intl",
    },
    {
      label: "Testing",
      value: "Jest, Vitest, React Testing Library, Playwright",
    },
    {
      label: "Delivery",
      value: "Node.js, GitHub Actions, Vercel, GCP, Git",
    },
  ],
  experience: [
    {
      company: "Patrianna Limited",
      title: "Frontend Engineer · Full-time · Remote",
      dates: "May 2024 - Present",
      bullets: [
        "Sole implementing engineer and feature lead for frontend initiatives across eight brands sharing approximately 80% of their codebase, working directly with Product, Design, QA, and content teams.",
        "Integrated Builder.io for audience-targeted landing pages, typically supporting dozens per brand, with ISR and webhook-triggered publishing that let content teams update pages without developer involvement or redeployments.",
        "Built customer-facing commercial UI including personalized homepage banners, promotional cards linked to hundreds of campaign pages, and a configurable popup system supporting a catalog approaching 1,000 offers.",
        "Reduced implementation effort for cross-brand frontend changes by an estimated 70% through reusable, versioned shared packages.",
        "Delivered approximately 500 frontend tickets across product features, production bugs, and iterative improvements while supporting weekly releases and urgent production fixes.",
        "Raised automated test coverage to 90% and built a Node.js and Playwright workflow covering approximately 2,000 CMS cases, reducing related QA effort by up to 80%.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer · Project-based · Remote",
      dates: "Jun 2023 - Jan 2024",
      projects: [
        {
          label: "Ukrainian drone manufacturer:",
          text: "delivered a multi-page Next.js and TypeScript website with Styled Components, localization, a contact flow, and a dynamically loaded Three.js product preview.",
        },
        {
          label: "Mobile development company:",
          text: "built a responsive multi-page Next.js website with Framer Motion, Lottie, touch-enabled custom sliders, and detailed interactive UI.",
        },
      ],
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer · Full-time · Remote",
      dates: "Oct 2021 - Feb 2023",
      summary:
        "Maintained the Japanese localization of a major e-commerce storefront under NDA, shipping production fixes and improvements with React, Next.js, TypeScript, and Tailwind CSS while expanding Jest and React Testing Library coverage.",
    },
    {
      company: "While Web Production",
      title: "Frontend Developer · Full-time · Remote",
      dates: "Nov 2020 - Sep 2021",
      summary:
        "Built responsive websites with HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp, with attention to performance, accessibility, and SEO.",
    },
  ],
  footer: {
    skills: "Core skills: React, Next.js, TypeScript",
    availability: "Notice period: 30 days",
  },
};
