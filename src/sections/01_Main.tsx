"use client";

import { memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import Container from "@/components/Container";
import { H1, H2, P1 } from "@/components/Text";
import ScrollDownIcon from "public/assets/Icons/Scroll Down";

import bg from "public/assets/bg.jpg";
import photo from "public/photo2.jpg";

const StyledMain = styled(Section)`
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: transparent;
  z-index: 1;

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

    &__inner {
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
    }

    &__photo {
      position: relative;
      margin-right: calc(20px + var(--strokeWidth) * 2);
      margin-top: 10px;
      --photo-size: 280px;
      @media screen and (max-width: 991.98px) {
        --photo-size: 240px;
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
        filter: saturate(0.8);
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
    margin-top: 16px;
    color: ${({ theme }) => theme.grey};
    span {
      font-weight: 700;
    }
  }
`;

const Main = () => {
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
            <div className="main__inner">
              <div className="main__info">
                <H1>Hello,</H1>
                <H2>
                  I am <span className="accent">Vladyslav</span>, <br />
                  Frontend Developer
                </H2>
                <P1 className="description">
                  Based in <span>Kyiv, Ukraine</span>, I&apos;m passionate about
                  creating engaging, digital experiences on the web.
                </P1>
              </div>
              <div className="main__photo">
                <div className="main__photo_inner">
                  <Image
                    src={photo}
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
