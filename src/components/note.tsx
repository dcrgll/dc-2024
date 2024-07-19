import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function Note({
  children,
  created
}: {
  children: React.ReactNode
  created?: string
}) {
  const renderDate = () => {
    if (!created) return null
    return (
      <div className="text-center text-xs text-gray-600 md:text-sm">
        {created}
      </div>
    )
  }

  return (
    <div className="flex min-h-dvh w-full flex-col p-3">
      {renderDate()}
      <div className="mb-4 block md:hidden">
        <Link href="/">
          <button className="flex items-center pt-2">
            <ChevronLeft className="h-5 w-5 text-accent-foreground" />
            <span className="ml-1 text-xl font-bold text-accent-foreground">
              Notes
            </span>
          </button>
        </Link>
      </div>

      <div className="p-2">{children}</div>
    </div>
  )
}
