import { type Metadata } from 'next'

import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.about.label.toLowerCase()
}

export default function AboutPage() {
  return (
    <Note>
      <NoteTitle emoji={routes.about.emoji}>{routes.about.label}</NoteTitle>

      <NoteContent>
        {/* <h4 className="font-bold">currently</h4> */}

        <li>
          senior javascript engineer at{' '}
          <Link href="https://wearepion.com">pion</Link> (
          <Link href="https://studentbeans.com">studentbeans</Link>).
        </li>

        <li>
          building <Link href="https://flxsh.co">flxsh.co</Link> because
          organising a tattoo is a pain.
        </li>

        <li>guitarist and tone fiend. </li>

        <li>elden lord.</li>
      </NoteContent>
    </Note>
  )
}
