import type { Metadata } from "next";
import { CvPage } from "../CvPage";
import { riseGuideCv } from "../cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko - Senior Frontend Engineer CV for RiseGuide",
  description:
    "Senior Frontend Engineer CV tailored for RiseGuide, focused on JavaScript, TypeScript, frontend architecture, iterative delivery, ownership, React, and Next.js.",
};

export default function RiseGuideCvPage() {
  return <CvPage content={riseGuideCv} />;
}
