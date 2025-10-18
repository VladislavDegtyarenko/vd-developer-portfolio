import { useEffect, useState } from "react";

export const useFirstRender = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isFirstRender) return;

    setIsFirstRender(false);
  }, [isFirstRender]);

  return isFirstRender;
};
