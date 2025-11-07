import { useEffect, useRef, useState, startTransition } from "react";
import { useFirstRender } from "./useFirstRender";
import { usePathname } from "next/navigation";
import { isBrowser } from "@/utils/isBrowser";

export const useActiveHomepageSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isFirstRender = useFirstRender();

  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isBrowser() || isFirstRender) return;

    if (!isHomepage) {
      setActiveSection((prev) => (prev === null ? prev : null));
      return;
    }

    const sections = document.querySelectorAll("section");

    const options = {
      root: document,
      rootMargin: "0px",
      threshold: [0, 0.5, 1],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const ratios = ratiosRef.current;

      entries.forEach((entry) => {
        ratios.set(entry.target.id, entry.intersectionRatio);
      });

      const maxRatio = Math.max(...ratios.values());
      const sectionWithMaxRatio =
        Array.from(ratios.keys()).find((key) => ratios.get(key) === maxRatio) ||
        null;

      startTransition(() => {
        setActiveSection((prev) =>
          prev === sectionWithMaxRatio ? prev : sectionWithMaxRatio
        );
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    const observer = observerRef.current;

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
      observerRef.current = null;
    };

    // There's a cringy bug:
    // In dev mode everything works great,
    // But when building the app, the observer is not updated when you click on <Link /> with anchor tag within the same page.
    // That's why we need to pass activeSection to the dependency array to force a re-initialization of the observer.
    // This is not the most performant solution, but it's the best we can do for now.
  }, [isFirstRender, isHomepage, activeSection]);

  return { activeHomepageSection: activeSection };
};
