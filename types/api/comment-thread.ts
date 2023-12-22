export type CommentThread = {
  id: string
  kind: string
  tag: "core-fan" | "first" | "reply"
  title: string
  thumbnail: string
  commentAuthorName: string
  commentAuthorIcon: string
  commentAuthorChannelUrl: string
  commentContent: string
  likeCount: number
  isLiked: boolean
  replies?: {
    comments: ReplyComment[]
  }
}

type ReplyComment = {
  id: string
  kind: string
  tag: "core-fan" | "first" | "reply"
  snippet: {
    authorDisplayName: string
    authorProfileImageUrl: string
    authorChannelUrl: string
    authorChannelId: {
      value: string
    }
    videoId: string
    textDisplay: string
    textOriginal: string
    parentId?: string
    canRate: boolean
    viewerRating: string
    likeCount: number
    publishedAt: string
    updatedAt: string
  }
}
