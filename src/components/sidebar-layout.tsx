import Sidebar from './sidebar'

export default function SideBarLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-dvh text-white">
      <Sidebar />
      <div className="h-dvh flex-grow overflow-y-auto">{children}</div>
    </div>
  )
}
