import type { Meta, StoryObj } from "@storybook/react"

import { BadgeButton } from "."

const meta: Meta<typeof BadgeButton> = {
  title: "Comments/BadgeButton",
  component: BadgeButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BadgeButton>

export const Default: Story = {
  args: {
    value: "core-fan",
    children: "コアファン",
  },
}
