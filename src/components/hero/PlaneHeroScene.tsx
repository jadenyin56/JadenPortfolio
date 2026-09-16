import { ThemePhoto } from "@/components/ui/ThemePhoto";

// Keep the scene isolated for the later 3D airplane entrance.
export function PlaneHeroScene() {
  return (
    <figure className="plane-scene" data-future-three-scene>
      <ThemePhoto
        className="hero-photo"
        daySrc="/images/editorial/hero-ryokan.jpg"
        nightSrc="/images/editorial/night-tokyo-rain.jpg"
        dayAlt="A traditional Japanese tatami room with shoji screens and a sunlit garden view"
        nightAlt="A neon-lit Tokyo street glowing blue after dark"
        sizes="100vw"
        preload
      />
      <span className="hero-photo-grain" aria-hidden="true" />
      <figcaption className="scene-caption">
        <span className="theme-caption-day">Hamarikyu Gardens / Tokyo</span>
        <span className="theme-caption-night">Shinjuku / Tokyo · Night signal</span>
        <a
          className="theme-caption-day"
          href="https://unsplash.com/photos/OYR2mPD3yRY"
          target="_blank"
          rel="noreferrer"
        >
          Photo · Yosuke Ota
        </a>
        <a
          className="theme-caption-night"
          href="https://unsplash.com/photos/a-city-street-at-night-with-neon-lights-GZIk-Sq9PGg"
          target="_blank"
          rel="noreferrer"
        >
          Photo · Nicolas Caetano
        </a>
      </figcaption>
    </figure>
  );
}
