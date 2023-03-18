import styled from "styled-components";
import Container from "../ui/Container";
import Logo from "../assets/Icons/LOGO.jsx";
import BurgerButton from "../ui/BurgerButton";
import MenuLinks from "../ui/MenuLinks";

import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeader = styled.header`
  padding: 1.5em 0;
  position: fixed;
  width: 100%;
  z-index: 2;
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

const Header = ({
  menuIsOpen,
  toggleMenu,
  scrollbarWidth,
  isDarkMode,
  toggleDarkMode,
}) => {
  // console.log("scrollbarWidth: ", scrollbarWidth);
  // SCROLL

  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 5;

  const headerRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    document.body.onscroll = () => {
      setDidScroll(true);
    };
  }, []);

  useEffect(() => {
    if (!didScroll) return;

    timeoutRef.current = setInterval(() => {
      hasScrolled();
      setDidScroll(false);
    }, 250);

    return () => clearInterval(timeoutRef.current);
  }, [didScroll]);

  const hasScrolled = () => {
    const scrollTop = Math.round(window.scrollY);
    const headerHeight = headerRef.current.clientHeight;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      headerRef.current.classList.add("header-collapse");
    } else {
      if (scrollTop < lastScrollTop) {
        headerRef.current.classList.remove("header-collapse");
      }
    }

    setLastScrollTop(scrollTop);
  };

  return (
    <StyledHeader
      ref={headerRef}
      scrollbarWidth={scrollbarWidth}
      style={{
        // paddingRight: `${menuIsOpen ? scrollbarWidth + "px" : ""}`,
        width: menuIsOpen ? `calc(100% - ${scrollbarWidth}px)` : "",
      }}
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
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <BurgerButton isOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
