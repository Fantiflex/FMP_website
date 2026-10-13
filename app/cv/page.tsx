import { PrintButton } from '@/components/portfolio/print-button'
import { PageIntro, SiteFrame } from '@/components/portfolio/site-shell'

const experience = [
  { date: 'Current', title: 'Graduate student & machine learning researcher', detail: 'Research across computational health, cognitive science, and human-centered AI.' },
  { date: 'Education', title: 'Graduate study', detail: 'Graduate student working across machine learning, computational health, and cognitive science.' },
  { date: 'Selected work', title: 'Research in social perception', detail: 'Behavioral experimentation and quantitative analysis of visual estimation.' },
  { date: 'Selected work', title: 'Frontend engineering · UFO.RECORDZ', detail: 'Production website and automated music data pipeline.' },
]

export default function CVPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageIntro kicker="Curriculum vitae" title="A short record of work." description="A selected overview of my research and engineering practice. A complete CV will be available here soon." />
        <section className="cv-content shell">
          <div className="cv-actions"><a className="button-link" href="#timeline">View selected experience <span aria-hidden="true">↓</span></a><PrintButton /></div>
          <div id="timeline" className="timeline"><header className="timeline-heading"><h2 className="eyebrow">Selected experience</h2><p>Education and project experience</p></header>{experience.map((item) => <article className="timeline-item" key={item.title}><span className="mono timeline-date">{item.date}</span><div><h2>{item.title}</h2><p>{item.detail}</p></div></article>)}</div>
        </section>
      </main>
    </SiteFrame>
  )
}
