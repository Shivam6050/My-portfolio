# Portfolio — build status

React (Vite) frontend + Express/MongoDB API. Two routes: Home and Work.
One action: launch a live demo. Contact form and socials live in the footer —
no standalone About/Contact/Experience pages, by design.

## File structure
```
portfolio-project/
├── client/                    React frontend (Vite)
│   ├── src/
│   │   ├── components/         Nav, Footer, CaseStudy, TechBadge, etc.
│   │   ├── pages/                Home.jsx, Work.jsx
│   │   ├── data/content.js       All locked copy + tech stack, single source of truth
│   │   ├── api.js                Click tracking + contact form calls
│   │   └── index.css             Design tokens (ink/brass palette, hairlines)
│   └── public/assets/screenshots/  Real screenshots go here
└── server/                    Express + MongoDB API
    ├── routes/                 contact.js, track.js, analytics.js
    └── models/                 Contact.js, Click.js
```

## Design direction (confirmed)
Warm ink background (#0C0B0A), off-white text, brass accent (#C9A05C),
hairline borders, sharp corners (no rounded pills), asymmetric split layout,
Space Grotesk + JetBrains Mono. Tech stack shown with real brand-colored
logos via react-icons, not plain text tags.

## Status

### Done
- [x] React app scaffolded (Vite, React Router), builds cleanly
- [x] Home page hero, checkout proof, built-with badges, tracked demo button
- [x] Work page both case studies, tech badges with real logos, skill matrix
- [x] Stack-honesty line on Work page (MERN primary, Next.js/Supabase/Gemini second)
- [x] View source links wired to real GitHub repos
- [x] Footer rebuilt in React, contact form + 4 social icons, wired to tested API
- [x] Click tracking fires non-blocking on demo button click
- [x] All tech badge icons verified to exist in react-icons before use
- [x] Production build tested and confirmed serving correctly

### Pending — blocks real launch
- [ ] Drop real cropped screenshots into client/public/assets/screenshots/
- [ ] Replace placeholder social links in Footer.jsx
- [ ] Set up MongoDB Atlas, fill in real MONGO_URI in server/.env
- [ ] Deploy API, set VITE_API_BASE in client/.env
- [ ] Deploy client build
- [ ] Verify mobile breakpoint in a real browser
- [ ] Set a real ANALYTICS_KEY

### Waiting on Learning Map build
- [x] Learning Map demo confirmed working, status flipped to live in content.js
- [x] Learning Map screenshots added (roadmap select, path map, stage detail), case study restructured to the same multi-claim layout as E-commerce
- [x] Progress-persistence claim verified — confirmed via logout/re-login, not just inferred from UI
