import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import Container from "../ui/Container";
import SkillCard from "../ui/SkillCard";
import ExperienceCard from "../ui/ExperienceCard";

// Data
import skillsData from "../data/skills";
import experienceData from "../data/experience";

// Styled
const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 48px;
    }
    &__skills-wrapper {
      margin-top: 42px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__experience-wrapper {
      margin-top: 42px;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

// Component
const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <Container>
          <SectionTitle>About</SectionTitle>
          <div className="about__subsection">
            <SectionSubtitle>Skills</SectionSubtitle>

            <div className="about__skills-wrapper">
              {skillsData.map(({ icon, title, description }, key) => (
                <SkillCard
                  icon={icon}
                  alt={title}
                  title={title}
                  description={description}
                  key={title}
                  animationOptions={{
                    delay: 0.15 * (key % 3),
                  }}
                />
              ))}
            </div>
          </div>

          <div className="about__subsection">
            <SectionSubtitle>Working Experience</SectionSubtitle>

            <div className="about__experience-wrapper">
              {experienceData.map((experience) => (
                <ExperienceCard
                  // prettier-ignore
                  key={experience.company}
                  {...experience}
                />
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
