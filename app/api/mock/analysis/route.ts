import { type Analysis, type Analytics } from "@/types/api/analysis"
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
  if (!user) {
    return new Response(null, { status: 404 })
  }

  const analysisData: Analytics[] = [
    {
      id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
      subscribers: 118000,
      currentMonth: {
        comment: 123,
        like: 804,
      },
      prevMonth: {
        comment: 92,
        like: 1234,
      },
    },
    {
      id: "a2fcb3ec-f0cb-4c63-92d4-1f0a278ff96e",
      subscribers: 118000,
      currentMonth: {
        comment: 10,
        like: 80,
      },
      prevMonth: {
        comment: 15,
        like: 90,
      },
    },
    {
      id: "e4bca1fb-64f2-4352-b29b-7cf51d3e6f82",
      subscribers: 118000,
      currentMonth: {
        comment: 40,
        like: 200,
      },
      prevMonth: {
        comment: 35,
        like: 180,
      },
    },
  ]

  const analytics = analysisData.find((analysis) => analysis.id === user.id)

  if (!analytics) {
    return new Response(null, { status: 404 })
  }

  const res: Analysis = {
    user: user,
    analytics: analytics,
  }

  return new Response(JSON.stringify(res), {
    headers: { "Content-Type": "application/json" },
  })
}
