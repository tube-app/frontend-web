import { Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { cn, fetcher } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface ChildCommentsProps {
  id: string
}

export async function ChildComments({ id }: ChildCommentsProps) {
  const childComments = await fetcher<Comment[]>({
    // TODO: APIのURLを変更する
    url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
  })

  return (
    <div className="mt-2 grid gap-2">
      {childComments.map((comment) => {
        const isLike = false

        return (
          <div className="flex items-start space-x-4" key={comment.id}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                {comment.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid w-full gap-1">
              <p className="text-sm text-muted-foreground">{comment.name}</p>
              <p className="text-sm leading-none">{comment.body}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={12} />
                    <span className="text-sm">{1}</span>
                  </div>
                  <Heart
                    size={12}
                    className={cn(
                      isLike ? "text-destructive" : "text-muted-foreground"
                    )}
                  />
                </div>
                <MoreVertical size={16} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
