"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"

interface BottomNavbarProps {
  className?: string
}

export function BottomNavbar({ className }: BottomNavbarProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "fixed bottom-0 z-10 flex w-full translate-y-px items-center gap-x-2 bg-background p-2 shadow-extend-y-top",
        className
      )}
    >
      <Link
        href="/"
        className={cn(
          "flex flex-1 flex-col items-center justify-center text-sm transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        <BarChart size={20} />
        <span>分析</span>
      </Link>
      <Link
        href="/core-fans"
        className={cn(
          "flex flex-1 flex-col items-center justify-center text-sm transition-colors hover:text-foreground/80",
          pathname?.startsWith("/core-fans")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        <HeartHandshake size={20} />
        <span>コアファン</span>
      </Link>
      <Link
        href="/comments"
        className={cn(
          "flex flex-1 flex-col items-center justify-center text-sm transition-colors hover:text-foreground/80",
          pathname?.startsWith("/comments")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        <MessageCircle size={20} />
        <span>コメント</span>
      </Link>
    </nav>
  )
}
