// Core
import { useRef, memo } from "react";
import styled from "styled-components";

// UI
import Container from "../ui/Container";
import { P2 } from "../ui/Text";

// Hooks
import animateFromBottom from "app/animations/animateFromBottom";
import useIsomorphicLayoutEffect from "app/hooks/useIsomorphicLayoutEffect";

// TS
import { FooterRef } from "app/types";

const StyledFooter = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.grey};
  padding: 60px 0;
`;

const Footer = () => {
  const ref = useRef<FooterRef>(null);

  useIsomorphicLayoutEffect(() => {
    animateFromBottom(ref.current);
  }, []);

  return (
    <StyledFooter>
      <Container>
        <P2 ref={ref}>
          © Copyright {new Date().getFullYear()} | Vladyslav Dihtiarenko | All Rights
          Reserved
        </P2>
      </Container>
    </StyledFooter>
  );
};

export default memo(Footer);
