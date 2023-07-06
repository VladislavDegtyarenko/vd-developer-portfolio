import dynamic from "next/dynamic";
import App from "./App";

const NoSSRWrapper = ({ children }) => (
  <>
    <App />
  </>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false });

/* export default function Page() {
  return <App />;
} */
