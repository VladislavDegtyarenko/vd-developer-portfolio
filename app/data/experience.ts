import HTMLIcon from "/public/assets/Icons/HTML.svg";
import CSSIcon from "/public/assets/Icons/CSS.svg";
import JSIcon from "/public/assets/Icons/JS.svg";
import ReactIcon from "/public/assets/Icons/React.svg";
import NextIcon from "/public/assets/Icons/Next.svg";
import TSIcon from "/public/assets/Icons/TS.svg";
import JestIcon from "/public/assets/Icons/Jest.svg";
import SalesforceIcon from "/public/assets/Icons/Salesforce.svg";
import TailwindIcon from "/public/assets/Icons/Tailwind.svg";
import BootstrapIcon from "/public/assets/Icons/Bootstrap.svg";
import GulpIcon from "/public/assets/Icons/Gulp.svg";
import WebpackIcon from "/public/assets/Icons/Webpack.svg";

const experienceData = [
  {
    timerange: "Oct 21 — Feb 23",
    position: "Frontend Developer",
    company: "Astound Commerce",
    chips: ["Ukraine", "Remote", "Full-time"],
    description: `
      Collaborated with an international team on an ongoing multi-page store project  for a prominent global brand.
      Utilized cutting-edge technologies including React, Next.js, Tailwind CSS, GraphQL, and TypeScript to enhance and extend the stores functionality, resulting in a seamless and engaging user experience.
      Expanded expertise in Jest and React Testing Library for unit testing custom hooks.
      Received positive feedback for delivering fast, clean, and accessible web experiences.
    `,
    icons: [
      { ...TSIcon, alt: "Typescript" },
      { ...ReactIcon, alt: "React.js" },
      { ...NextIcon, alt: "Next.js" },
      { ...SalesforceIcon, alt: "Salesforce" },
      { ...TailwindIcon, alt: "Tailwind CSS" },
      { ...JestIcon, alt: "Jest" },
    ],
  },
  {
    timerange: "nov 20 — sep 21",
    position: "Frontend Developer",
    company: "While Web Production",
    chips: ["Ukraine", "Remote", "Part-time"],
    description: `
      Developed websites for Ukrainian businesses using HTML, CSS, Bootstrap, JavaScript, jQuery, and Gulp, contributing to the growth of businesses in Ukraine.
      Successfully completed 5 projects, resulting in happy clients and recognition for delivering fast, clean, pixel-perfect, and accessible web experiences.
      Demonstrated versatility and skill in handling various projects, from landing pages to multi-page websites.
      `,
    icons: [
      { ...HTMLIcon, alt: "HTML" },
      { ...CSSIcon, alt: "CSS" },
      { ...JSIcon, alt: "Javascript" },
      { ...BootstrapIcon, alt: "Bootstrap" },
      { ...WebpackIcon, alt: "Webpack" },
      { ...GulpIcon, alt: "Gulp.js" },
    ],
  },
  {
    timerange: "Feb 16 — Feb 20",
    position: "Music Producer, Audio Engineer",
    company: "Self-employed | Envato | Fiverr",
    chips: ["Worldwide", "Remote", "Part-time"],
    description: `
      Crafted exceptional background music for Envato Marketplace's Audiojungle, elevating the narrative impact of videos and commercials.
      Provided exclusive music production services to independent musicians and artists, video creators, and businesses globally.  
      Did audio editing, mixing and mastering for a wide range of audio, spanning from voice recordings to full-fledged songs.
      `,
  },
  {
    timerange: "sep 16 — aug 19",
    position: "Vice-President for Public Relations",
    company: "BEST Zaporizhzhya",
    chips: ["Zaporizhia, Ukraine", "Volounteering", "Project-based"],
    description: `
      Led efforts to boost awareness of BEST Zaporizhzhya, its projects, and activities.
      Managed and guided a dedicated team to achieve PR objectives.
      Crafted and executed a strategic PR plan, setting and monitoring goals.
      Designed engaging content, including social media posts, promo videos, and print marketing materials.
      Enhanced the organization's online presence and impact through effective PR initiatives.
    `,
  },
];

export default experienceData;
