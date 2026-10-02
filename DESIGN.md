---
name: "Jaden Yin Portfolio"
description: "A restrained photographic field journal for software work, travel, and personal practice."
colors:
  paper: "#f3eee4"
  paper-deep: "#e8dfd0"
  ink: "#20231f"
  muted-ink: "#62655e"
  cedar: "#9a4f3f"
  moss: "#495247"
  aizome: "#245a73"
  cabin-wall: "#d8d1c4"
  cabin-frame: "#eee9de"
  night-sky: "#070b12"
  night-ink: "#e8f7ff"
  night-muted: "#8aa8b7"
  night-magenta: "#ff4fcf"
  night-cyan: "#20e4ff"
typography:
  display-day:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(52px, 7.2vw, 108px)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.05em"
  display-night:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontWeight: 500
    lineHeight: 0.84
    letterSpacing: "-0.075em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  editorial-body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "9px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sharp: "0px"
  circle: "50%"
  pill: "999px"
spacing:
  touch-target: "44px"
  mobile-gutter: "20px"
  page-gutter: "clamp(24px, 5.5vw, 88px)"
  section-block: "clamp(80px, 10vw, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "10px 17px"
    height: "44px"
  travel-skip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "10px 0 5px"
    height: "44px"
  chapter-card:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sharp}"
    padding: "clamp(22px, 3vw, 42px)"
---

# Design System: Jaden Yin Portfolio

## Overview

**Creative North Star: "The Photographic Field Journal"**

The portfolio should feel collected rather than manufactured: real photographs, oversized editorial type, precise index labels, and the warm restraint of a well-kept travel journal. Expressive moments frame Jaden's work and travel records, but the content remains legible, honest, and recognizably present beneath them.

Day mode uses paper, wood, earth, and natural-light associations. Night mode is a distinct city-after-dark treatment with monospaced display type, deep surfaces, and sparing cyan and magenta signals; it is not a literal color inversion. Physical interactions may become immersive, as in the travel entrance, when material, lighting, geometry, and motion all serve a clear passage into real content.

**Key Characteristics:**

- Real photography leads; graphic treatment supports it.
- Editorial scale is paired with small, exact monospaced metadata.
- Day feels warm and tactile; night feels urban, electric, and controlled.
- Motion reveals hierarchy or models a physical action, then gets out of the way.
- Expressive entrances preserve an immediate, accessible route to the content.

## Colors

The palette moves between warm paper-and-earth neutrals by day and deep blue-black city tones at night, with accents kept rare enough to retain editorial authority.

### Primary

- **Cedar:** The day-mode emphasis color for italic display phrases, indices, active details, and focus states.
- **Night Cyan:** The night-mode structural signal for primary actions, focus, navigation state, and technical detail.

### Secondary

- **Moss:** A grounded field color for large editorial sections and travel cards.
- **Aizome:** A quiet blue used for secondary structure and night-mode-adjacent references in the day system.
- **Night Magenta:** A scarce expressive accent for emphasized words and selective signals after dark.

### Neutral

- **Paper / Paper Deep:** The daylight canvas and its subtly darker layered surface.
- **Ink / Muted Ink:** Primary reading color and lower-emphasis explanatory copy.
- **Night Sky / Night Ink / Night Muted:** The corresponding dark canvas, luminous copy, and subdued information hierarchy.
- **Cabin Wall / Cabin Frame:** Warm molded-material neutrals reserved for tactile, object-like immersive surfaces.

### Named Rules

**The Photograph Leads Rule.** Use real project and travel imagery as the visual evidence; color fields and generated geometry may frame it but cannot impersonate it.

**The Two Worlds Rule.** Day and night are authored presentations with their own imagery and typographic character, not automated palette inversions.

**The Rare Signal Rule.** Cedar, cyan, and magenta mark hierarchy or state; they do not become broad decorative washes.

## Typography

**Display Font:** Newsreader (with Georgia fallback) by day; IBM Plex Mono (with system monospace fallbacks) at night  
**Body Font:** Manrope (with Arial fallback)  
**Label/Mono Font:** IBM Plex Mono (with system monospace fallbacks)

**Character:** Day typography combines literary, often italic serif display lines with clear contemporary body copy. Night deliberately hardens that editorial voice into tighter uppercase monospaced display language while preserving Manrope for readable supporting text.

### Hierarchy

- **Display:** Light-to-regular, fluid, tightly tracked, and compact in line height; reserved for primary page and section statements.
- **Headline:** Large serif or night-mode mono with one controlled accent phrase; keep line breaks intentional.
- **Title:** Editorial serif titles identify projects, chapters, and destinations without adding decorative badges.
- **Body:** Manrope at comfortable reading rhythm; supporting editorial copy commonly uses the smaller, airier body role.
- **Label:** Small uppercase IBM Plex Mono with generous tracking; used for indices, coordinates, status, and interaction instructions rather than prose.

### Named Rules

**The Scale-and-Precision Rule.** Pair one commanding editorial statement with restrained body copy and exact monospaced metadata; do not make every layer loud.

## Layout

The core frame is a wide editorial container capped at 1400px with a fluid page gutter. Sections use asymmetric grids, large vertical intervals, and image fields that often carry more visual weight than the text column. Horizontal rails use native scrolling and snap points for project media and future travel chapters.

At 1050px, multi-column editorial grids simplify to an index column plus content. At 760px, navigation, project cards, travel headings, and footer structures collapse; the mobile gutter tightens and touch controls retain a minimum 44px target. At 480px, typography and index columns compress again without allowing the frame to overflow.

Immersive thresholds may temporarily occupy the viewport, but their object must fit within the mobile frame and leave explicit room for instructions and an escape action. Once passed or skipped, the original page layout is the payoff and must remain intact.

## Elevation & Depth

Most editorial surfaces are flat and separated through color, rules, spacing, and image contrast. Shadows appear where they communicate a real layer: the sticky navigation, media controls, the audio object, or physical geometry such as the recessed aircraft window. Immersive depth uses directional light, bevels, rough material response, inset shading, and cast shadows instead of ornamental blur or floating glass panels.

### Shadow Vocabulary

- **Quiet Overlay:** A soft low-opacity shadow for persistent controls above photography.
- **Physical Recess:** Paired inset and ambient shadows that describe molded material and cavity depth.
- **Night Signal:** Restrained colored glow reserved for active cyan or magenta controls after dark.

### Named Rules

**The Honest Depth Rule.** Add elevation only when it explains layering, control state, or physical construction.

## Shapes

The editorial system is predominantly rectilinear: square cards, crisp image crops, thin rules, and unrounded buttons. Circles belong to small controls and identity marks. Fully rounded capsules are limited to mechanical details such as handles. Large custom curves are permitted for recognizable physical silhouettes, where nested profiles and material thickness are part of the object rather than generic rounded-card styling.

## Components

### Buttons

- **Shape:** Crisp, unrounded geometry with a minimum 44px touch target.
- **Primary:** Paper-colored fill with dark ink in the day photographic world; cyan with deep ink at night.
- **Hover / Focus:** A slight upward movement is acceptable for standard actions; focus uses a visible two-pixel accent outline with clear offset.
- **Secondary / Ghost:** Transparent or lightly tinted surfaces with a fine border. Text-only escape actions use a persistent underline rather than a filled pill.

### Cards / Containers

- **Corner Style:** Square by default.
- **Background:** Paper-adjacent neutrals for project media; stone, cedar, or moss fields for travel chapters; deep blue-black surfaces at night.
- **Shadow Strategy:** Flat editorial cards do not float. Physical objects and persistent controls may use the documented elevation vocabulary.
- **Border:** Thin, low-contrast rules define sequence and structure.
- **Internal Padding:** Fluid, generous in large travel cards and deliberately tighter in controls.

### Navigation

Navigation is a quiet index: restrained sans-serif labels, tiny monospaced numbers, an animated alternate serif label, and a thin cedar or cyan active rule. The header remains translucent enough to retain context, while mobile navigation becomes a full-width paper or night surface with clearly separated rows.

### Travels Threshold and Holding Page

Travels opens through the existing tactile aircraft-window threshold, then resolves into a restrained photographic holding page while the archive is being assembled. The window is the authored transition, not a promise of finished travel content; the destination uses the shared editorial masthead, day/night train photography, and direct under-construction language.

## Do's and Don'ts

### Do:

- **Do** keep real photography visible as evidence and continuity across transitions.
- **Do** preserve a clear typographic hierarchy: editorial display, readable sans-serif body, and precise mono metadata.
- **Do** author day and night as related but distinct photographic worlds.
- **Do** use physical geometry, lighting, and motion together when an interaction represents a real object.
- **Do** provide keyboard, touch, reduced-motion, non-WebGL, and skip paths for immersive experiences.
- **Do** test full-viewport objects at mobile widths and dynamic viewport heights.

### Don't:

- **Don't** replace useful content with spectacle; the destination page remains the payoff.
- **Don't** use abstract decoration when a real photograph or legible structural element carries the story better.
- **Don't** default to rounded cards, glassmorphism, broad neon washes, or synthetic depth.
- **Don't** present placeholder travel chapters as completed journeys.
- **Don't** allow motion, media, or optional rendering capability to become the only path forward.
