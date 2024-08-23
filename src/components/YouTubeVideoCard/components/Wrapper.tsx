"use client";

import styled from "styled-components";
import { H4 } from "../../Text";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const StyledWrapper = styled.li`
  text-align: center;

  width: 100%;

  > div {
    margin-top: 0.5rem;
    position: relative;
    width: 100%;
    min-height: 20rem;
    > * + * {
      margin-top: 0.5rem;
    }
  }
`;

type Props = {
  heading: string;
  children: ReactNode;
};

const MotionHeading = motion(H4);

const Wrapper = (props: Props) => {
  const { heading, children } = props;

  return (
    <StyledWrapper>
      <MotionHeading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </MotionHeading>
      <div>{children}</div>
    </StyledWrapper>
  );
};

export default Wrapper;
