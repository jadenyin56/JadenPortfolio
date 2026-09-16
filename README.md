# Jaden Yin — Portfolio

A cinematic, multi-page portfolio for software engineer Jaden Yin. The site combines an editorial project archive with the warmth, restraint, and material character of contemporary Japanese interiors and travel publishing.

## Art direction

The interface is intentionally not a collection of dashboard cards. Its primary visual language is photography, supported by expressive editorial typography, asymmetrical compositions, thin rules, muted natural colours, and restrained motion.

- Warm ivory, cedar, ink, and moss section palettes
- Full-bleed photographic hero environment
- Individual editorial treatments and routes for each project
- Slow auto-moving photo/video rails that pause on interaction
- Concise, typographic experience notes for fast scanning
- Image-led travel journal preview with a dedicated `/travels` route
- Masked type entrances, route transitions, image reveals, and moving text runners
- A persistent record-player control with optional ambient sound

## Pages

- `/` — editorial home cover with selected work
- `/projects` — complete project archive
- `/projects/[slug]` — project detail route, ready for longer case studies
- `/experience` — concise work and experience notes
- `/travels` — travel archive teaser
- `/contact` — contact details

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS tooling with a custom global visual system
- Motion for masked text entrances and page transitions
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

## Projects

Project content is managed in `src/data/projects.ts`. Each entry supports its title, slug, description, technology list, year, category, links, featured state, and media sequence. Add final screenshots or demos to `public/images` and replace the corresponding placeholder media items.

The homepage only shows selected projects; `/projects` reads from the same data source and presents the complete archive.

## Audio system

Music is configured in `src/data/music.ts`. The persistent record-player control supports play/pause, previous/next track, and a master mute state shared with subtle interface sounds. Muting is remembered locally between visits.

The included sound is a quiet generated tone bed, so the interaction works without distributing copyrighted audio. Add properly licensed files to `public/audio`, update each track's `src`, and connect those files when ready. Music never starts automatically; playback only begins after an explicit click in accordance with browser autoplay rules.

## Motion system

Motion is organized around reusable components rather than scattered fade-ins:

- `PageTransition` provides the route-level paper/curtain reveal.
- `Reveal` uses an overflow mask and vertical movement for editorial text entrances.
- Media rails move slowly, pause on hover/focus, and remain manually scrollable.
- CSS runners, image masks, and restrained transforms provide ambient movement.
- `prefers-reduced-motion` disables continuous movement and simplifies transitions.

## Content map

```text
src/
  app/               Metadata, favicon, page shell, and global art direction
  components/
    hero/             Photographic landing composition
    projects/         Editorial project stories
    experience/       Professional experience pages and home preview
    audio/            Persistent music control
    motion/           Route transition choreography
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

Update portfolio content in `src/data/projects.ts`, `src/data/experience.ts`, `src/data/music.ts`, and `src/data/site.ts`. Project and experience media rails are driven by the `media` arrays in those data files.

## Image sources

The project section uses authentic public assets from Jaden's repositories and project pages: the Crossly interface, the Circadia hardware prototype, and RoamAble branding.

Hero photography is by [Yosuke Ota on Unsplash](https://unsplash.com/photos/OYR2mPD3yRY). The travel preview photograph is by [PJH on Unsplash](https://unsplash.com/photos/4DBoU9HeYos). Both are used under the [Unsplash License](https://unsplash.com/license). Replace the travel preview with Jaden's own photography as the journal grows.

The Projects garden masthead is by [Akiyo Ikeda](https://unsplash.com/photos/mvMIbLocMRA), and the Experience onsen masthead is by [Wren Chai](https://unsplash.com/photos/_j54YXzW1_c), also via Unsplash.

The contact section photograph is by [Denys Nevozhai](https://unsplash.com/photos/lantern-on-the-street-at-nighttime--F3wMFrZ7z0) and is used under the Unsplash License.

Night Shift photography comes from [Nicolas Caetano in Tokyo](https://unsplash.com/photos/a-city-street-at-night-with-neon-lights-GZIk-Sq9PGg), [Ming Chen in Chongqing](https://unsplash.com/photos/city-skyline-during-night-time-CXBsml4qTuE), [Spencer Liao in Shanghai](https://unsplash.com/photos/shanghai-skyline-at-night-HISGDbuMfro), and [mos design in Shibuya](https://unsplash.com/photos/a-train-traveling-through-a-city-at-night-2QZUaKlqkMY). All are used under the Unsplash License.

## Future Travels feature

- Interactive world map and photograph-first city archives
- Photos, videos, and written field notes
- EXIF metadata, GPS, and timestamp analysis
- Travel route reconstruction from captured media
- Quiet animated paths for individual trips

These remain intentionally deferred until real travel photography is ready to support them.
