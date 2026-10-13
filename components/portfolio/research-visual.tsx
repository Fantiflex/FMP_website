import { useId } from 'react'
import type { Project } from '@/data/projects'

type Visual = Project['visual']
type FigureFrameProps = {
  visual: Visual
  figureClass: string
  figureNumber: string
  className?: string
  heading: string
  detail: string
  caption: string
  children: React.ReactNode
}

function FigureFrame({ visual, figureClass, figureNumber, className, heading, detail, caption, children }: FigureFrameProps) {
  const captionId = useId()

  return (
    <figure className={`${figureClass} research-figure ${className ?? ''}`} aria-labelledby={captionId}>
      <div className="figure-topline"><span>{heading}</span><span>{detail}</span></div>
      {children}
      <figcaption className="figure-caption" id={captionId}>
        <span>FIG. {figureNumber}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}

function EstimateMatrix() {
  return (
    <>
      <div className="dot-matrix" role="img" aria-label="Eight by eight grid of 64 circles, including 16 olive circles and 48 dark circles">
        {Array.from({ length: 64 }, (_, index) => <span className={index % 4 === 0 ? 'dot dot-accent' : 'dot'} key={index} />)}
      </div>
      <div className="slider-label"><span>Estimate the proportion</span><span className="mono">0 — 100%</span></div>
      <div className="slider-track" aria-hidden="true"><span /><i /></div>
      <div className="slider-ends"><span>0%</span><span>100%</span></div>
    </>
  )
}

function FacePipeline() {
  return (
    <div className="pipeline-steps">
      <div className="pipeline-step">
        <div className="face-pair" aria-hidden="true"><span className="face-block face-one"><i /><b /></span><span className="face-block face-two"><i /><b /></span></div>
        <span className="pipeline-label">Face pairs</span>
      </div>
      <span className="pipeline-arrow" aria-hidden="true">→</span>
      <div className="pipeline-step">
        <div className="choice-block" aria-hidden="true"><span>A</span><span className="choice-divider">or</span><span>B</span></div>
        <span className="pipeline-label">Pairwise decisions</span>
      </div>
      <span className="pipeline-arrow" aria-hidden="true">→</span>
      <div className="pipeline-step">
        <div className="score-block" aria-hidden="true"><span>BT</span><i /><i /><i /></div>
        <span className="pipeline-label">Bradley–Terry scores</span>
      </div>
      <span className="pipeline-arrow" aria-hidden="true">→</span>
      <div className="pipeline-step">
        <div className="face-block face-reconstructed" aria-hidden="true"><i /><b /></div>
        <span className="pipeline-label">Reconstructed representation</span>
      </div>
    </div>
  )
}

function EvaluationPlot() {
  return (
    <div className="plot-content">
      <div className="plot-y-label">SENSITIVITY</div>
      <div className="plot-area">
        <span className="plot-grid plot-grid-one" /><span className="plot-grid plot-grid-two" /><span className="plot-grid plot-grid-three" />
        <svg className="roc-line" viewBox="0 0 420 230" role="img" aria-label="Schematic receiver operating characteristic curve compared with chance">
          <path className="roc-baseline" d="M12 218 L408 12" />
          <path className="roc-curve" d="M12 218 C38 158 57 111 85 82 C114 53 157 45 206 30 C273 9 330 10 408 12" />
        </svg>
        <div className="plot-axis-x" /><div className="plot-axis-y" />
        <span className="plot-x-start">0</span><span className="plot-x-end">1</span>
        <span className="plot-y-start">0</span><span className="plot-y-end">1</span>
      </div>
      <div className="plot-legend"><span><i className="legend-model" /> Model</span><span><i className="legend-baseline" /> Chance</span></div>
    </div>
  )
}

function MusicInterface() {
  return (
    <div className="music-window" role="img" aria-label="Interface sketch for an independent electronic music archive">
      <div className="window-top"><span className="window-mark">UFO<span>.</span>RECORDZ</span><span className="mono">INDEPENDENT / ELECTRONIC</span><span className="window-menu">MENU +</span></div>
      <div className="music-main"><div className="music-side mono">LABEL<br />ARCHIVE<br />EST. 20—</div><div className="record-art" aria-hidden="true"><span>UFO</span><i /><b /></div><div className="release-copy"><span className="eyebrow">LATEST RELEASE / 004</span><strong>OUT OF<br />ORBIT</strong><span className="mono">LISTEN ON SOUNDCLOUD</span></div></div>
      <div className="music-bottom"><span>RELEASES — ARTISTS — ABOUT</span><span className="mono">SOUND / FORM / COMMUNITY</span></div>
    </div>
  )
}

export function ResearchVisual({ visual, className }: { visual: Visual; className?: string }) {
  const figureCopy = {
    matrix: { figureClass: 'matrix-figure', figureNumber: '01', heading: 'STIMULUS ARRAY / 64', detail: 'CONDITION A', caption: 'Illustrative trial layout · 8 × 8' },
    faces: { figureClass: 'pipeline-figure', figureNumber: '02', heading: 'PAIRWISE PREFERENCE MODEL', detail: 'METHOD OVERVIEW', caption: 'From observed choices to latent preference' },
    evaluation: { figureClass: 'plot-figure', figureNumber: '03', heading: 'MODEL EVALUATION', detail: 'HELD-OUT SET', caption: 'Schematic ROC curve · illustrative, not empirical' },
    music: { figureClass: 'music-figure', figureNumber: '04', heading: 'UFO.RECORDZ', detail: 'INDEPENDENT / ELECTRONIC', caption: 'Interface study · independent music archive' },
  } satisfies Record<Visual, { figureClass: string; figureNumber: string; heading: string; detail: string; caption: string }>
  const content = {
    matrix: <EstimateMatrix />,
    faces: <FacePipeline />,
    evaluation: <EvaluationPlot />,
    music: <MusicInterface />,
  } satisfies Record<Visual, React.ReactNode>

  return <FigureFrame visual={visual} className={className} {...figureCopy[visual]}>{content[visual]}</FigureFrame>
}
