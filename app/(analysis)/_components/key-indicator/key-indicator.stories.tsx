import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { KeyIndicator } from "."

const server = setupServer()

const meta = {
  title: "Analysis/KeyIndicator",
  component: KeyIndicator,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      server.listen()

      return <Story />
    },
  ],
} satisfies Meta<typeof KeyIndicator>

export default meta
type Story = StoryObj<typeof KeyIndicator>

export const Default: Story = {
  decorators: [
    (Story) => {
      server.use(
        rest.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/analysis`,
          (req, res, ctx) => {
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
          }
        )
      )

      return <Story />
    },
  ],
}
