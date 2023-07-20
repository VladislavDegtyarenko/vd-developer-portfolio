import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const animateSectionTitle = (ref: MutableRefObject<HTMLElement | null>) => {
  const q = gsap.utils.selector(ref);

  // Animate text
  const animateTitle = (
    selector: string,
    fromStyles: gsap.TweenVars = {},
    animationOptions: gsap.TweenVars = {}
  ) => {
    const title = q(selector);

    gsap.fromTo(
      title,
      {
        y: 32,
        opacity: 0,
      },
      {
        y: 1,
        opacity: 1,
        duration: 0.35,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
        },
        preserveSpaces: true,
        ...animationOptions,
      }
    );
  };

  // Animate line
  const animateLine = () => {
    const line = q(".line");
    gsap.fromTo(
      line,
      {
        width: "0%",
        opacity: 0,
      },
      {
        opacity: 1,
        width: "calc(100% - 32px)",
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: ref.current,
        },
      }
    );
  };

  return { animateTitle, animateLine };
};

export default animateSectionTitle;
