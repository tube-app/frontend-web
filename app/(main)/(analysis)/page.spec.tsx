import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { importantIndicators } from "@/lib/mock-data"

test("/analysis page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.NEXT_PUBLIC_API_ENDPOINT}/importantIndicators`) {
      return new Response(JSON.stringify(importantIndicators), {
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

  const currentNums = await page.locator('[data-testid="current-num"]').all()
  const commentCurrentMonth = await currentNums[0]?.textContent()
  const likeCurrentMonth = await currentNums[1]?.textContent()
  expect(commentCurrentMonth).toBe("123")
  expect(likeCurrentMonth).toBe("804")

  const prevNums = await page.locator('[data-testid="prev-num"]').all()
  const commentPrevMonth = await prevNums[0]?.textContent()
  const likePrevMonth = await prevNums[1]?.textContent()
  expect(commentPrevMonth).toBe("92")
  expect(likePrevMonth).toBe("1234")

  const rowPercentages = await page
    .locator('[data-testid="row-percentage"]')
    .all()
  const commentRowPercentage = await rowPercentages[0]?.textContent()
  const likeRowPercentage = await rowPercentages[1]?.textContent()

  expect(commentRowPercentage).toBe("33.7%")
  expect(likeRowPercentage).toBe("34.8%")
})
