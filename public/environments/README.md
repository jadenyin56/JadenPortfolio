# Environmental assets

The portfolio works without photographic assets. To replace CSS scenery with personal photography or Google Flow clips, add files under:

```text
public/environments/departure/
public/environments/shanghai/
public/environments/mountains/
public/environments/coast/
public/environments/night/
```

Then set a destination's `media` in `data/destinations.ts`:

```ts
media: {
  type: "video",
  src: "/environments/shanghai/atmosphere.mp4",
  fallback: "/environments/shanghai/atmosphere.webp",
  alt: "Shanghai skyline at night",
  position: "center 60%",
  opacity: 0.7,
}
```

Use AVIF/WebP for stills and short muted MP4/WebM loops for video. Videos are lazy, pause offscreen, and remain paused for reduced-motion users. Do not add fake personal photographs.
