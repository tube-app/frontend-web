import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MoreVertical, ThumbsUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

interface CoreFanCommentsProps {
  tabValue: string
}

//  TODO: ダミーデータの差し替え
export default function CoreFanComments({ tabValue }: CoreFanCommentsProps) {
  const isLike = true

  return (
    <>
      <div className="flex justify-between">
        <h2 className=" text-xl font-semibold">動画タイトル</h2>
        <div className="w-20 lg:w-24">
          <AspectRatio ratio={16 / 9} className=" bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=80&dpr=2&q=8"
              alt="thumbnail"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />{" "}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">コアファンユーザー</p>
          <p className="text-sm leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsa voluptates reprehenderit vero eos molestias accusamus quam ex
            delectus minus, voluptatum, dolore eum commodi soluta ipsam, iure
            quos mollitia sed!
          </p>
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
            {/* TODO: アイコンを押下して、コメントに対する操作を行う */}
            <MoreVertical size={16} />
          </div>
          <Link
            href={`/comments/${1}?tab=${tabValue}`}
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "w-fit hover:bg-blue-50",
            })}
          >
            <span className="text-sm text-blue-400">{3}件の返信を表示</span>
          </Link>
        </div>
      </div>
    </>
  )
}
