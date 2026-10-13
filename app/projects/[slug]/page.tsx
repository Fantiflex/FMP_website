import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Eyebrow, SiteFrame } from '@/components/portfolio/site-shell'
import { ProjectTags } from '@/components/portfolio/project-tags'
import { ResearchDiagram } from '@/components/portfolio/research-diagram'
import { ResearchVisual } from '@/components/portfolio/research-visual'
import { getProject, projectSections, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  return { title: project ? `${project.title} — Fantine Mpacko-Priso` : 'Project not found' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const pipelineSteps = project.system.split(' → ')

  return (
    <SiteFrame>
      <main id="main-content" className="project-detail shell">
        <Link className="back-link mono" href="/#work">← SELECTED WORK</Link>
        <header className="project-detail-header">
          <Eyebrow>Case study / {project.number}</Eyebrow>
          <h1 className="detail-title">{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="detail-lede">{project.description}</p>
          <div className="detail-meta"><span className="mono">METHOD / TOOLS</span><ProjectTags tags={project.tags} className="detail-tags" /></div>
        </header>
        <div className="detail-body">
          {projectSections.map((section, index) => (
            <section className="detail-section" key={section.key}>
              <div className="detail-section-label"><span className="mono">{String(index + 1).padStart(2, '0')} —</span><h2>{section.title}</h2></div>
              <div className="detail-section-content">
                <p className="detail-prompt">{section.prompt}</p>
                <p className="detail-text">{project[section.key]}</p>
                {section.key === 'approach' && <pre className="code-sample"><code>{project.codeSnippet}</code></pre>}
                {section.key === 'system' && <ResearchDiagram steps={pipelineSteps} />}
                {section.key === 'result' && <ResearchVisual visual={project.visual} />}
              </div>
            </section>
          ))}
        </div>
        <nav className="next-project" aria-label="Project navigation"><span className="mono">CONTINUE EXPLORING</span><Link href="/#work">All selected work <span aria-hidden="true">→</span></Link></nav>
      </main>
    </SiteFrame>
  )
}
