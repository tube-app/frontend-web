import Link from "next/link"
import { env } from "@/env.mjs"
import { ChevronRight } from "lucide-react"

import { type CommentsNumRanking } from "@/types/api/comments-num-ranking"
import { fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function CoreFansList() {
  const { data } = await fetcher<CommentsNumRanking>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/commentsNumRanking`,
  })

  return (
    <ul className="flex flex-col gap-3">
      {data.map((coreFan, index) => (
        <li key={coreFan.channel_id} className="rounded-md hover:bg-accent">
          <Link href={`/core-fans/${coreFan.channel_id}`}>
            <div className="flex items-center gap-3">
              <span className="min-w-[32px] text-right text-2xl font-bold tabular-nums">
                {index + 1}
              </span>
              <div className="flex flex-1 items-center gap-2">
                <Avatar className="size-14">
                  <AvatarImage src={coreFan.thumbnail} />
                  <AvatarFallback>
                    {coreFan.title.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span>{coreFan.title}</span>
                  <span className="text-xs text-muted-foreground">{`@${coreFan.channel_id}`}</span>
                </div>
              </div>
              <span className="text-xl">{coreFan.comment_num}</span>
              <ChevronRight size={24} className="text-muted-foreground" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
