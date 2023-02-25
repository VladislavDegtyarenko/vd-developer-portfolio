import styled from "styled-components";
import ThemeProvider from "./StyledThemeProvider";
import { lazy } from "react";

import Header from "./sections/Header";
import Main from "./sections/01_Main";
import About from "./sections/02_About";
import Projects from "./sections/03_Projects";
import Reviews from "./sections/04_Reviews";
import Contact from "./sections/05_Contact";
import Footer from "./sections/Footer";

import MobileMenu from "./sections/MobileMenu";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectModal from "./ui/ProjectModal";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  position: relative;
  transition: all var(--duration-long);
`;

const App = () => {
  // Theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (!localStorage.getItem("isDarkMode")) {
      return isSystemDarkMode();
    }

    return JSON.parse(localStorage.getItem("isDarkMode"));
  });

  function isSystemDarkMode() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  // Mobile Menu
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen((o) => !o);

  const scrollbarWidth = getScrollbarWidth();

  function getScrollbarWidth() {
    let el = document.createElement("div");
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    let width = el.offsetWidth - el.clientWidth;
    el.remove();
    return width;
  }

  // Project Preview Source
  const [projectSrc, setProjectSrc] = useState(null);

  const previewProject = (url) => {
    setProjectSrc(url);
  };

  const closeProjectModal = () => setProjectSrc(null);

  // SCROLL LOCK
  const scrollLock = () => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = scrollbarWidth + "px";
  };

  const scrollUnlock = () => {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";
  };

  useEffect(() => {
    if (menuIsOpen || projectSrc) {
      scrollLock();
    } else {
      scrollUnlock();
    }
  }, [menuIsOpen, projectSrc]);

  useEffect(() => {
    window.onresize = () => debounceCloseMenu();
  }, []);

  const debounce = (func, timeout = 300) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debounceCloseMenu = debounce(() => setMenuIsOpen(false), 100);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StyledApp>
        <Header
          menuIsOpen={menuIsOpen}
          toggleMenu={toggleMenu}
          scrollbarWidth={scrollbarWidth}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode((d) => !d)}
        />
        <Main />
        <About />
        <Projects previewProject={previewProject} />
        <Reviews />
        <Contact />
        <Footer />

        <AnimatePresence>
          {menuIsOpen && (
            <MobileMenu scrollbarWidth={scrollbarWidth} toggleMenu={toggleMenu} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {projectSrc && (
            <ProjectModal projectSrc={projectSrc} closeProjectModal={closeProjectModal} />
          )}
        </AnimatePresence>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
