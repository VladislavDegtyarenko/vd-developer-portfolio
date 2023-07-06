"use client";

import { useRef } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import styled from "styled-components";
import textByChars from "../functions/textByChars";
import { H3 } from "./Text";

import animateSectionTitle from "../animations/animateSectionTitle";
import { SectionSubtitleProps, SectionSubtitleRef } from "../types";

const StyledSectionSubtitle = styled(H3)`
  overflow: hidden;
  @media screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const SectionSubtitle = ({ children }: SectionSubtitleProps) => {
  const ref = useRef<SectionSubtitleRef>(null);
  const titleByChars = textByChars(children);

  const { animateTitle } = animateSectionTitle(ref);

  useIsomorphicLayoutEffect (() => {
    animateTitle("*", {}, { delay: 0.15 });
  }, []);

  return <StyledSectionSubtitle ref={ref}>{titleByChars}</StyledSectionSubtitle>;
};

export default SectionSubtitle;
