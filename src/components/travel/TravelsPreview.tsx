import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        <Reveal className="travel-preview">
          <p>
            More pages
            <br />
            <em>to come.</em>
          </p>
          <div className="travel-coming">
            <span>Travel journal / coming later</span>
            <strong>Every place has a story.</strong>
            <p>
              I&apos;m putting together a collection of city notes and travel
              photographs. The interactive map and animated routes will follow
              in a future release.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
