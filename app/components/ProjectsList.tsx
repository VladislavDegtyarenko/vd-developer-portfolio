import styled from "styled-components";

import { useContext, useState, useEffect, useRef, memo } from "react";
import useIsomorphicLayoutEffect from "app/hooks/useIsomorphicLayoutEffect";

import projectsData from "app/data/projects";
import ProjectSlide from "app/ui/ProjectSlide";
import ProjectContext from "app/contexts/ProjectContext";

import animateFromBottom from "app/animations/animateFromBottom";

//tS
import { ProjectCardsListRef } from "./../types";

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
  const { previewProject } = useContext(ProjectContext);

  const cardsListRef = useRef<ProjectCardsListRef>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardsListRef.current) return;

    animateFromBottom([...new Set(cardsListRef.current.children)], {
      stagger: 0.15,
    });
  }, []);

  return (
    <StyledProjectsList>
      <ul ref={cardsListRef}>
        {projectsData.map(({ img, title, description, previewLink, codeLink }) => (
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
    </StyledProjectsList>
  );
};

export default ProjectsList;
