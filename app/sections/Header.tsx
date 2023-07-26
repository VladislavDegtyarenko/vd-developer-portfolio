"use client";

import { useState, useEffect, useRef, useContext, memo, useCallback } from "react";
import styled from "styled-components";

// UI
import Container from "../ui/Container";
import Logo from "@/assets/Icons/LOGO";
import BurgerButton from "../ui/BurgerButton";
import MenuLinks from "../ui/MenuLinks";
import DarkModeToggle from "../ui/DarkModeToggle";

// Contexts
import DarkModeContext from "app/contexts/DarkModeContext";
import MobileMenuContext from "app/contexts/MobileMenuContext";
import ScrollLockContext from "app/contexts/ScrollLockContext";

// TS
import { HeaderRef, TimeoutRef } from "../types";

const StyledHeader = styled.header<{ $scrollbarCompensation: number | null }>`
  padding: 1.5em 0;
  position: fixed;
  width: ${({ $scrollbarCompensation }) =>
    $scrollbarCompensation ? `calc(100% - ${$scrollbarCompensation}px)` : "100%"};
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
    &.header-collapse {
      top: -150px;
    }
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
  const ref = useRef<HeaderRef>(null);

  const { scrollbarCompensation } = useContext(ScrollLockContext);
  const { menuIsOpen, toggleMenu } = useContext(MobileMenuContext);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // SCROLL
  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 5;

  const timeoutRef = useRef<TimeoutRef>(undefined);

  const handleScroll = useCallback(() => {
    if (!ref || typeof ref === "function" || !ref?.current) return;

    const scrollTop = Math.round(window.scrollY);

    const headerHeight = ref.current.clientHeight;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      ref.current.classList.add("header-collapse");
    } else {
      if (scrollTop < lastScrollTop) {
        ref.current.classList.remove("header-collapse");
      }
    }

    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    const hasScrolled = () => {
      setDidScroll(true);
    };

    document.body.addEventListener("scroll", hasScrolled);

    return () => document.body.removeEventListener("scroll", hasScrolled);
  }, []);

  useEffect(() => {
    if (!didScroll) return;

    timeoutRef.current = setInterval(() => {
      handleScroll();
      setDidScroll(false);
    }, 250);

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [didScroll, handleScroll]);

  return (
    <StyledHeader ref={ref} $scrollbarCompensation={scrollbarCompensation}>
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
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <BurgerButton isOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
