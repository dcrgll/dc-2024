import { type Metadata } from 'next'

import { getTopAlbums, getTopTracks } from '@/lib/lastfm'
import routes from '@/lib/routes'
import { Accordion } from '@/components/ui/accordion'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteTitle from '@/components/note-title'
import NowPlayingItem from '@/components/now-playing-item'

export const metadata: Metadata = {
  title: routes.nowPlaying.label.toLowerCase()
}

export default async function NowPlayingPage() {
  const albumsOverall = await getTopAlbums()
  const albumsWeekly = await getTopAlbums('7Days')
  const tracksOverall = await getTopTracks()
  const tracksWeekly = await getTopTracks('7Days')

  return (
    <Note>
      <NoteTitle emoji={routes.nowPlaying.emoji}>
        {routes.nowPlaying.label}
      </NoteTitle>

      <NoteContent>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col"
          defaultValue="trackWeekly"
        >
          <NowPlayingItem
            data={tracksWeekly}
            label="top tracks of the week"
            type="trackWeekly"
          />

          <NowPlayingItem
            data={tracksOverall}
            label="top tracks of the year"
            type="trackOverall"
          />
          <NowPlayingItem
            data={albumsWeekly}
            label="top albums of the week"
            type="albumWeekly"
          />
          <NowPlayingItem
            data={albumsOverall}
            label="top albums of the year"
            type="albumOverall"
          />
        </Accordion>
      </NoteContent>
    </Note>
  )
}
