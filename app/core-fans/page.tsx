import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface UserWithCommentRank {
  image: string
  name: string
  id: string
  commentNum: number
}

export default function CoreFansPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">コメント数ランキング</p>
        <p className="text-sm text-muted-foreground">全期間</p>
      </div>
      <div className="flex flex-col gap-3">
        {commentRankingList.map((item, index) => (
          <CommentRankingItem
            key={item.id}
            rank={index + 1}
            name={item.name}
            id={item.id}
            image={item.image}
            commentNum={item.commentNum}
          />
        ))}
      </div>
    </div>
  )
}

function CommentRankingItem({
  rank,
  name,
  id,
  image,
  commentNum,
}: {
  image: string
  name: string
  id: string
  commentNum: number
  rank: number
}) {
  return (
    // TODO: コアファンのコメントページのパスを指定
    <Link href={`/core-fans?id=${id}`}>
      <div className="flex items-center gap-1">
        <p className="w-8 text-2xl font-bold">{rank}</p>
        <div className="flex flex-1 items-center gap-2">
          <Avatar className="h-14 w-14">
            <AvatarImage src={image} />
          </Avatar>
          <div className="flex flex-col">
            <p>{name}</p>
            <p className="text-xs text-muted-foreground">{`@${id}`}</p>
          </div>
        </div>
        <p className="text-xl">{commentNum}</p>
        <ChevronRight size={24} className="text-muted-foreground" />
      </div>
    </Link>
  )
}

const commentRankingList = [
  {
    name: "いかついやーつ",
    id: "jfdijafjiodsjfdsa",
    image: "https://github.com/shadcn.png",
    commentNum: 35,
  },
  {
    name: "ゲーム好きなやーつ",
    id: "fdasfsafsaf",
    image: "https://github.com/shadcn.png",
    commentNum: 23,
  },
  {
    name: "ダンスしてるやーつ",
    id: "fdasfbbbg",
    image: "https://github.com/shadcn.png",
    commentNum: 20,
  },
  {
    name: "観戦してるやーつ",
    id: "bntrnr",
    image: "https://github.com/shadcn.png",
    commentNum: 19,
  },
  {
    name: "ネッシーやーつ",
    id: "nessy",
    image: "https://github.com/shadcn.png",
    commentNum: 16,
  },
] satisfies UserWithCommentRank[]
