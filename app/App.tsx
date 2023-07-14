"use client";

import { createRef, useContext, useRef } from "react";
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
import MobileMenuContext from "./contexts/MobileMenuContext";
import ProjectContext from "./contexts/ProjectContext";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  position: relative;
  transition: all var(--duration-long);
`;

const App = () => {
  const { menuIsOpen } = useContext(MobileMenuContext);
  const { projectSrc, closeProjectModal, previewProject } = useContext(ProjectContext);

  const headerRef = createRef<HeaderRef>();

  return (
    <StyledApp>
      <Header ref={headerRef} />
      <Main />
      <About />
      <Projects previewProject={previewProject} />
      <Reviews />
      <Contact />
      <Footer />

      <AnimatePresence>
        {menuIsOpen && <MobileMenu headerRef={headerRef} />}
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
