# Lindsey Harris — Portfolio

Personal portfolio built with React and Vite, preserving the original portfolio design, projects, images, theme toggle, animations, carousels, and contact form.

## Getting started

Install Node.js LTS if needed. In VS Code, open this project folder (the folder containing `package.json`) and open Terminal → New Terminal.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Stop the server with Ctrl+C.

```bash
npm run build
npm run preview
```

`build` creates the production site in `dist/`; `preview` serves that build locally.

## Structure

- `src/components/` — each page section has a named folder containing its JSX and CSS.
- `src/components/ProjectCarousel/` — reusable React carousel used by the Projects section.
- `src/hooks/usePageEffects.js` — shared scroll, tilt, progress, and parallax effects with cleanup.
- `src/images/` — imported image assets.
- `src/utils/emailjs-config.js` — existing public EmailJS browser identifiers.
- `src/App.jsx` — page composition.
- `src/App.css` — page styles.
- `src/index.css` — shared theme variables, base styles, section styles, and animations.
- `src/responsive.css` — shared responsive overrides, imported after component styles to preserve the original cascade.
- `src/main.jsx` — React entry point.
- `public/assets/` — static downloads, served unchanged.

No `blocks/` or `pages/` folders are used. Navigation, theme, rotating text, carousels, and form state use React. Effects clean up listeners, timers, observers, and animation frames under Strict Mode.

## Contact form

EmailJS is installed as a dependency. It requires an internet connection and the configured EmailJS service/template. Validation can be checked locally without sending a message. Public browser identifiers are not server secrets.

## Deployment

Deploy the contents of `dist/` to your static host after running `npm run build`. Vite uses relative asset URLs for static hosting. Existing deployment workflows that served the old HTML directly need a build step.
