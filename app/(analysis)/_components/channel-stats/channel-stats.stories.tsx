import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { analysisData, userData } from "@/app/api/mock/analysis/data"

import { ChannelStats } from "."

const server = setupServer()

const meta = {
  title: "Analysis/ChannelStats",
  component: ChannelStats,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      server.listen()

      return <Story />
    },
  ],
} satisfies Meta<typeof ChannelStats>

export default meta
type Story = StoryObj<typeof ChannelStats>

export const Default: Story = {
  decorators: [
    (Story) => {
      server.use(
        rest.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/analysis`,
          (_req, res, ctx) => {
            return res(
              ctx.json({
                user: userData,
                analytics: analysisData,
              })
            )
          }
        )
      )

      return <Story />
    },
  ],
}
