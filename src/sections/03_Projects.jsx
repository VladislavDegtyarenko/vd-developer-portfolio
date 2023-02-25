import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionSubtitle from "../ui/SectionSubtitle";
import ArrowIcon from "../assets/Icons/Arrow.jsx";
import ProjectSlide from "../ui/ProjectSlide";

import TodoImg from "./../assets/projects/1-todo.jpg";
import SnakeImg from "./../assets/projects/2-snake.jpg";
import OcularImg from "./../assets/projects/3-ocular.jpg";
import HisImg from "./../assets/projects/4-his.jpg";
import PasGenImg from "./../assets/projects/5-pasgen.jpg";
import ClockImg from "./../assets/projects/6-clock.jpg";

import { useState, useRef } from "react";

// import Swiper core and required modules
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projectsData = [
  {
    img: TodoImg,
    title: "Todo App",
    description:
      "Todo List app built with ReactJS. Features: easy-to-use interface, fast and responsive, sleek UI, saved in localStorage.",
    previewLink: "https://vladislavdegtyarenko.github.io/react-todo-app/",
    codeLink: "https://github.com/VladislavDegtyarenko/react-todo-app",
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
    img: OcularImg,
    title: "Ocular",
    description:
      'Delivered front-end development for "Ocular" medical center website, providing a seamless user experience for adult and pediatric ophthalmology patients.',
    previewLink: "https://ocular.com.ua/",
    codeLink: "https://github.com/VladislavDegtyarenko/Ocular",
  },
  {
    img: HisImg,
    title: "His.ua",
    description:
      'Developed front-end for "His," a Ukrainian brand for exclusive furniture.',
    previewLink: "https://his.ua/",
    // codeLink: "#",
  },
  {
    img: ClockImg,
    title: "Alarms & Clock Clone",
    description:
      'Windows 10 "Alarms & Clock" app clone created with ReactJS, React Router, CSS Modules, Framer Motion, and FluentUI library. A feature-rich and visually appealing digital clock application.',
    previewLink: "https://vladislavdegtyarenko.github.io/react-windows-clock-clone/",
    codeLink: "https://github.com/VladislavDegtyarenko/react-windows-clock-clone",
  },
  {
    img: PasGenImg,
    title: "Password Generator",
    description:
      "A fast and secure Password Generator built using Preact and Web Crypto API for strong random password generation.",
    previewLink: "https://vladislavdegtyarenko.github.io/preact-password-generator/",
    codeLink: "https://github.com/VladislavDegtyarenko/preact-password-generator",
  },
];

const StyledProjects = styled(Section)`
  .projects {
    &__descr {
      margin-top: 48px;
    }
  }

  .slider {
    display: flex;
    align-items: center;
    margin-top: 48px;
    &__main {
      width: calc(100% - (32px + 16px) * 2);

      @media screen and (max-width: 991.98px) {
        width: 100%;
      }
    }
    &__arrow {
      background-color: transparent;
      border: none;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      position: relative;
      cursor: pointer;
      z-index: 1;
      color: ${({ theme }) => theme.cyan};

      &-right {
        transform: rotate(180deg);
      }
      &-disabled {
        opacity: 0.5;
        pointer-events: none;
        color: ${({ theme }) => theme.grey};
        transition: color 0s;
      }
      > * {
        width: 100%;
        height: 100%;
        transition: color var(--duration);
        color: currentColor;
      }
      &:hover {
        color: #178695;
      }

      @media screen and (max-width: 991.98px) {
        display: none;
      }
    }

    &__main {
      margin: 0 16px;
    }

    .swiper-pagination {
      position: relative;
      margin-top: 16px;
      &-bullet {
        opacity: 0.5;
        background-color: ${({ theme }) => theme.cyan};
        &-active {
          opacity: 1;
        }
      }
    }
  }
`;

const Projects = ({ previewProject }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const swiperRef = useRef();

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.activeIndex === 0);
    setIsLastSlide(swiper.activeIndex === swiper.slides.length - 1);
  };

  return (
    <>
      <StyledProjects id="projects">
        <Container>
          <div className="projects">
            <SectionTitle>Projects</SectionTitle>
            <SectionSubtitle className="projects__descr">
              A concise overview of selected frontend development projects, showcasing
              skills and capabilities.
              <br /> <br /> If you want to check my actual frontend skills, let’s get a
              call
            </SectionSubtitle>

            <div className="slider">
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className={`slider__arrow ${
                  isFirstSlide ? "slider__arrow-disabled" : ""
                }`}
              >
                <ArrowIcon />
              </button>

              <Swiper
                className="slider__main"
                modules={[Pagination, EffectFade]}
                // navigation={true}
                pagination={{
                  dynamicBullets: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onRealIndexChange={(swiper) => handleSlideChange(swiper)}
              >
                {/* <SwiperBtnPrev /> */}

                {projectsData.map(
                  ({ img, title, description, previewLink, codeLink }) => (
                    <SwiperSlide key={title}>
                      <ProjectSlide
                        img={img}
                        title={title}
                        description={description}
                        previewLink={previewLink}
                        previewProject={previewProject}
                        codeLink={codeLink}
                      />
                    </SwiperSlide>
                  )
                )}
                {/* <SwiperBtnNext /> */}
              </Swiper>

              <button
                onClick={() => swiperRef.current.slideNext()}
                className={`slider__arrow slider__arrow-right ${
                  isLastSlide ? "slider__arrow-disabled" : ""
                }`}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </Container>
      </StyledProjects>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Projects;
