import { usePathname } from "next/navigation";
import { useFirstRender } from "./useFirstRender";
import { startTransition, useEffect, useState } from "react";
import { isBrowser } from "@/utils/isBrowser";

export const useCurrentPageSections = () => {
  const [sections, setSections] = useState<NodeListOf<HTMLElement> | null>(
    null
  );
  const pathname = usePathname();
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isBrowser() || isFirstRender) return;

    const sections = document.querySelectorAll("section");
    startTransition(() => {
      setSections(sections);
    });
  }, [isFirstRender, pathname]);

  return { currentPageSections: sections };
};
