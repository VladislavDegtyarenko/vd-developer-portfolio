const BREVO_API_ENDPOINT = process.env.BREVO_API_ENDPOINT || "";
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const MY_EMAIL = process.env.MY_EMAIL;

type SendEmailArgs = {
  from: { name: string; email: string };
  subject: string;
  htmlContent: string;
  textContent: string;
};

export const sendEmail = async ({
  from,
  subject,
  htmlContent,
  textContent,
}: SendEmailArgs) => {
  if (!process.env.BREVO_API_ENDPOINT) {
    throw new Error("BREVO_API_ENDPOINT is not defined in envs");
  }

  if (!process.env.BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY is not defined in envs");
  }

  if (!process.env.SENDER_EMAIL) {
    throw new Error("SENDER_EMAIL is not defined in envs");
  }

  if (!process.env.MY_EMAIL) {
    throw new Error("MY_EMAIL is not defined in envs");
  }

  const headers = new Headers({
    accept: "application/json",
    "content-type": "application/json",
    "api-key": `${BREVO_API_KEY}`,
  });

  const body = JSON.stringify({
    sender: {
      email: SENDER_EMAIL,
    },
    replyTo: from,
    to: [
      {
        email: MY_EMAIL,
        name: "John Doe",
      },
    ],
    subject,
    htmlContent,
    textContent,
  });

  try {
    const response = await fetch(BREVO_API_ENDPOINT, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}: ${
          data.message || data.error || JSON.stringify(data)
        }`
      );
    }

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      message: "Email sent successfully",
    };
  } catch (error) {
    throw error;
  }
};
