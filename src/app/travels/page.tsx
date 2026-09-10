import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, ImagePlus, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Travels — Jaden Yin",
  description: "A forthcoming archive of photographs, field notes, and journeys by Jaden Yin.",
};

const chapters = [
  { index: "01", type: "Photographs", icon: "photo", tone: "stone" },
  { index: "02", type: "Short films", icon: "video", tone: "cedar" },
  { index: "03", type: "Field notes", icon: "photo", tone: "moss" },
] as const;

export default function TravelsPage() {
  return (
    <main className="travel-page">
      <section className="travel-page-hero">
        <Image
          className="travel-page-hero-image"
          src="/images/editorial/travel-train.jpg"
          alt="A rural Japanese landscape framed by the window of a local train"
          fill
          sizes="100vw"
          priority
        />
        <span className="travel-page-shade" aria-hidden="true" />
        <div className="page-container travel-page-hero-inner">
          <Link className="travel-back-link" href="/#travels">
            <ArrowLeft size={15} /> Back to portfolio
          </Link>
          <div className="travel-page-title">
            <p>旅 / Travel archive · volume one</p>
            <h1>
              Journeys,
              <br />
              <em>kept slowly.</em>
            </h1>
          </div>
          <div className="travel-page-hero-footer">
            <p>
              A future home for photographs, small films, and the details that
              are usually lost between one place and the next.
            </p>
            <span>
              Scroll to preview <ArrowDown size={14} />
            </span>
          </div>
        </div>
      </section>

      <section className="travel-page-index page-container" aria-labelledby="travel-index-title">
        <header className="travel-index-heading">
          <span>Archive / preview</span>
          <h2 id="travel-index-title">
            Stories waiting
            <br />
            <em>for their photographs.</em>
          </h2>
          <p>
            These chapters are placeholders for now. Each will eventually hold
            a trip&apos;s photographs, videos, route, and written notes.
          </p>
        </header>

        <div className="travel-chapter-rail" aria-label="Future travel chapters">
          {chapters.map((chapter) => (
            <article className={`travel-chapter is-${chapter.tone}`} key={chapter.index}>
              <div className="travel-chapter-top">
                <span>Entry / {chapter.index}</span>
                <span>City / TBD</span>
              </div>
              <div className="travel-chapter-placeholder">
                {chapter.icon === "video" ? (
                  <Play size={34} strokeWidth={1.1} />
                ) : (
                  <ImagePlus size={34} strokeWidth={1.1} />
                )}
                <p>Add your {chapter.type.toLowerCase()}</p>
              </div>
              <div className="travel-chapter-bottom">
                <h3>{chapter.type}</h3>
                <span>Awaiting departure</span>
              </div>
            </article>
          ))}
        </div>
        <p className="travel-swipe-note">Drag or swipe to look through the future chapters →</p>
      </section>

      <section className="travel-page-future">
        <div className="page-container travel-future-grid">
          <p>Later / route reconstruction</p>
          <h2>
            From camera roll
            <br />
            <em>to remembered route.</em>
          </h2>
          <div>
            <p>
              A later version can read timestamps and available location data
              from uploaded photographs, arrange them chronologically, and draw
              the trip as a quiet visual route.
            </p>
            <a href="mailto:jadenyin56@gmail.com?subject=Travel archive idea">
              Share a travel idea <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
