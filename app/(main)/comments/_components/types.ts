export type TabValue = "core-fan" | "first" | "reply"

export function isTabValue(value: unknown): value is TabValue {
  return typeof value === "string"
    ? ["core-fan", "first", "reply"].includes(value)
    : false
}
