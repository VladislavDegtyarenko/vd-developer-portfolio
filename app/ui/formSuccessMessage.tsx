import styled from "styled-components";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "app/hooks/useIsomorphicLayoutEffect";
import animateFromBottom from "app/animations/animateFromBottom";

// UI
import SuccessIcon from "@/assets/SucessIcon";
import { H4, P1 } from "./Text";

const StyledFormSuccessMessage = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  justify-items: center;
  align-content: center;
  text-align: center;
  grid-gap: 0.5em;
  padding: 2em;
  > svg {
    margin-bottom: 0.5em;
  }
`;

const FormSuccessMessage = () => {
  const formSuccessRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!formSuccessRef.current) return;

    animateFromBottom([...new Set(formSuccessRef.current.children)], {
      stagger: 0.075,
    });
  }, [formSuccessRef.current]);

  return (
    <StyledFormSuccessMessage className="success" ref={formSuccessRef}>
      <SuccessIcon />
      <H4>Thank you for reaching out!</H4>
      <P1>{`Your message has been successfully sent and I'll get back to you soon.`}</P1>
    </StyledFormSuccessMessage>
  );
};

export default FormSuccessMessage;
