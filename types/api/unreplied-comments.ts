export type UnRepliedComments = {
  data: UnRepliedComment[]
}

type UnRepliedComment = {
  videoId: string
  title: string
  publishedAt: string
  commentTree: CommentTree[]
}

type CommentTree = {
  title: string
  channelId: string
  customUrl: string
  publishedAt: string
  textDisplay: string
}
