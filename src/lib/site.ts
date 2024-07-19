import { type Link } from '@/types/link'

export const site = {
  title: 'dan cargill',
  description: 'engineer, designer, and musician.',
  url: 'https://cargill.dev'
}

export const links: Record<string, Link> = {
  email: {
    href: 'mailto:dan+site@cargill.dev',
    label: 'email'
  },
  github: {
    href: 'https://github.com/dcrgll',
    label: 'github'
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/dancargill',
    label: 'linkedin'
  },
  instagram: {
    href: 'https://www.instagram.com/dncrgll',
    label: 'instagram'
  }
}
