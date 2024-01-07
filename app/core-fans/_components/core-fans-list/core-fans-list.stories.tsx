import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

import { coreFansData } from "@/app/api/mock/core-fans/data"

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
            return res(ctx.json(coreFansData))
          }
        )
      )

      return <Story />
    },
  ],
}
