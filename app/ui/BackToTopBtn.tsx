"use client";

import styled from "styled-components";
import ArrowIcon from "@/assets/Icons/Arrow";
import { MouseEvent, useContext } from "react";
import useScrollDelta from "app/hooks/useScrollDelta";
import ScrollLockContext from "app/contexts/ScrollLockContext";

const StyledBtn = styled.button<{ $scrollbarCompensation: number | null }>`
  position: fixed;
  font-size: 1.5em;
  width: 2em;
  height: 2em;
  bottom: 1em;
  right: 1em;
  padding: 0.5em;
  margin-right: ${({ $scrollbarCompensation }) => $scrollbarCompensation + "px" || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.bg};
  z-index: 1;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  transform: scale(0.5);
  cursor: pointer;
  transition: transform var(--duration), opacity var(--duration);

  &.visible {
    pointer-events: initial;
    user-select: initial;
    transform: scale(1);

    opacity: 0.75;
    &:hover {
      background-color: ${({ theme }) => theme.fg};
      opacity: 0.9;
    }
  }

  > svg {
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DEFAULT_SCROLL_POSITION = 0;

const BackToTopBtn = () => {
  const { scrollbarCompensation } = useContext(ScrollLockContext);

  const { scrolledUp, scrollPosition } = useScrollDelta();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const visible = scrolledUp && scrollPosition > 800;

  return (
    <StyledBtn
      className={visible ? "visible" : ""}
      $scrollbarCompensation={scrollbarCompensation}
      onClick={scrollToTop}
    >
      <ArrowIcon />
    </StyledBtn>
  );
};

export default BackToTopBtn;
