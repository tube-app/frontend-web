import { type User } from "@/app/page"

export function GET() {
  const id = "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a"

  const data = [
    {
      id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
      name: "しまぶーのIT大学",
      image: "https://github.com/shadcn.png",
    },
    {
      id: "a2fcb3ec-f0cb-4c63-92d4-1f0a278ff96e",
      name: "しまぶーのIT大学",
      image: "https://github.com/shadcn.png",
    },
    {
      id: "e4bca1fb-64f2-4352-b29b-7cf51d3e6f82",
      name: "しまぶーのIT大学",
      image: "https://github.com/shadcn.png",
    },
  ] satisfies User[]

  const res = data.find((item) => item.id === id)

  if (!res) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(res), {
    headers: { "Content-Type": "application/json" },
  })
}
