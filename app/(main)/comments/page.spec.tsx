import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { firstComment } from "@/lib/mock-data"

test("/comments component - successful data rendering", async ({
  page,
  next,
}) => {
  next.onFetch((request) => {
    if (
      request.url ===
      `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=core-fan`
    ) {
      return new Response(JSON.stringify(firstComment), {
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000/comments")

  const title = await page.textContent("h2")
  expect(title).toBe("lofi hip hop radio - beats to relax/study to")

  const thumbnail = await page.getAttribute("img", "src")
  expect(thumbnail).toBe(
    "/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F5qap5aO4i9A%2Fhqdefault.jpg&w=3840&q=75"
  )
  const commentAuthorName = await page.textContent("p")
  expect(commentAuthorName).toBe("Example User: core-fan")

  const commentContent = await page.textContent("p + p")
  expect(commentContent).toBe(
    "lorem ipsum dolor sit amet consectetur adipiscing elit justo"
  )

  const likeCount = await page.textContent("div > div > div > div > div > div")
  expect(likeCount).toBe("10")

  const isLiked = await page.getAttribute("svg[fill]", "fill")
  expect(isLiked).toBe("none")

  const replyCount = await page.textContent("a")
  expect(replyCount).toBe("1 件の返信を表示")
})
