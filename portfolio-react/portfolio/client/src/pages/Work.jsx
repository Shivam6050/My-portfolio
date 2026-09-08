import CaseStudy from '../components/CaseStudy';
import SkillMatrix from '../components/SkillMatrix';
import { PROJECTS } from '../data/content';

export default function Work() {
  return (
    <main className="wrap" style={{ paddingTop: 36 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em',
        color: 'var(--text-muted)', marginBottom: 8
      }}>
        Primary stack: MERN. Second build shown in Next.js / Supabase / Gemini — range, not repetition.
      </div>

      <CaseStudy project={PROJECTS.ecommerce} />
      <div className="rule full" />
      <CaseStudy project={PROJECTS.learningMap} />
      <div className="rule full" />
      <SkillMatrix />
    </main>
  );
}
