# Travel-Themed Developer Portfolio

## Overview

This is Jaden Yin's personal software engineering portfolio, built around the idea of a professional and personal journey. Travel references shape the visual language—routes, coordinates, destination codes, and itinerary details—while the content remains focused on engineering work and impact.

Version 1 focuses on:

- A strong landing page and clear personal introduction
- Editorial project presentations
- Professional experience and measurable outcomes
- Responsive layouts for desktop, tablet, and mobile
- An initial travel-inspired design system
- Accessible, performant component architecture

More advanced travel and motion features are intentionally reserved for later versions.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Motion for small reveal transitions
- Lucide icons
- Vercel-ready deployment

## Running Locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Before shipping changes, run:

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
  app/              Page shell, metadata, favicon, and global styles
  components/
    contact/        Closing contact section
    experience/     Experience section, timeline, and timeline items
    hero/           Hero content and future 3D scene boundary
    layout/         Navigation and footer
    projects/       Project list and reusable project card
    travel/         Future travel archive preview
    ui/             Small shared presentation components
  data/             Editable project, experience, and site content
  lib/              Shared utilities
  types/            Content types
public/
  images/projects/  Project artwork used by next/image
```

## Updating Content

- Projects: edit `src/data/projects.ts`
- Experience: edit `src/data/experience.ts`
- Email and social links: edit `src/data/site.ts`
- Hero copy: edit `src/components/hero/Hero.tsx`
- Project artwork: replace files in `public/images/projects/` and update the matching image path and alt text

The résumé link currently opens a pre-addressed email request because no résumé PDF is included. Replace it with a direct file link when a current résumé is added.

## Future Features

### 3D Airplane Hero

A Three.js / React Three Fiber animated plane entrance and interactive landing experience. `PlaneHeroScene.tsx` is intentionally isolated so the current photographic scene can be replaced without changing hero content.

### Advanced Travel-Themed Animations

Planned motion work includes:

- Luggage-tag interactions
- Passport-stamp transitions
- Flight-path animation
- Scroll-linked travel elements

### Interactive Travels Map

A world map showing visited cities. Selecting a city will eventually display:

- Photos
- Videos
- Written notes
- Trip information

The current `TravelsPreview.tsx` component is a self-contained placeholder for that larger feature.

### Automatic Travel Route Reconstruction

Planned functionality may analyze available EXIF metadata from uploaded travel photos, including:

- GPS coordinates
- Timestamps

The application could then:

1. Sort photos chronologically
2. Map their geographic coordinates
3. Infer the travelled route
4. Visualize stops
5. Animate the journey across the world map

This feature is planned and is not implemented in Version 1.

## Deployment

The project is ready for Vercel. Import the repository into Vercel or deploy with the Vercel CLI. The standard Next.js build command and output require no custom deployment configuration.

## Portfolio finishing pass

Restored the missing global stylesheet, added responsive layouts and keyboard menu dismissal, and replaced the CSS hero illustration with a locally served Kyoto photograph. Travels remains a preview; the map, uploads, EXIF routes, and 3D plane remain future work.

Hero photography: [Leongsan on Unsplash](https://unsplash.com/photos/qy8A5NE0YNE), used under the [Unsplash License](https://unsplash.com/license). This is thematic photography, not a claim that Jaden took the photograph or visited Kyoto.

The existing project SVGs are explicitly labeled concept illustrations. Replace them with actual product screenshots or hardware photographs when available. Project repository links should be added only after verifying the correct URLs. The résumé action remains an email request until a current PDF is supplied.
