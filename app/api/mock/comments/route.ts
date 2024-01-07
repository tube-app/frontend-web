import { type CommentThread } from "@/types/api/comment-thread"
import { sleep } from "@/lib/utils"

import { coreFanData, firstData, replyData } from "./data"

export async function GET(request: Request) {
  await sleep()

  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const tab = searchParams.get("tab")

  let filteredData: CommentThread[] = []

  switch (tab) {
    case "core-fan":
      filteredData = coreFanData
      break
    case "first":
      filteredData = firstData
      break
    case "reply":
      filteredData = replyData
      break
    default:
      filteredData = coreFanData
  }

  return new Response(JSON.stringify(filteredData), {
    headers: { "Content-Type": "application/json" },
  })
}
