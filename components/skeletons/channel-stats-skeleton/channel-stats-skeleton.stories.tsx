import type { Meta, StoryObj } from "@storybook/react"

import { ChannelStatsSkeleton } from "."

export default {
  title: "Skeleton/ChannelStatsSkeleton",
  component: ChannelStatsSkeleton,
} satisfies Meta<typeof ChannelStatsSkeleton>

type Story = StoryObj<typeof ChannelStatsSkeleton>

export const Default = {} satisfies Story
