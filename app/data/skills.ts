import HTMLIcon from "/public/assets/Icons/HTML.svg";
import CSSIcon from "/public/assets/Icons/CSS.svg";
import JSIcon from "/public/assets/Icons/JS.svg";
import ReactIcon from "/public/assets/Icons/React.svg";
import NextIcon from "/public/assets/Icons/Next.svg";
import ReduxIcon from "/public/assets/Icons/Redux.svg";
import TSIcon from "/public/assets/Icons/TS.svg";
import JestIcon from "/public/assets/Icons/Jest.svg";
import GitIcon from "/public/assets/Icons/Git.svg";
import GSAPIcon from "/public/assets/Icons/GSAP.svg";
import FigmaIcon from "/public/assets/Icons/Figma.svg";
import ViteIcon from "/public/assets/Icons/Vitejs-logo.svg";

import { Skill } from "../types";

const skillsData: Skill[] = [
  {
    icon: HTMLIcon,
    title: "HTML",
    description:
      "Expert HTML skills, with a focus on semantic coding, accessibility and W3C validation.",
  },
  {
    icon: CSSIcon,
    title: "CSS",
    description:
      "Highly skilled in CSS and tools like Sass, Bootstrap, Tailwind, Material UI and CSS-in-JS",
  },
  {
    icon: JSIcon,
    title: "Javascript",
    description:
      "Proficient in JavaScript, familiar with object/array methods, and APIs.",
  },
  {
    icon: ReactIcon,
    title: "React",
    description:
      "Skilled in React, delivering fast, dynamic, and interactive user interfaces.",
  },
  {
    icon: NextIcon,
    title: "Next.js",
    description:
      "Experienced in Next.js, delivering fast and scalable websites, including server-side rendering.",
  },
  {
    icon: ReduxIcon,
    title: "Redux",
    description:
      "Integrating Redux with React components to efficiently manage state in complex apps.",
  },

  {
    icon: TSIcon,
    title: "Typescript",
    description:
      "Expertise in TypeScript, providing scalable and maintainable code for complex projects.",
  },
  {
    icon: JestIcon,
    title: "Jest",
    description: "Competent in Unit Testing for reliable and efficient testing.",
  },
  {
    icon: GitIcon,
    title: "Git",
    description:
      "Able to effectively manage code changes and collaborate with teams using version control systems.",
  },
  {
    icon: GSAPIcon,
    title: "GSAP",
    description:
      "Experienced with GSAP, leveraging its animation capabilities to deliver visually stunning and engaging websites",
  },
  {
    icon: ViteIcon,
    title: "Bundling Tools",
    description:
      "Familiar with frontend bundling tools such as Vite, Rollup, Webpack, Gulp and PostCSS",
  },
  {
    icon: FigmaIcon,
    title: "Graphic Design",
    description:
      "Knowledgeable in graphic design using Figma, Photoshop, and Illustrator to bring ideas to life.",
  },
];

export default skillsData;
