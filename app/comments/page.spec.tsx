import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

test("/comments component - successful data rendering", async ({
  page,
  next,
}) => {
  next.onFetch((request) => {
    if (
      request.url ===
      `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=core-fan`
    ) {
      return new Response(
        JSON.stringify([
          {
            id: "9gy1b3V0dWJlQ34tbWVudElk",
            kind: "youtube#commentThreadListResponse",
            tag: "core-fan",
            title: "lofi hip hop radio - beats to relax/study to",
            thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
            commentAuthorName: "Example User: core-fan",
            commentAuthorIcon:
              "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
            commentAuthorChannelUrl:
              "http://www.youtube.com/channel/UC-Example",
            commentContent:
              "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
            likeCount: 10,
            isLiked: true,
            replies: {
              comments: [
                {
                  id: "9gy1b3V0dWJlQ34tbWVudElk",
                  kind: "youtube#comment",
                  tag: "reply",
                  snippet: {
                    authorDisplayName: "Reply User 1",
                    authorProfileImageUrl: "http://example.com/reply1.jpg",
                    authorChannelUrl:
                      "http://www.youtube.com/channel/UC-Reply1",
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
          },
          {
            id: "Ugy1b3V0dWJlQ39tbWVudElk",
            kind: "youtube#commentThreadListResponse",
            tag: "core-fan",
            title: "lofi hip hop radio - beats to relax/study to",
            thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
            commentAuthorName: "Example User: core-fan",
            commentAuthorIcon:
              "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
            commentAuthorChannelUrl:
              "http://www.youtube.com/channel/UC-Example",
            commentContent:
              "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
            likeCount: 10,
            isLiked: true,
            replies: {
              comments: [
                {
                  id: "Ugy1b3V0dWJlQ39tbWVudElk",
                  kind: "youtube#comment",
                  tag: "reply",
                  snippet: {
                    authorDisplayName: "Reply User 1",
                    authorProfileImageUrl: "http://example.com/reply1.jpg",
                    authorChannelUrl:
                      "http://www.youtube.com/channel/UC-Reply1",
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
          },
        ]),
        { headers: { "Content-Type": "application/json" } }
      )
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
