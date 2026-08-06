"use client";

import { motion, useReducedMotion } from "framer-motion";

import styled from "styled-components";
import { P1 } from "./Text";
import { PropsWithChildren } from "react";

type SectionDescriptionProps = PropsWithChildren<{
  className?: string;
  textAlign?: string;
}>;

const StyledSectionDescription = styled(P1)<{ $textAlign?: string }>`
  ${({ $textAlign }) => ($textAlign === "center" ? `text-align: center;` : "")}
  color: ${({ theme }) => theme.grey};
  text-wrap: balance;

  @media screen and (max-width: 991.98px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

const MotionDescription = motion.create(StyledSectionDescription);

const SectionDescription = ({
  children,
  className,
  textAlign = "center",
}: SectionDescriptionProps) => {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    return (
      <StyledSectionDescription className={className} $textAlign={textAlign}>
        {children}
      </StyledSectionDescription>
    );
  }

  return (
    <MotionDescription
      className={className}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      $textAlign={textAlign}
    >
      {children}
    </MotionDescription>
  );
};

export default SectionDescription;
