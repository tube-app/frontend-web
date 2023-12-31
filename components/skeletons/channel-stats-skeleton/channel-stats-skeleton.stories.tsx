import type { Meta, StoryObj } from "@storybook/react"

import { ChannelStatsSkeleton } from "."

const meta: Meta<typeof ChannelStatsSkeleton> = {
  title: "Skeleton/ChannelStatsSkeleton",
  component: ChannelStatsSkeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChannelStatsSkeleton>

export const Default: Story = {}
