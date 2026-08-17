import { CvPage } from "./CvPage";
import { generalCv } from "./cv-data";

export default function Home() {
  return <CvPage content={generalCv} />;
}
