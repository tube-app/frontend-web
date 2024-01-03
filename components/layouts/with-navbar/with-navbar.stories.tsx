import type { Meta, StoryObj } from "@storybook/react"

import { WithNavbar } from "."

const meta: Meta<typeof WithNavbar> = {
  title: "Layouts/WithNavbar",
  component: WithNavbar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WithNavbar>

export const Default: Story = {
  args: {
    children: <div>childrenの要素</div>,
  },
}
