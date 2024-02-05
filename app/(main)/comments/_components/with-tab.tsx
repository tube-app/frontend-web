import { type ReactNode } from "react"

import { BadgeButton } from "@/app/(main)/comments/_components/badge-button"

interface WithTabProps {
  children: ReactNode
}

export function WithTab({ children }: WithTabProps) {
  return (
    <div className="grid h-full gap-2">
      <h1 className="text-2xl font-bold">コメント一覧</h1>

      <div className="flex gap-x-2">
        <BadgeButton value="core-fan">コアファンユーザー</BadgeButton>
        <BadgeButton value="first">初回のコメント</BadgeButton>
        <BadgeButton value="reply">返信済みのコメント</BadgeButton>
      </div>

      <div>{children}</div>
    </div>
  )
}
