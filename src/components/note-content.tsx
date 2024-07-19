export default function NoteContent({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="prose max-w-none px-8">{children}</div>
}
