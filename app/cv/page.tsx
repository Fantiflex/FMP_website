import { PrintButton } from '@/components/portfolio/print-button'
import { PageIntro, SiteFrame } from '@/components/portfolio/site-shell'

const experience = [
  {
    date: '2025–2026',
    title: 'Visiting Graduate Student · UC Berkeley',
    detail:
      'College of Computing, Data Science & Society. Coursework across machine learning, deep neural networks and optimization, stochastic processes, computer vision, computational precision health, and neuronal function.',
  },
  {
    date: '2021–2026',
    title: 'MSc Computer Science · Paris-Saclay / ENS Paris-Saclay',
    detail:
      'MSc in Computer Science, currently on leave. Previously completed a double-major BSc in Mathematics and EECS.',
  },
  {
    date: 'Summer 2026',
    title: 'Research Intern · Cognitive & Computational Neuroscience',
    detail:
      'LNC2, ENS Paris. Designed behavioral experiments on minority proportion estimation and developed participant-specific face reconstruction using Bradley–Terry modeling, MediaPipe landmarks, geometric alignment, and Delaunay-based morphing.',
  },
  {
    date: '2026',
    title: 'Modular Manifold MuOn',
    detail:
      'Evaluated Riemannian L-BFGS as a faster inner solver for MuOn across MLPs, CNNs, and Vision Transformers on CIFAR-10/100, including runtime, convergence, and robustness comparisons.',
  },
  {
    date: '2021–Present',
    title: 'Co-Founder & Technical Lead · UFO.recordz',
    detail:
      'Built and maintain the collective’s digital infrastructure, including a React / TypeScript / Supabase web platform and automated SoundCloud data workflows.',
  },
  {
    date: '2024–2025',
    title: 'Head Student Representative · ENS Paris-Saclay',
    detail:
      'Represented approximately 1,000 students and led institutional and community initiatives, including projects and events with budgets up to €100K.',
  },
]

export default function CVPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageIntro
          kicker="Curriculum vitae"
          title="Research, engineering & community."
          description="Computer Science and Applied Mathematics researcher interested in robust and equitable machine learning for computational health and human-centered systems."
        />

        <section className="cv-content shell">
          <div className="cv-actions">
            <a
              className="button-link"
              href="/CV_Fantine_Mpacko_Priso.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full CV <span aria-hidden="true">↗</span>
            </a>

            <a className="text-link" href="#timeline">
              Selected experience <span aria-hidden="true">↓</span>
            </a>

            <PrintButton />
          </div>

          <div id="timeline" className="timeline">
            <header className="timeline-heading">
              <h2 className="eyebrow">Selected experience</h2>
              <p>Education · Research · Engineering · Leadership</p>
            </header>

            {experience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.date}-${item.title}`}
              >
                <span className="mono timeline-date">{item.date}</span>

                <div>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteFrame>
  )
}