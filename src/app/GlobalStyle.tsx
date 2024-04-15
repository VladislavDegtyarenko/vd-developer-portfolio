"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 1em;
    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --strokeWidth: 4px;
    --borderRadiusNormal: 16px;
    --borderRadiusSmall: 4px;
    --duration: 0.15s;
    --duration-long: 0.3s;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #050505;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  .visuallyHidden {
    overflow: hidden;
  }

  .visuallyHidden * {
    overflow: hidden;
  }

`;

export default GlobalStyle;
