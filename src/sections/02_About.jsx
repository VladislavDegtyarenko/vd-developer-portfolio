import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { H3 } from "./../ui/Text";
import SkillCard from "../ui/SkillCard";
import ExperienceCard from "../ui/ExperienceCard";

import HTMLIcon from "./../assets/Icons/HTML.svg";
import CSSIcon from "./../assets/Icons/CSS.svg";
import JSIcon from "./../assets/Icons/JS.svg";
import ReactIcon from "./../assets/Icons/React.svg";
import NextIcon from "./../assets/Icons/Next.svg";
import TSIcon from "./../assets/Icons/TS.svg";
import JestIcon from "./../assets/Icons/Jest.svg";
import GitIcon from "./../assets/Icons/Git.svg";
import FigmaIcon from "./../assets/Icons/Figma.svg";
import SalesforceIcon from "./../assets/Icons/Salesforce.svg";
import TailwindIcon from "./../assets/Icons/Tailwind.svg";
import BootstrapIcon from "./../assets/Icons/Bootstrap.svg";

import { Fade } from "react-awesome-reveal";

const skillsData = [
  {
    icon: HTMLIcon,
    title: "HTML",
    description:
      "Expert HTML skills, with a focus on semantic coding, accessibility and W3C validation.",
  },
  {
    icon: CSSIcon,
    title: "CSS",
    description:
      "Highly skilled in CSS, Sass, Bootstrap, and Tailwind for exceptional designs.",
  },
  {
    icon: JSIcon,
    title: "Javascript",
    description:
      "Proficient in JavaScript, familiar with object/array methods, and APIs.",
  },
  {
    icon: ReactIcon,
    title: "React",
    description:
      "Skilled in React, delivering fast, dynamic, and interactive user interfaces.",
  },
  {
    icon: NextIcon,
    title: "Next.js",
    description:
      "Experienced in Next.js, delivering fast and scalable websites, including server-side rendering.",
  },
  {
    icon: TSIcon,
    title: "Typescript",
    description:
      "Expertise in TypeScript, providing scalable and maintainable code for complex projects.",
  },
  {
    icon: JestIcon,
    title: "Jest",
    description: "Competent in Unit Testing for reliable and efficient testing.",
  },
  {
    icon: GitIcon,
    title: "Git",
    description:
      "Familiar with Git, able to effectively manage code changes and collaborate with teams.",
  },
  {
    icon: FigmaIcon,
    title: "Graphic Design",
    description:
      "Knowledgeable in graphic design using Figma, Photoshop, and Illustrator to bring ideas to life.",
  },
];

const experienceData = [
  {
    timerange: "Oct 21 — Feb 23",
    position: "Frontend Developer",
    company: "Astound Commerce",
    chips: ["Ukraine", "Remote", "Full-time"],
    description:
      "At Astound Commerce, I collaborated with experienced managers and developers on a large project, utilizing technologies such as TypeScript, SFCC, React, and Next.js, and got competence in unit testing.",
    icons: [TSIcon, ReactIcon, NextIcon, SalesforceIcon, TailwindIcon, JestIcon],
  },
  {
    timerange: "nov 20 — sep 21",
    position: "Frontend Developer",
    company: "While Web Production",
    chips: ["Ukraine", "Remote", "Part-time"],
    description:
      "Provided top-notch frontend development in a range of projects, from landing pages to multi-page websites, resulting in happy clients.",
    icons: [HTMLIcon, CSSIcon, JSIcon, BootstrapIcon],
  },
  {
    timerange: "feb 20 — sep 21",
    position: "Music Producer",
    company: "Fiverr",
    chips: ["Worldwide", "Remote", "Project-based"],
    description:
      "Worked as a freelancer providing professional Music Production, Mixing and Mastering Services to independent musicians, video creators, and businesses globally.",
  },
  {
    timerange: "Feb 16 — Feb 20",
    position: "Music Producer",
    company: "Envato Audio",
    chips: ["Worldwide", "Remote", "Part-time"],
    description:
      "Produced high-quality music for video creators and commercials worldwide to enhance the visual storytelling experience.",
  },
  {
    timerange: "jul 17 - jul 18",
    position: "PR Manager",
    company: "BEST Zaporizhzhya",
    chips: ["Zaporizhia, Ukraine", "Volounteering", "Part-time"],
    description:
      "PR work plan, strategy dev., monthly PR meetings, task delegation, FB & IG page management, recruitment campaigns, print & social media design",
  },
  {
    timerange: "aug 18 — dec 18",
    position: "PR Manager",
    company: "BEST LikeIT 2018 (IT Hackathon)",
    chips: ["Zaporizhia, Ukraine", "Volounteering", "Project-based"],
    description:
      "Finding event participants. PR strategy, goal setting & monitoring work. Designing posts & materials. Facebook & Instagram posts, promo videos & targeted advertising.",
  },
];

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
