import Link from "next/link"
import { env } from "@/env.mjs"
import { ChevronRight } from "lucide-react"

import { type CoreFans } from "@/types/api/core-fans"
import { fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function CoreFansList({ token }: { token: string }) {
  const coreFans = await fetcher<CoreFans[]>({
    url: `${env.API_ENDPOINT}/mock/core-fans`,
    headers: { token },
  })

  return (
    <ul className="flex flex-col gap-3">
      {coreFans.map((coreFan, index) => (
        <li key={coreFan.id} className="rounded-md hover:bg-accent">
          <Link href={`/core-fans/${coreFan.id}`}>
            <div className="flex items-center gap-3">
              <span className="min-w-[32px] text-right text-2xl font-bold tabular-nums">
                {index + 1}
              </span>
              <div className="flex flex-1 items-center gap-2">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={coreFan.image} />
                  <AvatarFallback>
                    {coreFan.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span>{coreFan.name}</span>
                  <span className="text-xs text-muted-foreground">{`@${coreFan.id}`}</span>
                </div>
              </div>
              <span className="text-xl">{coreFan.commentNum}</span>
              <ChevronRight size={24} className="text-muted-foreground" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
