"use client";

import { memo, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import Container from "@/components/layout/Container";
import { H1, H2, P1 } from "@/components/Text";
import ScrollDownIcon from "@/components/icons/ScrollDown";

import bg from "public/assets/bg.jpg";
import { splitStringUsingRegex } from "@/functions/splitStringUsingRegex";
import {
  animate,
  stagger,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "framer-motion";
import useViewportWidth from "@/hooks/useViewportWidth";

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

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.2;
    pointer-events: none;
    user-select: none;
    img {
      object-fit: cover;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        transparent 70%,
        ${({ theme }) => theme.bg} 100%
      );
    }
  }

  .main {
    position: relative;
    padding: 6em 0;

    &__content {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 991.98px) {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
      }
    }

    &__info {
      margin-right: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      @media screen and (max-width: 991.98px) {
        align-items: center;
      }
    }

    &__photo {
      position: relative;
      margin-right: calc(20px + var(--strokeWidth) * 2);
      margin-top: 10px;
      --photo-size: 210px;
      @media screen and (max-width: 991.98px) {
        --photo-size: 180px;
        margin-bottom: 32px;
      }

      &_inner {
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
        flex-shrink: 0;
        position: relative;
        background-color: ${({ theme }) => theme.bg};
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &::before {
        content: "";
        display: block;
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
        border-color: ${({ theme }) => theme.grey};
        position: absolute;
        top: calc(var(--photo-size) / 12);
        left: calc(var(--photo-size) / 12);
        box-sizing: border-box;
      }
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

  .description {
    color: ${({ theme }) => theme.grey};
    span {
      font-weight: 700;
    }
  }

  .cta {
    text-decoration: none;
    font-weight: 700;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadiusNormal);
    color: inherit;
    cursor: pointer;
    border: none;
    transition: background-color var(--duration), color var(--duration);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover {
      color: #dddcdc;
    }

    &-primary {
      background-color: ${({ theme }) => theme.cyan};
      color: inherit;

      &:hover {
        background-color: ${({ theme }) => theme.cyanHover};
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
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useViewportWidth();
  const isReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (isReducedMotion) {
      return undefined;
    }

    const contentWrapper = contentRef.current;

    if (!contentWrapper) return;

    const titleSpans = contentWrapper.querySelectorAll(".title span");
    const subtitleSpans = contentWrapper.querySelectorAll(".subtitle span");
    const description = contentWrapper.querySelector(".description")!;
    const photoWrapper = contentWrapper.querySelector(".main__photo")!;
    const ctaBtn = contentWrapper.querySelector(".cta")!;

    const elementsToAnimate = [
      ...Array.from(titleSpans),
      ...Array.from(subtitleSpans),
    ];

    animate(
      elementsToAnimate,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        delay: stagger(0.5),
      }
    );

    animate(
      description,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.7,
        delay: 1.5,
      }
    );

    animate(
      photoWrapper,
      {
        opacity: [0, 1],
      },

      { duration: 1, delay: width <= 991.98 ? 0 : 2 }
    );

    animate(
      ctaBtn,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.7,
        delay: 2,
      }
    );
  }, [contentRef, isReducedMotion]);

  return (
    <>
      <StyledMain id="home">
        <div className="bg">
          <Image
            src={bg}
            alt=""
            placeholder="blur"
            quality="50"
            fill
            priority
          />
        </div>
        <div className="main">
          <Container>
            <div className="main__content" ref={contentRef}>
              <div className="main__info">
                <H2 as="h1" className="subtitle">
                  <span className="accent">Frontend Developer</span>{" "}
                  <span>who cares about</span> <span>UX and performance</span>
                </H2>
                <P1 className="description">
                  I build responsive, fast-loading websites using React, Next.js
                  and tasteful motion design.
                </P1>
                <a className="cta cta-primary" href="#contact">
                  Get In Touch
                </a>
              </div>
              <div className="main__photo">
                <div className="main__photo_inner">
                  <Image
                    src="/IMG_9693.JPG"
                    sizes="(max-width: 991.98px) 464px, 624px"
                    alt="Photo of Vladyslav Dihtiarneko, frontend developer"
                    fill
                    priority
                  />
                </div>
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
