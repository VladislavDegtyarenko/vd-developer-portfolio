import styled from "styled-components";
import { H2 } from "./Text";

import { Fade } from "react-awesome-reveal";

const StyledSectionTitle = styled(H2)`
  display: flex;
  justify-content: center;
  position: relative;
  span {
    padding-bottom: 14px;
    position: relative;

    &:after {
      content: "";
      background-color: ${({ theme }) => theme.cyan};
      height: var(--strokeWidth);
      width: calc(100% - 32px);
      position: absolute;
      bottom: 0;
      left: 16px;
    }
  }
`;

const SectionTitle = ({ children, id }) => {
  return (
    <Fade triggerOnce>
      <StyledSectionTitle id={id}>
        <span>{children}</span>
      </StyledSectionTitle>
    </Fade>
  );
};

export default SectionTitle;
