import ReduxBlogImg from "/public/assets/projects/Redux Blog.jpg";
import WeatherAppImg from "/public/assets/projects/weather app.jpg";
import PortfolioImg from "/public/assets/projects/portfolio.jpg";
import TodoImg from "/public/assets/projects/todo-app.jpg";
import SnakeImg from "/public/assets/projects/Snake Game.jpg";
import OcularImg from "/public/assets/projects/Ocular.jpg";
import HisImg from "/public/assets/projects/4-his.jpg";
import PasGenImg from "/public/assets/projects/Pass Gen.jpg";
import ClockImg from "/public/assets/projects/Clock.jpg";
import TenziesImg from "/public/assets/projects/7-tenzies.jpg";
import Game2048Img from "/public/assets/projects/2048 Game.jpg";
import AirlogixImg from "/public/assets/projects/Airlogix.png";
import ReactGPT from "/public/assets/projects/ReactGPT.png";
import ExpenseTracker from "/public/assets/projects/Expense Tracker.png";
import ReactShadcnTodoImg from "/public/assets/projects/react-shadcn-todo-app.jpg";

import { Project } from "../types";

const projectsData: Project[] = [
  {
    img: AirlogixImg,
    title: "Airlogix.io",
    description:
      "Multi-page website for Ukrainian drone manufacturer - Airlogix. Techs: Next.js, next-intl, Typescript, styled-components, Sendgrid API, Vercel",

    previewLink: "https://www.airlogix.io/",
  },
  {
    img: ReactShadcnTodoImg,
    title: "Todo App",
    description: "React.js • Redux • Typescript • shadcn/ui • Tailwind • Vite",
    previewLink: "https://vladislavdegtyarenko.github.io/todo-app/",
    codeLink: "https://github.com/VladislavDegtyarenko/todo-app",
  },
  {
    img: ExpenseTracker,
    title: "Expense Tracker",
    description:
      "Track your incomes/expenses from any device using this React/Firebase expense tracker! Featuring Typescript, MUI and Parcel",
    previewLink: "https://expense-tracker-d93df.web.app/",
    codeLink:
      "https://github.com/VladislavDegtyarenko/expense-tracker-firebase-react",
  },
  {
    img: ReactGPT,
    title: "ReactGPT",
    description:
      "I built my own ChatGPT with React/Typescript, featuring slick design (thanks to the shadcn/ui library), light/dark theme and ability to chose GPT version (3.5 or 4). Bundled with Vite",
    previewLink: "https://vladislavdegtyarenko.github.io/react-gpt/",
  },
  // {
  //   img: ReduxBlogImg,
  //   title: "CRUD Redux Blog",
  //   soon: true,
  // },

  {
    img: PortfolioImg,
    title: "Portfolio Website",
    description:
      "Vladyslav's portfolio website designed by himself and developed using Next.js, Typescript and Framer Motion. Featuring a brand new Notion API-driven blog and contact form that handles requests with Sendgrid API",
    // previewLink: "https://vd-developer.vercel.app/",
    codeLink: "https://github.com/VladislavDegtyarenko/vd-developer-portfolio",
  },
  {
    img: WeatherAppImg,
    title: "Weather App",
    description:
      "A weather application developed using React, Redux, Material UI, Typescript and ChartJS, featuring a Microsoft-inspired interface.",
    previewLink: "https://vd-react-weather-app.vercel.app/",
    codeLink: "https://github.com/VladislavDegtyarenko/react-weather-app",
  },
  {
    img: TodoImg,
    title: "Todo App",
    description:
      "Todo List app built with ReactJS. Features: easy-to-use interface, fast and responsive, sleek UI, saved in localStorage.",
    previewLink: "https://vladislavdegtyarenko.github.io/react-todo-app/",
    codeLink: "https://github.com/VladislavDegtyarenko/react-todo-app",
  },

  {
    img: Game2048Img,
    title: "2048 Game",
    description:
      "A popular 2048 game built using React.js, featuring smooth animations, touch/swipe/keyboard controls and elegant dark theme you never saw before",
    previewLink: "https://preact-2048-game.vercel.app/",
    codeLink: "https://github.com/VladislavDegtyarenko/preact-2048-game",
  },
  {
    img: SnakeImg,
    title: "Snake Game",
    description:
      "A classic Snake Game clone, built using pure (Vanilla) JavaScript, with a nostalgic and classic gameplay experience.",
    previewLink: "https://vladislavdegtyarenko.github.io/snake-game-js/",
    codeLink: "https://github.com/VladislavDegtyarenko/snake-game-js",
  },
  {
    img: PasGenImg,
    title: "Password Generator",
    description:
      "A fast and secure Password Generator built using Preact and Web Crypto API for strong random password generation.",
    previewLink:
      "https://vladislavdegtyarenko.github.io/preact-password-generator/",
    codeLink:
      "https://github.com/VladislavDegtyarenko/preact-password-generator",
  },
  {
    img: ClockImg,
    title: "Alarms & Clock Clone",
    description:
      'Windows 10 "Alarms & Clock" app clone created with ReactJS, Framer Motion, and FluentUI library',
    previewLink:
      "https://vladislavdegtyarenko.github.io/react-windows-clock-clone/",
    codeLink:
      "https://github.com/VladislavDegtyarenko/react-windows-clock-clone",
  },
  {
    img: OcularImg,
    title: "Ocular",
    description:
      'Delivered front-end for "Ocular" medical center website, providing a seamless user experience for ophthalmology patients.',
    previewLink: "https://ocular.com.ua/",
    codeLink: "https://github.com/VladislavDegtyarenko/Ocular",
  },
  /*  {
    img: HisImg,
    title: "His.ua",
    description:
      'Developed front-end for "His," a Ukrainian brand for exclusive furniture.',
    previewLink: "https://his.ua/",
    // codeLink: "#",
  },

  {
    img: TenziesImg,
    title: "Tenzies Game",
    description: "A simple tenzies game built using React",
    previewLink: "https://vladislavdegtyarenko.github.io/react-tenzies/",
    codeLink: "https://github.com/VladislavDegtyarenko/react-tenzies",
  }, */
];

export default projectsData;
