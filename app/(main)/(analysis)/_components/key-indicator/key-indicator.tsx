import { env } from "@/env.mjs"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { type ImportantIndicators } from "@/types/api/important-indicators"
import {
  computeMonthOverMonthChangeRate,
  fetcher,
  getAbsoluteValueRoundedToOneDecimal,
} from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function KeyIndicator() {
  const { data } = await fetcher<ImportantIndicators>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/importantIndicators`,
  })
  const indicators = [
    {
      title: "1動画当たりのコメント数",
      thisCount: data.this.avgCommentCount,
      lastCount: data.last.avgCommentCount,
    },
    {
      title: "1動画当たりの高評価数",
      thisCount: data.this.avgLikeCount,
      lastCount: data.last.avgLikeCount,
    },
    {
      title: "1動画当たりの視聴回数",
      thisCount: data.this.avgViewCount,
      lastCount: data.last.avgViewCount,
    },
  ]

  return (
    <ul className="flex flex-col gap-2">
      {indicators.map((indicator) => (
        <li key={indicator.title}>
          <AnalyticsCard
            title={indicator.title}
            thisCount={indicator.thisCount}
            lastCount={indicator.lastCount}
          />
        </li>
      ))}
    </ul>
  )
}

function AnalyticsCard({
  title,
  thisCount,
  lastCount,
}: {
  title: string
  thisCount: number
  lastCount: number
}) {
  const rowPercentage = computeMonthOverMonthChangeRate(thisCount, lastCount)
  const isPlus = rowPercentage > 0 ? true : false

  return (
    <Card className="gap-2 px-3 py-2">
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold" data-testid="current-num">
            {thisCount.toString()}
          </p>
          <div className="flex">
            <p className="text-muted-foreground">前月</p>
            <p className="text-muted-foreground" data-testid="prev-num">
              {lastCount.toString()}
            </p>
          </div>
        </div>
        {rowPercentage !== 0 ? (
          <Badge
            variant={isPlus ? "plus" : "minus"}
            className="flex items-center justify-center gap-1 text-sm"
          >
            {isPlus ? <ArrowUpRight /> : <ArrowDownRight />}
            <span data-testid="row-percentage">
              {`${getAbsoluteValueRoundedToOneDecimal(rowPercentage)}%`}
            </span>
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  )
}
