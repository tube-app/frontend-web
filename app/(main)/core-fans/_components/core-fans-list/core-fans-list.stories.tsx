import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

import { commentsNumRanking } from "@/lib/mock-data"

import { CoreFansList } from "."

export default {
  title: "CoreFans/CoreFansList",
  component: CoreFansList,
} satisfies Meta<typeof CoreFansList>

type Story = StoryObj<typeof CoreFansList>

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${env.NEXT_PUBLIC_API_ENDPOINT}/commentsNumRanking`, () =>
          HttpResponse.json(commentsNumRanking)
        ),
      ],
    },
  },
} satisfies Story
