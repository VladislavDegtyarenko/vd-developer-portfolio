import { useEffect, useState, useRef } from "react";
import { isBrowser } from "@/utils/isBrowser";
import { throttle } from "@/utils/throttle";

interface ScrollDelta {
  scrolledUp: boolean;
  scrolledDown: boolean;
  scrollPosition: number;
}

const useScrollDelta = (delta: number = 5): ScrollDelta => {
  // TODO: find a better way to get the scroll position
  // It triggers rerender too often, but we need only boolean if scrollPosition > 250
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrolledUp, setScrolledUp] = useState<boolean>(false);
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);

  // Use ref to track previous position for comparison without causing re-renders
  const previousScrollPositionRef = useRef<number>(0);

  // flag to track the first fired scroll event
  // we want to disable firing the first scroll event
  // but fire it each time after a timeout
  const isFirstScrollFired = useRef(true);

  useEffect(() => {
    if (!isBrowser()) return;

    // Initialize scroll position on mount
    previousScrollPositionRef.current = window.scrollY;
    setScrollPosition(window.scrollY || 0);

    // Helper function to handle the scroll event and set the scrolledUp and scrolledDown state
    const handleScroll = () => {
      // return it it's the first fired scroll event
      if (isFirstScrollFired.current) {
        isFirstScrollFired.current = false;
        previousScrollPositionRef.current = window?.scrollY || 0;
        return;
      }

      const currentPosition = window?.scrollY || 0;
      const previousPosition = previousScrollPositionRef.current;

      if (Math.abs(currentPosition - previousPosition) >= delta) {
        setScrolledUp(currentPosition < previousPosition);
        setScrolledDown(currentPosition > previousPosition);
        setScrollPosition(currentPosition);
        previousScrollPositionRef.current = currentPosition;
      }
    };

    // Throttle the scroll event to avoid firing it too frequently
    const throttledScrollHandler = throttle(500, handleScroll);

    // Attach the event listener
    window.addEventListener("scroll", throttledScrollHandler);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      isFirstScrollFired.current = true;
    };
  }, [delta]);

  return {
    scrolledUp,
    scrolledDown,
    scrollPosition,
  };
};

export default useScrollDelta;
