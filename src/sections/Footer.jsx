import styled from "styled-components";
import Container from "../ui/Container";
import { P2 } from "../ui/Text";

import { Fade } from "react-awesome-reveal";

const StyledFooter = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.grey};
  padding: 60px 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Fade triggerOnce>
          <P2>
            © Copyright {new Date().getFullYear()} | Vladyslav Dihtiarenko | All Rights
            Reserved
          </P2>
        </Fade>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
