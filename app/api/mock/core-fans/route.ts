import { sleep } from "@/lib/utils"

export async function GET() {
  await sleep()

  const data = [
    {
      name: "いかついやーつ",
      id: "jfdijafjiodsjfdsa",
      image: "https://github.com/shadcn.png",
      commentNum: 35,
    },
    {
      name: "ゲーム好きなやーつ",
      id: "fdasfsafsaf",
      image: "https://github.com/shadcn.png",
      commentNum: 23,
    },
    {
      name: "ダンスしてるやーつ",
      id: "fdasfbbbg",
      image: "https://github.com/shadcn.png",
      commentNum: 20,
    },
    {
      name: "観戦してるやーつ",
      id: "bntrnr",
      image: "https://github.com/shadcn.png",
      commentNum: 19,
    },
    {
      name: "ネッシーやーつ",
      id: "nessy",
      image: "https://github.com/shadcn.png",
      commentNum: 16,
    },
  ]

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  })
}
