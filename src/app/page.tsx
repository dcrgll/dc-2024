'use client'

import { useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'

import { useMobileDetect } from '@/hooks/isMobile'
import NoteNavigation from '@/components/note-navigation'

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
      <NoteNavigation />
    </div>
  )
}
