import { Skeleton } from "@/components/ui/skeleton"

export function ChannelStatsSkeleton() {
  return (
    <div className="flex items-center gap-3 self-stretch">
      <Skeleton className="size-20 rounded-full" />
      <div className="flex flex-col items-start justify-center space-y-1">
        <Skeleton className="h-7 w-32" />
        <Skeleton className="h-6 w-16" />
        <p className="text-sm text-muted-foreground">チャンネル登録者</p>
      </div>
    </div>
  )
}
