import { type Metadata } from 'next'

import { type Album, type Track } from '@/types/now-playing'
import { getTopAlbums, getTopTracks } from '@/lib/lastfm'
import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteSubtitle from '@/components/note-subtitle'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.nowPlaying.label.toLowerCase()
}

export default async function NowPlayingPage() {
  const albums = await getTopAlbums()
  const tracks = await getTopTracks()

  const renderListItem = (data: Album | Track) => {
    return (
      <li key={data.name}>
        <Link href={data.url}>
          {data.name.toLowerCase()} by {data.artist.name.toLowerCase()}
        </Link>
      </li>
    )
  }

  return (
    <Note>
      <NoteTitle emoji={routes.nowPlaying.emoji}>
        {routes.nowPlaying.label}
      </NoteTitle>

      <NoteContent>
        <NoteSubtitle>top tracks</NoteSubtitle>
        <ul className="mb-2 list-disc">{tracks.map(renderListItem)}</ul>
        <NoteSubtitle>top albums of the year</NoteSubtitle>
        <ul className="list-disc">{albums.map(renderListItem)}</ul>
      </NoteContent>
    </Note>
  )
}
