import React from "react"
import Link from "next/link"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CoreFanComments from "./_components/core-fan-comments"
import FirstComments from "./_components/first-comments"
import ReplyComments from "./_components/reply-comments"

export default function CommentsPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  const tabValue = (searchParams.tab as string) || "core-fan"

  return (
    <div className="grid h-full gap-2 py-4 lg:py-6">
      <h1 className="text-2xl font-bold">コメント一覧</h1>
      <Tabs defaultValue={tabValue} className="mr-4  h-full space-y-4 sm:mr-0">
        <TabsList>
          <Link href="/comments?tab=core-fan">
            <TabsTrigger value="core-fan">コアファンユーザー</TabsTrigger>
          </Link>
          <Link href="/comments?tab=first">
            <TabsTrigger value="first">初回のコメント</TabsTrigger>
          </Link>
          <Link href="/comments?tab=reply">
            <TabsTrigger value="reply">返信済みのコメント</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent
          value="core-fan"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <CoreFanComments tabValue={tabValue} />
        </TabsContent>
        <TabsContent
          value="first"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <FirstComments tabValue={tabValue} />
        </TabsContent>
        <TabsContent
          value="reply"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <ReplyComments tabValue={tabValue} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
