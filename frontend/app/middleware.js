import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const protectedRoutes = ["/patient", "/doctor", "/pharmacist"];
const authRoutes = ["/", "/signin", "/signup"];
export function middleware(request) {
  const currentUser = request.cookies.get("currentUser")?.value;
  const role = currentUser ? JSON.parse(currentUser).data?.role : null;
  // need to verify if there is expiry of token in backend...
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || Date.now() > JSON.parse(currentUser).expiredAt)
  ) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("currentUser");
    return response;
  } else if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    if (role === "patient") {
      return NextResponse.redirect(new URL("/patient", request.url));
    } else if (role === "doctor") {
      return NextResponse.redirect(new URL("/doctor", request.url));
    } else if (role === "pharmacist") {
      return NextResponse.redirect(new URL("/pharmacist", request.url));
    }
  } else if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // Check if the user is accessing a protected route meant for their role
    if (
      (role === "patient" &&
        !request.nextUrl.pathname.startsWith("/patient")) ||
      (role === "doctor" && !request.nextUrl.pathname.startsWith("/doctor")) ||
      (role === "pharmacist" &&
        !request.nextUrl.pathname.startsWith("/pharmacist"))
    ) {
      // Redirect the user to their own dashboard if they try to access other role's routes
      if (role === "patient") {
        return NextResponse.redirect(new URL("/patient", request.url));
      } else if (role === "doctor") {
        return NextResponse.redirect(new URL("/doctor", request.url));
      } else if (role === "pharmacist") {
        return NextResponse.redirect(new URL("/pharmacist", request.url));
      }
    }
  }
}
