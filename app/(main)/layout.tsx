import React, { type PropsWithChildren } from "react"

import { WithNavbar } from "@/components/layouts/with-navbar"

function MainLayout({ children }: PropsWithChildren) {
  return <WithNavbar>{children}</WithNavbar>
}

export default MainLayout
