import { useState } from 'react';

export default function ScreenshotFrame({ src, alt, urlLabel }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="dot-sm" /><span className="dot-sm" /><span className="dot-sm" />
        <span className="url">{urlLabel}</span>
      </div>
      {failed ? (
        <div className="frame-placeholder">{src}</div>
      ) : (
        <img className="frame-img" src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
