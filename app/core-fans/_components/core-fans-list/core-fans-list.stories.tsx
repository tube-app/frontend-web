import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { type CoreFans } from "@/types/api/core-fans"

import { CoreFansList } from "."

const server = setupServer()

const meta = {
  title: "CoreFans/CoreFansList",
  component: CoreFansList,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      server.listen()

      return <Story />
    },
  ],
} satisfies Meta<typeof CoreFansList>

export default meta
type Story = StoryObj<typeof CoreFansList>

export const Default: Story = {
  decorators: [
    (Story) => {
      server.use(
        rest.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/core-fans`,
          (_req, res, ctx) => {
            return res(ctx.json(data))
          }
        )
      )

      return <Story />
    },
  ],
}

const data: CoreFans[] = [
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
