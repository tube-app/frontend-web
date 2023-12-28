import React, { Suspense } from "react"
import Link from "next/link"
import { env } from "@/env.mjs"
import { ChevronRight } from "lucide-react"

import { type CoreFans } from "@/types/api/core-fans"
import { fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CoreFanSkeleton } from "@/components/skeletons/core-fan-skeleton"

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

async function CoreFansList({ token }: { token: string }) {
  const coreFans = await fetcher<CoreFans[]>({
    url: `${env.API_ENDPOINT}/mock/core-fans`,
    headers: { token },
  })

  return (
    <ul className="flex flex-col gap-3">
      {coreFans.map((coreFan, index) => (
        <li key={coreFan.id} className="rounded-md hover:bg-accent">
          <Link href={`/core-fans/${coreFan.id}`}>
            <div className="flex items-center gap-3">
              <span className="min-w-[32px] text-right text-2xl font-bold tabular-nums">
                {index + 1}
              </span>
              <div className="flex flex-1 items-center gap-2">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={coreFan.image} />
                  <AvatarFallback>
                    {coreFan.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span>{coreFan.name}</span>
                  <span
                    className="text-xs text-muted-foreground"
                    data-testid="coreFan-id"
                  >{`@${coreFan.id}`}</span>
                </div>
              </div>
              <span className="text-xl">{coreFan.commentNum}</span>
              <ChevronRight size={24} className="text-muted-foreground" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
