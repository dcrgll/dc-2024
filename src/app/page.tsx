import { type Metadata } from 'next'

import MobileOnly from '@/components/mobile-only'
import NoteNavigation from '@/components/note-navigation'

export const metadata: Metadata = {
  title: 'notes'
}

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-accent-foreground">Notes</h1>
      <NoteNavigation />
      <MobileOnly />
    </div>
  )
}
