import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

test("/comments/:id - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (
      request.url ===
      `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments/9gy1b3V0dWJlQ34tbWVudElk?tab=core-fan`
    ) {
      return new Response(
        JSON.stringify({
          id: "9gy1b3V0dWJlQ34tbWVudElk",
          kind: "youtube#commentThreadListResponse",
          tag: "core-fan",
          title: "lofi hip hop radio - beats to relax/study to",
          thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
          commentAuthorName: "Example User: core-fan",
          commentAuthorIcon:
            "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
          commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
          commentContent:
            "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
          likeCount: 10,
          isLiked: true,
          replies: {
            comments: [
              {
                id: "9gy1b3V0dWJlQ34tbWVudElk_1",
                kind: "youtube#comment",
                tag: "reply",
                snippet: {
                  authorDisplayName: "Reply User 1",
                  authorProfileImageUrl: "http://example.com/reply1.jpg",
                  authorChannelUrl: "http://www.youtube.com/channel/UC-Reply1",
                  authorChannelId: {
                    value: "UC-Reply1",
                  },
                  videoId: "dQw4w9WgXcQ",
                  textDisplay: "This is a reply to the example comment.",
                  textOriginal: "This is a reply to the example comment.",
                  parentId: "Ugy1b3V0dWJlQ29tbWVudElk",
                  canRate: true,
                  viewerRating: "none",
                  likeCount: 5,
                  publishedAt: "2023-12-15T13:00:00Z",
                  updatedAt: "2023-12-15T13:00:00Z",
                },
              },
            ],
          },
        })
      )
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
