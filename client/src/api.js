// Points at the local dev server by default. Set VITE_API_BASE in a .env file
// (client/.env, VITE_API_BASE=https://your-deployed-api.com) once the API is hosted.
export const API_BASE = import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:4000' : '');

// Fire-and-forget on purpose. Analytics failing must never block or visibly
// affect the visitor's click — see server/routes/track.js for the matching
// server-side behavior (always responds fast, never surfaces an error).
export function trackClick(project, page) {
  fetch(`${API_BASE}/api/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ project, page }),
    keepalive: true
  }).catch(() => {});
}

export async function submitContact({ name, email, message }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Submission failed.');
  return data;
}
