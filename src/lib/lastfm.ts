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

export async function getTopAlbums() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastfm_config.user}&period=${lastfm_config.period.twelveMonths}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`
  )

  const data = (await res.json()) as { topalbums: { album: Album[] } }

  return sortByArtist(data.topalbums.album)
}

export async function getTopTracks() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lastfm_config.user}&period=${lastfm_config.period.oneMonth}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`
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
