import styled from "styled-components";

import { motion, useReducedMotion } from "framer-motion";

import contactBtns from "@/data/contactBtns.json";
import SectionDescription from "./SectionDescription";

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    gap: 1.5em;
    justify-content: center;

    @media screen and (max-width: 479.98px) {
      grid-auto-flow: unset;
      grid-template-columns: repeat(3, auto);
    }

    a {
      border-radius: var(--borderRadiusSmall);
      width: 48px;
      height: 48px;
      text-decoration: none;
      color: ${({ theme }) => theme.cyan};
      transition: all var(--duration);
      display: inline-block;
      /* align-self: center; */

      &:hover {
        color: ${({ theme }) => theme.cyanHover};
      }

      > img,
      > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Socials = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <StyledSocials>
      <SectionDescription className="contact__descr">
        Prefer email or socials? Find me here 👇
      </SectionDescription>

      <ul>
        {contactBtns.map(({ href, ariaLabel, icon }, index) => (
          <motion.a
            href={href}
            target="_blank"
            aria-label={ariaLabel}
            title={ariaLabel}
            key={href}
            {...(!isReducedMotion && {
              initial: { y: 32, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
              transition: { duration: 0.5, delay: 0.05 * index },
            })}
          >
            <img src={icon} alt="" />
          </motion.a>
        ))}
      </ul>
    </StyledSocials>
  );
};

export default Socials;
