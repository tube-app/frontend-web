import type { Meta, StoryObj } from "@storybook/react"
import { BarChart, HeartHandshake, MessageCircle } from "lucide-react"

import { NavLink } from "."

const icons = { BarChart, HeartHandshake, MessageCircle }

export default {
  title: "Layouts/NavLink",
  component: NavLink,
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
} satisfies Meta<typeof NavLink>

type Story = StoryObj<typeof NavLink>

export const Analysis = {
  args: {
    href: "/",
    label: "分析",
    icon: BarChart,
  },
} satisfies Story
