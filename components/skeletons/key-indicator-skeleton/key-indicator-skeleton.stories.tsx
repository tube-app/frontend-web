import type { Meta, StoryObj } from "@storybook/react"

import { KeyIndicatorSkeleton } from "."

const meta: Meta<typeof KeyIndicatorSkeleton> = {
  title: "Skeleton/KeyIndicatorSkeleton",
  component: KeyIndicatorSkeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof KeyIndicatorSkeleton>

export const Default: Story = {
  args: {
    count: 2,
  },
}
