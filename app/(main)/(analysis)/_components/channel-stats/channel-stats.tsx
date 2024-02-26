import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChannelStats() {
  // TODO: いったん直書きにする
  const user = {
    id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
    userId: "jfdijafjiodsjfdsa",
    name: "しまぶーのIT大学",
    image: "https://github.com/shadcn.png",
    subscribers: 118000,
  }

  return (
    <div className="flex items-center gap-3 self-stretch">
      <Avatar className="size-20">
        <AvatarImage src={user.image} />
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <p className="line-clamp-1 text-lg">{user.name}</p>
        <p className="text-2xl font-bold">
          {user.subscribers.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">チャンネル登録者</p>
      </div>
    </div>
  )
}
