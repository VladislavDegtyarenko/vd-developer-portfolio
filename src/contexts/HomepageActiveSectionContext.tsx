"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type PropsWithChildren,
} from "react";
import { usePathname } from "next/navigation";
import { useFirstRender } from "@/hooks/useFirstRender";

type HomepageActiveSectionContextType = {
  activeSection: string | null;
};

const HomepageActiveSectionContext =
  createContext<HomepageActiveSectionContextType>({
    activeSection: null,
  });

export function HomepageActiveSectionContextProvider({
  children,
}: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHomepage = usePathname() === "/";
  const isFirstRender = useFirstRender();

  const elementsMapRef = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    if (isFirstRender) return;

    if (!isHomepage) {
      setActiveSection(null);
      return;
    }

    const homepageSections = document.querySelectorAll("section");

    Array.from(homepageSections).forEach((section) => {
      elementsMapRef.current.set(section.id, section);
    });

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: document,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    homepageSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      homepageSections.forEach((section) => {
        observer.unobserve(section);
      });

      observer.disconnect();
    };
  }, [isHomepage, isFirstRender]);

  return (
    <HomepageActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </HomepageActiveSectionContext.Provider>
  );
}

export function useHomepageActiveSection() {
  const ctx = useContext(HomepageActiveSectionContext);

  if (!ctx) {
    throw new Error(
      "useHomepageActiveSection must be used within HomepageActiveSectionContextProvider"
    );
  }

  return ctx;
}
