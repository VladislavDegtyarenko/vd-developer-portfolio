"use client";

import { createContext, useState, useEffect, useCallback } from "react";
import { ContextParentElement, GetScrollbarWidth } from "app/types";

const DEFAULT_SCROLLBAR_WIDTH = 16;

const ScrollLockContext = createContext({
  scrollbarWidth: DEFAULT_SCROLLBAR_WIDTH,
  scrollLock: () => {},
  scrollUnlock: () => {},
});

export const ScrollLockContextProvider = ({ children }: ContextParentElement) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(DEFAULT_SCROLLBAR_WIDTH);
  // const scrollbarWidth = useRef(16);

  function getScrollbarWidth(): GetScrollbarWidth {
    if (!document || !window) return DEFAULT_SCROLLBAR_WIDTH;

    return window.innerWidth - document.body.offsetWidth;
  }

  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth());
    // scrollbarWidth.current = getScrollbarWidth();
  }, []);

  const scrollLock = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = scrollbarWidth + "px";
  }, []);

  const scrollUnlock = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";
  }, []);

  return (
    <ScrollLockContext.Provider value={{ scrollbarWidth, scrollLock, scrollUnlock }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

export default ScrollLockContext;
