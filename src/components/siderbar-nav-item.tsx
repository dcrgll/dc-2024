'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export default function SidebarNavItem({
  title,
  description,
  href
}: {
  title: string
  description: string
  href: string
}) {
  const active = usePathname() === href

  return (
    <li
      className={cn(
        'border-b-1 mt-2 flex w-full flex-col justify-between rounded-md border-border p-2 hover:bg-border',
        active && 'border-l-8 border-l-accent-foreground bg-border',
        !active && 'border-b-2 border-l-8 border-l-transparent'
      )}
    >
      <Link href={href} className="flex min-h-24 flex-col justify-between">
        <div className="">
          <h2 className="text-md break-words font-bold text-accent-foreground">
            {title}
          </h2>

          <p className="line-clamp-2 overflow-hidden text-ellipsis whitespace-normal text-sm text-gray-300">
            {description}
          </p>
        </div>

        <span className="mt-2 text-xs text-[#6F737A]">57 minutes ago</span>
      </Link>
    </li>
  )
}
