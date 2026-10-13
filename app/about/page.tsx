import { PageIntro, SiteFrame } from '@/components/portfolio/site-shell'

const interests = ['Human-centered AI', 'Computational health']
const tools = ['Python', 'R', 'TypeScript', 'React', 'SQL', 'Machine learning']

export default function AboutPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <section className="about-content shell">
          <div className="about-statement"><h2 className="eyebrow">In brief</h2><p>My work uses computation to make health more tractable without losing sight of the context behind the data.</p></div>
          <div className="about-details">
            <section className="detail-line"><h2>Research interests</h2><ul>{interests.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="detail-line"><h2>Current work</h2><p>Studying social perception and developing machine learning approaches.</p></section>
            <section className="detail-line"><h2>Education</h2><p>Graduate study · Details forthcoming</p></section>
            <section className="detail-line"><h2>Tools</h2><ul className="tool-list">{tools.map((item) => <li key={item}>{item}</li>)}</ul></section>
          </div>
        </section>
      </main>
    </SiteFrame>
  )
}
