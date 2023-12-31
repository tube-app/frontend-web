import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

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
        rest.get("http://localhost:3000/api/mock/analysis", (req, res, ctx) => {
          return res(
            ctx.json({
              user: {
                id: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
                userId: "jfdijafjiodsjfdsa",
                name: "しまぶーのIT大学",
                image: "https://github.com/shadcn.png",
              },
              analytics: {
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
            })
          )
        })
      )

      return <Story />
    },
  ],
}
