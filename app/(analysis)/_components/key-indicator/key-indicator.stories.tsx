import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

import { analysisData, userData } from "@/app/api/mock/analysis/data"

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
        http.get(
          `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/analysis`,
          ({ request }) =>
            HttpResponse.json({
              user: userData.find(
                (user) => user.id === request.headers.get("token")
              ),
              analytics: analysisData.find(
                (analysis) => analysis.id === request.headers.get("token")
              ),
            })
        ),
      ],
    },
  },
} satisfies Story
