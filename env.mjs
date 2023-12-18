import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    API_ENDPOINT: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
})
