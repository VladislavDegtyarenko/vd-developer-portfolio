"use client";

import { memo } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/layout/Container";
import SectionDescription from "@/components/SectionDescription";

import DownloadIcon from "@/components/icons/Download";

// Data
import CONTACT from "@/data/contact.json";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";

const StyledContact = styled(Section)`
  .contact {
    &__descr {
      margin-top: 48px;
      color: ${({ theme }) => theme.fg};
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
  const { title, description, downloadCV } = CONTACT;

  return (
    <>
      <StyledContact id="contact">
        <Container>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription className="contact__descr">
            {description}
          </SectionDescription>

          <ContactForm />

          <SectionDescription className="contact__descr">
            Prefer email or socials? Find me here 👇
          </SectionDescription>

          <Socials />

          {/* <div className="contact__download-cv">
            <motion.a
              href="Vladyslav Dihtiarenko CV (Dec'23, One-Page)-compressed (1).pdf"
              title={"Get my CV in PDF format"}
              target="_blank"
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <DownloadIcon />
              {downloadCV}
            </motion.a>
          </div> */}
        </Container>
      </StyledContact>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(Contact);
