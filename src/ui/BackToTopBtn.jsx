import styled from "styled-components";
import ArrowIcon from "../assets/Icons/Arrow";
import { useState, useEffect, useRef } from "react";
import throttle from "../functions/throttle";

const StyledBtn = styled.button`
  position: fixed;
  font-size: 1.5em;
  width: 2em;
  height: 2em;
  bottom: 1em;
  right: 1em;
  padding: 0.5em;
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
  transition: all var(--duration);

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

const BackToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const getScrollPosition = () => window.scrollY;
  const scrollPosition = useRef(getScrollPosition());

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
    window.addEventListener("scroll", debounceHandleScroll);

    return () => window.removeEventListener("scroll", debounceHandleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <StyledBtn className={visible ? "visible" : ""} onClick={scrollToTop}>
      <ArrowIcon />
    </StyledBtn>
  );
};

export default BackToTopBtn;
