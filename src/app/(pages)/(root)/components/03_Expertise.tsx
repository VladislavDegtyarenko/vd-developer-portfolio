"use client";

// Core
import { memo } from "react";
import styled from "styled-components";

// UI
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import SectionDescription from "@/components/SectionDescription";
import Container from "@/components/layout/Container";
import ExpertiseCard from "@/components/ExpertiseCard";

// Data
import data from "@/data/expertise.json";

// Styled
const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 3em;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .core-tools-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2.5rem;
  }

  h4 {
    margin-top: 4rem;
    text-align: center;
  }

  .postScriptum {
    margin-top: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.grey};
    font-style: italic;
  }
`;

// Component
const Expertise = () => {
  const { title, description, coreTools } = data;

  return (
    <>
      <StyledAbout id="expertise">
        <Container>
          <div className="inner">
            <SectionTitle>{title}</SectionTitle>

            {description.map((p, i) => (
              <SectionDescription key={i}>{p}</SectionDescription>
            ))}

            {coreTools && Array.isArray(coreTools) && coreTools.length > 0 ? (
              <div className="core-tools-wrapper">
                {coreTools.map((card) => (
                  <ExpertiseCard key={card.title} {...card} />
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </StyledAbout>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(Expertise);
