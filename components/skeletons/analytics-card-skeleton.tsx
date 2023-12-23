import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export function AnalyticsCardSkeleton() {
  return (
    <Card className="gap-2 px-3 py-2 space-y-1">
      <CardHeader className="p-0">
        <Skeleton className="h-5 w-48" />
      </CardHeader>
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex items-baseline gap-2">
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}
