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
        <ul className="list-disc">
          <li>
            a senior front-end software engineer, current playing the internet
            at <Link href="https://wearepion.com">pion</Link> (
            <Link href="https://studentbeans.com">studentbeans</Link>).
          </li>

          <li>can normally be found in a room full of guitar pedals.</li>

          <li>
            I also build tools for creatives at{' '}
            <Link href="https://payday.so">payday.so</Link>.
          </li>

          <li>recently became an elden lord.</li>
          <li>
            I like to{' '}
            <Link href="https://instagram.com/dncrgll">
              travel and play music
            </Link>
            .
          </li>
        </ul>
      </NoteContent>
    </Note>
  )
}
