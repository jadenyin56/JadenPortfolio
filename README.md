# Jaden Yin — Portfolio

A cinematic, image-led portfolio for software engineer Jaden Yin. The site combines an editorial project archive with the warmth, restraint, and material character of contemporary Japanese interiors and travel publishing.

## Art direction

The interface is intentionally not a collection of dashboard cards. Its primary visual language is photography, supported by expressive editorial typography, asymmetrical compositions, thin rules, muted natural colours, and restrained motion.

- Warm ivory, cedar, ink, and moss section palettes
- Full-bleed photographic hero environment
- Individual editorial treatments for each featured project
- Native horizontal photo/video rails for projects and experience
- Open, typographic experience ledger for fast scanning
- Image-led travel journal preview with a dedicated `/travels` route
- Clip-mask image entrances and slow image scaling

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS tooling with a custom global visual system
- Motion for the small number of intentional text entrances
- `next/image` and `next/font` for optimized media and typography
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before shipping:

```bash
npm run lint
npm run build
```

## Content map

```text
src/
  app/               Metadata, favicon, page shell, and global art direction
  components/
    hero/             Photographic landing composition
    projects/         Editorial project stories
    experience/       Professional experience ledger
    travel/           Travel archive preview
    contact/          Contact close
    layout/           Navigation and footer
    ui/               Small shared primitives
  data/               Editable project, experience, and contact content
  types/              Shared content types
public/images/
  editorial/          Hero and travel visual studies
  projects-real/      Real project photos, branding, and UI captures
```

Update portfolio content in `src/data/projects.ts`, `src/data/experience.ts`, and `src/data/site.ts`. Project and experience media rails are driven by the `media` arrays in those data files; replace any placeholder item with a local image path when new photography or screenshots are ready.

## Image sources

The project section uses authentic public assets from Jaden's repositories and project pages: the Crossly interface, the Circadia hardware prototype, and RoamAble branding.

Hero photography is by [Yosuke Ota on Unsplash](https://unsplash.com/photos/OYR2mPD3yRY). The travel preview photograph is by [PJH on Unsplash](https://unsplash.com/photos/4DBoU9HeYos). Both are used under the [Unsplash License](https://unsplash.com/license). Replace the travel preview with Jaden's own photography as the journal grows.

## Future work

- Replace the isolated hero scene with a Three.js / React Three Fiber airplane arrival without disturbing the content layer.
- Replace the placeholder chapters on `/travels` with photograph-first city notes and individual trip stories.
- Add an interactive visited-cities map only when real travel content is ready to support it.
- Optionally infer routes from uploaded photograph EXIF coordinates and timestamps.
- Replace the résumé request email with a direct PDF once a current résumé is available.

The existing single-page architecture keeps these additions possible without making unfinished features appear live.
