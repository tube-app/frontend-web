import { defineConfig } from "next/experimental/testmode/playwright"

export default defineConfig({
  webServer: {
    command: "pnpm dev --experimental-test-proxy",
    url: "http://localhost:3000",
  },
})
