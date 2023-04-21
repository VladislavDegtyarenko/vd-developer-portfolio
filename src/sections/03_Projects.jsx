import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionSubtitle from "../ui/SectionDescription";
import ArrowIcon from "../assets/Icons/Arrow.jsx";
import ProjectSlide from "../ui/ProjectSlide";

import projectsData from "../data/projects";

import { useState, useRef } from "react";

// import Swiper core and required modules
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
