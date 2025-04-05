"use client";

import styled from "styled-components";
import { useState } from "react";

import { isObject } from "@/utils/isObject";
import { H4, P2 } from "./Text";

const StyledTable = styled.table`
  margin-top: 0.5rem;
  border-spacing: 1rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  transition-duration: 0.5s;
  transition-property: height, max-height;
  display: block;
  position: relative;
  /* height: 10lh; */
  max-height: 10lh;
  overflow: hidden;

  th,
  td {
    vertical-align: top;
    text-align: left;
  }

  &:after {
    content: "";
    pointer-events: none;
    user-select: none;
    display: block;
    width: 100%;
    height: 6lh;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(to bottom, transparent, ${theme.bg})`};
    transition: opacity 0.5s;
    opacity: 1;
  }

  &.expanded {
    max-height: 46lh;
    /* height: calc-size(auto); */

    &:after {
      opacity: 0;
    }
  }
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: 700;
  font-size: 1rem;
`;

type ExpertiseTableProps = {
  title: string;
  table: Record<string, string[]>;
  isShowMoreDisabled?: boolean;
};

const ExpertiseTable = (props: ExpertiseTableProps) => {
  const { title, table, isShowMoreDisabled } = props;

  const [isShowMore, setIsShowMore] = useState(
    isShowMoreDisabled ? true : false
  );

  return isObject(table) ? (
    <>
      <H4>{title}</H4>

      <StyledTable
        className={isShowMore || isShowMoreDisabled ? "expanded" : ""}
      >
        <tbody>
          {Object.entries(table).map(([title, technologiesList]) => {
            return (
              <tr key={title}>
                <th>
                  <P2>
                    <strong>{title}</strong>
                  </P2>
                </th>
                <td>{technologiesList.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>

      {!isShowMoreDisabled && (
        <ShowMoreButton onClick={() => setIsShowMore((p) => !p)}>
          Show {isShowMore ? "Less" : "More"}
        </ShowMoreButton>
      )}
    </>
  ) : null;
};

export default ExpertiseTable;
