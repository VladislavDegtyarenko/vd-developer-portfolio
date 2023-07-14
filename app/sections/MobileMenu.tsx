"use client";

import { useContext, memo } from "react";
import MobileMenuContext from "app/contexts/MobileMenuContext";

import styled from "styled-components";
import Container from "../ui/Container";
import MenuLinks from "../ui/MenuLinks";

import { motion } from "framer-motion";
import { MobileMenuProps, StyledMenuProps } from "../types";
import ScrollLockContext from "app/contexts/ScrollLockContext";

const StyledMenu = styled.div<StyledMenuProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100svh;
  z-index: 2;
  backdrop-filter: blur(4px);

  &:after {
    content: "";
    display: inline-block;
    background-color: ${({ theme }) => theme.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.8;
  }

  > div {
    margin-top: ${({ $headerHeight }) => `${$headerHeight}px`};
  }

  .overlay {
    margin-top: ${({ $headerHeight }) => `${$headerHeight}px`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ul {
    position: relative;
    width: min-content;
    padding: 0 1em;
    margin: 0 auto;
  }
`;

const DEFAULT_HEADER_HEIGHT = 78;

const MobileMenu = ({ headerRef }: MobileMenuProps) => {
  const { scrollbarWidth } = useContext(ScrollLockContext);
  const { toggleMenu } = useContext(MobileMenuContext);

  const headerHeight = headerRef?.current
    ? Math.round(headerRef.current.clientHeight)
    : DEFAULT_HEADER_HEIGHT;

  return (
    <StyledMenu
      style={{
        width: `calc(100% - ${scrollbarWidth}px)`,
      }}
      $headerHeight={headerHeight}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <div className="overlay" onClick={toggleMenu}></div>
        <MenuLinks isMobile={true} toggleMenu={toggleMenu} />
      </Container>
    </StyledMenu>
  );
};

export default memo(MobileMenu);
