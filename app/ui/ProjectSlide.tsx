"use client";

import Image from "next/image";
import styled from "styled-components";
import { ProjectSlideProps } from "../types";
import { H4, P1 } from "./../ui/Text";

const StyledSlide = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    text-align: center;
  }

  .slide {
    &__img {
      --slide-size: 320px;
      width: var(--slide-size);
      height: var(--slide-size);
      margin-right: 16px;
      flex-shrink: 0;
      border-radius: var(--borderRadiusNormal);
      overflow: hidden;
      box-shadow: 0 0 8px #35353533;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: 991.98px) {
        --slide-size: 240px;
        margin-bottom: 16px;
        margin-right: 0;
      }
    }
    &__descr {
      margin-top: 16px;
      color: ${({ theme }) => theme.grey};
    }
    &__buttons {
      margin-top: 16px;
      display: flex;
      @media screen and (max-width: 991.98px) {
        justify-content: center;
      }
    }
    &__btn {
      text-decoration: none;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: var(--borderRadiusNormal);
      color: ${({ theme }) => theme.grey};
      cursor: pointer;
      transition: background-color var(--duration), color var(--duration);
      border: none;
      &:hover {
        color: #dddcdc;
      }
      &-primary {
        background-color: ${({ theme }) => theme.cyan};
        color: ${({ theme }) => theme.fg};
        &:hover {
          background-color: #178695;
          color: ${({ theme }) => theme.fg};
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
        <Image src={img.src} sizes="(max-width: 991.98px) 240px, 320px" alt="" fill />
      </div>
      <div className="slide__main">
        <H4 as="h3">{title}</H4>
        <P1 className="slide__descr">{description}</P1>
        <div className="slide__buttons">
          {previewLink && previewLink.length > 0 ? (
            <P1
              as="button"
              onClick={() => previewProject(previewLink)}
              className="slide__btn slide__btn-primary"
            >
              Preview
            </P1>
          ) : null}

          {codeLink && codeLink.length > 0 ? (
            <P1 as="a" href={codeLink} target="_blank" className="slide__btn">
              Code
            </P1>
          ) : null}
        </div>
      </div>
    </StyledSlide>
  );
};

export default ProjectSlide;
