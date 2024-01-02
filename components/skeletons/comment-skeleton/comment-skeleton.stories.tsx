import type { Meta, StoryObj } from "@storybook/react"

import { CommentSkeleton } from "."

const meta: Meta<typeof CommentSkeleton> = {
  title: "Skeleton/CommentSkeleton",
  component: CommentSkeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CommentSkeleton>

export const Default: Story = {}
