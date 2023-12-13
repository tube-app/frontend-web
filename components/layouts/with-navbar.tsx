"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavbarProps {
  children: ReactNode
}

export function WithNavbar({ children }: NavbarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: "/",
      label: "分析",
      icon: BarChart,
    },
    {
      href: "/core-fans",
      label: "コアファン",
      icon: HeartHandshake,
    },
    {
      href: "/comments",
      label: "コメント",
      icon: MessageCircle,
    },
  ]

  return (
    <div className="container flex flex-col gap-x-12 py-4 lg:flex-row-reverse lg:py-6">
      <main className="flex-1 pb-12 lg:pb-0">{children}</main>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 w-full bg-background shadow-extend-y-top",
          "lg:sticky lg:top-6 lg:h-full lg:w-60 lg:space-y-6 lg:shadow-none"
        )}
      >
        <h2 className="mb-2 hidden px-4 text-lg font-semibold tracking-tight lg:block">
          LOGO
        </h2>

        <nav className="flex lg:block lg:space-y-1">
          {items.map(({ href, label, icon: Icon }) => {
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={buttonVariants({
                  variant: "ghost",
                  className: cn(
                    "flex h-auto flex-1 flex-col gap-y-1 text-xs focus-within:bg-none hover:bg-transparent",
                    "lg:w-full lg:flex-row lg:justify-stretch lg:gap-x-2 lg:text-base",
                    pathname === href
                      ? "text-foreground lg:bg-secondary lg:hover:bg-secondary"
                      : "text-foreground/60 lg:hover:bg-secondary/60"
                  ),
                })}
              >
                <Icon strokeWidth={1.5} className="h-6 shrink-0" />
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
