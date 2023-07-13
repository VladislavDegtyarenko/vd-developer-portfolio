"use client";

import { createRef, useRef } from "react";
import styled from "styled-components";

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
import BackToTopBtn from "./ui/BackToTopBtn";

import {
  DebounceFunction,
  ToggleMenu,
  MenuIsOpen,
  GetScrollbarWidth,
  CloseProjectModal,
  PreviewProject,
  HeaderRef,
} from "./types";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  position: relative;
  transition: all var(--duration-long);
`;

const App = () => {
  // Mobile Menu
  const [menuIsOpen, setMenuIsOpen] = useState<MenuIsOpen>(false);
  // const [scrollbarWidth, setScrollbarWidth] = useState(16);
  const scrollbarWidth = useRef(16);

  const toggleMenu: ToggleMenu = () => setMenuIsOpen((o) => !o);

  function getScrollbarWidth(): GetScrollbarWidth {
    if (!document) return 16;

    let el = document.createElement("div");
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    let width = el.offsetWidth - el.clientWidth;
    el.remove();
    return width;
  }

  useEffect(() => {
    // setScrollbarWidth(getScrollbarWidth());
    scrollbarWidth.current = getScrollbarWidth();
  }, []);

  // Project Preview Source
  const [projectSrc, setProjectSrc] = useState<string | null>(null);

  const previewProject: PreviewProject = (url) => {
    setProjectSrc(url);
  };

  const closeProjectModal: CloseProjectModal = () => setProjectSrc(null);

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

  const debounce: DebounceFunction<(...args: any[]) => any> = (func, timeout = 300) => {
    let timer: ReturnType<typeof setTimeout>;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debounceCloseMenu = debounce(() => setMenuIsOpen(false), 100);

  const headerRef = createRef<HeaderRef>();

  return (
    <StyledApp>
      <Header
        menuIsOpen={menuIsOpen}
        toggleMenu={toggleMenu}
        scrollbarWidth={scrollbarWidth.current}
        ref={headerRef}
      />
      <Main />
      <About />
      <Projects previewProject={previewProject} />
      <Reviews />
      <Contact />
      <Footer />

      <AnimatePresence>
        {menuIsOpen && (
          <MobileMenu
            scrollbarWidth={scrollbarWidth.current}
            toggleMenu={toggleMenu}
            headerRef={headerRef}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projectSrc && (
          <ProjectModal projectSrc={projectSrc} closeProjectModal={closeProjectModal} />
        )}
      </AnimatePresence>

      <BackToTopBtn />
    </StyledApp>
  );
};

export default App;
