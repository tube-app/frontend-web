"use client"

import { useQueryState } from "next-usequerystate"

import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"

import { isTabValue, type TabValue } from "./types"

interface BadgeButtonProps extends BadgeProps {
  value: TabValue
}

export function BadgeButton({ value, className, ...rest }: BadgeButtonProps) {
  const [tab, setTab] = useQueryState("tab", {
    history: "push",
    shallow: false,
  })
  const tabValue: TabValue = isTabValue(tab) ? tab : "core-fan"
  const isActive = tabValue === value

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
