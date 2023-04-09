import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionSubtitle from "../ui/SectionSubtitle";

import DownloadIcon from "../assets/Icons/Download.jsx";
import { Fade } from "react-awesome-reveal";

import contactBtns from "../data/contactBtns";

const StyledContact = styled(Section)`
  .contact {
    &__descr {
      margin-top: 48px;
      color: ${({ theme }) => theme.fg};
    }
    &__wrapper {
      margin-top: 48px;
      display: grid;
      grid-auto-flow: column;
      align-content: center;
      gap: 1.5em;
      justify-content: center;

      @media screen and (max-width: 479.98px) {
        grid-auto-flow: unset;
        grid-template-columns: repeat(3, auto);
      }
    }
    &__link {
      border-radius: var(--borderRadiusSmall);
      width: 48px;
      height: 48px;
      text-decoration: none;
      color: ${({ theme }) => theme.cyan};
      transition: all var(--duration);
      display: inline-block;
      /* align-self: center; */

      &:hover {
        color: #178695;
      }
      > * {
        width: 100%;
        height: 100%;
      }
    }
    &__download-cv {
      display: flex;
      justify-content: center;
      margin-top: 3em;
      a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.cyan};
        text-decoration: none;
        border-radius: var(--borderRadiusSmall);
        border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
        font-weight: 700;
        font-size: 1em;
        padding: 1em 2em;
        transition: all var(--duration);
        &:hover {
          color: ${({ theme }) => theme.white};
          background-color: ${({ theme }) => theme.cyan};
        }
        svg {
          width: 1em;
          height: 1em;
          margin-right: 0.5em;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <>
      <StyledContact id="contact">
        <Container>
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionSubtitle className="contact__descr">
            Interested in working with me or hiring me for your next project? Drop me a
            line and let's make it happen. <br /> <br /> Get in touch today and let's
            bring your ideas to life.
          </SectionSubtitle>
          <div className="contact__wrapper">
            <Fade triggerOnce cascade damping={0.1}>
              {contactBtns.map(({ href, ariaLabel, icon }) => {
                const Icon = icon;

                return (
                  <a
                    href={href}
                    className="contact__link"
                    target="_blank"
                    aria-label={ariaLabel}
                  >
                    <Icon />
                  </a>
                );
              })}
            </Fade>
          </div>
          <div className="contact__download-cv">
            <a href="Vladyslav_Dihtiarenko_CV_Mar23.pdf" target="_blank">
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </Container>
      </StyledContact>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Contact;
