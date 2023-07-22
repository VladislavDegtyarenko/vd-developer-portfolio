// Core
import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import Container from "../ui/Container";
import ExpertiseCard from "../ui/ExpertiseCard";
import ExperienceCard from "../ui/ExperienceCard";
import { H4 } from "app/ui/Text";

// Data
import skillsData from "../data/expertise";
import experienceData from "../data/experience";

// Styled
const StyledExperience = styled(Section)`
  .experience__inner {
    > * + * {
      margin-top: 32px;
    }
  }
  .subtitle {
    margin-top: 3em;
    text-align: center;
  }
  .experience__wrapper {
    margin-top: 42px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 991.98px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Experience = () => {
  return (
    <>
      <StyledExperience>
        <Container>
          <div className="experience__inner">
            <SectionTitle>Working Experience</SectionTitle>

            <div className="experience__wrapper">
              {experienceData.slice(0, 2).map((experience) => (
                <ExperienceCard
                  // prettier-ignore
                  key={experience.company}
                  {...experience}
                />
              ))}
            </div>

            <div className="subtitle">
              <H4>Non-related experience</H4>
            </div>

            <div className="experience__wrapper">
              {experienceData.slice(2).map((experience) => (
                <ExperienceCard
                  // prettier-ignore
                  key={experience.company}
                  secondary
                  {...experience}
                />
              ))}
            </div>
          </div>
        </Container>
      </StyledExperience>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Experience;
