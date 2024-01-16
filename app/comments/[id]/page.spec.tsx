import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

import { coreFanData } from "@/app/api/mock/comments/data"

test("/comments/:id - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (
      request.url ===
      `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments/9gy1b3V0dWJlQ34tbWVudElk?tab=core-fan`
    ) {
      return new Response(JSON.stringify(coreFanData[0]))
    }
  })
  await page.goto(
    "http://localhost:3000/comments/9gy1b3V0dWJlQ34tbWVudElk?tab=core-fan"
  )

  const h1 = await page.textContent("h1")
  expect(h1).toBe("返信")

  const commentAuthorName = await page.textContent(
    "p.text-sm.text-muted-foreground"
  )
  expect(commentAuthorName).toBe("Example User: core-fan")

  const commentContent = await page.textContent("p.text-sm.leading-none")
  expect(commentContent).toBe(
    "lorem ipsum dolor sit amet consectetur adipiscing elit justo"
  )

  const likeCount = await page.textContent("span.text-sm")
  expect(likeCount).toBe("10")

  const heart = await page.getAttribute("svg.text-destructive", "fill")
  expect(heart).toBe("red")

  const replies = await page.textContent("ul.grid.gap-2")
  expect(replies).toBe("REReply User 1This is a reply to the example comment.5")

  const replyAuthorName = await page.textContent(
    "div.grid.w-full.gap-1 > p.text-sm.text-muted-foreground"
  )
  expect(replyAuthorName).toBe("Reply User 1")

  const replyContent = await page.textContent(
    "div.grid.w-full.gap-1 > p.text-sm.leading-none"
  )
  expect(replyContent).toBe("This is a reply to the example comment.")
})
