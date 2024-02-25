import Link from "next/link"
import { type SearchParamProps } from "@/types"
import { ChevronLeft } from "lucide-react"

export default function CoreFanCommentPage({
  params: { id },
}: SearchParamProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <Link
          href="/core-fans"
          className="rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">{id}</h1>
      </header>
      <section className="flex items-start space-x-4">
        <div>コメント情報</div>
      </section>
    </div>
  )
}
