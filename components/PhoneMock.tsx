/**
 * CSS-rendered phone visual that mimics the in-app "tag the why"
 * moment without needing a static screenshot.
 */
export default function PhoneMock({
  variant = 'tag',
}: {
  variant?: 'tag' | 'caps' | 'story' | 'box'
}) {
  if (variant === 'tag') return <PhoneTag />
  if (variant === 'caps') return <PhoneCaps />
  if (variant === 'story') return <PhoneStory />
  return <PhoneBox />
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'linear-gradient(160deg, #1f0a2e 0%, #2A1340 60%, #1A0828 100%)',
        borderRadius: 38,
        padding: '24px 18px 20px',
        color: '#FFEEDA',
        position: 'relative',
        boxShadow:
          'inset 0 0 0 2px rgba(255,255,255,.04), 0 30px 60px -10px rgba(31,14,51,.35)',
        aspectRatio: '9/19',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 100,
          height: 22,
          borderRadius: 999,
          background: '#0A0312',
        }}
      />
      <div style={{ height: 22 }} />
      {children}
    </div>
  )
}

function PhoneTag() {
  return (
    <Frame>
      <div style={{ padding: '0 4px' }}>
        <div
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          stop tracking.
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--peek)',
              fontWeight: 600,
            }}
          >
            start seeing why.
          </em>
        </div>
      </div>
      <div
        style={{
          background: 'rgba(255,238,218,.06)',
          borderRadius: 16,
          padding: '14px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--peek)',
              color: '#1F0E33',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--f-display)',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            B
          </span>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>Blank Street</div>
            <div style={{ fontSize: 10, color: 'rgba(255,238,218,.55)' }}>
              today · 8:42am
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 600,
            fontSize: 18,
          }}
        >
          $5.75
        </div>
      </div>
      <div
        style={{
          fontFamily: 'var(--f-display)',
          fontSize: 14,
          padding: '0 4px',
        }}
      >
        what made you{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--peek)' }}>buy</em> this?
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 6,
        }}
      >
        {[
          ['ritual', 'routine', '#7DB880', 'rgba(125,184,128,.18)'],
          ['self reward', 'a treat', '#FF7A50', 'rgba(255,122,80,.20)'],
          ['social', 'with someone', '#EC6E9C', 'rgba(236,110,156,.18)'],
          ['convenience', 'easiest', '#F4D547', 'rgba(244,213,71,.20)'],
        ].map(([label, name, color, bg]) => (
          <div
            key={label}
            style={{
              borderRadius: 12,
              padding: '8px 10px',
              background: bg,
              border: `1px solid ${color}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color,
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 11,
                fontWeight: 600,
                color: '#FFEEDA',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  )
}

function PhoneCaps() {
  return (
    <Frame>
      <div style={{ padding: '0 4px' }}>
        <div
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 600,
            fontSize: 18,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          keep the spending that{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--peek)' }}>
            feels good.
          </em>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: '4px 2px',
        }}
      >
        {[
          { label: 'Coffee', amt: '$28 / $40', w: '70%', c: '#7DB880' },
          { label: 'Going out', amt: '$120 / $200', w: '60%', c: '#EC6E9C' },
          { label: 'Stress buys', amt: '$96 / $80 ↑', w: '100%', c: '#FF7A50' },
          { label: 'Groceries', amt: '$48 / $120', w: '40%', c: '#7DB880' },
        ].map((c) => (
          <div key={c.label}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 11,
                marginBottom: 4,
                color: 'rgba(255,238,218,.85)',
              }}
            >
              <span style={{ fontWeight: 600 }}>{c.label}</span>
              <span style={{ fontFamily: 'var(--f-display)' }}>{c.amt}</span>
            </div>
            <div
              style={{
                height: 8,
                borderRadius: 999,
                background: 'rgba(255,238,218,.08)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: c.w,
                  background: c.c,
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 'auto',
          background: 'var(--peek)',
          color: '#1F0E33',
          textAlign: 'center',
          padding: '10px',
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 12,
        }}
      >
        i&rsquo;m done
      </div>
    </Frame>
  )
}

function PhoneStory() {
  return (
    <Frame>
      <div style={{ padding: '0 4px' }}>
        <div
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 600,
            fontSize: 18,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          your week,
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--peek)' }}>
            in plain english.
          </em>
        </div>
      </div>
      <div
        style={{
          background: 'rgba(255,238,218,.06)',
          borderRadius: 16,
          padding: 14,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--f-script)',
            fontSize: 16,
            color: '#C8E661',
          }}
        >
          your two selves
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 700,
              fontSize: 28,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#FFEEDA',
            }}
          >
            +$230/day
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,238,218,.7)' }}>
            more on weekdays · 45.8× weekend pace
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            marginTop: 4,
          }}
        >
          <div
            style={{
              background: 'rgba(255,238,218,.06)',
              borderRadius: 10,
              padding: '8px 10px',
              fontSize: 11,
              color: 'rgba(255,238,218,.85)',
            }}
          >
            <span style={{ fontWeight: 600 }}>WEEKDAYS</span>
            <span style={{ float: 'right', fontWeight: 700 }}>$235.96/day</span>
          </div>
          <div
            style={{
              background: 'rgba(255,238,218,.06)',
              borderRadius: 10,
              padding: '8px 10px',
              fontSize: 11,
              color: 'rgba(255,238,218,.6)',
            }}
          >
            <span style={{ fontWeight: 600 }}>WEEKENDS</span>
            <span style={{ float: 'right', fontWeight: 700 }}>$5.15/day</span>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function PhoneBox() {
  return (
    <Frame>
      <div style={{ padding: '0 4px' }}>
        <div
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 600,
            fontSize: 18,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          stick to your plan.
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--peek)' }}>
            earn your blind box.
          </em>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr 1fr',
          gap: 6,
          alignItems: 'center',
        }}
      >
        {['', 'tap me', ''].map((t, i) => (
          <div
            key={i}
            style={{
              borderRadius: 14,
              border: i === 1 ? '2px solid var(--peek)' : '1.5px solid rgba(255,238,218,.18)',
              padding: '14px 4px',
              background: i === 1 ? 'rgba(255,122,80,.12)' : 'rgba(255,238,218,.04)',
              textAlign: 'center',
              transform: i === 1 ? 'scale(1.05)' : 'none',
              minHeight: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 22 }}>👀</span>
            <span
              style={{
                fontFamily: 'var(--f-script)',
                fontSize: 13,
                color: i === 1 ? 'var(--peek)' : 'rgba(255,238,218,.55)',
              }}
            >
              {t || 'tap me'}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          background: 'rgba(255,238,218,.05)',
          borderRadius: 14,
          padding: '10px 12px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 16 }}>🔒</span>
        <span style={{ fontSize: 11, color: 'rgba(255,238,218,.7)' }}>
          unlocks in
        </span>
        <span style={{ display: 'flex', gap: 6, fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 14 }}>
          <span>22</span>
          <span style={{ color: 'rgba(255,238,218,.4)' }}>:</span>
          <span>09</span>
          <span style={{ color: 'rgba(255,238,218,.4)' }}>:</span>
          <span>08</span>
        </span>
      </div>
    </Frame>
  )
}
