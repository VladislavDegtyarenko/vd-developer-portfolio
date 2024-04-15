// Code highlight
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import DOMPurify from "isomorphic-dompurify";
import { DropedProps } from "@9gustin/react-notion-render/dist/hoc/withContentValidation";

const highlight = (code: string, lng = "javascript") => {
  let language;

  if (lng.toLowerCase() === "typescript") language = "tsx";
  else if (lng.toLowerCase() === "javascript") language = "jsx";
  else language = lng.toLowerCase();

  try {
    const highlightedCode = Prism.highlight(
      code,
      Prism.languages[language],
      language
    );
    return highlightedCode;
  } catch (error) {
    console.warn("Unable to highlight the code with Prism. ", error);
  }
};

const CodeBlockServer = ({
  language,
  children,
  plainText,
  className,
  ...props
}: DropedProps) => {
  const formattedCode = plainText && highlight(plainText, language);

  return (
    <pre className={`${className} language-${language}`}>
      {formattedCode ? (
        <code
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(formattedCode),
          }}
        ></code>
      ) : (
        <code>{plainText}</code>
      )}
    </pre>
  );
};

export default CodeBlockServer;
