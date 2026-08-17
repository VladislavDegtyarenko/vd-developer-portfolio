import type { Metadata } from "next";
import { CvPage } from "../CvPage";
import { supabaseCv } from "../cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko — Frontend Engineer CV for Supabase",
  description:
    "Frontend Engineer CV tailored for Supabase, focused on React, Next.js, shared packages, quality gates, and remote collaboration.",
};

export default function SupabaseCvPage() {
  return <CvPage content={supabaseCv} />;
}
