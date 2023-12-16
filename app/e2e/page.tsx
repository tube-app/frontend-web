import { fetcher } from "@/lib/utils"

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function Home() {
  const post = await fetcher<Post>({
    url: "http://localhost:3000/api/mock/posts/1",
  })

  return (
    <dl>
      <dt>id</dt>
      <dd>{post.id}</dd>
      <dt>title</dt>
      <dd>{post.title}</dd>
      <dt>body</dt>
      <dd>{post.body}</dd>
    </dl>
  )
}
