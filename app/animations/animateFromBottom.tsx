import gsap from "gsap";

const animateFromBottom = (
  selector: gsap.DOMTarget,
  animationOptions: gsap.TweenVars = {}
) => {
  if (!selector) return;

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
      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      },
    }
  );
};

export default animateFromBottom;
