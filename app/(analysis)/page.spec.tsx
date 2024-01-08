import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { type Analysis } from "@/types/api/analysis"

import { analysisData, userData } from "../api/mock/analysis/data"

test("/analysis page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/analysis`) {
      const token = request.headers.get("token")

      const user = userData.find((user) => user.id === token)
      const analytics = analysisData.find((data) => data.id === user?.id)
      if (!user || !analytics) {
        return new Response(null, { status: 404 })
      }

      const res: Analysis = {
        user,
        analytics,
      }

      return new Response(JSON.stringify(res), {
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000")

  const userImage = await page.getAttribute("img", "src")
  expect(userImage).toBe("https://github.com/shadcn.png")

  const userName = await page.textContent("p.line-clamp-1.text-lg")
  expect(userName).toBe("しまぶーのIT大学")

  const subscribers = await page.textContent("p.text-2xl.font-bold")
  expect(subscribers).toBe("118,000")

  const comment = page.getByRole("listitem", {
    name: "1動画当たりのコメント数",
  })
  await expect(comment).toContainText("123")
  await expect(comment).toContainText("92")
  await expect(comment).toContainText("33.7%")

  const like = page.getByRole("listitem", { name: "1動画当たりの高評価数" })
  await expect(like).toContainText("804")
  await expect(like).toContainText("1234")
  await expect(like).toContainText("34.8%")
})
