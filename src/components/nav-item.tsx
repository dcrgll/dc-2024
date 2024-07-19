'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export default function NavItem({
  label,
  description,
  href,
  emoji
}: {
  label: string
  description: string
  href: string
  emoji: string
}) {
  const active = usePathname() === href

  return (
    <li
      className={cn(
        'border-b-1 mt-2 flex w-full flex-col justify-between rounded-md border-l-8 border-r-8 border-r-transparent py-2 hover:bg-border md:px-2',
        active && 'border-l-accent-foreground bg-border',
        !active && 'border-l-transparent'
      )}
    >
      <Link href={href} className="flex min-h-24 flex-col justify-between">
        <div className="">
          <h2 className="text-md break-words font-bold text-accent-foreground">
            <span className="mr-2 text-sm">{emoji}</span> {label}
          </h2>

          <p className="line-clamp-2 overflow-hidden text-ellipsis whitespace-normal text-sm text-gray-300">
            {description}
          </p>
        </div>

        <span className="mt-2 text-xs text-[#6F737A]">57 minutes ago</span>

        <hr className="mt-2 w-full px-2 text-border" />
      </Link>
    </li>
  )
}
