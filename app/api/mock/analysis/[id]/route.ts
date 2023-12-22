import { type Analysis } from "@/types/api/analysis"
import { sleep } from "@/lib/utils"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  await sleep()
  const id = params.id

  const data: Analysis[] = [
    {
      id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
      subscribers: 118000,
      commentCurrentMonth: 123,
      commentPrevMonth: 92,
      likeCurrentMonth: 804,
      likePrevMonth: 1234,
    },
    {
      id: "a2fcb3ec-f0cb-4c63-92d4-1f0a278ff96e",
      subscribers: 118000,
      commentCurrentMonth: 10,
      commentPrevMonth: 15,
      likeCurrentMonth: 80,
      likePrevMonth: 90,
    },
    {
      id: "e4bca1fb-64f2-4352-b29b-7cf51d3e6f82",
      subscribers: 118000,
      commentCurrentMonth: 40,
      commentPrevMonth: 35,
      likeCurrentMonth: 200,
      likePrevMonth: 180,
    },
  ]

  const res = data.find((item) => item.id === id)

  if (!res) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(res), {
    headers: { "Content-Type": "application/json" },
  })
}
