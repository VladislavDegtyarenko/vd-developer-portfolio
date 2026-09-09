import type { CvContent } from "../../types";

export const cv: CvContent = {
  variant: "eitems",
  pdfFilename: "Vladyslav-Dihtiarenko-Frontend-Developer-EITEMS.pdf",
  eyebrow: "Frontend Developer",
  summary:
    "Frontend Developer with 5+ years of experience building and maintaining production web applications. Hands-on with HTML, CSS and SCSS, JavaScript, jQuery, and React, with experience in e-commerce, CMS-driven frontend delivery, production fixes, and remote cross-functional work.",
  skills: [
    {
      label: "Frontend",
      value:
        "HTML, CSS, SCSS Modules, JavaScript, jQuery, React, Next.js, TypeScript, Bootstrap",
    },
    {
      label: "Commerce and content",
      value:
        "E-commerce storefronts, Builder.io, Prismic, Directus, Crowdin, next-intl",
    },
    {
      label: "Testing",
      value: "Jest, Vitest, React Testing Library, Playwright",
    },
    {
      label: "Delivery",
      value: "Gulp, Node.js, GitHub Actions, Vercel, GCP, Git",
    },
  ],
  experience: [
    {
      company: "Patrianna Limited",
      title: "Frontend Developer - Full-time - Remote",
      dates: "May 2024 - Present",
      bullets: [
        "Owned frontend delivery for Builder.io, Prismic, and Crowdin CMS and localization flows across multiple brands.",
        "Built reusable shared-package features including offer popup management, banners, promotions, and Builder custom components.",
        "Delivered approximately 500 frontend tickets across features, production bugs, and iterative improvements while supporting weekly releases and urgent fixes.",
        "Worked directly with QA engineers, content managers, product managers, and designers throughout feature clarification, implementation, review, and release.",
      ],
      technologies:
        "Next.js 14-16, TypeScript, Redux, SCSS Modules, Tailwind CSS, Builder.io, Prismic, Crowdin, Node.js, Playwright",
    },
    {
      company: "Freelance",
      title: "Frontend Developer - Project-based - Remote",
      dates: "Jun 2023 - Dec 2023",
      summary:
        "Delivered responsive multi-page websites with Next.js, TypeScript, Styled Components, localization, contact flows, animations, and interactive product elements.",
    },
    {
      company: "Astound Commerce",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Oct 2021 - Feb 2023",
      bullets: [
        "Worked in an international team on a long-term e-commerce storefront under NDA.",
        "Delivered production fixes, UI improvements, and Japanese localization updates using React, Next.js, TypeScript, and Tailwind CSS.",
        "Expanded Jest and React Testing Library coverage and earned positive feedback for on-time delivery.",
      ],
    },
    {
      company: "While Web Production",
      title: "Frontend Developer - Full-time - Remote",
      dates: "Nov 2020 - Sep 2021",
      bullets: [
        "Developed responsive frontends for Ukrainian companies including Ocular, His, Knigolove, Inseed Agency, and Estudy.",
        "Built pixel-accurate interfaces with HTML, CSS, JavaScript, Bootstrap, jQuery, and Gulp.",
        "Delivered production websites with performance, SEO, and accessibility fundamentals.",
      ],
    },
  ],
  footer: {
    skills: "Core skills: HTML, CSS, JavaScript, jQuery, React",
    availability: "Notice period: 30 days",
  },
};
