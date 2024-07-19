import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full flex-col p-3">
      <div className="block md:hidden">
        <Link href="/">
          <button className="flex items-center pt-2">
            <ChevronLeft className="h-5 w-5 text-accent-foreground" />
            <span className="ml-1 text-base text-accent-foreground">Notes</span>
          </button>
        </Link>
      </div>
      {children}
    </div>
  )
}
