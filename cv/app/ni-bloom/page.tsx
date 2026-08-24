import type { Metadata } from "next";
import { CvPage } from "../CvPage";
import { niBloomCv } from "../cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko - Senior Frontend Developer CV for N. I Bloom",
  description:
    "Senior Frontend Developer CV tailored for N. I Bloom, focused on Next.js, TypeScript, Tailwind CSS, reusable UI systems, motion, accessibility, and AI-assisted delivery.",
};

export default function NiBloomCvPage() {
  return <CvPage content={niBloomCv} />;
}
