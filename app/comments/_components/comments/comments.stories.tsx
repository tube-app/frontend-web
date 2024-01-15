import { env } from "@/env.mjs"
import { type Meta, type StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

import { coreFanData } from "@/app/api/mock/comments/data"

import { Comments } from "."

export default {
  title: "Comments/Comments",
  component: Comments,
} satisfies Meta<typeof Comments>

type Story = StoryObj<typeof Comments>

export const Default = {
  args: {
    tabValue: "core-fan",
  },
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/comments?tab=core-fan`,
          () => HttpResponse.json(coreFanData)
        ),
      ],
    },
  },
} satisfies Story
