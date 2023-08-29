"use client";

import { useRef } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import styled from "styled-components";
import { P1 } from "./Text";

import animateFromBottom from "../animations/animateFromBottom";
import { SectionDescriptionProps, SectionDescriptionRef } from "../types";

const StyledSectionDescription = styled(P1)`
  text-align: center;
  padding: 0 80px;
  color: ${({ theme }) => theme.grey};
  margin-top: 40px;
  text-wrap: balance;

  @media screen and (max-width: 991.98px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

const SectionDescription = ({ children, animationOptions }: SectionDescriptionProps) => {
  const ref = useRef<SectionDescriptionRef>(null);

  useIsomorphicLayoutEffect(() => {
    animateFromBottom(ref.current, animationOptions);
  }, []);

  return <StyledSectionDescription ref={ref}>{children}</StyledSectionDescription>;
};

export default SectionDescription;
