import NextLink from 'next/link'

export default function Link({
  children,
  href
}: {
  children: React.ReactNode
  href: string
}) {
  if (href.startsWith('https')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-foreground hover:underline"
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className="text-accent-foreground hover:underline">
      {children}
    </NextLink>
  )
}
