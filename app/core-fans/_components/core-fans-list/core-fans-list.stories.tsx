import { env } from "@/env.mjs"
import type { Meta, StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

import { coreFansData } from "@/app/api/mock/core-fans/data"

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
        http.get(`${env.NEXT_PUBLIC_API_ENDPOINT}/mock/core-fans`, () =>
          HttpResponse.json(coreFansData)
        ),
      ],
    },
  },
} satisfies Story
