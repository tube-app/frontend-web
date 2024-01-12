import type { Meta, StoryObj } from "@storybook/react"

import { KeyIndicatorSkeleton } from "."

export default {
  title: "Skeleton/KeyIndicatorSkeleton",
  component: KeyIndicatorSkeleton,
} satisfies Meta<typeof KeyIndicatorSkeleton>

type Story = StoryObj<typeof KeyIndicatorSkeleton>

export const Default = {
  args: {
    count: 2,
  },
} satisfies Story
