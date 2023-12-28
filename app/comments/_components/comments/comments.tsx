import React from "react"
import Image from "next/image"
import Link from "next/link"
import { env } from "@/env.mjs"
import { Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { type CommentThread } from "@/types/api/comment-thread"
import { fetcher } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

import { type TabValue } from "../types"

interface CommentsProps {
  tabValue: TabValue
}

export async function Comments({ tabValue }: CommentsProps) {
  const commentThreads = await fetcher<CommentThread[]>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=${tabValue}`,
    cache: "no-store",
  })

  // const commentThreads: CommentThread[] = [
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
  //           id: "9gy1b3V0dWJlQ34tbWVudElk_1",
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

  return (
    <section className="flex flex-col gap-4">
      {commentThreads.map((thread) => (
        <div key={thread.id}>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{thread.title}</h2>
            <div className="w-20 lg:w-24">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={thread.thumbnail}
                  alt="thumbnail"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage
                src={thread.commentAuthorIcon}
                alt={`@${thread.commentAuthorName}`}
              />
              <AvatarFallback>
                {thread.commentAuthorName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid w-full gap-1">
              <p className="text-sm text-muted-foreground">
                {thread.commentAuthorName}
              </p>
              <p className="text-sm leading-none">{thread.commentContent}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={12} />
                    <span className="text-sm">{thread.likeCount}</span>
                  </div>
                  <Heart
                    fill={thread.isLiked ? "red" : "none"}
                    size={12}
                    className="text-destructive"
                  />
                </div>
                {/* TODO: アイコンを押下して、コメントに対する操作を行う */}
                <MoreVertical size={16} />
              </div>
              {thread.replies && (
                <Link
                  href={`/comments/${thread.id}?tab=${tabValue}`}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "w-fit hover:bg-yt-blue-2",
                  })}
                >
                  <span className="text-sm tabular-nums text-yt-blue-8">
                    {thread.replies.comments.length} 件の返信を表示
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
