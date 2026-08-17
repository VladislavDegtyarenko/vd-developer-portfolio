import type { Metadata } from "next";
import { CvPage } from "../CvPage";
import { gismartCv } from "../cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko - Frontend Developer CV for Gismart",
  description:
    "Frontend Developer CV tailored for Gismart, focused on React, TypeScript, Zustand, Styled Components, Builder.io, and commercial web flows.",
};

export default function GismartCvPage() {
  return <CvPage content={gismartCv} />;
}
