"use client";

import styled from "styled-components";

import Link from "next/link";
import ArrowIcon from "public/assets/Icons/Arrow";

const StyledBtn = styled(Link)`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.fg};
  text-decoration: none;
  border-radius: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 1rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.5rem;
    position: relative;
    transform: translateX(0px);
    transition: transform 0.15s;
  }

  &:hover {
    svg {
      transform: translateX(-4px);
    }
  }
`;

const BackToBlogBtn = () => {
  return (
    <StyledBtn href="/blog">
      <ArrowIcon />
      Back to blog
    </StyledBtn>
  );
};

export default BackToBlogBtn;
