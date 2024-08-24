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
const MotionStyledWrapper = motion(StyledWrapper);

const Wrapper = (props: Props) => {
  const { heading, children } = props;

  return (
    <MotionStyledWrapper
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <MotionHeading>{heading}</MotionHeading>
      <div>{children}</div>
    </MotionStyledWrapper>
  );
};

export default Wrapper;
