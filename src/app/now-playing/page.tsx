import { type Metadata } from 'next'

import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.nowPlaying.label.toLowerCase()
}

const links = [
  {
    href: 'https://open.spotify.com/album/2oSZ420w1kkEdXMaDaNEbt?si=NJ_wdkoBSGqLb7aq91WKsg',
    label: 'heavy jelly - soft play'
  },
  {
    href: 'https://open.spotify.com/album/0sOeI7pbAmIc8aDFyvkBUW?si=FkEFss9lQgay5B4BIOkAVQ',
    label: 'starting over - chris stapleton'
  },
  {
    href: 'https://open.spotify.com/album/0MjlKhtsyax9HSWNkYaWM2?si=6qNFcEZASJCzsPiWGF9ulw',
    label: 'waltz for debby - bill evans trio'
  },
  {
    href: 'https://open.spotify.com/album/4LsFjd6Se6lEsughB7sXhF?si=-X2UwRCTQaiMB8uxiMRn8Q',
    label: 'be the wheel - theo katzman'
  }
]

export default function NowPlayingPage() {
  return (
    <Note>
      <NoteTitle emoji={routes.nowPlaying.emoji}>
        {routes.nowPlaying.label}
      </NoteTitle>

      <NoteContent>
        <h4 className="mb-2 font-bold">currently playing</h4>

        <ul className="list-disc">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </NoteContent>
    </Note>
  )
}
