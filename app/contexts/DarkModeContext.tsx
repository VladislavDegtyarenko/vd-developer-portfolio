"use client";

import { useState, useEffect, createContext, ReactNode } from "react";
import { IsDarkMode, ToggleDarkMode } from "app/types";

const DarkModeContext = createContext({ isDarkMode: false, toggleDarkMode: () => {} });

export const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  // Theme
  const [isDarkMode, setIsDarkMode] = useState<IsDarkMode>(() => {
    if (typeof window === "undefined") return true; // for SSR
    
    const saved = localStorage.getItem("isDarkMode");
    const initialValue = saved ? JSON.parse(saved) : isSystemDarkMode();
    return initialValue;
  });
  console.log('isDarkMode: ', isDarkMode);

  function isSystemDarkMode() {
    return (
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  const toggleDarkMode: ToggleDarkMode = () => setIsDarkMode((d) => !d);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
