import { type Analysis } from "@/types/api/analysis"
import { sleep } from "@/lib/utils"

import { analysisData, userData } from "./data"

export async function GET(request: Request) {
  await sleep()
  const token = request.headers.get("token")

  const user = userData.find((user) => user.id === token)
  if (!user) {
    return new Response(null, { status: 404 })
  }

  const analytics = analysisData.find((analysis) => analysis.id === user.id)

  if (!analytics) {
    return new Response(null, { status: 404 })
  }

  const res: Analysis = {
    user,
    analytics,
  }

  return new Response(JSON.stringify(res), {
    headers: { "Content-Type": "application/json" },
  })
}
