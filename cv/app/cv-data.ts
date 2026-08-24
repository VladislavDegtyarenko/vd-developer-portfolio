export type SkillGroup = {
  label: string;
  value: string;
};

export type Project = {
  label: string;
  text: string;
};

export type ExperienceRole = {
  company: string;
  title: string;
  dates: string;
  bullets?: string[];
  projects?: Project[];
  summary?: string;
  technologies?: string;
};

export type CvContent = {
  variant:
    | "general"
    | "supabase"
    | "gismart"
    | "ni-bloom"
    | "binance"
    | "riseguide";
  eyebrow: string;
  summary: string;
  skills: SkillGroup[];
  experience: ExperienceRole[];
  footer: string;
};

export const generalCv: CvContent = {
  variant: "general",
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
  footer: "Available with 30-day notice",
};

export const supabaseCv: CvContent = {
  variant: "supabase",
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
  footer: "Available with 30-day notice",
};

export const gismartCv: CvContent = {
  variant: "gismart",
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
  footer: "Available with 30-day notice",
};

export const niBloomCv: CvContent = {
  variant: "ni-bloom",
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
  footer: "Available with 30-day notice",
};

export const binanceCv: CvContent = {
  variant: "binance",
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
  footer: "Available with 30-day notice",
};

export const riseGuideCv: CvContent = {
  variant: "riseguide",
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
  footer: "Available with 30-day notice",
};
