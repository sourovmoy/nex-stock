import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const publicRoutePrefixes = [
  "/login",
  "/api/auth",
  "/features",
  "/solutions",
  "/pricing",
  "/home",
];
const adminRoutePrefixes = ["/register"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoutePrefixes.some((route) =>
    pathname.startsWith(route),
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isAdminRoute = adminRoutePrefixes.some((route) =>
    pathname.startsWith(route),
  );

  if (isAdminRoute && token.role !== "admin") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
