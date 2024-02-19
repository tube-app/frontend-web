import { ChevronLeft } from "lucide-react"

import { CommentSkeleton } from "@/components/skeletons/comment-skeleton"

export default function Loading() {
  return (
    <div className="grid h-full gap-2">
      <header className="flex items-center gap-2">
        <nav className="rounded-md hover:bg-accent hover:text-accent-foreground">
          <ChevronLeft size={24} />
        </nav>
        <h1 className="text-2xl font-bold">返信</h1>
      </header>
      <section className="flex items-start space-x-4">
        <article className="grid w-full gap-1">
          <div className="grid gap-2">
            <div>
              <CommentSkeleton />
              <div className="ml-14 mt-3 grid max-w-lg gap-2">
                {Array.from({
                  length: 2,
                }).map((_, j) => (
                  <CommentSkeleton key={j} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
