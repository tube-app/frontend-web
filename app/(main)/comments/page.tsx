import React, { Suspense } from "react"
import { type SearchParamProps } from "@/types"

import { CommentThreadSkeleton } from "@/components/skeletons/comment-thread-skeleton"

import { Comments, isTabValue, WithTab, type TabValue } from "./_components"

export default function CommentsPage({ searchParams }: SearchParamProps) {
  const tabValue: TabValue = isTabValue(searchParams.tab)
    ? searchParams.tab
    : "core-fan"

  return (
    <WithTab>
      <Suspense
        key={tabValue}
        fallback={
          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <CommentThreadSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Comments />
      </Suspense>
    </WithTab>
  )
}
