"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { useState, useEffect, useRef } from "react";
import { ProjectModalProps, ProjectModalRef } from "../types";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  backdrop-filter: blur(4px);

  .overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    position: absolute;
    background-color: ${({ theme }) => theme.cardBg};
  }

  .close {
    position: absolute;
    right: 2%;
    top: 2%;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    cursor: pointer;
    span {
      display: inline-block;
      position: absolute;
      left: 0;
      top: calc(50% - 1px);
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.cyan};
      &:first-child {
        transform: rotate(-45deg) scale(1.2);
      }
      &:last-child {
        transform: rotate(45deg) scale(1.2);
      }
    }
  }

  .content {
    width: 90%;
    height: 80%;
    background-color: ${({ theme }) => theme.cardBg};
    color: #000;
    border-radius: var(--borderRadiusSmall);
    border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
    position: relative;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  > a {
    color: ${({ theme }) => theme.fg};
    margin-top: 1em;
    font-size: 1em;
  }
`;

const ProjectModal = ({ projectSrc, closeProjectModal }: ProjectModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<ProjectModalRef>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    iframeRef.current.addEventListener("load", () => {
      setIsLoading(false);
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProjectModal();
    });

    return () => {
      iframeRef.current?.removeEventListener("load", () => {
        setIsLoading(false);
      });

      document.body.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") closeProjectModal();
      });
    };
  }, []);

  return (
    <StyledModal
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="overlay" onClick={closeProjectModal}></div>
      <button className="close" onClick={closeProjectModal}>
        <span></span>
        <span></span>
      </button>
      <div className="content">
        <iframe src={projectSrc} ref={iframeRef}></iframe>
        {isLoading ? <Loading /> : null}
      </div>
      <a href={projectSrc} target="_blank">
        Open in a new tab
      </a>
    </StyledModal>
  );
};

export default ProjectModal;
