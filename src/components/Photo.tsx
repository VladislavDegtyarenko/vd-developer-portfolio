import Image from "next/image";
import styled from "styled-components";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const StyledPhoto = styled.div`
  --photo-size: 200px;

  position: relative;
  width: var(--photo-size);
  height: var(--photo-size);
  border-radius: var(--borderRadiusNormal);
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.bg};
  isolation: isolate;

  .photo__image {
    position: absolute;
    inset: var(--strokeWidth);
    overflow: hidden;
    border-radius: calc(var(--borderRadiusNormal) - var(--strokeWidth));
    z-index: 1;
  }

  .photo__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: transparent;
    box-shadow: 0 0 4rem ${({ theme }) => theme.cyan};
    z-index: 1;
  }
`;

const ImageMask = styled(motion.div)`
  will-change: clip-path;
`;

const Border = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  color: ${({ theme }) => theme.cyan};
  filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.cyan});
`;

const imageVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.15,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const borderVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.35,
        ease: [0.22, 1, 0.36, 1],
      },
      opacity: { duration: 0.2 },
    },
  },
};

const MotionImage = motion.create(Image);

const Photo = () => {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? { initial: false }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true },
      };

  return (
    <StyledPhoto className="photo">
      <ImageMask className="photo__image">
        <MotionImage
          src="/assets/photo/vd-developer-july26.png"
          sizes="(max-width: 991.98px) 464px, 624px"
          alt="Photo of Vladyslav Dihtiarneko, frontend developer"
          fill
          priority
          variants={imageVariants}
          {...revealProps}
        />
      </ImageMask>
      <Border viewBox="0 0 200 200" aria-hidden="true">
        <motion.rect
          x="2"
          y="2"
          width="196"
          height="196"
          rx="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          variants={borderVariants}
          {...revealProps}
        />
      </Border>
    </StyledPhoto>
  );
};

export default Photo;
