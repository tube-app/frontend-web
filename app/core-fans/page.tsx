import React, { Suspense } from "react"

import { CoreFanSkeleton } from "@/components/skeletons/core-fan-skeleton"

import { CoreFansList } from "./_components/core-fans-list"

export default function CoreFansPage() {
  const token = "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a"

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">コメント数ランキング</h1>
        <span className="text-sm text-muted-foreground">全期間</span>
      </div>
      <Suspense
        fallback={
          <ul className="flex flex-col gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <CoreFanSkeleton rank={index + 1} />
              </li>
            ))}
          </ul>
        }
      >
        <CoreFansList token={token} />
      </Suspense>
    </div>
  )
}
