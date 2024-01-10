import { env } from "process"

import { type Analysis } from "@/types/api/analysis"
import { fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function ChannelStats({ token }: { token: string }) {
  const { user, analytics } = await fetcher<Analysis>({
    url: `${env.API_ENDPOINT}/mock/analysis`,
    headers: { token },
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
