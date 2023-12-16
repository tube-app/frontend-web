import { fetcher } from "@/lib/utils"

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export async function GET({ params }: { params: { id: string } }) {
  const id = params.id

  const posts: Post[] = await fetcher<Post[]>({
    url: "http://localhost:3000/api/mock/posts",
  })

  const post = posts.find((post) => post.id === Number(id))

  if (!post) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  })
}
