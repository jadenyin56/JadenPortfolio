import Image from "next/image";

// Keep the scene isolated for the later 3D airplane entrance.
export function PlaneHeroScene() {
  return (
    <figure className="plane-scene">
      <div className="scene-photo">
        <Image
          src="/images/travel/kyoto.jpg"
          alt="A quiet Kyoto lane lined with traditional wooden houses, with a pagoda in the distance"
          fill
          sizes="(max-width: 700px) 90vw, 45vw"
          preload
        />
      </div>
      <span className="scene-stamp" aria-hidden="true">
        旅の途中
      </span>
      <figcaption className="scene-caption">
        <strong>A little further.</strong>
        <a
          href="https://unsplash.com/photos/qy8A5NE0YNE"
          target="_blank"
          rel="noreferrer"
        >
          Kyoto · Photo by Leongsan
        </a>
      </figcaption>
    </figure>
  );
}
