import type { Meta, StoryObj } from "@storybook/react"

import { WithTab } from "."

export default {
  title: "Comments/WithTab",
  component: WithTab,
} satisfies Meta<typeof WithTab>

type Story = StoryObj<typeof WithTab>

export const Default = {
  args: {
    children: <>childrenの内容</>,
  },
} satisfies Story
