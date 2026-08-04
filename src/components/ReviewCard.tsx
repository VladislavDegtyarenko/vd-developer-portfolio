"use client";

import { useRef } from "react";
import {
  useIsomorphicLayoutEffect,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

import { Review } from "../types";
import { P2 } from "@/components/Text";
import UserIcon from "@/components/UserIcon";

type ReviewCardProps = Review & {
  isLatest?: boolean;
};

const StyledReviewCard = styled.li`
  padding: 32px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: var(--borderRadiusNormal);
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

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
        font-size: 16px;
        line-height: 24px;
      }
    }
    &__sign {
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    &__photo {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 16px;
      overflow: hidden;
      flex-shrink: 0;
      svg {
        color: ${({ theme }) => theme.grey};
      }
    }
    &__name {
      color: ${({ theme }) => theme.cyan};
      font-weight: 700;
    }
    &__author {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    &__badge {
      padding: 2px 8px;
      border: 1px solid ${({ theme }) => theme.cyan};
      border-radius: 999px;
      background: color-mix(
        in srgb,
        ${({ theme }) => theme.cyan} 12%,
        transparent
      );
      color: ${({ theme }) => theme.fg};
      font-size: 10px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    &__position {
      color: ${({ theme }) => theme.grey};
      font-size: 14px;
    }
  }
`;

const ReviewCard = ({
  reviewText,
  name,
  position,
  company,
  photo,
  isLatest = false,
}: ReviewCardProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true });
  const isReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (isReducedMotion) return;

    const cardElement = ref.current;

    if (!cardElement) return;

    animate(cardElement, { y: 50, opacity: 0 }, { duration: 0 });

    if (!inView) return;

    animate(cardElement, { y: 0, opacity: 1 }, { duration: 0.7 });
  }, [ref, inView, isReducedMotion]);

  return (
    <StyledReviewCard className="card" ref={ref}>
      <div className="card__text">{reviewText}</div>
      <div className="card__sign">
        <div className="card__photo">
          {photo ? (
            <Image
              src={`/assets/reviews/${photo}`}
              alt={`Photo of ${name}`}
              fill
              sizes="72px"
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <div className="card__author">
            <P2 className="card__name">{name}</P2>
            {isLatest ? (
              <span className="card__badge" aria-label="Latest review">
                Latest
              </span>
            ) : null}
          </div>
          <P2 className="card__position">
            {[position, company].filter(Boolean).join(", ")}
          </P2>
        </div>
      </div>
    </StyledReviewCard>
  );
};

export default ReviewCard;
