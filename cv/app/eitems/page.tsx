import type { Metadata } from "next";
import { CvPage } from "../../components/CvPage";
import { cv } from "./cv-data";

export const metadata: Metadata = {
  title: "Vladyslav Dihtiarenko - Frontend Developer CV for EITEMS",
  description:
    "Frontend Developer CV tailored for EITEMS, focused on HTML, CSS, SCSS, JavaScript, jQuery, React, e-commerce, and CMS-driven delivery.",
};

export default function EitemsCvPage() {
  return <CvPage content={cv} />;
}
