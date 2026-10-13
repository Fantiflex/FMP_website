export function ProjectTags({ tags, className = '' }: { tags: readonly string[]; className?: string }) {
  return (
    <ul className={`project-tags ${className}`} aria-label="Methods and tools">
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  )
}
