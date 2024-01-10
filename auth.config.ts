import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { v4 as uuidv4 } from "uuid"

import { signInSchema } from "./schemas"

export default {
  providers: [
    Credentials({
      authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials)

        if (!validatedFields.success) {
          return null
        }

        const { email } = validatedFields.data
        const id = uuidv4()

        return {
          email,
          id,
        }
      },
    }),
  ],
} satisfies NextAuthConfig
