import { defineConfig } from "next/experimental/testmode/playwright"

const PORT = process.env.PORT || 3000

const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  webServer: {
    command: "pnpm dev --experimental-test-proxy",
    url: baseURL,
  },
  use: {
    baseURL,
  },
})
