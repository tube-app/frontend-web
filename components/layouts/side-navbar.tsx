"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

interface SideNavbarProps {
  className?: string
}

export function SideNavbar({ className }: SideNavbarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "sticky top-4 h-full space-y-4 bg-background lg:top-6",
        className
      )}
    >
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">LOGO</h2>
      <nav className="space-y-1">
        <Link
          href="/"
          aria-label="分析"
          className={buttonVariants({
            variant: "ghost",
            className: cn(
              "flex w-full justify-stretch transition-colors hover:text-foreground/80",
              pathname === "/"
                ? "bg-secondary text-foreground"
                : "text-foreground/60"
            ),
          })}
        >
          <BarChart size={16} className="mr-2" />
          分析
        </Link>
        <Link
          href="/core-fans"
          aria-label="コアファン"
          className={buttonVariants({
            variant: "ghost",
            className: cn(
              "flex w-full justify-stretch transition-colors hover:text-foreground/80",
              pathname?.startsWith("/core-fans")
                ? "bg-secondary text-foreground"
                : "text-foreground/60"
            ),
          })}
        >
          <HeartHandshake size={16} className="mr-2" />
          コアファン
        </Link>
        <Link
          href="/comments"
          aria-label="コメント"
          className={buttonVariants({
            variant: "ghost",
            className: cn(
              "flex w-full justify-stretch transition-colors hover:text-foreground/80",
              pathname?.startsWith("/comments")
                ? "bg-secondary text-foreground"
                : "text-foreground/60"
            ),
          })}
        >
          <MessageCircle size={16} className="mr-2" />
          コメント
        </Link>
      </nav>
    </div>
  )
}
