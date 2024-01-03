"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavLinkProps {
  href: string
  label: string
  icon: LucideIcon
}

export function NavLink({ href, label, icon: Icon }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href)

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
          isActive
            ? "text-foreground lg:bg-secondary lg:hover:bg-secondary"
            : "text-foreground/60 lg:hover:bg-secondary/60"
        ),
      })}
    >
      <Icon strokeWidth={1.5} className="h-6 shrink-0" />
      {label}
    </Link>
  )
}
