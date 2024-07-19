import routes from '@/lib/routes'

import NavItem from './nav-item'

export default function NoteNavigation() {
  const items = Object.keys(routes).map((key) => {
    const route = routes[key]

    return (
      <NavItem
        key={route.href}
        href={route.href}
        label={route.label}
        emoji={route.emoji}
        description={route.description}
        created={route.created}
      />
    )
  })

  return (
    <nav>
      <ul className="block w-full">{items}</ul>
    </nav>
  )
}
