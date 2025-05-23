"use client";

// Core
import { useRef, memo, useState } from "react";
import styled from "styled-components";

// UI
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import SectionDescription from "@/components/SectionDescription";
import Container from "@/components/layout/Container";
// import ExpertiseGroup from "@/components/ExpertiseGroup";
import ExpertiseCard from "@/components/ExpertiseCard";
import { H4, P1, P2 } from "@/components/Text";

// Data
import data from "@/data/about.json";

// Utils
import { isObject } from "@/utils/isObject";
import ExpertiseTable from "@/components/ExpertiseTable";

// Styled
const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 3em;
    }
  }

  .core-tools-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
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
const About = () => {
  const {
    title,
    subtitle,
    secondSubtitle,
    coreTools,
    expertiseTable,
    expertiseTableTitle,
    postScriptum,
  } = data;

  return (
    <>
      <StyledAbout id="about">
        <Container>
          <div className="inner">
            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>{subtitle}</SectionDescription>
            <SectionDescription>{secondSubtitle}</SectionDescription>

            {coreTools && Array.isArray(coreTools) && coreTools.length > 0 ? (
              <div className="core-tools-wrapper">
                {coreTools.map((card) => (
                  <ExpertiseCard key={card.title} {...card} />
                ))}
              </div>
            ) : null}

            <ExpertiseTable
              title={expertiseTableTitle}
              table={expertiseTable}
              isShowMoreDisabled
            />

            <P2 className="postScriptum">{postScriptum}</P2>
          </div>
        </Container>
      </StyledAbout>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(About);
