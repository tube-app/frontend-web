import { type NextRequest } from "next/server"
import { env } from "@/env.mjs"

import { fetcher } from "@/lib/utils"

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = searchParams.get("id")

  const posts: Post[] = await fetcher<Post[]>({
    url: `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/posts`,
  })

  const post = posts.find((post) => post.id === Number(id))

  if (!post) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  })
}
