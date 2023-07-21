// Core
import { useRef, memo } from "react";
import styled from "styled-components";
import useIsomorphicLayoutEffect from "app/hooks/useIsomorphicLayoutEffect";
import animateFromBottom from "app/animations/animateFromBottom";

// UI
import { H4 } from "app/ui/Text";
import ExpertiseCard from "app/ui/ExpertiseCard";
import { ExpertiseGroup } from "app/types";

const StyledGroup = styled.div`
  display: grid;
  gap: 2em;
  margin-top: 3.75em;
  > h4 {
    text-align: center;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    /* max-width: 992px; */
    margin: 0 auto;
    gap: 1em;
    @media (max-width: 991.98px) {
      justify-content: center;
    }
  }
`;

const ExpertiseGroup = ({ groupTitle, groupCards }: ExpertiseGroup) => {
  const groupTitleRef = useRef<HTMLHeadingElement>(null);
  const groupIconsRef = useRef<HTMLUListElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!groupTitleRef.current || !groupIconsRef.current) return;

    animateFromBottom(groupTitleRef.current);

    animateFromBottom([...new Set(groupIconsRef.current.children)], { stagger: 0.05 });
  }, []);

  return (
    <StyledGroup>
      <H4 key={groupTitle} ref={groupTitleRef}>
        {groupTitle}
      </H4>

      <ul className="icons" ref={groupIconsRef}>
        {groupCards.map(({ icon, title }, key) => (
          <ExpertiseCard
            key={icon}
            icon={icon}
            title={title}
            alt={title}
            animationOptions={{
              delay: 0.15 * (key % 3),
            }}
          />
        ))}
      </ul>
    </StyledGroup>
  );
};

export default ExpertiseGroup;
