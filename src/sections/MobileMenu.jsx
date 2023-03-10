import styled from "styled-components";
import Container from "../ui/Container";
import MenuLinks from "../ui/MenuLinks";

import { motion } from "framer-motion";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100svh;
  z-index: 1;
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
    margin-top: ${({ headerHeight }) => `${headerHeight}px`};
  }

  .overlay {
    margin-top: ${({ headerHeight }) => `${headerHeight}px`};
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

const MobileMenu = ({ scrollbarWidth, toggleMenu }) => {
  const headerHeight = Math.round(document.querySelector("header").clientHeight);

  return (
    <StyledMenu
      style={{
        width: `calc(100% - ${scrollbarWidth}px)`,
      }}
      headerHeight={headerHeight}
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

export default MobileMenu;
