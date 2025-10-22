import useScrollDelta from "./useScrollDelta";
import useViewportWidth from "./useViewportWidth";

export const useIsMobileHeaderHidden = (): boolean => {
  const { width } = useViewportWidth();
  const { scrollPosition, scrolledDown } = useScrollDelta();

  const isHiddenOnMobile = width < 992 && scrollPosition > 250 && scrolledDown;

  return isHiddenOnMobile;
};
