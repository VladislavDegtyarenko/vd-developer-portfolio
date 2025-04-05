import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWidth(window.innerWidth);

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 150); // Adjust debounce delay here if needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width };
};

export default useViewportWidth;
