export type ImportantIndicators = {
  data: {
    this: Analysis
    last: Analysis
  }
}

type Analysis = {
  avgCommentCount: number
  avgLikeCount: number
  avgViewCount: number
}
