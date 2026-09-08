import { BadgeRow } from '../components/TechBadge';
import ScreenshotFrame from '../components/ScreenshotFrame';
import DemoButtons from '../components/DemoButtons';
import { PROJECTS } from '../data/content';

export default function Home() {
  const ecommerce = PROJECTS.ecommerce;
  const heroShot = ecommerce.claims.find((c) => c.label === 'Secure payment flow');

  return (
    <main className="wrap">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="eyebrow">01 — mern engineer</div>

          <h1 className="hero-headline">
            I engineer MERN applications for production load,{' '}
            built around <em>optimized data structures</em> and scalable backend architecture.
          </h1>

          <p className="hero-subhead">
            Proven across two live builds — a secure e-commerce system and a hybrid human-AI learning map engine.
          </p>

          <div style={{ marginBottom: 32 }}>
            <DemoButtons
              project={ecommerce.id}
              demoUrl={ecommerce.demoUrl}
              sourceUrl={null}
              status="live"
              page="home"
            />
          </div>

          <div className="built-with-label">Built with</div>
          <BadgeRow stack={['react', 'node', 'express', 'mongodb', 'stripe']} />
        </div>

        <div className="hero-visual">
          <div className="shot-label">Proof — checkout flow</div>
          <ScreenshotFrame src={heroShot.shotSrc} alt={heroShot.shotAlt} urlLabel="checkout.stripe.com" />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          padding-top: 56px;
        }
        .hero-text {
          padding: 0 48px 40px 0;
          border-right: 1px solid var(--border);
        }
        .hero-visual { padding: 0 0 40px 48px; }
        .hero-headline {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.16;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .hero-headline em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .hero-subhead {
          font-size: 13px;
          color: var(--text-secondary);
          max-width: 38ch;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-text { border-right: none; border-bottom: 1px solid var(--border); padding: 0 0 32px; }
          .hero-visual { padding: 32px 0 0; }
        }
      `}</style>
    </main>
  );
}
