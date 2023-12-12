import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 先月と今月の数値から先月比を計算する
 * @param currentNum
 * @param prevNum
 * @returns
 */
export function computeMonthOverMonthChangeRate(
  currentNum: number,
  prevNum: number
) {
  if (prevNum === 0 || currentNum === 0) {
    return 0
  }

  return ((currentNum - prevNum) / prevNum) * 100
}

export function getAbsoluteValueRoundedToOneDecimal(num: number): number {
  const absoluteValue = Math.abs(num)

  return parseFloat(absoluteValue.toFixed(1))
}
