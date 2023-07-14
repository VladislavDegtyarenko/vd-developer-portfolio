"use client";

import { useRef } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import styled from "styled-components";
import Image from "next/image";

import animateFromBottom from "../animations/animateFromBottom";
import { ReviewCardRef } from "../types";
import { P1, P2 } from "../ui/Text";
import OVasinAvatar from "@/assets/reviews/o-vasin.jpg";

const StyledReviewCard = styled.div`
  margin-top: 48px;
  padding: 32px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: var(--borderRadiusNormal);

  @media screen and (max-width: 991.98px) {
    padding: 24px;
  }

  .card {
    &__text {
      & > *:not(:first-child) {
        margin-top: 16px;
      }
      .bold-white {
        font-weight: 700;
        color: ${({ theme }) => theme.fg};
      }

      .bold-cyan {
        font-weight: 700;
        color: ${({ theme }) => theme.cyan};
      }
      * {
        @media screen and (max-width: 991.98px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
    &__sign {
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    &__avatar {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 16px;
      overflow: hidden;
      flex-shrink: 0;
    }
    &__name {
      color: ${({ theme }) => theme.cyan};
      font-weight: 700;
    }
    &__position {
      color: ${({ theme }) => theme.grey};
    }
  }
`;

const ReviewCard = () => {
  const ref = useRef<ReviewCardRef>(null);

  useIsomorphicLayoutEffect(() => {
    animateFromBottom(ref.current);
  }, []);

  return (
    <StyledReviewCard className="card" ref={ref}>
      <div className="card__text">
        <P1>
          I had the pleasure of working with <span className="bold-white">Vladislav</span>{" "}
          on a headless project that utilized <span className="bold-cyan">React</span> and{" "}
          <span className="bold-cyan">Salesforce Commerce Cloud</span>. His exceptional
          skills as a frontend developer were evident from the start, as he quickly
          learned and adapted to new technologies, workflow, and platforms. He
          consistently produced high-quality work, and his attention to detail was
          unparalleled.
        </P1>
        <P1>
          Not only was <span className="bold-white">Vladislav</span> a talented developer,
          but he was also an incredibly responsible and reliable team player. His
          dedication to the project was unwavering, and he always went above and beyond to
          ensure the success of the project.
        </P1>
        <P1>
          I am confident that <span className="bold-white">Vladislav</span> will make a
          valuable contribution to any frontend development role he takes on, and{" "}
          <span className="bold-cyan">recommend him</span> without hesitation.
        </P1>
      </div>
      <div className="card__sign">
        <div className="card__avatar">
          <Image src={OVasinAvatar.src} alt="reviewer's photo" fill />
        </div>
        <div>
          <P1 className="card__name">Oleksiy Vasin</P1>
          <P2 className="card__position">Frontend Development Lead, Astound Commerce</P2>
        </div>
      </div>
    </StyledReviewCard>
  );
};

export default ReviewCard;
