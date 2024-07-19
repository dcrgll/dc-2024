'use client'

import { useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'

import { useMobileDetect } from '@/hooks/isMobile'
import NavItem from '@/components/nav-item'

export default function Home() {
  const isMobile = useMobileDetect()
  const pathname = usePathname()

  useEffect(() => {
    if (isMobile !== null && !isMobile && pathname === '/') {
      redirect('about')
    }
  }, [isMobile, pathname])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-accent-foreground">Notes</h1>
      <nav>
        <ul className="block w-full">
          <NavItem
            href="/about"
            title="About"
            description="here is a very long preview of the note, it should have some
            ellipsis at the end"
          />
          <NavItem
            href="/links"
            title="Links"
            description="here is a very long preview of the note, it should have some
            ellipsis at the end"
          />
        </ul>
      </nav>
    </div>
  )
}
