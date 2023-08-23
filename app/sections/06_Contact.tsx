import { useRef, memo } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import styled from "styled-components";
import Section from "../ui/Section";
import SectionDivider from "../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionDescription from "../ui/SectionDescription";

import DownloadIcon from "@/assets/Icons/Download";

import animateFromBottom from "../animations/animateFromBottom";

// Data
import contactBtns from "../data/contactBtns";
import { ContactIconRef, DownloadBtnRef } from "../types";
import ContactForm from "app/components/ContactForm";

const StyledContact = styled(Section)`
  .contact {
    &__descr {
      margin-top: 48px;
      color: ${({ theme }) => theme.fg};
    }
    &__wrapper {
      margin-top: 4em;
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
  const iconsRef = useRef<ContactIconRef>(null);
  const downloadBtnRef = useRef<DownloadBtnRef>(null);

  useIsomorphicLayoutEffect(() => {
    if (!iconsRef.current) return;

    animateFromBottom([...new Set(iconsRef.current.children), downloadBtnRef.current], {
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <StyledContact id="contact">
        <Container>
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionDescription className="contact__descr">
            Interested in working with me or hiring me for your next project? Drop me a
            line and let&apos;s make it happen.
          </SectionDescription>
          <SectionDescription
            className="contact__descr"
            animationOptions={{ delay: 0.15 }}
          >
            Get in touch today and let&apos;s bring your ideas to life.
          </SectionDescription>

          <ContactForm />

          <div className="contact__wrapper" ref={iconsRef}>
            {contactBtns.map(({ href, ariaLabel, icon }) => {
              const Icon = icon;

              return (
                <a
                  href={href}
                  className="contact__link"
                  target="_blank"
                  aria-label={ariaLabel}
                  title={ariaLabel}
                  key={href}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <div className="contact__download-cv">
            <a
              href="Vladyslav Dihtiarenko CV Jul'23.pdf"
              title={"Get my CV in PDF format"}
              target="_blank"
              ref={downloadBtnRef}
            >
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

export default memo(Contact);
