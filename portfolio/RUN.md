# Quickstart

## 1. Start the API
```
cd server
npm install
cp .env.example .env   # fill in MONGO_URI and ANALYTICS_KEY
npm run dev
```
Runs on `http://localhost:4000`.

## 2. Start the React app
```
cd client
npm install
npm run dev
```
Runs on `http://localhost:5173`, defaults to talking to the API at `http://localhost:4000`.

To point at a deployed API later, create `client/.env` with:
```
VITE_API_BASE=https://your-deployed-api.com
```

## 3. Add your real screenshots
Drop cropped screenshots into `client/public/assets/screenshots/`:
`admin.png`, `checkout.png`, `filters.png`
Referenced from `client/src/data/content.js` — missing files render a
labeled placeholder instead of a broken image, so it's obvious what's missing.

## 4. Build for production
```
cd client
npm run build
```
Outputs static files to `client/dist/` — deploy that folder anywhere
(Vercel, Netlify, etc). The API deploys separately (Render, Railway, etc).

See `README.md` for the full status checklist.
