export type CommentsNumRanking = {
  data: Comment[]
}

type Comment = {
  channel_id: string
  custom_url: string
  title: string
  thumbnail: string
  comment_num: number
}
