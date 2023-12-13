"use client"

import { type ReactNode } from "react"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { NavLink } from "./nav-link"

interface NavbarProps {
  children: ReactNode
}

export function WithNavbar({ children }: NavbarProps) {
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
          <NavLink href="/" label="分析" icon={BarChart} />
          <NavLink href="/core-fans" label="コアファン" icon={HeartHandshake} />
          <NavLink href="/comments" label="コメント" icon={MessageCircle} />
        </nav>
      </div>
    </div>
  )
}
