import { env } from "@/env.mjs"
import { type Meta, type StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { coreFanData } from "@/app/api/mock/comments/data"

import { Comments } from "."

const server = setupServer()

const meta = {
  title: "Comments/Comments",
  component: Comments,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      server.listen()

      return <Story />
    },
  ],
} satisfies Meta<typeof Comments>

export default meta
type Story = StoryObj<typeof Comments>
export const Default: Story = {
  args: {
    tabValue: "core-fan",
  },
  decorators: [
    (Story) => {
      server.use(
        rest.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=core-fan`,
          (_req, res, ctx) => {
            return res(ctx.json(coreFanData))
          }
        )
      )

      return <Story />
    },
  ],
}
