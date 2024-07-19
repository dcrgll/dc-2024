import NavItem from './nav-item'

export default function Sidebar() {
  return (
    <div className="hidden h-dvh w-64 flex-shrink-0 overflow-y-auto border-r border-border md:flex">
      <div className="flex h-full w-full flex-col p-3">
        <div className="flex items-center justify-between py-2">
          <h2 className="pl-2 text-xl font-bold text-accent-foreground">
            Notes
          </h2>
        </div>

        <nav>
          <ul className="block w-full">
            <NavItem
              href="/about"
              title="About"
              description="here is a very long preview of the note, it should have some
            ellipsis at the end"
            />
            <NavItem
              href="/links"
              title="Links"
              description="here is a very long preview of the note, it should have some
            ellipsis at the end"
            />
          </ul>
        </nav>
      </div>
    </div>
  )
}
