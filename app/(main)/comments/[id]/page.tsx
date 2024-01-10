import React from "react"
import Link from "next/link"
import { env } from "@/env.mjs"
import { type SearchParamProps } from "@/types"
import { ChevronLeft, Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { type CommentThread } from "@/types/api/comment-thread"
import { cn, fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { isTabValue, type TabValue } from "../_components/types"

//  TODO: ダミーデータの差し替え
export default async function CommentDetailsPage({
  params: { id },
  searchParams,
}: SearchParamProps) {
  const tabValue: TabValue = isTabValue(searchParams.tab)
    ? searchParams.tab
    : "core-fan"

  const thread = await fetcher<CommentThread>({
    url: `${env.API_ENDPOINT}/mock/comments/${id}?tab=${tabValue}`,
    cache: "no-store",
  })

  return (
    <div className="grid h-full gap-2">
      <header className="flex items-center gap-2">
        <Link
          href={`/comments?tab=${tabValue}`}
          className="rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">返信</h1>
      </header>
      <section className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage
            src={thread.commentAuthorIcon}
            alt={`@${thread.commentAuthorName}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <article className="grid w-full gap-1">
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
            <MoreVertical size={16} />
          </div>

          <ul className="mt-2 grid gap-2">
            {thread &&
              thread.replies?.comments.map((comment) => {
                const isLike = false

                return (
                  <li className="flex items-start space-x-4" key={comment.id}>
                    <Avatar>
                      <AvatarImage
                        src={comment.snippet.authorProfileImageUrl}
                        alt={`@${comment.snippet.authorDisplayName}`}
                      />
                      <AvatarFallback>
                        {comment.snippet.authorDisplayName
                          .slice(0, 2)
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid w-full gap-1">
                      <p className="text-sm text-muted-foreground">
                        {comment.snippet.authorDisplayName}
                      </p>
                      <p className="text-sm leading-none">
                        {comment.snippet.textDisplay}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <ThumbsUp size={12} />
                            <span className="text-sm">
                              {comment.snippet.likeCount}
                            </span>
                          </div>
                          <Heart
                            size={12}
                            className={cn(
                              isLike
                                ? "text-destructive"
                                : "text-muted-foreground"
                            )}
                          />
                        </div>
                        <MoreVertical size={16} />
                      </div>
                    </div>
                  </li>
                )
              })}
          </ul>
        </article>
      </section>
    </div>
  )
}
