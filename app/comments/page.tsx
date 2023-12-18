import React from "react"

import { Comments } from "./_components/comments"
import { isTabValue, type TabValue } from "./_components/types"
import { WithTab } from "./_components/with-tab"

export default function CommentsPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  const tabValue: TabValue = isTabValue(searchParams.tab)
    ? searchParams.tab
    : "core-fan"

  return (
    <WithTab>
      <Comments tabValue={tabValue} />
    </WithTab>
  )
}
