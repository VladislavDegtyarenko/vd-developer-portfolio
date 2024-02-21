// Core
import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import SectionDescription from "@/components/SectionDescription";
import Container from "@/components/Container";
import ExpertiseGroup from "@/components/ExpertiseGroup";
import ExpertiseCard from "@/components/ExpertiseCard";

// Data
import expertiseData, { coreTools, expertiseTable } from "@/data/expertise";
import { H4, P1, P2 } from "@/components/Text";

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

  .expertise-table {
    margin-top: 2.5rem;
    border-spacing: 1rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    ul {
      list-style-type: none;
    }
    th {
      vertical-align: top;
      text-align: left;
    }
    th,
    td {
      width: 50%;
    }
  }
`;

// Component
const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <Container>
          <div className="inner">
            <SectionTitle>Expertise</SectionTitle>
            <SectionDescription>
              Discover my arsenal of frontend tools & technologies — TypeScript,
              React, Redux, Next.js & more. From UI libraries like Material UI &
              shadcn/ui to custom animations using GSAP & Framer Motion, I
              deliver stunning user experiences.
            </SectionDescription>
            <div className="core-tools-wrapper">
              {coreTools.map((card) => (
                <ExpertiseCard key={card.title} {...card} />
              ))}
            </div>

            <H4>Full list of tools and technologies I use</H4>

            <table className="expertise-table">
              {Object.keys(expertiseTable).map((rowKey) => {
                const rowValue =
                  expertiseTable[rowKey as keyof typeof expertiseTable];

                return (
                  <tr key={rowKey}>
                    <th>
                      <P2>
                        <strong>{rowKey}</strong>
                      </P2>
                    </th>
                    {/* <td>{rowValue.join(", ")}</td> */}
                    <td>
                      <ul>
                        {rowValue.map((v) => (
                          <li key={v}>
                            <P2>{v}</P2>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </table>
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
