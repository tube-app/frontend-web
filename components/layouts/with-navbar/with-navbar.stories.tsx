import type { Meta, StoryObj } from "@storybook/react"

import { WithNavbar } from "."

export default {
  title: "Layouts/WithNavbar",
  component: WithNavbar,
} satisfies Meta<typeof WithNavbar>

type Story = StoryObj<typeof WithNavbar>

export const Default = {
  args: {
    children: <div>childrenの要素</div>,
  },
} satisfies Story
