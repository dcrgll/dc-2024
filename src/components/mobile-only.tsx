'use client'

import { useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'

import { useMobileDetect } from '@/hooks/isMobile'

export default function MobileOnly() {
  const isMobile = useMobileDetect()
  const pathname = usePathname()

  useEffect(() => {
    if (isMobile !== null && !isMobile && pathname === '/') {
      redirect('about')
    }
  }, [isMobile, pathname])

  return <></>
}
