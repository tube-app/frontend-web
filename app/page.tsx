import type { Metadata } from "next"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { calculateMonthlyPercentage } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "分析画面",
  description: "Generated by create next app",
}

export default function AnalysisPage() {
  return (
    <div className="flex flex-col gap-10">
      <ChannelStats
        image="https://github.com/shadcn.png"
        name="しまぶーのIT大学しまぶーのIT大学しまぶーのIT大学しまぶーのIT大学しまぶーのIT大学しまぶーのIT大学しまぶーのIT大学"
        subscribers={118000}
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">重要指標</p>
          <p className="text-sm text-muted-foreground">過去28日間</p>
        </div>
        <AnalyticsCard
          title="1動画当たりのコメント数"
          currentNum={123}
          prevNum={92}
        />
        <AnalyticsCard
          title="1動画当たりの高評価数"
          currentNum={804}
          prevNum={1234}
        />
      </div>
      <div>
        <p className="text-2xl font-bold">コメント返信状況</p>
      </div>
    </div>
  )
}

function ChannelStats({
  image,
  name,
  subscribers,
}: {
  image: string
  name: string
  subscribers: number
}) {
  return (
    <div className="flex items-center gap-3 self-stretch">
      <Avatar className="h-20 w-20">
        <AvatarImage src={image} />
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <p className="line-clamp-1 text-lg">{name}</p>
        <p className="text-2xl font-bold">{subscribers.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">チャンネル登録者</p>
      </div>
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
  const percentage = calculateMonthlyPercentage(currentNum, prevNum)
  const isPlus = !percentage.includes("-")

  return (
    <Card className="gap-2 px-3 py-2">
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold">{currentNum.toLocaleString()}</p>
          <div className="flex">
            <p className="text-muted-foreground">前月</p>
            <p className="text-muted-foreground">{prevNum.toLocaleString()}</p>
          </div>
        </div>
        <Badge
          variant={isPlus ? "plus" : "minus"}
          className="flex items-center justify-center gap-1 text-sm"
        >
          {isPlus ? <ArrowUpRight /> : <ArrowDownRight />}
          <span>{`${percentage.replace("-", "")}%`}</span>
        </Badge>
      </CardContent>
    </Card>
  )
}
