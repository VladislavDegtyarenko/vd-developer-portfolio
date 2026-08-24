import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/components/ContactEmail";
import CONTACT_REASONS from "@/data/contactReasons.json";
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
    origin?.includes("http://localhost:300") || // allow dev with 300* port
    (!!origin &&
      !!allowedDomains &&
      allowedDomains.some((domain) => origin.includes(domain)));

  if (!isAllowedOrigin) {
    return new Response("Forbidden", { status: 403 });
  }

  const { email, name, message, reason, honeypot } = await request.json();

  // Silently escape bots/spammers
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const reasonLabel = CONTACT_REASONS.find(
    (contactReason) => contactReason.value === reason
  )?.label;

  if (!reasonLabel) {
    return NextResponse.json(
      { error: "Invalid contact reason" },
      { status: 400 }
    );
  }

  // Render the email
  const html = await render(
    ContactEmail({ name, email, reason: reasonLabel, message })
  );

  try {
    const responseMessage = await sendEmail({
      from: { name, email },
      subject: `${name} | Contact Form`,
      htmlContent: html,
      textContent: `Reason: ${reasonLabel}\n\n${message}`,
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
