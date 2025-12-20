import { NextRequest, NextResponse } from "next/server";

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/contact"],
};
