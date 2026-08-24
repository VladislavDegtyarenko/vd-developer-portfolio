import type { Metadata } from "next";
import { CvPage } from "../CvPage";
import { binanceCv } from "../cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko - Senior Frontend Engineer CV for Binance",
  description:
    "Senior Frontend Engineer CV tailored for Binance, focused on React, TypeScript, Redux, responsive UI, reliability, testing, and AI-assisted development.",
};

export default function BinanceCvPage() {
  return <CvPage content={binanceCv} />;
}
