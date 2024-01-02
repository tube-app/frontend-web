import type { Meta, StoryObj } from "@storybook/react"

import { CommentThreadSkeleton } from "."

const meta: Meta<typeof CommentThreadSkeleton> = {
  title: "Skeleton/CommentThreadSkeleton",
  component: CommentThreadSkeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CommentThreadSkeleton>

export const Default: Story = {}
