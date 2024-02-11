"use client";

import { useState, useRef, useContext } from "react";

// import Swiper core and required modules
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import SwiperType from "swiper/types/swiper-class";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// UI
import ArrowIcon from "public/assets/Icons/Arrow";
import ProjectSlide from "@/ui/ProjectSlide";

// Data
import projectsData from "@/data/projects";

//TS
import ProjectContext from "@/contexts/ProjectContext";

const ProjectsSlider = () => {
  const { previewProject } = useContext(ProjectContext);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsFirstSlide(swiper.activeIndex === 0);
    setIsLastSlide(swiper.activeIndex === swiper.slides.length - 1);
  };

  const prevSlide = () => swiperRef.current?.slidePrev();
  const nextSlide = () => swiperRef.current?.slideNext();

  return (
    <div className="slider">
      {/* <SwiperBtnPrev /> */}
      <button
        onClick={prevSlide}
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
      </Swiper>

      {/* <SwiperBtnNext /> */}
      <button
        onClick={nextSlide}
        className={`slider__arrow slider__arrow-right ${
          isLastSlide ? "slider__arrow-disabled" : ""
        }`}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default ProjectsSlider;
