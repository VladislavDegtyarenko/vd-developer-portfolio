import { startTransition, useEffect, useRef, useState } from "react";
import { useFirstRender } from "./useFirstRender";
import { usePathname } from "next/navigation";
import { useCurrentPageSections } from "./useCurrentPageSections";
import { isBrowser } from "@/utils/isBrowser";
import { throttle } from "@/utils/throttle";
import { debounce } from "@/utils/debounce";

export const useActiveHomepageSectionFallback = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { currentPageSections } = useCurrentPageSections();

  const [sectionsDimensions, setSectionsDimensions] = useState<
    Map<string, { top: number; bottom: number; height: number }>
  >(new Map());
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const isFirstRender = useFirstRender();

  const isHomepage = usePathname() === "/";

  useEffect(() => {
    if (!isBrowser() || isFirstRender) return;

    if (!isHomepage) {
      setSectionsDimensions(new Map());
      return undefined;
    }

    const recalculateDimensions = () => {
      setSectionsDimensions((prev) => {
        const newMap = new Map(prev);

        currentPageSections?.forEach((section) => {
          newMap.set(section.id, {
            top: section.offsetTop,
            bottom: section.offsetTop + section.offsetHeight,
            height: section.offsetHeight,
          });
        });

        return newMap;
      });
    };

    recalculateDimensions();

    const debouncedRecalculateDimensions = debounce(300, recalculateDimensions);

    window.addEventListener("resize", debouncedRecalculateDimensions);

    return () => {
      window.removeEventListener("resize", debouncedRecalculateDimensions);
    };
  }, [isFirstRender, isHomepage, currentPageSections]);

  useEffect(() => {
    if (!isBrowser() || isFirstRender) return;

    if (!isHomepage) {
      setActiveSection((prev) => (prev === null ? prev : null));
      return undefined;
    }

    const calculateRatios = () => {
      startTransition(() => {
        currentPageSections?.forEach((section) => {
          const sectionDimensions = sectionsDimensions.get(section.id);

          const sectionTop = sectionDimensions?.top || 0;
          const sectionBottom = sectionDimensions?.bottom || 0;
          const sectionHeight = sectionDimensions?.height || 0;

          const viewportTop = window.scrollY;
          const viewportBottom = viewportTop + window.innerHeight;

          const visibleHeight = Math.max(
            0,
            Math.min(sectionBottom, viewportBottom) -
              Math.max(sectionTop, viewportTop)
          );

          const ratio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;

          // clamp for safety

          const clampedRatio = Math.max(0, Math.min(1, ratio));

          ratiosRef.current.set(section.id, clampedRatio);
        });

        const maxRatio = Math.max(...ratiosRef.current.values());
        const sectionWithMaxRatio =
          Array.from(ratiosRef.current.keys()).find(
            (key) => ratiosRef.current.get(key) === maxRatio
          ) || null;
        setActiveSection(sectionWithMaxRatio);
      });
    };

    calculateRatios();

    const throttleCalculateRatios = throttle(100, calculateRatios);

    window.addEventListener("scroll", throttleCalculateRatios);

    return () => {
      window.removeEventListener("scroll", throttleCalculateRatios);
    };
  }, [isFirstRender, isHomepage, currentPageSections, sectionsDimensions]);

  return { activeHomepageSection: activeSection };
};
