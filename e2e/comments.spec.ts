import { expect, test } from "next/experimental/testmode/playwright"

test("タブ切り替えのテスト", async ({ page }) => {
  await page.goto("/comments")

  // await page.route("/api/mock/comments?tab=core-fan", async (route) => {
  //   await route.fulfill({
  //     status: 200,
  //     contentType: "application/json",
  //     body: JSON.stringify([]),
  //   })
  // })

  // const coreFanData: CommentThread[] = [
  //   {
  //     id: "9gy1b3V0dWJlQ34tbWVudElk",
  //     kind: "youtube#commentThreadListResponse",
  //     tag: "core-fan",
  //     title: "lofi hip hop radio - beats to relax/study to",
  //     thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
  //     commentAuthorName: "Example User: core-fan",
  //     commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
  //     commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
  //     commentContent:
  //       "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
  //     likeCount: 10,
  //     isLiked: true,
  //     replies: {
  //       comments: [
  //         {
  //           id: "9gy1b3V0dWJlQ34tbWVudElk_1",Error: No test info for GET http://localhost:3000/api/mock/comments?tab=core-fan
  //           kind: "youtube#comment",
  //           tag: "reply",
  //           snippet: {
  //             authorDisplayName: "Reply User 1",
  //             authorProfileImageUrl: "http://example.com/reply1.jpg",
  //             authorChannelUrl: "http://www.youtube.com/channel/UC-Reply1",
  //             authorChannelId: {
  //               value: "UC-Reply1",
  //             },
  //             videoId: "dQw4w9WgXcQ",
  //             textDisplay: "This is a reply to the example comment.",
  //             textOriginal: "This is a reply to the example comment.",
  //             parentId: "Ugy1b3V0dWJlQ29tbWVudElk",
  //             canRate: true,
  //             viewerRating: "none",
  //             likeCount: 5,
  //             publishedAt: "2023-12-15T13:00:00Z",
  //             updatedAt: "2023-12-15T13:00:00Z",
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: "Ugy1b3V0dWJlQ39tbWVudElk",
  //     kind: "youtube#commentThreadListResponse",
  //     tag: "core-fan",
  //     title: "lofi hip hop radio - beats to relax/study to",
  //     thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
  //     commentAuthorName: "Example User: core-fan",
  //     commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
  //     commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
  //     commentContent:
  //       "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
  //     likeCount: 10,
  //     isLiked: true,
  //     replies: {
  //       comments: [
  //         {
  //           id: "Ugy1b3V0dWJlQ39tbWVudElk",
  //           kind: "youtube#comment",
  //           tag: "reply",
  //           snippet: {
  //             authorDisplayName: "Reply User 22222",
  //             authorProfileImageUrl:
  //               "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
  //             authorChannelUrl: "http://www.youtube.com/channel/UC-Reply1",
  //             authorChannelId: {
  //               value: "UC-Reply1",
  //             },
  //             videoId: "dQw4w9WgXcQ",
  //             textDisplay: "This is a reply to the example comment.",
  //             textOriginal: "This is a reply to the example comment.",
  //             parentId: "Ugy1b3V0dWJlQ29tbWVudElk",
  //             canRate: true,
  //             viewerRating: "none",
  //             likeCount: 5,
  //             publishedAt: "2023-12-15T13:00:00Z",
  //             updatedAt: "2023-12-15T13:00:00Z",
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ]

  // await page.route("**/api/mock/comments?tab=core-fan", async (route) => {
  //   await route.fulfill({
  //     status: 200,
  //     contentType: "application/json",
  //     body: JSON.stringify(coreFanData),
  //   })
  // })

  await page.getByRole("button", { name: "初回のコメント" }).click()
  await expect(page).toHaveURL("/comments?tab=first")

  await page.getByRole("button", { name: "返信済みのコメント" }).click()
  await expect(page).toHaveURL("/comments?tab=reply")

  await page.getByRole("button", { name: "コアファンユーザー" }).click()
  await expect(page).toHaveURL("/comments?tab=core-fan")

  await page.getByRole("link", { name: "件の返信を表示" }).first().click()
  await expect(page).toHaveURL(
    "/comments/9gy1b3V0dWJlQ34tbWVudElk?tab=core-fan"
  )

  // await page.goto("/comments/9gy1b3V0dWJlQ34tbWVudElk?tab=core-fan")
  // await page.getByRole("main").getByRole("link").click()
})
