import styled from "styled-components";

import { useContext, useState, useEffect, useRef, memo } from "react";

import projectsData from "app/data/projects";
import ProjectSlide from "app/ui/ProjectSlide";
import ProjectContext from "app/contexts/ProjectContext";

const StyledProjectsList = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 42px;

    @media screen and (max-width: 991.98px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .showAll {
    display: flex;
    justify-content: center;
    margin: 1em auto 0;
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.25em;
    background-color: ${({ theme }) => theme.cyan};
    color: ${({ theme }) => theme.white};
    transition: background-color var(--duration), color var(--duration);

    &:hover {
      background-color: ${({ theme }) => theme.cyanHover};
    }
  }
`;

const ProjectsList = () => {
  const [showAll, setShowAll] = useState(false);
  const { previewProject } = useContext(ProjectContext);

  const projData = showAll ? projectsData : projectsData.slice(0, 2);

  const listRef = useRef<HTMLUListElement>(null);
  const firstRender = useRef(false);

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
      return;
    }

    if (!showAll) {
      listRef.current?.scrollIntoView();
    }
  }, [showAll]);

  return (
    <StyledProjectsList>
      <ul ref={listRef}>
        {projData.map(({ img, title, description, previewLink, codeLink }) => (
          <ProjectSlide
            key={title}
            img={img}
            title={title}
            description={description}
            previewLink={previewLink}
            previewProject={previewProject}
            codeLink={codeLink}
          />
        ))}
      </ul>

      <button className="showAll" onClick={() => setShowAll((s) => !s)}>
        {!showAll ? "Show all projects" : "Show less"}
      </button>
    </StyledProjectsList>
  );
};

export default ProjectsList;
