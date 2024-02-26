import React from "react"
import Image from "next/image"
// import Link from "next/link"
import { env } from "@/env.mjs"
import { Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { type FirstComment } from "@/types/api/first-comment"
// import { type UnRepliedComments } from "@/types/api/unreplied-comments"
import { fetcher } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import { buttonVariants } from "@/components/ui/button"

// import { type TabValue } from "../types"

// interface CommentsProps {
//   tabValue: TabValue
// }

// export async function Comments({ tabValue }: CommentsProps) {
export async function Comments() {
  const { data: firstComment } = await fetcher<FirstComment>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/firstComment`,
    cache: "no-store",
  })

  return (
    <section className="flex flex-col gap-4">
      {firstComment.map((thread) => (
        <div key={thread.videoId}>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{thread.videoTitle}</h2>
            <div className="w-20 lg:w-24">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  // TODO: APIレスポンスに差し替え
                  src="https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg"
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
                // TODO: APIレスポンスに差し替え
                src="https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg"
                alt={thread.authorCustomUrl}
              />
              <AvatarFallback>
                {thread.authorTitle.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid w-full gap-1">
              <p className="text-sm text-muted-foreground">
                {thread.authorTitle}
              </p>
              <p className="text-sm leading-none">{thread.TextDisplay}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={12} />
                    {/* TODO: APIレスポンスに差し替え */}
                    <span className="text-sm">{10}</span>
                  </div>
                  <Heart
                    // TODO: APIレスポンスに差し替え
                    // fill={thread.isLiked ? "red" : "none"}
                    fill="none"
                    size={12}
                    className="text-destructive"
                  />
                </div>
                {/* TODO: アイコンを押下して、コメントに対する操作を行う */}
                <MoreVertical size={16} />
              </div>
              {/* // TODO: APIレスポンスに差し替え */}
              {/* {thread.replies && (
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
              )} */}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
