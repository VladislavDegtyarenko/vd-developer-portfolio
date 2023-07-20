"use client";

import styled from "styled-components";
import Image from "next/image";
import { H4, P2 } from "./Text";

import { useRef } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import animateFromBottom from "../animations/animateFromBottom";
import { SkillCardProps, SkillCardRef } from "../types";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 0.5em 0;
  width: 140px;

  .icon {
    width: 48px;
    height: 48px;
    position: relative;
  }

  .text {
    text-align: center;
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
`;

const SkillCard = ({
  icon,
  alt,
  title,
  description,
  animationOptions,
}: SkillCardProps) => {
  const ref = useRef<SkillCardRef>(null);

  useIsomorphicLayoutEffect(() => {
    animateFromBottom(ref.current, animationOptions);
  }, [animationOptions]);

  return (
    <StyledCard ref={ref}>
      <div className="icon">
        <Image src={`/assets/Icons/${icon}.svg`} alt={alt || ""} title={alt} fill />
      </div>

      <div className="text">
        <P2 className="text__title">{title}</P2>
        {/* <P2 className="text__descr">{description}</P2> */}
      </div>
    </StyledCard>
  );
};

export default SkillCard;
