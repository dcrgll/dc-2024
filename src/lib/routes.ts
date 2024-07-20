import { type Route } from '@/types/route'

const routes: Record<string, Route> = {
  about: {
    href: '/about',
    label: 'about',
    emoji: '📝',
    description:
      'senior javascript engineer at pion (studentbeans), building flxsh.co, guitarist and tone fiend, elden lord.',
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
