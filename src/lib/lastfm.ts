import { env } from '@/env'
import { type Album, type Track } from '@/types/now-playing'

const lastfm_config = {
  api_key: env.LASTFM_API_KEY,
  user: 'dancargill',
  period: {
    overall: 'overall',
    sevenDays: '7day',
    oneMonth: '1month',
    threeMonths: '3month',
    sixMonths: '6month',
    twelveMonths: '12month'
  },
  limit: 10
}

const SevenDays = 60 * 60 * 24 * 7

export async function getTopAlbums(
  period: string = lastfm_config.period.overall
) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastfm_config.user}&period=${period}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`,
    {
      next: {
        revalidate: SevenDays
      }
    }
  )

  const data = (await res.json()) as { topalbums: { album: Album[] } }

  return sortByArtist(data.topalbums.album)
}

export async function getTopTracks(
  period: string = lastfm_config.period.overall
) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lastfm_config.user}&period=${period}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`,
    {
      next: {
        revalidate: SevenDays
      }
    }
  )

  const data = (await res.json()) as { toptracks: { track: Track[] } }

  return sortByArtist(data.toptracks.track)
}

export const sortByArtist = (data: Album[] | Track[]) => {
  return data.sort((a, b) => {
    if (a.artist.name < b.artist.name) {
      return -1
    }
    if (a.artist.name > b.artist.name) {
      return 1
    }
    return 0
  })
}
