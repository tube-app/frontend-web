import type { Meta, StoryObj } from "@storybook/react"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { NavLink } from "."

const icons = { BarChart, HeartHandshake, MessageCircle }

const meta: Meta<typeof NavLink> = {
  title: "Layouts/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          BarChart: "分析",
          HeartHandshake: "コアファン",
          MessageCircle: "コメント",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Analysis: Story = {
  args: {
    href: "/",
    label: "分析",
    icon: BarChart,
  },
}
