import { sleep } from "@/lib/utils"

import { coreFansData } from "./data"

export async function GET() {
  await sleep()

  return new Response(JSON.stringify(coreFansData), {
    headers: { "Content-Type": "application/json" },
  })
}
