import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThemePhoto } from "@/components/ui/ThemePhoto";

export function TravelsPreview() {
  return (
    <section className="travels-section" id="travels">
      <div className="page-container">
        <SectionHeading
          index="03"
          marker="旅"
          eyebrow="Travels"
          title={
            <>
              Places I&apos;ve been,
              <br />
              <em>things I&apos;ve kept.</em>
            </>
          }
          description="A space for the photographs and small stories collected between departures."
        />
        <div className="travel-preview">
          <div className="travel-title">
            <span>Field notes / Japan</span>
            <p>
              More pages
              <br />
              <em>to come.</em>
            </p>
          </div>
          <figure className="travel-image-wrap">
            <ThemePhoto
              className="travel-image"
              daySrc="/images/editorial/travel-train.jpg"
              nightSrc="/images/editorial/night-tokyo-train.jpg"
              dayAlt="A rural Japanese landscape seen through the window of a local train"
              nightAlt="A train moving through neon-lit Shibuya at night"
              sizes="(max-width: 800px) 100vw, 86vw"
            />
            <figcaption className="travel-caption">
              <a className="theme-caption-day"
                href="https://unsplash.com/photos/4DBoU9HeYos"
                target="_blank"
                rel="noreferrer"
              >
                Yamaguchi · Photo by PJH
              </a>
              <a className="theme-caption-night" href="https://unsplash.com/photos/a-train-traveling-through-a-city-at-night-2QZUaKlqkMY" target="_blank" rel="noreferrer">Shibuya · Photo by mos design</a>
              <span className="theme-caption-day">34.05° N / 131.57° E</span>
              <span className="theme-caption-night">35.65° N / 139.70° E</span>
            </figcaption>
          </figure>
          <div className="travel-coming">
            <span>Travel archive / opening later</span>
            <strong>Every place leaves something behind.</strong>
            <p>
              A growing collection of photographs, short observations, and
              details from the road. My own travel photography will take over
              this space as the archive grows.
            </p>
            <Link className="travel-archive-link" href="/travels">
              Enter the archive <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
