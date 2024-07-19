import { type Route } from '@/types/route'

const routes: Record<string, Route> = {
  about: {
    href: '/about',
    label: 'about',
    emoji: '📝',
    description:
      'here is a very long preview of the note, it should have some ellipsis at the end',
    created: 'July 19, 2024 at 6:03 PM'
  },
  links: {
    href: '/links',
    label: 'links',
    emoji: '💻',
    description: 'email, github, linkedin, instagram',
    created: 'July 19, 2024 at 6:20 PM'
  },
  nowPlaying: {
    href: '/now-playing',
    label: 'now playing',
    emoji: '🎵',
    description: 'currently listening to music',
    created: 'July 19, 2024 at 6:21 PM'
  }
}

export default routes
