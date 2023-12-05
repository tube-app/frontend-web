import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

interface SidebarProps {
  className?: string
}

// TODO: ナビゲーションの実装

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            LOGO
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <BarChart size={16} className="mr-2" />
              分析
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HeartHandshake size={16} className="mr-2" />
              コアファン
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageCircle size={16} className="mr-2" />
              コメント
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
