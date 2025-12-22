import { useScroll } from "./useScroll";
import useViewportWidth from "./useViewportWidth";

export const useIsMobileHeaderHidden = (): boolean => {
  const { width } = useViewportWidth();
  const { scrollPosition, isScrolledDown } = useScroll({ threshold: 5 });

  const isHiddenOnMobile =
    width < 992 && scrollPosition > 250 && isScrolledDown;

  return isHiddenOnMobile;
};
