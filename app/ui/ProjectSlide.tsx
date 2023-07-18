"use client";

import Image from "next/image";
import styled from "styled-components";
import { ProjectSlideProps } from "../types";
import { H4, P1 } from "./../ui/Text";

import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

const StyledSlide = styled.li`
  aspect-ratio: 16/9;
  display: flex;
  align-items: end;
  position: relative;
  border-radius: var(--borderRadiusNormal);
  overflow: hidden;
  min-height: 240px;
  width: 100%;
  .slide {
    &__img {
      --slide-size: 100%;
      width: var(--slide-size);
      height: var(--slide-size);
      flex-shrink: 0;
      overflow: hidden;
      box-shadow: 0 0 8px #35353533;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 1;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
      }
    }
    &__main {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      gap: 1em;
      padding: 24px;
      color: ${({ theme }) => theme.white};

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: calc(100% + 4em);
        pointer-events: none;
        user-select: none;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          ${({ theme }) => theme.overlay} 100%
        );
      }
      > * {
        position: relative;
      }
    }
    &__descr {
      margin-top: 16px;
      color: ${({ theme }) => theme.grey};
    }
    &__buttons {
      display: flex;
      @media screen and (max-width: 991.98px) {
        justify-content: center;
      }
      > * + * {
        margin-left: 0.5em;
      }
    }
    &__btn {
      text-decoration: none;
      font-weight: 700;
      padding: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--borderRadiusNormal);
      color: inherit;
      cursor: pointer;
      transition: background-color var(--duration), color var(--duration);
      border: none;
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
  }
`;

const ProjectSlide = ({
  img,
  title,
  description,
  previewLink,
  codeLink,
  previewProject,
}: ProjectSlideProps) => {
  return (
    <StyledSlide>
      <div className="slide__img">
        <Image
          src={img}
          sizes="(max-width: 991.98px) 511px, (max-width: 991.98px) 720px, 645px"
          quality={80}
          loading="eager"
          alt=""
          placeholder="blur"
          fill
        />
      </div>
      <div className="slide__main">
        <H4 as="h3">{title}</H4>
        {/* <P1 className="slide__descr">{description}</P1> */}
        <div className="slide__buttons">
          {codeLink && codeLink.length > 0 ? (
            <P1 as="a" href={codeLink} target="_blank" className="slide__btn">
              <BiCodeAlt />
            </P1>
          ) : null}

          {previewLink && previewLink.length > 0 ? (
            <P1
              as="button"
              onClick={() => previewProject(previewLink)}
              className="slide__btn slide__btn-primary"
            >
              <BiLinkExternal />
            </P1>
          ) : null}
        </div>
      </div>
    </StyledSlide>
  );
};

export default ProjectSlide;
