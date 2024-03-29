"use client";

// Core
import { useContext } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

// Contexts
import MobileMenuContext from "@/contexts/MobileMenuContext";
import ProjectContext from "@/contexts/ProjectContext";

// Sections
import Header from "@/sections//Header";
import Main from "@/sections//01_Main";
import About from "@/sections//02_About";
import Experience from "@/sections//03_Experience";
import Projects from "@/sections//04_Projects";
import Reviews from "@/sections//05_Reviews";
import Contact from "@/sections//06_Contact";
import Footer from "@/sections//Footer";

// UI (Components)
import BackToTopBtn from "@/components/BackToTopBtn";
import MobileMenu from "@/sections/MobileMenu";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), {
  ssr: false,
});

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  position: relative;
  transition: all var(--duration-long);
`;

const App = () => {
  const { menuIsOpen } = useContext(MobileMenuContext);
  const { projectSrc, closeModal } = useContext(ProjectContext);

  return (
    <StyledApp>
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />

      <AnimatePresence>{menuIsOpen && <MobileMenu />}</AnimatePresence>

      <AnimatePresence>
        {projectSrc && (
          <ProjectModal projectSrc={projectSrc} closeModal={closeModal} />
        )}
      </AnimatePresence>

      <BackToTopBtn />
    </StyledApp>
  );
};

export default App;
