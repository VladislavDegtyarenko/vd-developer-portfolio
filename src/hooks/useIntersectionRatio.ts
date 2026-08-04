import { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "@/utils/throttle";

type UseIntersectionRatioOptions = {
  /** Minimum delay between state updates. Defaults to no throttling. */
  throttleMs?: number;
};

/**
 * Observes an element and reports the fraction of its area currently inside
 * the viewport, from 0 (not visible) to 1 (fully visible).
 */
export const useIntersectionRatio = <T extends Element>(
  { throttleMs = 0 }: UseIntersectionRatioOptions = {},
) => {
  const targetRef = useRef<T>(null);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const normalizedThrottleMs = Math.max(0, throttleMs);

  // IntersectionObserver only reports when a threshold is crossed. One
  // threshold per percentage point keeps opacity changes smooth while scrolling.
  const thresholds = useMemo(
    () => Array.from({ length: 101 }, (_, index) => index / 100),
    [],
  );

  useEffect(() => {
    const target = targetRef.current;

    if (!target || typeof IntersectionObserver === "undefined") return;

    let latestRatio = 0;
    const updateRatio = () => {
      setIntersectionRatio((previousRatio) =>
        previousRatio === latestRatio ? previousRatio : latestRatio,
      );
    };
    const throttledUpdateRatio = throttle(normalizedThrottleMs, updateRatio);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        latestRatio = entry.intersectionRatio;

        if (normalizedThrottleMs === 0) updateRatio();
        else throttledUpdateRatio();
      },
      { threshold: thresholds },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [normalizedThrottleMs, thresholds]);

  return { targetRef, intersectionRatio };
};
