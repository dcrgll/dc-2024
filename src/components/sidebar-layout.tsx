import { Sidebar } from 'lucide-react'

export default function SideBarLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-dvh bg-[#1c1c1c] text-white">
      <div className="hidden h-dvh w-64 flex-shrink-0 overflow-y-auto border-r border-gray-400/20 md:flex">
        <div className="flex h-full flex-col">sidebar</div>
      </div>

      <div className="h-dvh flex-grow overflow-y-auto">{children}</div>
    </div>
  )
}
