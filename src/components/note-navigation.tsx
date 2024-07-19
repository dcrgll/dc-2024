import routes from '@/lib/routes'

import NavItem from './nav-item'

export default function NoteNavigation() {
  const items = Object.keys(routes).map((key) => {
    const route = routes[key] as {
      href: string
      label: string
      emoji: string
      description: string
    }

    return (
      <NavItem
        key={key}
        href={route.href}
        label={route.label}
        emoji={route.emoji}
        description={route.description}
      />
    )
  })

  return (
    <nav>
      <ul className="block w-full">{items}</ul>
    </nav>
  )
}
