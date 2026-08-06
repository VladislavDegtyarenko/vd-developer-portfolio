"use client";

import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";

// UI
import Container from "@/components/layout/Container";
import Logo from "@/components/icons/LOGO";
import BurgerButton from "@/components/BurgerButton";
import DarkModeToggle from "@/components/DarkModeToggle";
import Nav from "@/components/Nav";
import MobileMenu from "../../MobileMenu";

// Contexts
import MobileMenuContext from "@/contexts/MobileMenuContext";
import ScrollLockContext from "@/contexts/ScrollLockContext";
import { useIsMobileHeaderHidden } from "@/hooks/useIsMobileHeaderHidden";
import { usePathname, useRouter } from "next/navigation";

// Types
type StyledHeaderProps = {
  $scrollbarCompensation: number | null;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  padding: 1.5em 0;
  position: fixed;
  width: ${({ $scrollbarCompensation }) =>
    $scrollbarCompensation
      ? `calc(100% - ${$scrollbarCompensation}px)`
      : "100%"};
  z-index: 3;
  box-shadow: 0 0 8px #35353555;
  /* background-color: #050505bb; */
  backdrop-filter: blur(8px);
  top: 0;

  &:after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.bg};
    backdrop-filter: blur(8px);
    transition: background-color var(--duration);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    opacity: 0.8;
    z-index: -1;
  }

  @media screen and (max-width: 575.98px) {
    padding: 0.75em 0;
  }

  @media screen and (max-width: 991.98px) {
    padding: 1.25em 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
  }

  .logo {
    width: 80px;
    height: auto;
    transition: width var(--duration);
    color: ${({ theme }) => theme.fg};
  }

  .logo img {
    width: 100%;
    height: auto;
  }

  /* Hide desktop nav */
  ul {
    @media screen and (max-width: 991.98px) {
      display: none;
    }
  }

  > div {
    position: relative;
  }
`;

const MotionStyledHeader = motion.create(StyledHeader);

const variants: Variants = {
  initial: {
    transform: `translateY(-100%)`,
  },
  animate: ({ isHidden }) => ({
    transform: `translateY(${isHidden ? "-100%" : "0%"})`,
  }),
  exit: {
    transform: `translateY(-100%)`,
  },
};

const HeaderClient = () => {
  const { scrollbarCompensation } = useContext(ScrollLockContext);
  const { menuIsOpen, toggleMenu } = useContext(MobileMenuContext);
  const router = useRouter();
  const pathname = usePathname();

  const { isHidden, isMobile } = useIsMobileHeaderHidden();

  return (
    <>
      <MotionStyledHeader
        $scrollbarCompensation={scrollbarCompensation}
        variants={variants}
        custom={{ isHidden }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: isMobile ? 0.5 : 1 }}
      >
        <Container>
          <nav>
            <Link
              prefetch={false}
              className="logo"
              href="/"
              onClick={(e) => {
                // Make "/" links scroll to top smoothly
                if ("/" === pathname) {
                  e.preventDefault();
                  router.push(pathname, { scroll: false });
                  scrollTo(0, 0);
                }

                if (menuIsOpen) {
                  toggleMenu();
                }
              }}
              aria-label="logo icon button, click to scroll to top."
            >
              <Logo />
            </Link>
            <Nav />
            <DarkModeToggle />
            <BurgerButton isOpen={menuIsOpen} toggleMenu={toggleMenu} />
          </nav>
        </Container>
      </MotionStyledHeader>

      <AnimatePresence>{menuIsOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
};

export default HeaderClient;
