"use client";

import styled from "styled-components";
import Link from "next/link";
import { MenuLinksProps, StyledLinksProps } from "../types";
import { H3, P1 } from "./Text";

const StyledNav = styled.ul<StyledLinksProps>`
  display: grid;
  grid-auto-flow: ${({ $isMobile }) => ($isMobile ? "row" : "column")};
  align-items: ${({ $isMobile }) => ($isMobile ? "center" : "stretch")};
  gap: ${({ $isMobile }) => ($isMobile ? "5vh" : "3em")};
  justify-content: center;

  li {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  a {
    color: ${({ theme }) => theme.fg};
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 0.1em;
      background-color: ${({ theme }) => theme.cyan};
      pointer-events: none;
      user-select: none;
      transition: width var(--duration);
    }
    &:hover:after {
      width: 100%;
    }
  }
`;

const navLinks = [
  {
    href: "/#home",
    text: "Home",
  },
  // {
  //   href: "/#about",
  //   text: "About",
  // },
  // {
  //   href: "/#projects",
  //   text: "Projects",
  // },
  // {
  //   href: "/#reviews",
  //   text: "Reviews",
  // },
  {
    href: "/#contact",
    text: "Contact",
  },
  {
    href: "/blog",
    text: "Blog",
  },
];

const Nav = ({ isMobile = false, toggleMenu }: MenuLinksProps) => {
  const LinkText = isMobile ? H3 : P1;

  const handleClick = () => {
    if (isMobile && toggleMenu) toggleMenu();
  };

  return (
    <StyledNav $isMobile={isMobile}>
      {navLinks.map(({ href, text }) => (
        <li key={text}>
          <Link href={href} onClick={handleClick}>
            <LinkText as="span">{text}</LinkText>
          </Link>
        </li>
      ))}
    </StyledNav>
  );
};

export default Nav;
