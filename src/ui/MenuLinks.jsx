import styled from "styled-components";
import { H3, P1 } from "./Text";

const StyledLinks = styled.ul`
  display: grid;
  grid-auto-flow: ${({ isMobile }) => (isMobile ? "row" : "column")};
  align-items: ${({ isMobile }) => (isMobile ? "center" : "stretch")};
  gap: ${({ isMobile }) => (isMobile ? "5vh" : "3em")};
  justify-content: center;
  height: 100%;

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

const MenuLinks = ({ isMobile, toggleMenu }) => {
  const CustomLink = isMobile ? H3 : P1;

  const handleClick = () => {
    if (isMobile) toggleMenu();
  };

  return (
    <StyledLinks isMobile={isMobile}>
      <li>
        <CustomLink as="a" href="#home" onClick={handleClick}>
          Home
        </CustomLink>
      </li>
      <li>
        <CustomLink as="a" href="#about" onClick={handleClick}>
          About
        </CustomLink>
      </li>
      <li>
        <CustomLink as="a" href="#projects" onClick={handleClick}>
          Projects
        </CustomLink>
      </li>
      <li>
        <CustomLink as="a" href="#reviews" onClick={handleClick}>
          Reviews
        </CustomLink>
      </li>
      <li>
        <CustomLink as="a" href="#contact" onClick={handleClick}>
          Contact
        </CustomLink>
      </li>
    </StyledLinks>
  );
};

export default MenuLinks;
