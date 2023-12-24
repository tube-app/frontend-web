import { Suspense } from "react"
import type { Metadata } from "next"
import { env } from "@/env.mjs"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { type Analysis } from "@/types/api/analysis"
import {
  computeMonthOverMonthChangeRate,
  fetcher,
  getAbsoluteValueRoundedToOneDecimal,
} from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChannelStatsSkeleton } from "@/components/skeletons/channel-stats-skeleton"
import { KeyIndicatorSkeleton } from "@/components/skeletons/key-indicator-skeleton"

export const metadata: Metadata = {
  title: "分析画面",
  description: "Generated by create next app",
}

export default function AnalysisPage() {
  // sessionから取得？
  const token = "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a"

  return (
    <div className="flex flex-col gap-10">
      <Suspense fallback={<ChannelStatsSkeleton />}>
        <ChannelStats token={token} />
      </Suspense>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">重要指標</p>
          <p className="text-sm text-muted-foreground">過去28日間</p>
        </div>
        <Suspense fallback={<KeyIndicatorSkeleton count={2} />}>
          <KeyIndicator token={token} />
        </Suspense>
      </div>
      <div>
        <p className="text-2xl font-bold">コメント返信状況</p>
      </div>
    </div>
  )
}

async function ChannelStats({ token }: { token: string }) {
  const { user, analytics } = await fetcher<Analysis>({
    url: `${env.API_ENDPOINT}/mock/analysis`,
    headers: { token: token },
  })

  return (
    <div className="flex items-center gap-3 self-stretch">
      <Avatar className="h-20 w-20">
        <AvatarImage src={user.image} />
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <p className="line-clamp-1 text-lg">{user.name}</p>
        <p className="text-2xl font-bold">
          {analytics.subscribers.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">チャンネル登録者</p>
      </div>
    </div>
  )
}

async function KeyIndicator({ token }: { token: string }) {
  const { analytics } = await fetcher<Analysis>({
    url: `${env.API_ENDPOINT}/mock/analysis`,
    headers: { token: token },
  })

  return (
    <div className="flex flex-col gap-2">
      <AnalyticsCard
        title="1動画当たりのコメント数"
        currentNum={analytics.commentCurrentMonth}
        prevNum={analytics.commentPrevMonth}
      />
      <AnalyticsCard
        title="1動画当たりの高評価数"
        currentNum={analytics.likeCurrentMonth}
        prevNum={analytics.likePrevMonth}
      />
    </div>
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
          <p className="text-4xl font-bold" data-testid="current-num">
            {currentNum.toString()}
          </p>
          <div className="flex">
            <p className="text-muted-foreground">前月</p>
            <p className="text-muted-foreground" data-testid="prev-num">
              {prevNum.toString()}
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
