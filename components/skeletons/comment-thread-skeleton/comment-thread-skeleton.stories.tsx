import type { Meta, StoryObj } from "@storybook/react"

import { CommentThreadSkeleton } from "."

export default {
  title: "Skeleton/CommentThreadSkeleton",
  component: CommentThreadSkeleton,
} satisfies Meta<typeof CommentThreadSkeleton>

type Story = StoryObj<typeof CommentThreadSkeleton>

export const Default = {} satisfies Story
