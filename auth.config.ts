import type { NextAuthConfig } from "next-auth"

export const authRoutes: string[] = ["/sign-in"]

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isPublicPath = nextUrl.pathname.includes("")
      if (isPublicPath) {
        if (isLoggedIn) {
          if (nextUrl.pathname.includes("sign-in")) {
            return Response.redirect(new URL("/", nextUrl))
          }

          return true
        }

        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl))
      }

      return true
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
