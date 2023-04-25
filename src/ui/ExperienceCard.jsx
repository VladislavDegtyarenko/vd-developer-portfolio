import styled from "styled-components";
import { H4, P1, P2 } from "./Text";

import { useRef, useLayoutEffect } from "react";
import animateFromBottom from "../animations/animateFromBottom";

const StyledExpCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
  padding: 24px;
  border-radius: var(--borderRadiusNormal);
  background-color: ${({ theme }) => theme.cardBg};

  .info {
    display: grid;
    gap: 8px;
  }

  .time-range {
    * {
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.cyan};
    }
  }
  .position {
    color: ${({ theme }) => theme.cyan};
  }
  .descr {
    color: ${({ theme }) => theme.grey};
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .icons {
    display: flex;
    *:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const Chip = styled(P2)`
  display: inline-block;
  border-radius: 16px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.grey};
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const ExperienceCard = ({
  experience: { timerange, position, company, chips, description, icons },
  animationOptions,
}) => {
  const ref = useRef();

  useLayoutEffect(() => {
    animateFromBottom(ref.current, animationOptions);
  }, []);

  return (
    <StyledExpCard ref={ref}>
      <div className="info">
        <div className="time-range">
          <P2>{timerange}</P2>
        </div>
        <H4 className="position">{position}</H4>
        <P1>{company}</P1>
        {chips && chips.length > 0 ? (
          <div className="chips">
            {chips.map((chip) => (
              <Chip key={`${company} ${chip}`}>{chip}</Chip>
            ))}
          </div>
        ) : null}
        <P2 className="descr">{description}</P2>
      </div>
      {icons && icons.length > 0 ? (
        <div className="icons">
          {icons.map(({ src, alt }) => (
            <Icon key={`${company} ${alt}`} src={src} alt={alt} title={alt} />
          ))}
        </div>
      ) : null}
    </StyledExpCard>
  );
};

export default ExperienceCard;
