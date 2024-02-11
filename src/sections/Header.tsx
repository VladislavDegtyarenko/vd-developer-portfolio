"use client";

import {
  useState,
  useEffect,
  useRef,
  useContext,
  memo,
  useCallback,
} from "react";
import styled from "styled-components";
import useScrollDelta from "@/hooks/useScrollDelta";

// UI
import Container from "@/components/Container";
import Logo from "public/assets/Icons/LOGO";
import BurgerButton from "@/components/BurgerButton";
import MenuLinks from "@/components/MenuLinks";
import DarkModeToggle from "@/components/DarkModeToggle";

// Contexts
import DarkModeContext from "@/contexts/DarkModeContext";
import MobileMenuContext from "@/contexts/MobileMenuContext";
import ScrollLockContext from "@/contexts/ScrollLockContext";

const StyledHeader = styled.header<{
  $scrollbarCompensation: number | null;
  $scrolledDown: boolean;
}>`
  padding: 1.5em 0;
  position: fixed;
  width: ${({ $scrollbarCompensation }) =>
    $scrollbarCompensation
      ? `calc(100% - ${$scrollbarCompensation}px)`
      : "100%"};
  z-index: 3;
  box-shadow: 0 0 8px #35353555;
  /* background-color: #050505bb; */
  backdrop-filter: blur(8px);
  top: 0;
  transition: top 0.3s;

  &:after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.bg};
    transition: background-color var(--duration);
    backdrop-filter: blur(8px);

    opacity: 0.8;
    z-index: -1;
  }

  @media screen and (max-width: 575.98px) {
    padding: 0.75em 0;
  }

  @media screen and (max-width: 991.98px) {
    padding: 1.25em 0;
    top: ${({ $scrolledDown }) => ($scrolledDown ? "-150px" : 0)};
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
  }

  .logo {
    width: 80px;
    height: auto;
    /* margin-right: 3em; */
    transition: width var(--duration);
    color: ${({ theme }) => theme.fg};
  }

  .logo img {
    width: 100%;
    height: auto;
  }

  ul {
    @media screen and (max-width: 991.98px) {
      display: none;
    }
  }

  > div {
    position: relative;
  }
`;

const Header = () => {
  const { scrollbarCompensation } = useContext(ScrollLockContext);
  const { menuIsOpen, toggleMenu } = useContext(MobileMenuContext);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // SCROLL
  const { scrolledUp, scrolledDown } = useScrollDelta();

  return (
    <StyledHeader
      $scrollbarCompensation={scrollbarCompensation}
      $scrolledDown={scrolledDown}
    >
      <Container>
        <nav>
          <a
            className="logo"
            href="#home"
            onClick={() => {
              if (menuIsOpen) {
                toggleMenu();
              }
            }}
            aria-label="logo, click to scroll to top"
          >
            <Logo />
          </a>
          <MenuLinks />
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <BurgerButton isOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
