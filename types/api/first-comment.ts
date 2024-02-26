export type FirstComment = {
  data: Comment[]
}
type Comment = {
  videoId: string
  videoTitle: string
  authorChannelId: string
  authorCustomUrl: string
  authorTitle: string
  TextDisplay: string
  publishedAt: string
}
