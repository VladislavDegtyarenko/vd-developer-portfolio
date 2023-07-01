import { useRef, useLayoutEffect } from "react";

import styled from "styled-components";
import { P1 } from "./Text";

import animateFromBottom from "../animations/animateFromBottom";
import { SectionDescriptionProps, SectionDescriptionRef } from "../types";

const StyledSectionDescription = styled(P1)`
  text-align: center;
  padding: 0 80px;
  color: ${({ theme }) => theme.grey};
  margin-top: 40px;

  @media screen and (max-width: 991.98px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

const SectionDescription = ({ children, animationOptions }: SectionDescriptionProps) => {
  const ref = useRef<SectionDescriptionRef>(null);

  useLayoutEffect(() => {
    animateFromBottom(ref.current, animationOptions);
  }, []);

  return <StyledSectionDescription ref={ref}>{children}</StyledSectionDescription>;
};

export default SectionDescription;
