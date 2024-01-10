import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { Header } from "./header"

interface CardWrapperProps {
  children: React.ReactNode
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <Card className="w-[480px] shadow-md">
      <CardHeader>
        <Header label="サインイン" />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
