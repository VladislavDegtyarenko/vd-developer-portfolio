import { NextRequest, NextResponse } from "next/server";
import { isAllowedOrigin, parseHost } from "@/utils";

const allowedDomains =
  process.env.ALLOWED_DOMAINS?.split(",").map((domain) => domain.trim()) ?? [];
const allowedHosts =
  process.env.ALLOWED_HOSTS?.split(",").map((host) => host.trim()) ||
  allowedDomains;

const unsafeUserAgents = /curl|wget|python|bot|scraper/i;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/api/contact") {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (unsafeUserAgents.test(userAgent)) {
    return new NextResponse("Blocked", { status: 403 });
  }

  if (request.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }

  if (request.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const origin = request.headers.get("origin");
  console.log("isAllowedOrigin(origin): ", isAllowedOrigin(origin));
  if (!isAllowedOrigin(origin)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const hostHeader =
    request.headers.get("host") || request.headers.get("x-forwarded-host");
  const host =
    parseHost(hostHeader) ||
    (origin ? parseHost(origin) : null) ||
    request.nextUrl.host?.toLowerCase();
  console.log("host: ", host);
  const isAllowedHost =
    host === "localhost:3000" ||
    (host && allowedHosts.some((allowedHost) => allowedHost === host));

  console.log("isAllowedHost: ", isAllowedHost);
  if (!isAllowedHost) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/contact"],
};
