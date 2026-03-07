import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/",
};

export const proxy = (request: NextRequest) => {
  const hostname = request.headers.get("host") || "";

  const response = NextResponse.next();
  if (hostname.startsWith("resume-lite.")) {
    response.headers.set("x-resume-mode", "lite");
  } else if (hostname.startsWith("resume-recent.")) {
    response.headers.set("x-resume-mode", "recent");
  } else {
    response.headers.set("x-resume-mode", "full");
  }

  return response;
};
