import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { H3 } from "./../ui/Text";
import SkillCard from "../ui/SkillCard";
import ExperienceCard from "../ui/ExperienceCard";

import { Fade } from "react-awesome-reveal";

import skillsData from "../data/skills";
import experienceData from "../data/experience";

const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 48px;
      &_title {
        @media screen and (max-width: 991.98px) {
          text-align: center;
        }
      }
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

const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <Container>
          <SectionTitle>About</SectionTitle>
          <Fade triggerOnce cascade damping="1">
            <div className="about__subsection">
              <H3 className="about__subsection_title">Skills</H3>

              <div className="about__skills-wrapper">
                <Fade triggerOnce cascade damping="0.1">
                  {skillsData.map(({ icon, title, description }) => (
                    <SkillCard
                      icon={icon}
                      alt={title}
                      title={title}
                      description={description}
                      key={title}
                    />
                  ))}
                </Fade>
              </div>
            </div>

            <div className="about__subsection">
              <H3 className="about__subsection_title">Working Experience</H3>
              <div className="about__experience-wrapper">
                <Fade triggerOnce cascade damping="0.1">
                  {experienceData.map((experience) => (
                    <ExperienceCard
                      // prettier-ignore
                      key={experience.company}
                      experience={experience}
                    />
                  ))}
                </Fade>
              </div>
            </div>
          </Fade>
        </Container>
      </StyledAbout>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default About;
