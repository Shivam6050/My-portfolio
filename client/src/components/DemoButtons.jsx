import { trackClick } from '../api';

export default function DemoButtons({ project, demoUrl, sourceUrl, status, pendingLabel, page }) {
  const isLive = status === 'live';

  return (
    <div className="btn-row">
      {isLive ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={() => trackClick(project, page)}
        >
          Launch demo →
        </a>
      ) : (
        <span className="btn btn-pending" aria-disabled="true">
          <span className="dot" />
          {pendingLabel || 'Coming soon'}
        </span>
      )}
      {sourceUrl && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-source">
          View source
        </a>
      )}
    </div>
  );
}
