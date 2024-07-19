import routes from '@/lib/routes'
import Note from '@/components/note'
import NoteTitle from '@/components/note-title'

export default function LinksPage() {
  return (
    <Note>
      <NoteTitle emoji={routes.links.emoji}>{routes.links.label}</NoteTitle>
    </Note>
  )
}
