export function ResearchDiagram({ steps }: { steps: readonly string[] }) {

  return (
    <div className="system-diagram">
      <p className="mono">METHOD / PIPELINE</p>
      <ol className="diagram-steps" aria-label="Project workflow">
        {steps.map((step, index) => (
          <li className="diagram-step" key={`${index}-${step}`}>
            <span>{step}</span>
            {index < steps.length - 1 && <span className="diagram-arrow" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <p className="diagram-caption">A simplified view of the project workflow.</p>
    </div>
  )
}
