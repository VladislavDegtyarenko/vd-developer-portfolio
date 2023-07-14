"use client";

import { createRef, useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

import Header from "./sections/Header";
import Main from "./sections/01_Main";
import About from "./sections/02_About";
import Projects from "./sections/03_Projects";
import Reviews from "./sections/04_Reviews";
import Contact from "./sections/05_Contact";
import Footer from "./sections/Footer";

// UI
import BackToTopBtn from "./ui/BackToTopBtn";
import MobileMenu from "./sections/MobileMenu";
const AnimatePresence = dynamic(
  () => import("framer-motion").then((m) => m.AnimatePresence),
  {
    ssr: false,
  }
);
const ProjectModal = dynamic(() => import("./ui/ProjectModal"), { ssr: false });

// Contexts
import MobileMenuContext from "./contexts/MobileMenuContext";
import ProjectContext from "./contexts/ProjectContext";

// TS
import { HeaderRef } from "./types";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  position: relative;
  transition: all var(--duration-long);
`;

const App = () => {
  const { menuIsOpen } = useContext(MobileMenuContext);
  const { projectSrc, closeProjectModal } = useContext(ProjectContext);

  const headerRef = createRef<HeaderRef>();

  return (
    <StyledApp>
      <Header ref={headerRef} />
      <Main />
      <About />
      <Projects />
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
