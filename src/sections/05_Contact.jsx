import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionSubtitle from "../ui/SectionSubtitle";

import FacebookIcon from "./../assets/social/FacebookIcon.jsx";
import InstagramIcon from "./../assets/social/InstagramIcon.jsx";
import LinkedInIcon from "./../assets/social/LinkedInIcon.jsx";
import GitHubIcon from "./../assets/social/GitHubIcon.jsx";
import TelegramIcon from "./../assets/social/TelegramIcon.jsx";
import EmailIcon from "../assets/social/EmailIcon.jsx";

import { Fade } from "react-awesome-reveal";

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
              <a
                href="https://www.facebook.com/vladislav.degtyarenko.1996"
                className="contact__link"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/vladislavdegtyarenko/"
                className="contact__link"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/vladislavdegtyarenko/"
                className="contact__link"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/VladislavDegtyarenko/"
                className="contact__link"
                target="_blank"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://t.me/Vladislav_Degtyarenko"
                className="contact__link"
                target="_blank"
              >
                <TelegramIcon />
              </a>
              <a
                href="mailto:vladislavdegtyarenko@gmail.com"
                className="contact__link"
                target="_blank"
              >
                <EmailIcon />
              </a>
            </Fade>
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
