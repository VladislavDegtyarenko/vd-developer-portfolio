import { useContext } from "react";
import styled from "styled-components";
import { m, LazyMotion, useReducedMotion } from "framer-motion";

const framerFeatures = () =>
  import("./../features/framerFeatures").then((res) => res.default);

import ScrollLockContext from "@/contexts/ScrollLockContext";
import { ModalWrapperProps, StyledModalWrapperProps } from "@/types";

const StyledModalWrapper = styled(m.div)<StyledModalWrapperProps>`
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
  height: 100dvh;
  z-index: 2;
  backdrop-filter: blur(0.5rem);

  &::before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.75;
  }
`;

const menuVariants = {
  closed: {
    opacity: 0.5,
    clipPath: "circle(0% at top 16px right 16px)",
    transition: { delay: 0.3, duration: 0.35 },
  },
  opened: {
    opacity: 1,
    clipPath: "circle(150% at top 16px right 16px)",
    transition: { delay: 0.15, duration: 0.35 },
  },
};

const ModalWrapper = ({
  closeModal,
  children,
  ...props
}: ModalWrapperProps) => {
  const { scrollbarCompensation } = useContext(ScrollLockContext);
  const isReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={framerFeatures}>
      <StyledModalWrapper
        $scrollbarCompensation={scrollbarCompensation}
        {...(!isReducedMotion && {
          initial: "closed",
          animate: "opened",
          exit: "closed",
          variants: menuVariants,
          transition: { duration: 0.15 * 3 },
        })}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
        {...props}
      >
        {children}
      </StyledModalWrapper>
    </LazyMotion>
  );
};

export default ModalWrapper;
