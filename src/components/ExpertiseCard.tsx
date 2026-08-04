"use client";

import styled from "styled-components";
import Image from "next/image";
import { P2 } from "./Text";
import { ExpertiseCardProps } from "@/types";

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 0;
  list-style-type: none;

  > * + * {
    margin-top: 1em;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &__image {
      position: relative;
      flex: 0 0 72px;
      width: 72px;
      height: 48px;
    }
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

const ExpertiseCard = ({ icon, title }: ExpertiseCardProps) => {
  const iconSources = (Array.isArray(icon) ? icon : [icon]).slice(0, 2);

  return (
    <StyledCard>
      <div className="icon">
        {iconSources.map((iconSource) => (
          <div className="icon__image" key={iconSource}>
            <Image
              src={`/assets/tech-icons/${iconSource}`}
              alt=""
              title={title}
              fill
              sizes="64px"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      <div className="text">
        <P2 className="text__title">{title}</P2>
      </div>
    </StyledCard>
  );
};

export default ExpertiseCard;
