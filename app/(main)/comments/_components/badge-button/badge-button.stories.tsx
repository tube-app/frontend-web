import type { Meta, StoryObj } from "@storybook/react"

import { BadgeButton } from "."

export default {
  title: "Comments/BadgeButton",
  component: BadgeButton,
} satisfies Meta<typeof BadgeButton>

type Story = StoryObj<typeof BadgeButton>

export const Default = {
  args: {
    value: "core-fan",
    children: "コアファン",
  },
} satisfies Story

export const First = {
  args: {
    value: "first",
    children: "初回コメント",
  },
} satisfies Story
