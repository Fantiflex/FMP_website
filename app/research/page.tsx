import Link from 'next/link'
import { ProjectCollection } from '@/components/portfolio/project-preview'
import { PageIntro, SiteFrame } from '@/components/portfolio/site-shell'
import { projects } from '@/data/projects'

export default function ResearchPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageIntro kicker="Research & practice" title="Questions worth modeling." description="A cross-disciplinary practice spanning social perception, computational health, cognitive science, and the engineering of human-centered tools." />
        <section className="research-note shell"><h2 className="eyebrow">Approach</h2><p>Start with the question. Make the assumptions inspectable. Build methods that help people reason about the result.</p><Link href="/about" className="text-link">More about my approach <span aria-hidden="true">→</span></Link></section>
        <section className="work-section shell"><div className="section-heading"><h2 className="eyebrow">Selected projects</h2><p>Research and applied engineering, in progress and in practice.</p></div><ProjectCollection projects={projects} /></section>
      </main>
    </SiteFrame>
  )
}
