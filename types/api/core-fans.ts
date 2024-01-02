import { type User } from "./user"

export type CoreFans = {
  commentNum: number
} & Omit<User, "userId">
