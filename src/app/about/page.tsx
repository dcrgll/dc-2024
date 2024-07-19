import { type Metadata } from 'next'

import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.about.label.toLowerCase()
}

export default function AboutPage() {
  return (
    <Note>
      <NoteTitle emoji={routes.about.emoji}>{routes.about.label}</NoteTitle>

      <li>
        Hello! <Link href="https://google.com">here is a link</Link>
      </li>
    </Note>
  )
}
