<<<<<<< HEAD
import { type Analysis } from "@/types/api/analysis"
=======
import { cookies } from "next/dist/client/components/headers"

import { type Analysis, type Analytics } from "@/types/api/analysis"
import { type User } from "@/types/api/user"
>>>>>>> f36fb9f (🚚 (main)ディレクトリの追加に伴う変更)
import { sleep } from "@/lib/utils"

import { analysisData, userData } from "./data"

export async function GET(request: Request) {
  cookies()
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
