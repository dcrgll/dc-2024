import { type Metadata } from 'next'

import { projects } from '@/lib/projects'
import routes from '@/lib/routes'
import Link from '@/components/link'
import Note from '@/components/note'
import NoteContent from '@/components/note-content'
import NoteSubtitle from '@/components/note-subtitle'
import NoteTitle from '@/components/note-title'

export const metadata: Metadata = {
  title: routes.projects.label.toLowerCase()
}

export default function ProjectsPage() {
  const items = Object.keys(projects).map((key) => {
    const project = projects[key]

    return (
      <li key={project.href} className="flex flex-col">
        <div>
          <Link href={project.href}>{project.label}</Link> -{' '}
          {project.description}
        </div>

        <ul className="mb-2 flex gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="text-sm text-gray-500">
              {tag}
            </li>
          ))}
        </ul>
      </li>
    )
  })

  return (
    <Note>
      <NoteTitle emoji={routes.projects.emoji}>
        {routes.projects.label}
      </NoteTitle>

      <NoteContent>
        <NoteSubtitle>{"some stuff i've worked on recently"}</NoteSubtitle>
        <ul className="list-disc">{items}</ul>
      </NoteContent>
    </Note>
  )
}
