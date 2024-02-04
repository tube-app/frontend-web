import { type ImportantIndicators } from "@/types/api/important-indicators"

export const importantIndicators = {
  data: {
    this: {
      avgCommentCount: 0,
      avgLikeCount: 0,
      avgViewCount: 0,
    },
    last: {
      avgCommentCount: 0,
      avgLikeCount: 0,
      avgViewCount: 0,
    },
  },
} satisfies ImportantIndicators
