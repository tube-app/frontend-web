import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { commentsNumRanking } from "@/lib/mock-data"

test("/core-fans page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.NEXT_PUBLIC_API_ENDPOINT}/commentsNumRanking`) {
      return new Response(JSON.stringify(commentsNumRanking), {
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000/core-fans")

  await expect(page.locator("h1")).toHaveText("コメント数ランキング")

  await expect(page.getByRole("listitem")).toHaveCount(5)

  for (let i = 0; i < commentsNumRanking.data.length; i++) {
    const item = await page.textContent(`li:nth-child(${i + 1})`)
    expect(item).toContain(commentsNumRanking.data[i]?.title)
    expect(item).toContain(commentsNumRanking.data[i]?.channel_id)
  }
})
