"use client";

import styled from "styled-components";

import Container from "@/components/layout/Container";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

import data from "@/data/about.json";
import Photo from "@/components/Photo";
import SectionDescription from "@/components/SectionDescription";

const StyledAbout = styled(Section)`
  .inner {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .about-content {
    color: ${({ theme }) => theme.grey};

    > p {
      padding: 0;
      margin-top: 0;
    }

    > p + p {
      margin-top: 1rem;
    }
  }
`;

const About = () => {
  const { title, description } = data;

  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>{title}</SectionTitle>

        <div className="inner">
          <Photo />

          <div className="about-content">
            {description.map((p, i) => (
              <SectionDescription key={i} textAlign="">
                {p}
              </SectionDescription>
            ))}
          </div>
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
