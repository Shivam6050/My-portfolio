import { BadgeRow } from './TechBadge';
import ScreenshotFrame from './ScreenshotFrame';
import DemoButtons from './DemoButtons';

export default function CaseStudy({ project }) {
  const hasClaims = Array.isArray(project.claims) && project.claims.length > 0;

  return (
    <section style={{ padding: '36px 0 0' }}>
      <div className="eyebrow">{project.index} — {project.title}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(19px, 2.2vw, 22px)', color: 'var(--text-primary)',
        maxWidth: '46ch', marginBottom: 14, lineHeight: 1.3
      }}>
        {project.framing}
      </h2>

      <div style={{ marginBottom: 26 }}>
        <BadgeRow stack={project.stack} />
      </div>

      {hasClaims && project.claims.map((claim, i) => (
        <div
          key={claim.label}
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            borderTop: '1px solid var(--border)',
            gap: 0
          }}
          className="claim-row"
        >
          <div style={{
            padding: '22px 32px 22px 0',
            borderRight: '1px solid var(--border)',
            order: i % 2 === 0 ? 1 : 2
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8
            }}>
              {claim.label}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {claim.text}
            </div>
          </div>
          <div style={{ padding: '22px 0 22px 32px', order: i % 2 === 0 ? 2 : 1 }}>
            <ScreenshotFrame src={claim.shotSrc} alt={claim.shotAlt} urlLabel={claim.urlLabel} />
          </div>
        </div>
      ))}

      {!hasClaims && project.body && (
        <p style={{
          fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.75,
          maxWidth: '60ch', marginBottom: 24, borderTop: '1px solid var(--border)', paddingTop: 22
        }}>
          {project.body}
        </p>
      )}

      <div style={{ margin: '28px 0 44px' }}>
        <DemoButtons
          project={project.id}
          demoUrl={project.demoUrl}
          sourceUrl={project.sourceUrl}
          status={project.status}
          pendingLabel={project.pendingLabel}
          page="work"
        />
      </div>
    </section>
  );
}
