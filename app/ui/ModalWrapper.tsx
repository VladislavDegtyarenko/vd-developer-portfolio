import { useContext, memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScrollLockContext from "app/contexts/ScrollLockContext";
import { ModalWrapperProps, StyledModalWrapperProps } from "app/types";

const StyledModalWrapper = styled(motion.div)<StyledModalWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: ${({ $scrollbarCompensation }) =>
    $scrollbarCompensation ? `${$scrollbarCompensation}px` : 0};
  height: 100%;
  height: 100svh;
  z-index: 2;

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
    opacity: 0.85;
  }
`;

const ModalWrapper = ({
  closeModal,
  ...props
}: ModalWrapperProps) => {
  const { scrollbarCompensation } = useContext(ScrollLockContext);

  return (
    <StyledModalWrapper
      $scrollbarCompensation={scrollbarCompensation}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      {...props}
    ></StyledModalWrapper>
  );
};

export default ModalWrapper;