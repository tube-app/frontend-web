import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { analysisData, userData } from "@/app/api/mock/analysis/data"

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
  args: {
    token: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
  },
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
                user: userData.find(
                  (user) => user.id === req.headers.get("token")
                ),
                analytics: analysisData.find(
                  (analysis) => analysis.id === req.headers.get("token")
                ),
              })
            )
          }
        )
      )

      return <Story />
    },
  ],
}
