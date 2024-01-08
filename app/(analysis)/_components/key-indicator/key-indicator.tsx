import { env } from "@/env.mjs"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { type Analysis } from "@/types/api/analysis"
import {
  computeMonthOverMonthChangeRate,
  fetcher,
  getAbsoluteValueRoundedToOneDecimal,
} from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function KeyIndicator({ token }: { token: string }) {
  const { analytics } = await fetcher<Analysis>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/analysis`,
    headers: { token },
  })
  const indicators = [
    {
      title: "1動画当たりのコメント数",
      currentNum: analytics.currentMonth.comment,
      prevNum: analytics.prevMonth.comment,
    },
    {
      title: "1動画当たりの高評価数",
      currentNum: analytics.currentMonth.like,
      prevNum: analytics.prevMonth.like,
    },
  ]

  return (
    <ul className="flex flex-col gap-2">
      {indicators.map((indicator) => (
        <li key={indicator.title} aria-label={indicator.title}>
          <AnalyticsCard
            title={indicator.title}
            currentNum={indicator.currentNum}
            prevNum={indicator.prevNum}
          />
        </li>
      ))}
    </ul>
  )
}

function AnalyticsCard({
  title,
  currentNum,
  prevNum,
}: {
  title: string
  currentNum: number
  prevNum: number
}) {
  const rowPercentage = computeMonthOverMonthChangeRate(currentNum, prevNum)
  const isPlus = rowPercentage > 0 ? true : false

  return (
    <Card className="gap-2 px-3 py-2">
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold">{currentNum.toString()}</p>
          <div className="flex">
            <p className="text-muted-foreground">前月</p>
            <p className="text-muted-foreground">{prevNum.toString()}</p>
          </div>
        </div>
        {rowPercentage !== 0 ? (
          <Badge
            variant={isPlus ? "plus" : "minus"}
            className="flex items-center justify-center gap-1 text-sm"
          >
            {isPlus ? <ArrowUpRight /> : <ArrowDownRight />}
            <span>
              {`${getAbsoluteValueRoundedToOneDecimal(rowPercentage)}%`}
            </span>
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  )
}
