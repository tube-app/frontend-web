import { Skeleton } from "@/components/ui/skeleton"

export function CommentSkeleton() {
  return (
    <div className="flex items-start space-x-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  )
}
