import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"

import { authConfig } from "./auth.config"
import { sleep } from "./lib/utils"

type User = {
  email: string
  id: string
}

async function getUser(email: string): Promise<User | undefined> {
  try {
    await sleep()
    const user = { email, id: "" }

    return user
  } catch (error) {
    console.error("Failed to fetch user:", error)
    throw new Error("Failed to fetch user.")
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const { email } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null

          return user
        }

        return null
      },
    }),
  ],
})
