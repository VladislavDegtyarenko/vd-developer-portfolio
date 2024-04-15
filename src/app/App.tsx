"use client";

// Core
import { useContext } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

// Contexts
import ProjectContext from "@/contexts/ProjectContext";

// Sections
import Main from "@/sections//01_Main";
import About from "@/sections//02_About";
import Experience from "@/sections//03_Experience";
import Projects from "@/sections//04_Projects";
import Reviews from "@/sections//05_Reviews";
import Contact from "@/sections//06_Contact";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), {
  ssr: false,
});

const App = () => {
  const { projectSrc, closeModal } = useContext(ProjectContext);

  return (
    <>
      <Main />
      <About />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />

      <AnimatePresence>
        {projectSrc && (
          <ProjectModal projectSrc={projectSrc} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
