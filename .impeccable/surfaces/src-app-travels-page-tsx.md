---
version: 1
slug: "src-app-travels-page-tsx"
primary_target: "src/app/travels/page.tsx"
related_targets: []
---

# Travels entrance

Mode: Experience. This is a scoped entrance state for `/travels`, not a redesign of the existing diary.

Audience and job: portfolio visitors arrive at the travel archive and physically reveal the diary by lifting an airplane shade. Success means the gesture feels weighted, the passage through the window feels continuous, and the existing diary is immediately recognizable once revealed.

Constraints: preserve the current Travel Diary content, layout, routes, light and night imagery, navigation behavior, and accessibility. Use the repository travel photographs. Do not use Spline, synthetic scenery, gyroscope, webcam, device orientation, neon, glassmorphism, or generic demo styling. WebGL is lazy-loaded and must have reduced-motion, keyboard, touch, and non-WebGL paths.

## Direction contract

THESIS: The entrance is a physical threshold. A warm, full-viewport airplane wall and weighted shade replace the expected travel-page hero, while the existing diary waits intact behind it.

OWN-WORLD: Ivory molded cabin material, deeply beveled rounded window geometry, restrained charcoal instructions, soft directional daylight, honest shadows, and the existing day or night travel photograph. Controls borrow the cabin material instead of introducing app chrome.

STORY: The visitor finds the shade mostly closed, drags it upward, feels resistance near the end of travel, and releases past the threshold. The shade settles, the camera moves through the opening, and the same photograph resolves into the existing diary hero.

FIRST VIEWPORT: A room-scale airplane wall fills the viewport. One oversized recessed window sits slightly right of center, with enough surrounding wall to communicate thickness and scale. The physical shade and handle dominate the interaction. One short instruction and a quiet skip action sit outside the window without competing with it.

FORM: Brief-pinned immersive object interaction, first and only structure because the user specified the physical mechanism precisely. Seed key: brief-pinned-airplane-window.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
