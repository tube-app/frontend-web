import type { Meta, StoryObj } from "@storybook/react"

import { ChannelStats } from "."

const meta = {
  title: "Analysis/ChannelStats",
  component: ChannelStats,
} satisfies Meta<typeof ChannelStats>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
