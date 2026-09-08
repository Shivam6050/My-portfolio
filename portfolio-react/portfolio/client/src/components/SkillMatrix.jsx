import { SKILL_MATRIX } from '../data/content';

export default function SkillMatrix() {
  return (
    <section style={{ padding: '36px 0 44px' }}>
      <div className="eyebrow">Skill matrix</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 24,
        marginTop: 18
      }}>
        {SKILL_MATRIX.map(({ group, items }) => (
          <div key={group}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 12,
              color: 'var(--text-primary)', marginBottom: 8
            }}>
              {group}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', lineHeight: 2 }}>
              {items.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
