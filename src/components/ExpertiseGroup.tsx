// Core
import { useRef, memo } from "react";
import styled from "styled-components";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import animateFromBottom from "@/animations/animateFromBottom";

// UI
import { H4 } from "@/components/Text";
import ExpertiseCard from "@/components/ExpertiseCard";
import { ExpertiseGroup } from "@/types";

const StyledGroup = styled.div`
  display: grid;
  gap: 2em;
  margin-top: 3.75em;
  max-width: 60em;
  margin-left: auto;
  margin-right: auto;
  .expGroupTitle {
    text-align: center;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    gap: 1em;
    justify-content: center;
  }
`;

const ExpertiseGroup = ({ groupTitle, groupCards }: ExpertiseGroup) => {
  const groupTitleRef = useRef<HTMLHeadingElement>(null);
  const groupIconsRef = useRef<HTMLUListElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!groupTitleRef.current || !groupIconsRef.current) return;

    animateFromBottom(groupTitleRef.current);

    animateFromBottom([...new Set(groupIconsRef.current.children)], {
      stagger: 0.05,
    });
  }, []);

  return (
    <StyledGroup>
      <H4
        key={groupTitle}
        as="h3"
        className="expGroupTitle"
        ref={groupTitleRef}
      >
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
