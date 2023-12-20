import { type CommentThread } from "@/types/api/comment-thread"

export function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const tab = searchParams.get("tab")

  const coreFanData: CommentThread[] = [
    {
      id: "9gy1b3V0dWJlQ34tbWVudElk",
      kind: "youtube#commentThreadListResponse",
      tag: "core-fan",
      title: "lofi hip hop radio - beats to relax/study to",
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorName: "Example User: core-fan",
      commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
    },
    {
      id: "Ugy1b3V0dWJlQ39tbWVudElk",
      kind: "youtube#commentThreadListResponse",
      tag: "core-fan",
      title: "lofi hip hop radio - beats to relax/study to",
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorName: "Example User: core-fan",
      commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
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
              authorDisplayName: "Reply User 22222",
              authorProfileImageUrl:
                "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
    },
  ]
  const firstData: CommentThread[] = [
    {
      id: "Ugy1b3V0dWJlQ55tbWVudElk",
      kind: "youtube#commentThreadListResponse",
      tag: "first",
      title: "lofi hip hop radio - beats to relax/study to",
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorName: "Example User: first",
      commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
      commentContent:
        "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
      likeCount: 7,
      isLiked: false,
      replies: {
        comments: [
          {
            kind: "youtube#comment",
            tag: "reply",
            id: "Ugy1b3V0dWJlQ55tbWVudElk_1",
            snippet: {
              authorDisplayName: "Reply User 1",
              authorProfileImageUrl:
                "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
    },
  ]

  const replyData: CommentThread[] = [
    {
      id: "Ugy1b3V0dWJlQ32tbWVudElk",
      kind: "youtube#commentThreadListResponse",
      tag: "reply",
      title: "lofi hip hop radio - beats to relax/study to",
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorName: "Example User: reply",
      commentAuthorIcon: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      commentAuthorChannelUrl: "http://www.youtube.com/channel/UC-Example",
      commentContent:
        "lorem ipsum dolor sit amet consectetur adipiscing elit justo",
      likeCount: 8,
      isLiked: true,
      replies: {
        comments: [
          {
            id: "Ugy1b3V0dWJlQ32tbWVudElk_1",
            kind: "youtube#comment",
            tag: "reply",
            snippet: {
              authorDisplayName: "Reply User 1",
              authorProfileImageUrl:
                "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
          {
            id: "Ugy1b3V0dWJlQ32tbWVudElk_2",
            kind: "youtube#comment",
            tag: "reply",
            snippet: {
              authorDisplayName: "Reply User 2",
              authorProfileImageUrl:
                "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
          {
            id: "Ugy1b3V0dWJlQ32tbWVudElk_3",
            kind: "youtube#comment",
            tag: "reply",
            snippet: {
              authorDisplayName: "Reply User 3",
              authorProfileImageUrl:
                "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
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
    },
  ]

  let filteredData: CommentThread[] = []

  switch (tab) {
    case "core-fan":
      filteredData = coreFanData
      break
    case "first":
      filteredData = firstData
      break
    case "reply":
      filteredData = replyData
      break
    default:
      filteredData = coreFanData
  }

  return new Response(JSON.stringify(filteredData), {
    headers: { "Content-Type": "application/json" },
  })
}
