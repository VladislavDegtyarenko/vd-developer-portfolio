"use client";

// Core
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { motion } from "framer-motion";

// Types
import { MenuLinksProps, StyledLinksProps } from "../types";

// UI
import NavItem from "./NavItem";

// Data
import navLinks from "../data/navLinks.json";
import { useActiveHomepageSectionFallback } from "@/hooks/useActiveHomepageSectionFallback";

const visibleNavLinks = navLinks.filter(({ isHidden }) => !isHidden);

const StyledNav = styled.ul<StyledLinksProps>`
  display: grid;
  justify-content: center;

  ${({ $isMobile }) =>
    $isMobile
      ? {
          // Mobile Nav
          gap: "5vh",
          alignItems: "center",
          gridAutoFlow: "row",
        }
      : {
          // Desktop Nav
          gap: "3em",
          alignItems: "stretch",
          gridAutoFlow: "column",
        }}
`;

function isLinkActive(
  href: string,
  pathname: string,
  activeHomepageSection: string | null,
) {
  if (pathname === "/") {
    if (activeHomepageSection === "home" && href === "/") return true;

    return (
      Boolean(activeHomepageSection) && href.includes(activeHomepageSection!)
    );
  }

  return href !== "/" && pathname.includes(href);
}

const MotionStyledNav = motion.create(StyledNav);

const Nav = ({ isMobile = false, toggleMenu }: MenuLinksProps) => {
  const pathname = usePathname();
  const { activeHomepageSection } = useActiveHomepageSectionFallback();

  const handleClick = () => {
    if (isMobile && toggleMenu) toggleMenu();
  };

  return (
    <MotionStyledNav $isMobile={isMobile}>
      {visibleNavLinks.map(({ text, href, isExternal, ...props }, index) => (
        <NavItem
          key={text}
          index={index}
          text={text}
          href={href}
          isMobile={isMobile}
          isActive={isLinkActive(href, pathname, activeHomepageSection)}
          isExternal={isExternal}
          onClick={handleClick}
          {...props}
        />
      ))}
    </MotionStyledNav>
  );
};

export default memo(Nav);
