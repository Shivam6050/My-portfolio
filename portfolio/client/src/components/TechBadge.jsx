import { TECH } from '../data/content';

export function TechBadge({ techKey, size = 10 }) {
  const tech = TECH[techKey];
  if (!tech) return null;
  const Icon = tech.icon;
  return (
    <span className="tech-badge">
      <Icon size={size} color={tech.color} aria-hidden="true" />
      {tech.label}
    </span>
  );
}

export function BadgeRow({ stack }) {
  return (
    <div className="badge-row">
      {stack.map((key) => (
        <TechBadge key={key} techKey={key} />
      ))}
    </div>
  );
}
