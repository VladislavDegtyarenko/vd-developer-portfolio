"use client";

import { useContext } from "react";
import DarkModeContext from "./contexts/DarkModeContext";

import { ThemeProvider } from "styled-components";
import { StyledThemeProviderProps } from "./types";

const darkTheme = {
  bg: "#050505",
  cardBg: "#242424",
  cyan: "#1B9AAA",
  grey: "#B1B1B1",
  fg: "#F8F8F8",
  white: "#F8F8F8",
};

const lightTheme = {
  bg: "#f6f6f6",
  cardBg: "#e4e4e4",
  cyan: "#1B9AAA",
  grey: "#5d5c5c",
  fg: "#353535",
  white: "#F8F8F8",
};

function StyledThemeProvider({ children }: StyledThemeProviderProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  console.log("isDarkMode: ", isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
  );
}

export default StyledThemeProvider;
