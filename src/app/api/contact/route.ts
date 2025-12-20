import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/components/ContactEmail";
import { sendEmail } from "@/utils/sendEmail";
import {
  getAllowedDomains,
  getAllowedHosts,
  isAllowedOrigin,
  parseHost,
} from "@/utils";

const allowedHosts = getAllowedHosts();
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_BYPASS =
  process.env.RECAPTCHA_BYPASS === "true" ||
  process.env.NEXT_PUBLIC_RECAPTCHA_BYPASS === "true";

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 10);
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000);
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const unsafeUserAgents = /curl|wget|python|bot|scraper/i;

const validateBody = (payload: Record<string, unknown>) => {
  const errors: string[] = [];

  const name = (payload.name as string) || "";
  const email = (payload.email as string) || "";
  const message = (payload.message as string) || "";
  const honeypot = (payload.honeypot as string) || "";
  const recaptchaToken = (payload.recaptchaToken as string) || "";

  if (!name || name.length < 2 || name.length > 100) {
    errors.push("Invalid name");
  }

  if (
    !email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ||
    email.length > 254
  ) {
    errors.push("Invalid email");
  }

  if (!message || !message.trim() || message.length > 2000) {
    errors.push("Invalid message");
  }

  if (!recaptchaToken) {
    errors.push("Missing captcha token");
  }

  return {
    errors,
    sanitized: { name, email, message, honeypot, recaptchaToken },
  };
};

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
};

const isRateLimited = (key: string) => {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { limited: true, remaining: 0 };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { limited: false, remaining: RATE_LIMIT_MAX - entry.count };
};

const verifyRecaptcha = async (token: string, remoteIp: string) => {
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV;
  const isProd = env === "production";

  if (RECAPTCHA_BYPASS || (!isProd && !recaptchaSecret)) {
    console.warn(
      `Skipping reCAPTCHA verification (bypass=${
        RECAPTCHA_BYPASS ? "true" : "false"
      }, env=${env ?? "unknown"})`
    );
    return;
  }

  if (!recaptchaSecret) {
    throw new Error("RECAPTCHA_SECRET_KEY is not defined in envs");
  }

  const params = new URLSearchParams();
  params.append("secret", recaptchaSecret);
  params.append("response", token);
  if (remoteIp && remoteIp !== "unknown") {
    params.append("remoteip", remoteIp);
  }

  let response: Response;
  try {
    response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });
  } catch (error) {
    throw new Error(
      `Failed to reach reCAPTCHA verify endpoint: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  if (!response.ok) {
    throw new Error("Failed to verify reCAPTCHA");
  }

  const data = await response.json();

  const isScoreLow = typeof data.score === "number" && data.score < 0.5;

  if (!data.success || isScoreLow) {
    const errorCodes = Array.isArray(data["error-codes"])
      ? data["error-codes"].join(", ")
      : null;
    throw new Error(
      `reCAPTCHA validation failed${
        errorCodes ? `: ${errorCodes}` : isScoreLow ? ": low score" : ""
      }`
    );
  }
};

export async function POST(request: NextRequest): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (unsafeUserAgents.test(userAgent)) {
    return new Response("Blocked", { status: 403 });
  }

  const origin = request.headers.get("origin");

  if (!isAllowedOrigin(origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  const hostHeader =
    request.headers.get("host") || request.headers.get("x-forwarded-host");
  const host =
    parseHost(hostHeader) ||
    (origin ? parseHost(origin) : null) ||
    request.nextUrl.host?.toLowerCase();
  const isAllowedHost =
    host === "localhost:3000" ||
    (host && allowedHosts.some((allowedHost) => allowedHost === host));

  if (!isAllowedHost) {
    return new Response("Forbidden", { status: 403 });
  }

  const ip = getClientIp(request);
  const rateLimit = isRateLimited(ip);
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429 }
    );
  }

  const payload = await request.json();
  const { errors, sanitized } = validateBody(payload);

  if (errors.length) {
    return NextResponse.json({ error: errors.join(", ") }, { status: 400 });
  }

  // Silently escape bots/spammers
  if (sanitized.honeypot) {
    return NextResponse.json({ ok: true });
  }

  try {
    await verifyRecaptcha(sanitized.recaptchaToken, ip);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "reCAPTCHA validation failed for unknown reasons";
    console.error("reCAPTCHA validation failed:", message);
    return NextResponse.json({ error: message }, { status: 403 });
  }

  // Render the email
  const html = render(
    ContactEmail({
      name: sanitized.name,
      email: sanitized.email,
      message: sanitized.message,
    })
  );

  try {
    const responseMessage = await sendEmail({
      from: { name: sanitized.name, email: sanitized.email },
      subject: `${sanitized.name} | Contact Form`,
      htmlContent: html,
      textContent: sanitized.message,
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
