// Core
import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "app/ui/SectionDescription";
import Container from "../ui/Container";
import ExpertiseGroup from "app/components/ExpertiseGroup";
import { H4 } from "app/ui/Text";

// Data
import expertiseData from "../data/expertise";

// Styled
const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 3em;
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
              Discover my arsenal of frontend tools & technologies—JavaScript, React,
              Redux, Next.js & more. From powerful UI libraries like Material UI &
              Tailwind to custom animations using GSAP & Framer Motion, I deliver stunning
              user experiences.
            </SectionDescription>
            <div className="wrapper">
              {expertiseData.map((group) => (
                <ExpertiseGroup key={group.groupTitle} {...group} />
              ))}
            </div>
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
