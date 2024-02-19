import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { coreFansData } from "../../api/mock/core-fans/data"

test("/core-fans page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/core-fans`) {
      if (!coreFansData) {
        return new Response(null, { status: 404 })
      }

      return new Response(JSON.stringify(coreFansData), {
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000/core-fans")

  await expect(page.locator("h1")).toHaveText("コメント数ランキング")

  await expect(page.getByRole("listitem")).toHaveCount(5)

  for (let i = 0; i < coreFansData.length; i++) {
    const item = await page.textContent(`li:nth-child(${i + 1})`)
    expect(item).toContain(coreFansData[i]?.name)
    expect(item).toContain(coreFansData[i]?.id)
  }
})
