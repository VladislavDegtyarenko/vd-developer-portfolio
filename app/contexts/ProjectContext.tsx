"use client";

import { createContext, useState } from "react";
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

  const previewProject: PreviewProject = (url) => {
    setProjectSrc(url);
  };

  const closeProjectModal: CloseProjectModal = () => setProjectSrc(null);

  return (
    <ProjectContext.Provider value={{ projectSrc, previewProject, closeProjectModal }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
