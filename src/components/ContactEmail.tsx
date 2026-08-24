import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  reason,
  message,
}: ContactEmailProps) => {
  const htmlNewlinesAsBreakPoints = (text?: string | null) => {
    const nParagraphs = text?.split("\n").length || 0;
    return text?.split("\n").map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph}
        {index < nParagraphs - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Html>
      <Head />
      <Preview>{`New contact request from ${name}: ${reason}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://github.com/VladislavDegtyarenko/vd-developer-portfolio/assets/62521930/df32cc0f-1cce-4d14-a763-dc8f49d81f90`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={reasonText}>
            <strong>Reason:</strong> {reason}
          </Text>
          <Text style={paragraph}>{htmlNewlinesAsBreakPoints(message)}</Text>
          <Hr style={hr} />
          <Text style={footer}>{name}</Text>
          <Text style={footer}>{email}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
  width: "91px",
  height: "42px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#000",
};

const reasonText = {
  ...paragraph,
  marginBottom: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "1.2",
  margin: "4px 0",
};
