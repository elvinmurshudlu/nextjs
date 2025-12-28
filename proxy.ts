import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
// import {NextRequest, NextResponse} from "next/server";
export default createMiddleware(routing)
// export default async function proxy(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;
//     // Step 1: Use the incoming request (example)
//     if (pathname.startsWith('/adminstration')) {
//         return NextResponse.next(); // ⚡ Heç nə etmə, keç
//     }
//     // Step 2: Create and call the next-intl middleware (example)
//     const handleI18nRouting = createMiddleware(routing);
//     const response = handleI18nRouting(request);
//
//
//     return response;
// }

export const config = {
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
