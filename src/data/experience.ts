import HTMLIcon from "./../assets/Icons/HTML.svg";
import CSSIcon from "./../assets/Icons/CSS.svg";
import JSIcon from "./../assets/Icons/JS.svg";
import ReactIcon from "./../assets/Icons/React.svg";
import NextIcon from "./../assets/Icons/Next.svg";
import TSIcon from "./../assets/Icons/TS.svg";
import JestIcon from "./../assets/Icons/Jest.svg";
import SalesforceIcon from "./../assets/Icons/Salesforce.svg";
import TailwindIcon from "./../assets/Icons/Tailwind.svg";
import BootstrapIcon from "./../assets/Icons/Bootstrap.svg";

const experienceData = [
  {
    timerange: "Oct 21 — Feb 23",
    position: "Frontend Developer",
    company: "Astound Commerce",
    chips: ["Ukraine", "Remote", "Full-time"],
    description:
      "At Astound Commerce, I collaborated with experienced managers and developers on a large project, utilizing technologies such as TypeScript, SFCC, React, and Next.js, and got competence in unit testing.",
    icons: [
      { src: TSIcon, alt: "Typescript" },
      { src: ReactIcon, alt: "React.js" },
      { src: NextIcon, alt: "Next.js" },
      { src: SalesforceIcon, alt: "Salesforce" },
      { src: TailwindIcon, alt: "Tailwind CSS" },
      { src: JestIcon, alt: "Jest" },
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
      { src: HTMLIcon, alt: "HTML" },
      { src: CSSIcon, alt: "CSS" },
      { src: JSIcon, alt: "Javascript" },
      { src: BootstrapIcon, alt: "Bootstrap" },
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
