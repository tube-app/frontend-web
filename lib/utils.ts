import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 先月と今月の数値から少数第一位までを表示する先月比を計算する
 * @param currentNum
 * @param prevNum
 * @returns
 */
export function calculateMonthlyPercentage(
  currentNum: number,
  prevNum: number
) {
  if (prevNum === 0) {
    if (currentNum === 0) {
      return "0.0%" // 前月、今月がどちらも0の場合
    }

    return "-" // 前月が0、今月が何かしらの値の場合
  }

  return (((currentNum - prevNum) / Math.abs(prevNum)) * 100).toFixed(1)
}
