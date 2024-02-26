import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"

export function CommentThreadSkeleton() {
  return (
    <div className="h-full flex-col border-none p-0 data-[state=active]:flex">
      <div className="flex justify-between">
        <Skeleton className="h-8 w-24" />
        <div className="w-20 lg:w-24">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Skeleton className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="grid w-full gap-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-full" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Skeleton className="size-4 rounded-full" />
              </div>
              <Skeleton className="size-4 rounded-full" />
            </div>
            <Skeleton className="size-4" />
          </div>
          <Skeleton className="h-10 w-40 px-4" />
        </div>
      </div>
    </div>
  )
}
