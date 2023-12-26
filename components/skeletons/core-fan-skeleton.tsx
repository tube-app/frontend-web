import { ChevronRight } from "lucide-react"

import { Skeleton } from "../ui/skeleton"

export function CoreFanSkeleton({ rank }: { rank: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="min-w-[32px] text-right text-2xl font-bold tabular-nums">
        {rank}
      </span>
      <div className="flex flex-1 items-center gap-2">
        <Skeleton className="h-14 w-14 rounded-full" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-80" />
          <Skeleton className="h-3 w-40 " />
        </div>
      </div>
      <Skeleton className="h-7 w-7" />
      <ChevronRight size={24} className="text-muted-foreground" />
    </div>
  )
}
