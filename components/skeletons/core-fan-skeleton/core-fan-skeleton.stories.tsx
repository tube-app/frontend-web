import type { Meta, StoryObj } from "@storybook/react"

import { CoreFanSkeleton } from "."

const meta: Meta<typeof CoreFanSkeleton> = {
  title: "Skeleton/CoreFanSkeleton",
  component: CoreFanSkeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CoreFanSkeleton>

export const Default: Story = {
  args: {
    rank: 1,
  },
}
