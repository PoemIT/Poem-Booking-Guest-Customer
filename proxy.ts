import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const cookiess = await cookies();
  const token = cookiess.get("token");
  const isDashboard = request.nextUrl.pathname.startsWith("/account");

  if (!isDashboard) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  // return NextResponse.redirect(new URL("/home", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/account/:path*",
};
