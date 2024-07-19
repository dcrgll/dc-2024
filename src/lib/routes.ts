import { type Route } from '@/types/route'

const routes: Record<string, Route> = {
  about: {
    href: '/about',
    label: 'About',
    emoji: '📝',
    description:
      'here is a very long preview of the note, it should have some ellipsis at the end',
    created: 'July 19, 2024 at 6:03 PM'
  },
  links: {
    href: '/links',
    label: 'Links',
    emoji: '💻',
    description:
      'here is a very long preview of the note, it should have some ellipsis at the end',
    created: 'July 19, 2024 at 6:20 PM'
  },
  onRepeat: {
    href: '/on-repeat',
    label: 'On Repeat',
    emoji: '🎵',
    description:
      'here is a very long preview of the note, it should have some ellipsis at the end',
    created: 'July 19, 2024 at 7:23 PM'
  }
}

export default routes
