// Core
import styled from "styled-components";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// UI
import { H3, P1 } from "./Text";
import ExternalIcon from "./icons/ExternalIcon";

const StyledNavLink = styled(Link)<{ $isMobile?: boolean }>`
  color: ${({ theme }) => theme.fg};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  opacity: ${($isMobile) => ($isMobile ? 1 : 0.7)};

  svg,
  img {
    margin-left: 0.25rem;
    color: currentColor;
  }

  .decorator {
    display: block;

    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 2.5px;
    transform: translateX(-50%);
    clip-path: inset(0 50% 0 50%);

    background-color: ${({ theme }) => theme.cyan};
    pointer-events: none;
    user-select: none;
  }
`;

const MotionStyledNavLink = motion(StyledNavLink);

const linkVariants: Variants = {
  normal: ({ isMobile }) => ({
    opacity: isMobile ? 1 : 0.7,
  }),
  active: {
    opacity: 1,
  },
  hovered: {
    opacity: 1,
  },
};

const decoratorVariants: Variants = {
  normal: {
    clipPath: "inset(0 50% 0 50%)",
  },
  active: {
    clipPath: "inset(0 0% 0 0%)",
  },
  hovered: {},
};

export type NavLinkProps = {
  text: string;
  href: string;
  isActive?: boolean;
  isMobile?: boolean;
  isExternal?: boolean;
  onClick: () => void;
};

const NavLink = ({
  text,
  href,
  isMobile,
  isActive,
  isExternal,
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname();

  const LinkText = isMobile ? H3 : P1;

  return (
    <MotionStyledNavLink
      $isMobile={isMobile}
      initial="normal"
      whileHover="hovered"
      whileTap="hovered"
      whileFocus="hovered"
      whileInView={isActive ? "active" : "normal"}
      variants={linkVariants}
      custom={{ isMobile }}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      onClick={(e) => {
        // Make "/" links scroll to top smoothly
        if (href === pathname) {
          e.preventDefault();
          scrollTo(0, 0);
        }

        onClick();
      }}
    >
      <LinkText as="span">{text}</LinkText>

      {isExternal && <ExternalIcon />}

      <motion.span
        className="decorator"
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        variants={decoratorVariants}
      />
    </MotionStyledNavLink>
  );
};

export default NavLink;
