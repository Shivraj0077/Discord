import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { NextRequest } from "next/server";


const isProtectedRoute = createRouteMatcher(['/home(.*)','/sign-in(.*)']); 

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const authObject = await auth();
  if (isProtectedRoute(req)) {
      if (!authObject.userId) {
          return authObject.redirectToSignIn({ returnBackUrl: req.url });
      }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}