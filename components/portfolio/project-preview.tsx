import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ProjectTags } from './project-tags'
import { ResearchVisual } from './research-visual'

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <li className="project-row">
      <article>
        <header className="project-intro">
          <p className="project-index mono" aria-hidden="true">{project.number}</p>
          <div className="project-content">
            <p className="project-question">{project.question}</p>
            <h3 className="project-title">
              <Link href={`/projects/${project.slug}`} className="project-title-link">{project.title}</Link>
            </h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>
          </div>
        </header>
        <ResearchVisual className="project-visual" visual={project.visual} />
        <div className="project-meta">
          <span className="project-meta-label mono">METHOD / TOOLS</span>
          <ProjectTags tags={project.tags} className="project-meta-tags" />
          <Link className="text-link project-more" href={`/projects/${project.slug}`}>
            Open case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </li>
  )
}

export function ProjectCollection({ projects }: { projects: readonly Project[] }) {
  return <ol className="project-list">{projects.map((project) => <ProjectPreview key={project.slug} project={project} />)}</ol>
}
