import { env } from "@/env.mjs"
import { type Meta, type StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { type CommentThread } from "@/types/api/comment-thread"

import { Comments } from "."

const server = setupServer()

const meta = {
  title: "Comments/Comments",
  component: Comments,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      server.listen()

      return <Story />
    },
  ],
} satisfies Meta<typeof Comments>

export default meta
type Story = StoryObj<typeof Comments>
export const Default: Story = {
  args: {
    tabValue: "core-fan",
  },
  decorators: [
    (Story) => {
      server.use(
        rest.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=core-fan`,
          (req, res, ctx) => {
            return res(ctx.json(coreFanData))
          }
        )
      )

      return <Story />
    },
  ],
}

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
