"use client"

import { useQueryState } from "next-usequerystate"

import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"

import { type TabValue } from "./types"

interface BudgeButtonProps extends BadgeProps {
  value: TabValue
}

export function BudgeButton({ value, className, ...rest }: BudgeButtonProps) {
  const [tab, setTab] = useQueryState("tab", {
    history: "push",
    shallow: false,
  })
  const isActive = tab === value

  return (
    <button
      className="rounded-full ring-offset-0"
      onClick={() => setTab(value)}
    >
      <Badge
        variant={isActive ? "destructive" : "secondary"}
        className={cn(
          "h-full cursor-pointer",
          isActive && "hover:bg-destructive",
          className
        )}
        {...rest}
      />
    </button>
  )
}
