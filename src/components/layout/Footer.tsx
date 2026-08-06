"use client";

// Core
import { memo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styled from "styled-components";

// UI
import Container from "@/components/layout/Container";
import { P2 } from "@/components/Text";
const MotionP2 = motion.create(P2);

const StyledFooter = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.grey};
  padding: 60px 0;
`;

const Footer = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <StyledFooter>
      <Container>
        <MotionP2
          {...(!isReducedMotion && {
            initial: { opacity: 0, y: 50 },
            whileInView: {
              opacity: 1,
              y: 0,
            },
            transition: { duration: 0.7 },
          })}
        >
          © Copyright {new Date().getFullYear()} | Vladyslav Dihtiarenko | All
          Rights Reserved
        </MotionP2>
      </Container>
    </StyledFooter>
  );
};

export default memo(Footer);
