import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { MutableRefObject } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const animateMain = (ref: MutableRefObject<HTMLElement | null>) => {
  if (!ref) return { animateMainElements: () => {}, animateInfoText: () => {} };

  const q = gsap.utils.selector(ref);

  const animateMainElements = () => {
    const mainElements = [q(".main__inner > *"), ".main__scroll-btn"];

    gsap.fromTo(
      mainElements,
      {
        opacity: 0,
        y: 50,
      },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.7 }
    );
  };

  const animateInfoText = () => {
    const infoText = q(".main__info > *");

    gsap.from(infoText, {
      duration: 1,
      delay: 0.2,
      stagger: 0.3,
      opacity: 0,
      y: 50,
      text: { value: "", delimiter: " " },
    });
  };

  return { animateMainElements, animateInfoText };
};

export default animateMain;