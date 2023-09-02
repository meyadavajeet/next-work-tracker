import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Next Middleware Executed");

  const authToken = request.cookies.get("authToken")?.value;
  if (
    request.nextUrl.pathname == "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  //   loggedIn user not able to access pathname
  const loggedInNotAccessiblePath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInNotAccessiblePath) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            success: false,
            message: " Access Denied",
            data: null,
          },
          { status: 401 }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    // "/task-list",
    // "profile/:path*",
    "/api/:path*",
  ],
};
