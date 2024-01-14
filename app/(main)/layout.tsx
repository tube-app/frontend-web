import React, { type PropsWithChildren } from "react"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { DEFAULT_LOGOUT_REDIRECT } from "@/routes"

import { WithNavbar } from "@/components/layouts/with-navbar"

async function MainLayout({ children }: PropsWithChildren) {
  const session = await auth()
  if (!session) {
    redirect(DEFAULT_LOGOUT_REDIRECT)
  }

  return <WithNavbar>{children}</WithNavbar>
}

export default MainLayout
