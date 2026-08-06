import { useScroll } from "./useScroll";
import useViewportWidth from "./useViewportWidth";

export const useIsMobileHeaderHidden = () => {
  const { width } = useViewportWidth();
  const { scrollPosition, isScrolledDown } = useScroll({ threshold: 5 });

  const isMobile = width < 992;
  const isHidden = isMobile && scrollPosition > 250 && isScrolledDown;

  return { isHidden, isMobile };
};
