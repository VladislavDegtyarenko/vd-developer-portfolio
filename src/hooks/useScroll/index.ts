// useScroll.ts
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  setThreshold,
  setThrottle,
} from "./scroll-store";

export type UseScrollOptions = {
  threshold?: number; // pixels before direction flips
  throttleMs?: number; // minimum ms between notifications
  leading?: boolean; // emit at the start of a burst
  trailing?: boolean; // emit at the end of a burst
};

export function useScroll({
  threshold = 0,
  throttleMs = 0,
  leading = true,
  trailing = true,
}: UseScrollOptions = {}) {
  useEffect(() => {
    setThreshold(threshold);
  }, [threshold]);

  useEffect(() => {
    setThrottle({ ms: throttleMs, leading, trailing });
  }, [throttleMs, leading, trailing]);

  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    scrollPosition: snap.scrollY,
    isScrolledUp: snap.scrolledUp,
    isScrolledDown: snap.scrolledDown,
  };
}
