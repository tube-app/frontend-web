import { type User } from "./user"

type MonthData = {
  comment: number
  like: number
}

export type Analytics = {
  id: string
  subscribers: number
  currentMonth: MonthData
  prevMonth: MonthData
}

export type Analysis = {
  user: User
  analytics: Analytics
}
