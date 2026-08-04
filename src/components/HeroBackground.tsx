import Image from "next/image";
import bgImage from "public/assets/bg.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Styled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  opacity: 0.125;

  img {
    object-fit: cover;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 70%,
      ${({ theme }) => theme.bg} 100%
    );
  }
`;

const MotionImage = motion(Image);

const HeroBackground = () => {
  return (
    <Styled>
      <MotionImage
        src={bgImage}
        alt=""
        placeholder="blur"
        quality="50"
        fill
        priority
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      />
    </Styled>
  );
};

export default HeroBackground;
