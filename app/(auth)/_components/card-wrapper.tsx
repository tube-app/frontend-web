import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CardWrapperProps {
  children: React.ReactNode
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <Card className="w-[480px] shadow-md">
      <CardHeader className="flex w-full items-center justify-center">
        <h1 className="text-2xl font-semibold">サインイン</h1>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
