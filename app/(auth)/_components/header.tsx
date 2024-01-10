interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-2xl font-semibold">{label}</h1>
    </div>
  )
}
