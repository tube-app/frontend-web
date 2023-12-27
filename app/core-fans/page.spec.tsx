import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { type CoreFans } from "@/types/api/core-fans"

const data: CoreFans[] = [
  {
    name: "いかついやーつ",
    id: "jfdijafjiodsjfdsa",
    image: "https://github.com/shadcn.png",
    commentNum: 35,
  },
  {
    name: "ゲーム好きなやーつ",
    id: "fdasfsafsaf",
    image: "https://github.com/shadcn.png",
    commentNum: 23,
  },
  {
    name: "ダンスしてるやーつ",
    id: "fdasfbbbg",
    image: "https://github.com/shadcn.png",
    commentNum: 20,
  },
  {
    name: "観戦してるやーつ",
    id: "bntrnr",
    image: "https://github.com/shadcn.png",
    commentNum: 19,
  },
  {
    name: "ネッシーやーつ",
    id: "nessy",
    image: "https://github.com/shadcn.png",
    commentNum: 16,
  },
]
test("/core-fans page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.API_ENDPOINT}/mock/core-fans`) {
      const token = request.headers.get("token")

      if (!data) {
        return new Response(null, { status: 404 })
      }

      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000/core-fans")

  await expect(page.locator("h1")).toHaveText("コメント数ランキング")

  await expect(page.getByRole("listitem")).toHaveCount(5)

  const coreFanIds = await page.locator('[data-testid="coreFan-id"]').all()
  for (let i = 0; i < coreFanIds.length; i++) {
    const coreFanId = await coreFanIds[i]?.textContent()
    expect(coreFanId).toBe(`@${data[i]?.id}`)
  }
})
