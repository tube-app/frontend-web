import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

import { importantIndicators } from "@/lib/mock-data"

import { KeyIndicator } from "."

export default {
  title: "Analysis/KeyIndicator",
  component: KeyIndicator,
  args: {
    token: "c7d091db-8b2b-4b62-a71f-0a13b6a42c1a",
  },
} satisfies Meta<typeof KeyIndicator>

type Story = StoryObj<typeof KeyIndicator>

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${env.NEXT_PUBLIC_API_ENDPOINT}/importantIndicators`, () =>
          HttpResponse.json(importantIndicators)
        ),
      ],
    },
  },
} satisfies Story
