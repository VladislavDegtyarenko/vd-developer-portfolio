"use client";

import { useContext, memo } from "react";

import Container from "../ui/Container";
import MenuLinks from "../ui/MenuLinks";

import MobileMenuContext from "app/contexts/MobileMenuContext";
import ModalWrapper from "app/ui/ModalWrapper";

const MobileMenu = () => {
  const { toggleMenu } = useContext(MobileMenuContext);

  return (
    <ModalWrapper closeModal={toggleMenu}>
      <Container>
        <MenuLinks isMobile={true} toggleMenu={toggleMenu} />
      </Container>
    </ModalWrapper>
  );
};

export default memo(MobileMenu);
