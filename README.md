# Cameroon Mosaic Heritage Resort

Marketing site for the Cameroon Mosaic Heritage Resort — *where culture, nature, heritage and
community meet.*

## Tech stack

- **React 18** + **Vite 6**
- **Tailwind CSS v4** (theme tokens in `src/index.css`)
- **React Router** for page routing
- **lucide-react** for icons
- Fonts: **DM Sans** (body) and **PT Serif** (headings)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/      Shared, reusable UI
    NavBar.jsx
    SiteFooter.jsx
    PatternDivider.jsx   Decorative diamond divider (configurable colour)
    ExperienceCard.jsx
    RegionCard.jsx
    ValueCard.jsx
    TeamCard.jsx
  data/
    images.js      Centralised image URLs (swap for project-owned assets here)
  pages/
    Home.jsx       Landing page
    About.jsx      About / "Our Story" page
  index.css        Tailwind import + design tokens (@theme)
  main.jsx         App entry + routes
```

## Design tokens

The palette and type scale from the original design are defined as Tailwind v4 theme variables in
`src/index.css`, which makes them available as utilities (`bg-gold`, `text-cream`, `text-3xl`,
`rounded-sm`, `font-headings`, etc.). Adjust them in one place to re-theme the whole site.
