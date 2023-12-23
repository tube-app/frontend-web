import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { type Analysis } from "@/types/api/analysis"
import { type User } from "@/types/api/user"
import { computeMonthOverMonthChangeRate } from "@/lib/utils"

test("/analysis page - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.API_ENDPOINT}/mock/analysis`) {
      const token = request.headers.get("token")
      const userData: User[] = [
        {
          id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
          userId: "jfdijafjiodsjfdsa",
          name: "しまぶーのIT大学",
          image: "https://github.com/shadcn.png",
        },
        {
          id: "a2fcb3ec-f0cb-4c63-92d4-1f0a278ff96e",
          userId: "fdasfsafsaf",
          name: "いかついやーつ",
          image: "https://github.com/shadcn.png",
        },
        {
          id: "e4bca1fb-64f2-4352-b29b-7cf51d3e6f82",
          userId: "fdasfbbbg",
          name: "ゲーム好きなやーつ",
          image: "https://github.com/shadcn.png",
        },
      ]

      const user = userData.find((user) => user.id === token)

      if (!user) {
        return new Response(null, { status: 404 })
      }

      const res: Analysis = {
        user: user,
        analytics: {
          id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
          subscribers: 118000,
          commentCurrentMonth: 123,
          commentPrevMonth: 92,
          likeCurrentMonth: 804,
          likePrevMonth: 1234,
        },
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
