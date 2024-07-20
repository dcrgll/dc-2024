export default function NoteContent({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="prose px-4">{children}</div>
}
