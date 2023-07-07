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

const experienceData = [
  {
    timerange: "Oct 21 — Feb 23",
    position: "Frontend Developer",
    company: "Astound Commerce",
    chips: ["Ukraine", "Remote", "Full-time"],
    description:
      "At Astound Commerce, I collaborated with experienced managers and developers on a large project, utilizing technologies such as TypeScript, SFCC, React, and Next.js, and got competence in unit testing.",
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
    description:
      "Provided top-notch frontend development in a range of projects, from landing pages to multi-page websites, resulting in happy clients.",
    icons: [
      { ...HTMLIcon, alt: "HTML" },
      { ...CSSIcon, alt: "CSS" },
      { ...JSIcon, alt: "Javascript" },
      { ...BootstrapIcon, alt: "Bootstrap" },
    ],
  },
  {
    timerange: "feb 20 — sep 21",
    position: "Music Producer",
    company: "Fiverr",
    chips: ["Worldwide", "Remote", "Project-based"],
    description:
      "Worked as a freelancer providing professional Music Production, Mixing and Mastering Services to independent musicians, video creators, and businesses globally.",
  },
  {
    timerange: "Feb 16 — Feb 20",
    position: "Music Producer",
    company: "Envato Audio",
    chips: ["Worldwide", "Remote", "Part-time"],
    description:
      "Produced high-quality music for video creators and commercials worldwide to enhance the visual storytelling experience.",
  },
  {
    timerange: "jul 17 - jul 18",
    position: "PR Manager",
    company: "BEST Zaporizhzhya",
    chips: ["Zaporizhia, Ukraine", "Volounteering", "Part-time"],
    description:
      "PR work plan, strategy dev., monthly PR meetings, task delegation, FB & IG page management, recruitment campaigns, print & social media design",
  },
  {
    timerange: "aug 18 — dec 18",
    position: "PR Manager",
    company: "BEST LikeIT 2018 (IT Hackathon)",
    chips: ["Zaporizhia, Ukraine", "Volounteering", "Project-based"],
    description:
      "Finding event participants. PR strategy, goal setting & monitoring work. Designing posts & materials. Facebook & Instagram posts, promo videos & targeted advertising.",
  },
];

export default experienceData;
