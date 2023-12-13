import { type ReactNode } from "react"

import { BudgeButton } from "./budge-button"

interface WithTabProps {
  children: ReactNode
}

export function WithTab({ children }: WithTabProps) {
  return (
    <div className="grid h-full gap-2">
      <h1 className="text-2xl font-bold">コメント一覧</h1>

      <div className="flex gap-x-2">
        <BudgeButton value="core-fan">コアファンユーザー</BudgeButton>
        <BudgeButton value="first">初回のコメント</BudgeButton>
        <BudgeButton value="reply">返信済みのコメント</BudgeButton>
      </div>

      <div>{children}</div>
    </div>
  )
}
