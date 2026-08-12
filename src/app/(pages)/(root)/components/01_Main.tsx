"use client";

import { memo, useRef } from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import Container from "@/components/layout/Container";
import { H1, H2, P1 } from "@/components/Text";
import ScrollDownIcon from "@/components/icons/ScrollDown";

import {
  animate,
  stagger,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "framer-motion";

import data from "@/data/main.json";
import HeroBackground from "@/components/HeroBackground";

const StyledMain = styled(Section)`
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: transparent;
  z-index: 1;
  white-space: pre-wrap;

  .title {
    white-space: pre-wrap;

    span {
      display: inline-flex;
    }
  }

  .main {
    position: relative;
    padding: 6em 0;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      text-align: center;
      width: 50rem;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    &__scroll-btn {
      display: block;
      margin: 64px auto 0;
      padding: 0;
      position: absolute;
      left: calc(50% - 1em);
      bottom: 40px;
      width: 2em;
      height: 2em;
      font-size: 1em;
      color: ${({ theme }) => theme.cyan};
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: transform var(--duration);

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }

      img,
      svg {
        width: 100%;
        height: 100%;
      }
      &:hover {
        transform: translateY(0.125em);
      }
    }
  }

  .accent {
    color: ${({ theme }) => theme.cyan};
  }

  .cta-container {
    display: flex;
    gap: 1rem;
  }

  .cta {
    text-decoration: none;
    font-weight: 700;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadiusNormal);
    color:;
    cursor: pointer;
    border: none;
    transition:
      background-color var(--duration),
      color var(--duration);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover {
      color: #dddcdc;
    }

    &-primary {
      background-color: ${({ theme }) => theme.cyan};
      color: ${({ theme }) => theme.white};

      &:hover {
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.cyanHover};
      }
    }

    &-secondary {
      color: ${({ theme }) => theme.fg};
      background-color: ${({ theme }) => theme.cardBg};

      &:hover {
        color: ${({ theme }) => theme.fg};
        background-color: ${({ theme }) => theme.cardBgHover};
      }
    }

    p {
      font-weight: 700;
    }

    &-disabled {
      color: #686868;
    }
  }
`;

const Main = () => {
  const { title, btnPrimaryText, btnSecondaryText } = data;

  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (isReducedMotion) {
      return undefined;
    }

    const contentWrapper = contentRef.current;
    const titleElement = titleRef.current;

    if (!contentWrapper) return;
    if (!titleElement) return;

    const titleSpans = titleElement.querySelectorAll(".title span");
    const ctaBtns = contentWrapper.querySelectorAll(".cta")!;

    const elementsToAnimate = [
      ...Array.from(titleSpans),
      ...Array.from(ctaBtns),
    ];

    animate(
      elementsToAnimate,
      {
        opacity: [0, 1],
        y: [25, 0],
      },
      {
        duration: 0.7,
        delay: stagger(0.3),
      },
    );
  }, [contentRef, isReducedMotion]);

  return (
    <>
      <StyledMain id="home">
        <HeroBackground />

        <div className="main">
          <Container>
            <div className="main__content" ref={contentRef}>
              <H2 as="h1" className="title" ref={titleRef}>
                {title.split(" ").map((word, index) => (
                  <span
                    {...(index < 2 ? { className: "accent" } : {})}
                    key={index}
                  >
                    {word}
                    {index !== title.length ? " " : null}
                  </span>
                ))}
              </H2>
              <div className="cta-container">
                <a className="cta cta-secondary" href="#about">
                  {btnPrimaryText}
                </a>
                <a className="cta cta-primary" href="#contact">
                  {btnSecondaryText}
                </a>
              </div>
            </div>
          </Container>
        </div>
        <a
          href="#about"
          className="main__scroll-btn"
          aria-label="scroll down"
          title="scroll down"
        >
          <ScrollDownIcon />
        </a>
      </StyledMain>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(Main);
