// import dynamic from "next/dynamic";
import App from "./App";

/* const NoSSRWrapper = () => (
  <>
    <App />
  </>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false }); */

export default function Page() {
  return <App />;
}
