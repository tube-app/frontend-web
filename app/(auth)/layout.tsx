import { CardWrapper } from "./_components/card-wrapper"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <CardWrapper title="サインイン">{children}</CardWrapper>
    </div>
  )
}
