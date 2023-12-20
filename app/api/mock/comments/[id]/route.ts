import { type NextRequest } from "next/server"
import { env } from "@/env.mjs"

import { type CommentThread } from "@/types/api/comment-thread"
import { fetcher } from "@/lib/utils"

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const tab = searchParams.get("tab")

  const threads = await fetcher<CommentThread[]>({
    url: `${env.API_ENDPOINT}/mock/comments?tab=${tab}`,
    cache: "no-store",
  })

  const thread = threads.find((thread) => thread.id === id)

  if (!thread) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(thread), {
    headers: { "Content-Type": "application/json" },
  })
}
