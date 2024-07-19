export default function NoteTitle({
  children,
  emoji
}: {
  children: React.ReactNode
  emoji: string
}) {
  return (
    <h1 className="mb-8 mt-4 text-2xl font-bold text-accent-foreground">
      <span className="mr-2">{emoji}</span> {children}
    </h1>
  )
}
