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
    description: 'some places you can find me on the internet',
    created: 'July 19, 2024 at 6:20 PM'
  },
  nowPlaying: {
    href: '/now-playing',
    label: 'now playing',
    emoji: '🎵',
    description: 'currently listening to',
    created: 'July 19, 2024 at 6:21 PM'
  },
  projects: {
    href: '/projects',
    label: 'projects',
    emoji: '🛠️',
    description: "some things i've worked on",
    created: 'July 20, 2024 at 6:23 PM'
  }
}

export default routes
