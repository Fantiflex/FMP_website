import Link from 'next/link'
import { ProjectCollection } from '@/components/portfolio/project-preview'
import { Eyebrow, SiteFrame } from '@/components/portfolio/site-shell'
import { projects } from '@/data/projects'

export default function HomePage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <section className="hero shell">
          <div className="hero-kicker"><Eyebrow>Research portfolio / 2026</Eyebrow><span className="availability">Graduate student · Machine learning researcher</span></div>
          <h1 className="hero-title">Fantine<br /><span>Mpacko-Priso</span></h1>
          <div className="hero-bottom">
            <div className="hero-disciplines">Machine Learning <i /> Computational Health <i /> Human-Centered AI</div>
            <div className="hero-summary"><p>I build computational tools to study people, health, and the systems that affect them.</p><nav className="hero-links" aria-label="Selected links"><a href="#work">Selected Work <span aria-hidden="true">↓</span></a><Link href="/cv">CV <span aria-hidden="true">→</span></Link><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">→</span></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">→</span></a></nav></div>
          </div>
          <div className="hero-rule"><span className="mono">A PRACTICE IN QUESTIONS, MODELS &amp; SYSTEMS</span><span className="mono">SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="work-section shell" id="work">
          <div className="section-heading"><h2 className="eyebrow">Selected work</h2><p>Research and systems for understanding the human world.</p></div>
          <ProjectCollection projects={projects} />
        </section>
        <section className="closing-note shell"><h2 className="mono">ELSEWHERE</h2><p>Working across disciplines, with care for the questions behind the data.</p><Link className="text-link" href="/about">A little more about my work <span aria-hidden="true">→</span></Link></section>
      </main>
    </SiteFrame>
  )
}
