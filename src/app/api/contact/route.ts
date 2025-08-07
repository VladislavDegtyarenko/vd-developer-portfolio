import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/components/ContactEmail";
import { sendEmail } from "@/utils/sendEmail";

const allowedDomains = process.env.ALLOWED_DOMAINS?.split(",");

export async function POST(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Block known bots and crawlers
  const userAgent = request.headers.get("user-agent") || "";

  if (/curl|wget|python|bot|scraper/i.test(userAgent)) {
    return new Response("Blocked", { status: 403 });
  }

  // CORS check
  const origin = request.headers.get("origin");

  const isAllowedOrigin =
    origin === "http://localhost:3000" || // allow dev
    (!!origin &&
      !!allowedDomains &&
      allowedDomains.some((domain) => origin.includes(domain)));

  if (isAllowedOrigin) {
    return new Response("Forbidden", { status: 403 });
  }

  const { email, name, message, honeypot } = await request.json();

  // Silently escape bots/spammers
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Render the email
  const html = render(ContactEmail({ name, email, message }));

  try {
    const responseMessage = await sendEmail({
      from: { name, email },
      subject: `${name} | Contact Form`,
      htmlContent: html,
      textContent: message,
    });
    console.log("responseMessage: ", responseMessage);

    return NextResponse.json({ ok: responseMessage.ok });
  } catch (err) {
    console.error("Error sending email: ", err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
