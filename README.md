# Veronika Petrukhina Portfolio

Two-page React portfolio based on the provided CV.

## Tech stack

- React 19
- Vite
- React Router
- Render static hosting

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy on Render

Use the included `render.yaml` blueprint, or configure a Static Site manually:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Rewrite rule: `/*` to `/index.html`

## Update the content

- Profile, experience, languages, and training cards are in `src/App.jsx`.
- Colors, typography, layout, and responsive styles are in `src/styles.css`.
- Veronika's portrait is served from `public/images/veronika-portrait.webp`.
- Add future training items to the `trainingCards` array. Portfolio filters are generated automatically from each card's `category`.
- The custom hero artwork is served from `public/images/learning-art.webp`.
