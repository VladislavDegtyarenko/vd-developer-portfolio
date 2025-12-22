"use client";

import styled from "styled-components";
import { Variants, motion, useReducedMotion } from "framer-motion";
import NavLink, { type NavLinkProps } from "./NavLink";
import { forwardRef, memo } from "react";

// Types
type NavItemProps = NavLinkProps & {
  index: number;
};

// Framer Motion Variants
const variants: Variants = {
  hidden: (index) => ({
    opacity: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.2,
    },
  }),
  normal: (index) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.2,
    },
  }),
  active: (index) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.2,
    },
  }),
  hovered: (index) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.2,
    },
  }),
};

const mobileVariants: Variants = {
  hidden: (index) => ({
    y: -50,
    opacity: 0,
    transition: { delay: 0.05 * index, duration: 0.1 },
  }),
  normal: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + 0.1 * index, duration: 0.2 },
  }),
  active: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + 0.1 * index, duration: 0.3 },
  }),
  hovered: (_) => ({
    y: 0,
    opacity: 1,
  }),
};

// Styled component
const StyledItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
`;

const MotionStyledItem = motion(StyledItem);

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ isActive, isMobile, index, ...props }, ref) => {
    const isReducedMotion = useReducedMotion();

    return (
      <MotionStyledItem
        ref={ref}
        {...(!isReducedMotion && {
          initial: "hidden",
          animate: isActive ? "active" : "normal",
          exit: "hidden",
          whileHover: "hovered",
          variants: !isMobile ? variants : mobileVariants,
          custom: index,
        })}
      >
        <NavLink isMobile={isMobile} isActive={isActive} {...props} />
      </MotionStyledItem>
    );
  }
);

NavItem.displayName = "NavItem";

export default memo(NavItem);
