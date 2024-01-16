import type { Meta, StoryObj } from "@storybook/react"

import { CommentSkeleton } from "."

export default {
  title: "Skeleton/CommentSkeleton",
  component: CommentSkeleton,
} satisfies Meta<typeof CommentSkeleton>

type Story = StoryObj<typeof CommentSkeleton>

export const Default = {} satisfies Story
