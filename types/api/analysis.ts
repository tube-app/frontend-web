import { type User } from "./user"

export type Analytics = {
  id: string
  subscribers: number
  commentCurrentMonth: number
  commentPrevMonth: number
  likeCurrentMonth: number
  likePrevMonth: number
}

export type Analysis = {
  user: User
  analytics: Analytics
}
