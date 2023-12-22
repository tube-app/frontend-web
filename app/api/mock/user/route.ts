import { type User } from "@/types/api/user"
import { sleep } from "@/lib/utils"

export async function GET(request: Request) {
  await sleep()
  const token = request.headers.get("token")

  const userData: User[] = [
    {
      id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
      userId: "jfdijafjiodsjfdsa",
      name: "しまぶーのIT大学",
      image: "https://github.com/shadcn.png",
    },
    {
      id: "a2fcb3ec-f0cb-4c63-92d4-1f0a278ff96e",
      userId: "fdasfsafsaf",
      name: "いかついやーつ",
      image: "https://github.com/shadcn.png",
    },
    {
      id: "e4bca1fb-64f2-4352-b29b-7cf51d3e6f82",
      userId: "fdasfbbbg",
      name: "ゲーム好きなやーつ",
      image: "https://github.com/shadcn.png",
    },
  ]

  const user = userData.find((user) => user.id === token)

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  })
}
