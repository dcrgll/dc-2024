import { type Project } from '@/types/project'

export const projects: Record<string, Project> = {
  studentbeans: {
    href: 'https://studentbeans.com',
    label: 'studentbeans',
    description: "the world's leading student loyalty network.",
    tags: ['typescript', 'next.js', 'tailwindcss', 'emotion', 'aws']
  },
  flxsh: {
    href: 'https://flxsh.co',
    label: 'flxsh',
    description: "let's make tattoos easier.",
    tags: ['typescript', 'react', 'next.js', 'tailwindcss', 'vercel']
  },
  conjurer: {
    href: 'https://www.conjureruk.com',
    label: 'conjurer',
    description: 'the official website of one of the best uk metal bands.',
    tags: ['typescript', 'react', 'next.js', 'tailwindcss', 'vercel']
  },
  creativeFolks: {
    href: 'https://www.creativefolks.co.uk',
    label: 'creativefolks',
    description: 'a creative agency based in the midlands.',
    tags: ['wordpress', 'php', 'javascript', 'css', 'html']
  },
  obliqueStrategies: {
    href: 'https://marketplace.visualstudio.com/items?itemName=DanCargill.oblique-strategies',
    label: 'oblique strategies',
    description:
      'a vscode extension that displays a random oblique strategy in the status bar, inspired by brian eno and peter schmidt.',
    tags: ['typescript', 'vscode']
  }
}
