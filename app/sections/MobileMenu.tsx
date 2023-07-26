"use client";

import { useContext, memo } from "react";
import styled from "styled-components";

import Container from "../ui/Container";
import MenuLinks from "../ui/MenuLinks";

import MobileMenuContext from "app/contexts/MobileMenuContext";
import ModalWrapper from "app/ui/ModalWrapper";

const StyledWrapper = styled(ModalWrapper)`
  ul {
    margin-top: 5em;
  }
`;

const MobileMenu = () => {
  const { toggleMenu } = useContext(MobileMenuContext);

  return (
    <StyledWrapper closeModal={toggleMenu}>
      <Container>
        <MenuLinks isMobile={true} toggleMenu={toggleMenu} />
      </Container>
    </StyledWrapper>
  );
};

export default memo(MobileMenu);
