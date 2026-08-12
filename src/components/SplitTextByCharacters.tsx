"use client";

import { Fragment } from "react";
import { useReducedMotion } from "framer-motion";

import { splitStringByRegex } from "@/utils/splitStringByRegex";

type SplitTextByCharactersProps = {
  children: string;
  /**
   * Renders character spans directly into the parent. In this mode the parent
   * must define `white-space: pre-wrap` to preserve spaces and line breaks.
   */
  asFragment?: boolean;
};

const SplitTextByCharacters = ({
  children,
  asFragment = false,
}: SplitTextByCharactersProps) => {
  const isReducedMotion = useReducedMotion();

  const characters = splitStringByRegex(children).map((character, index) => (
    <span key={index} style={{ opacity: isReducedMotion ? 1 : 0 }}>
      {character}
    </span>
  ));

  if (asFragment) {
    return <Fragment>{characters}</Fragment>;
  }

  return <span style={{ whiteSpace: "pre-wrap" }}>{characters}</span>;
};

export default SplitTextByCharacters;
