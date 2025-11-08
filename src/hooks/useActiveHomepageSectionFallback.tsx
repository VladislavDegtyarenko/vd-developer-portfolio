import { useEffect, useRef, useState } from "react";
import { useFirstRender } from "./useFirstRender";
import { usePathname } from "next/navigation";
import { useCurrentPageSections } from "./useCurrentPageSections";
import { isBrowser } from "@/utils/isBrowser";
import { throttle } from "@/utils/throttle";

export const useActiveHomepageSectionFallback = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const isFirstRender = useFirstRender();

  const isHomepage = usePathname() === "/";

  const { currentPageSections } = useCurrentPageSections();

  useEffect(() => {
    if (!isBrowser() || isFirstRender) return;

    if (!isHomepage) {
      setActiveSection((prev) => (prev === null ? prev : null));
      return undefined;
    }

    const calculateRatios = () => {
      currentPageSections?.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;
        const sectionHeight = section.offsetHeight;

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
    };

    calculateRatios();

    const throttleCalculateRatios = throttle(500, calculateRatios);

    window.addEventListener("scroll", throttleCalculateRatios);

    return () => {
      window.removeEventListener("scroll", throttleCalculateRatios);
    };
  }, [isFirstRender, isHomepage, currentPageSections]);

  return { activeHomepageSection: activeSection };
};
