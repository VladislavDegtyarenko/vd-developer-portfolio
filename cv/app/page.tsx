import { CvPage } from "../components/CvPage";
import { cv } from "./cv-data";

export default function Home() {
  return <CvPage content={cv} />;
}
