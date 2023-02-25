import styled from "styled-components";

const StyledDivider = styled.hr`
  width: calc(100% - 160px);
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.cardBg};
`;

export default StyledDivider;
