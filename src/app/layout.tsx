import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'

import { env } from '@/env'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import SideBarLayout from '@/components/sidebar-layout'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: '%s | dan cargill',
    default: site.title
  },
  description: site.description,
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    url: site.url,
    title: site.title,
    description: site.description
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-dvh font-sans antialiased', fontSans.variable)}
      >
        <SideBarLayout>{children}</SideBarLayout>
      </body>
      <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_ID!} />
    </html>
  )
}
