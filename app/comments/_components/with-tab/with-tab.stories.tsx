import type { Meta, StoryObj } from "@storybook/react"

import { WithTab } from "."

const meta: Meta<typeof WithTab> = {
  title: "Comments/WithTab",
  component: WithTab,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WithTab>

export const Default: Story = {
  args: {
    children: <>childrenの内容</>,
  },
}
