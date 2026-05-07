/**
 * Renders the hero H1 letter-by-letter so each glyph drops in on first paint.
 * Italic spans (e.g. "what" / "why") stay stylable via the .accent class.
 *
 * Usage:
 *   <KineticH1 parts={[
 *     { text: "Your bank shows you " },
 *     { text: "what", accent: true },
 *     { text: "." },
 *     { br: true },
 *     { text: "Peek shows you " },
 *     { text: "why.", accent: true },
 *   ]} />
 */
type Part =
  | { text: string; accent?: boolean }
  | { br: true }

let globalIndex = 0
const STAGGER_MS = 14
const START_DELAY_MS = 30
const MAX_INDEX = 22

function Letter({ ch, accent }: { ch: string; accent?: boolean }) {
  const isSpace = ch === ' '
  const cls = `kinetic__letter${isSpace ? ' kinetic__letter--space' : ''}`
  const cappedIndex = Math.min(globalIndex, MAX_INDEX)
  const delay = START_DELAY_MS + cappedIndex * STAGGER_MS
  globalIndex += 1
  return (
    <span
      className={cls}
      style={{
        animationDelay: `${delay}ms`,
        ...(accent
          ? {
              fontStyle: 'italic',
              color: 'var(--peek-2)',
              fontWeight: 600,
              position: 'relative',
            }
          : null),
      }}
      aria-hidden="true"
    >
      {isSpace ? ' ' : ch}
    </span>
  )
}

export default function KineticH1({
  parts,
  className,
  ariaLabel,
}: {
  parts: Part[]
  className?: string
  ariaLabel: string
}) {
  globalIndex = 0
  return (
    <h1 className={className} aria-label={ariaLabel}>
      <span className="kinetic">
        {parts.map((p, i) => {
          if ('br' in p) return <br key={`br-${i}`} aria-hidden="true" />
          const accent = p.accent
          return (
            <span key={i} style={accent ? { display: 'inline-block', position: 'relative' } : undefined}>
              {Array.from(p.text).map((ch, j) => (
                <Letter key={`${i}-${j}`} ch={ch} accent={accent} />
              ))}
              {accent && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '-2px',
                    height: 6,
                    background: 'rgba(255,122,80,.22)',
                    borderRadius: 3,
                    zIndex: -1,
                  }}
                />
              )}
            </span>
          )
        })}
      </span>
    </h1>
  )
}
