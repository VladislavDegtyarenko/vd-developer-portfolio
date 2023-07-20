// Core
import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionDescription from "app/ui/SectionDescription";
import Container from "../ui/Container";
import SkillCard from "../ui/SkillCard";
import ExperienceCard from "../ui/ExperienceCard";
import { H4 } from "app/ui/Text";

// Data
import skillsData from "../data/skills";
import experienceData from "../data/experience";

skillsData.map((group) => console.log(group));

// Styled
const StyledAbout = styled(Section)`
  .about {
    &__subsection {
      margin-top: 3em;
    }
  }

  .wrapper {
  }

  .group {
    display: grid;
    gap: 2em;
    margin-top: 3.75em;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
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
              {/* {skillsData.map(({ icon, title, description }, key) => (
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
              ))} */}

              {skillsData.map(({ groupTitle, groupCards }) => (
                <div className="group" key={groupTitle}>
                  <H4 key={groupTitle}>{groupTitle}</H4>

                  <div className="icons">
                    {groupCards.map(({ icon, title }) => (
                      <SkillCard key={icon} icon={icon} title={title} />
                    ))}
                  </div>
                </div>
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
