"use client";

import styled from "styled-components";
import Image from "next/image";
import { H4, P2 } from "./Text";

import { useRef, useLayoutEffect } from "react";
import animateFromBottom from "../animations/animateFromBottom";
import { SkillCardProps, SkillCardRef } from "../types";

const StyledCard = styled.div`
  display: grid;
  align-self: start;
  justify-content: start;
  gap: 1em;
  padding: 8px 0;

  .icon {
    width: 48px;
    height: 48px;
    position: relative;
  }

  .text {
    &__descr {
      margin-top: 8px;
      color: ${({ theme }) => theme.grey};
    }
  }

  @media screen and (max-width: 767.98px) {
    grid-auto-flow: column;
    align-items: center;
    font-weight: 400;

    .text {
      &__title {
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
      }

      &__descr {
        display: none;
      }
    }
  }

  @media screen and (max-width: 575.98px) {
    justify-content: center;
    .text {
      display: none;
    }
  }
`;

const SkillCard = ({
  icon,
  alt,
  title,
  description,
  animationOptions,
}: SkillCardProps) => {
  const ref = useRef<SkillCardRef>(null);

  useLayoutEffect(() => {
    animateFromBottom(ref.current, animationOptions);
  }, [animationOptions]);

  return (
    <StyledCard ref={ref}>
      <div className="icon">
        <Image src={icon.src} alt={alt || ""} title={alt} fill />
      </div>

      <div className="text">
        <H4 className="text__title">{title}</H4>
        <P2 className="text__descr">{description}</P2>
      </div>
    </StyledCard>
  );
};

export default SkillCard;
