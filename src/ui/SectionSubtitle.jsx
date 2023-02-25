import styled from "styled-components";
import { P1 } from "./Text";

import { Fade } from "react-awesome-reveal";

const StyledSectionSubtitle = styled(P1)`
  text-align: center;
  padding: 0 80px;
  color: ${({ theme }) => theme.grey};
  margin-top: 40px;

  @media screen and (max-width: 991.98px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

const SectionSubtltle = ({ children }) => {
  return (
    <Fade triggerOnce>
      <StyledSectionSubtitle>{children}</StyledSectionSubtitle>
    </Fade>
  );
};

export default SectionSubtltle;
