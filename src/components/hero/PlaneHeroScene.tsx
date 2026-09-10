import Image from "next/image";

// Keep the scene isolated for the later 3D airplane entrance.
export function PlaneHeroScene() {
  return (
    <figure className="plane-scene" data-future-three-scene>
      <Image
        className="hero-photo"
        src="/images/editorial/hero-ryokan.jpg"
        alt="A traditional Japanese tatami room with shoji screens and a sunlit garden view"
        fill
        sizes="100vw"
        priority
      />
      <span className="hero-photo-grain" aria-hidden="true" />
      <figcaption className="scene-caption">
        <span>Hamarikyu Gardens / Tokyo</span>
        <a
          href="https://unsplash.com/photos/OYR2mPD3yRY"
          target="_blank"
          rel="noreferrer"
        >
          Photo · Yosuke Ota
        </a>
      </figcaption>
    </figure>
  );
}
