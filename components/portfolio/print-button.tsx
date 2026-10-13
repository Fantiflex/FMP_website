'use client'

export function PrintButton() {
  return (
    <button className="text-link print-button" type="button" onClick={() => window.print()}>
      Download / print CV <span aria-hidden="true">→</span>
    </button>
  )
}
