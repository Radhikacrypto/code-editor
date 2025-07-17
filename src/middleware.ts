import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

/*
1. import { clerkMiddleware } …
It brings in a built-in middleware function from Clerk that handles authentication and session checking.

2. export default clerkMiddleware();
This sets up Clerk’s middleware to automatically run on every matching request, so it can:

Check if the user is logged in

Redirect to login/signup if needed

Attach user data to the request

3. export const config = { matcher: […] }
This tells Next.js which routes to run the middleware on:

Skip static files & Next internals:

js
Copy
Edit
'/((?!_next|…\\.(?:html?|css|js|jpg|png|…)).*)'
→ Don’t run middleware on things like images, CSS, JS, fonts, etc. Only run on “real” app routes and pages.

Always run on API/trpc routes:

js
Copy
Edit
'/(api|trpc)(.*)'
→ Ensures that every request sent to your API endpoints is checked.

🔄 Real-life analogy:
Imagine a security guard (middleware) at the entrance of a building:

They skip utility rooms (static files)

They check everyone going to main offices and APIs

They verify if you have a badge (logged-in user)

If you don’t, they stop you or send you to security desk (redirect to login)

✅ TL;DR:
Runs Clerk’s auth checks wherever needed.

Runs on your app pages and API routes.

Does not run on static files like images, CSS, or JS.

*/