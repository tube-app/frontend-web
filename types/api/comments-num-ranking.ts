export type CommentsNumRanking = {
  data: Comment[]
}

interface Comment {
  channel_id: string
  custom_url: string
  title: string
  thumbnail: string
  comment_num: number
}
