import { env } from "process"
import { signOut } from "@/auth"

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
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  )
}
