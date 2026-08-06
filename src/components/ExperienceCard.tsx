"use client";

// Core
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

// Components
import { H4, P1, P2 } from "./Text";

// TS
import { ExperienceCardProps, StyledExpCardProps } from "../types";
import { PropsWithChildren } from "react";

const StyledExpCard = styled.div<StyledExpCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-left: ${({ $secondary }) => ($secondary ? "0" : "24px")};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    width: 1px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.cyan};
  }

  &.secondary {
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }

  .info {
    display: grid;
    gap: 0.5em;
  }

  .time-range {
    * {
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.cyan};
    }
  }
  .company {
    color: ${({ theme }) => theme.cyan};
  }
  .descr {
    margin-top: 1em;
    color: ${({ theme }) => theme.grey};
    > * + * {
      margin-top: 1em;
    }
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;

    > * {
      background-color: ${({ theme }) => theme.cardBg};
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    margin-top: 1rem;
  }
`;

const MotionStyledExperienceCard = motion.create(StyledExpCard);

const Chip = styled(P2)`
  display: inline-block;
  border-radius: 2em;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.grey};
`;

const Icon = styled.img`
  min-width: 2rem;
  max-width: 6rem;
  height: 2rem;
  object-fit: contain;
`;

const Wrapper = ({
  children,
  secondary,
}: PropsWithChildren<{ secondary?: boolean }>) => {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    return <StyledExpCard $secondary={secondary}>{children}</StyledExpCard>;
  }

  return (
    <MotionStyledExperienceCard
      $secondary={secondary}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </MotionStyledExperienceCard>
  );
};

const ExperienceCard = ({
  timerange,
  position,
  company,
  chips,
  description,
  icons,
  secondary,
}: ExperienceCardProps) => {
  return (
    <Wrapper secondary={secondary}>
      <div className="info">
        <div className="time-range">
          <P2>{timerange}</P2>
        </div>
        <H4 as="h3" className="company">
          {company}
        </H4>
        <P1>{position}</P1>
        {chips && chips.length > 0 ? (
          <div className="chips">
            {chips.map((chip) => (
              <Chip key={`${company} ${chip}`}>{chip}</Chip>
            ))}
          </div>
        ) : null}
        {description && (
          <div className="descr">
            {description
              .split(`\n`)
              .filter(Boolean)
              .map((p) => (
                <P2 key={p}>{p}</P2>
              ))}
          </div>
        )}
      </div>
      {icons && icons.length > 0 ? (
        <div className="icons">
          {icons.map(({ src, alt }) => (
            <Icon
              key={`${company} ${alt}`}
              src={`/assets/tech-icons/${src}`}
              alt={alt}
              title={alt}
            />
          ))}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default ExperienceCard;
