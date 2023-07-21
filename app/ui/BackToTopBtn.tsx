"use client";

import styled from "styled-components";
import ArrowIcon from "@/assets/Icons/Arrow";
import { useState, useEffect, useRef, useContext } from "react";
import throttle from "../functions/throttle";
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
  }

  &:hover {
    background-color: ${({ theme }) => theme.fg};
    opacity: 0.9;
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
  const [visible, setVisible] = useState(false);
  const { scrollbarCompensation } = useContext(ScrollLockContext);

  const getScrollPosition = () => window?.scrollY || DEFAULT_SCROLL_POSITION;
  const scrollPosition = useRef(DEFAULT_SCROLL_POSITION);

  const handleScroll = () => {
    const oldScroll = scrollPosition.current;
    const newScroll = getScrollPosition();

    const userIsScrolledUp = newScroll < oldScroll;
    const userIsOnTop = newScroll < 500;

    setVisible(userIsScrolledUp && !userIsOnTop);

    scrollPosition.current = newScroll;
  };

  const debounceHandleScroll = throttle(() => handleScroll(), 200);

  useEffect(() => {
    if (!window) return;

    scrollPosition.current = getScrollPosition();

    window.addEventListener("scroll", debounceHandleScroll);

    return () => window.removeEventListener("scroll", debounceHandleScroll);
  }, [debounceHandleScroll]);

  const scrollToTop = () => window.scrollTo(0, 0);
  
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
