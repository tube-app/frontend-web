import React, { Suspense } from "react"
import Link from "next/link"
import { ChevronLeft, Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChildComments } from "@/components/child-comments"
import { CommentSkeleton } from "@/components/skeletons/comment-skeleton"

import { isTabValue, type TabValue } from "../_components/types"

interface CommentDetailsPageProps {
  params: {
    id: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

//  TODO: ダミーデータの差し替え
export default function CommentDetailsPage({
  params,
  searchParams,
}: CommentDetailsPageProps) {
  const tabValue: TabValue = isTabValue(searchParams.tab)
    ? searchParams.tab
    : "core-fan"

  const isHeart = false

  return (
    <div className="grid h-full gap-2">
      <div className="flex items-center gap-2">
        <Link
          href={`/comments?tab=${tabValue}`}
          className="rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">返信</h1>
      </div>
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">ユーザー名</p>
          <p className="text-sm leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsa voluptates reprehenderit vero eos molestias accusamus quam ex
            delectus minus, voluptatum, dolore eum commodi solu ta ipsam, iure
            quos mollitia sed!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp size={12} />
                <span className="text-sm">{1}</span>
              </div>
              <Heart
                size={12}
                className={cn(
                  isHeart ? "text-destructive" : "text-muted-foreground"
                )}
              />
            </div>
            <MoreVertical size={16} />
          </div>
          <Suspense
            fallback={
              <div className="mt-2 grid gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <CommentSkeleton key={i} />
                ))}
              </div>
            }
          >
            <ChildComments id={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
