import React, { Suspense } from "react"
import { type SearchParamProps } from "@/types"

import { CommentThreadSkeleton } from "@/components/skeletons/comment-thread-skeleton"

import { Comments } from "./_components/comments"
import { isTabValue, type TabValue } from "./_components/types"
import { WithTab } from "./_components/with-tab"

export default function CommentsPage({ searchParams }: SearchParamProps) {
  const tabValue: TabValue = isTabValue(searchParams.tab)
    ? searchParams.tab
    : "core-fan"

  return (
    <WithTab>
      <Suspense
        fallback={
          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <CommentThreadSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Comments tabValue={tabValue} />
      </Suspense>
    </WithTab>
  )
}
