import { type Metadata } from 'next'

import { links } from '@/lib/links'
import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.links.label.toLowerCase()
}

export default function LinksPage() {
  const items = Object.keys(links).map((key) => {
    const link = links[key]

    return (
      <li key={link.href}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    )
  })

  return (
    <Note>
      <NoteTitle emoji={routes.links.emoji}>{routes.links.label}</NoteTitle>

      <NoteContent>
        <ul className="list-disc">{items}</ul>
      </NoteContent>
    </Note>
  )
}
