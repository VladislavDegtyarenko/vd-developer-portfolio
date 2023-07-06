"use client";

import styled from "styled-components";
import { H2 } from "./Text";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import textByChars from "./../functions/textByChars";
import animateSectionTitle from "../animations/animateSectionTitle";
import { SectionTitleProps, SectionTitleRef } from "../types";

const StyledSectionTitle = styled(H2)`
  display: flex;
  justify-content: center;

  position: relative;
  h2 {
    font-size: 1em;
    line-height: 1;
    padding-bottom: 14px;
    position: relative;
    overflow: hidden;
  }
  .line {
    background-color: ${({ theme }) => theme.cyan};
    height: var(--strokeWidth);
    width: calc(100% - 32px);
    left: 16px;
    position: relative;
    display: block;
  }
`;

const SectionTitle = ({ children, id }: SectionTitleProps) => {
  const ref = useRef<SectionTitleRef>(null);
  const titleByChars = textByChars(children);

  const { animateTitle, animateLine } = animateSectionTitle(ref);

  useIsomorphicLayoutEffect(() => {
    animateTitle("h2 > *");
    animateLine();
  }, []);

  return (
    <StyledSectionTitle id={id} ref={ref} as="div">
      <div>
        <h2>{titleByChars}</h2>
        <div className="line"></div>
      </div>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
