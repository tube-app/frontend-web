import type { Meta, StoryObj } from "@storybook/react"

import { CoreFanSkeleton } from "."

export default {
  title: "Skeleton/CoreFanSkeleton",
  component: CoreFanSkeleton,
} satisfies Meta<typeof CoreFanSkeleton>

type Story = StoryObj<typeof CoreFanSkeleton>

export const Default = {
  args: {
    rank: 1,
  },
} satisfies Story
