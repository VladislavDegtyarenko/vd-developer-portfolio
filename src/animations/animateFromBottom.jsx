import gsap from "gsap";

const animateFromBottom = (selector, animationOptions = {}) => {
  gsap.fromTo(
    selector,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: selector,
      },
      ...animationOptions,
    }
  );
};

export default animateFromBottom;
