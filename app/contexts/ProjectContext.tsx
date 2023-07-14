"use client";

import { createContext, useContext, useState, useEffect } from "react";
import ScrollLockContext from "./ScrollLockContext";
import {
  ContextParentElement,
  ProjectContext,
  CloseProjectModal,
  PreviewProject,
} from "app/types";

const ProjectContext = createContext<ProjectContext>({
  projectSrc: "",
  previewProject: (url) => {},
  closeProjectModal: () => {},
});

export const ProjectContextProvider = ({ children }: ContextParentElement) => {
  // Project Preview Source
  const [projectSrc, setProjectSrc] = useState<string | null>(null);
  const { scrollLock, scrollUnlock } = useContext(ScrollLockContext);


  const previewProject: PreviewProject = (url) => {
    setProjectSrc(url);
  };

  const closeProjectModal: CloseProjectModal = () => setProjectSrc(null);

  useEffect(() => {
    projectSrc ? scrollLock() : scrollUnlock();
  }, [projectSrc, scrollLock, scrollUnlock]);

  return (
    <ProjectContext.Provider value={{ projectSrc, previewProject, closeProjectModal }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
