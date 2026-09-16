import { ThemePhoto } from "@/components/ui/ThemePhoto";

type MastheadPhoto = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
  nightSrc: string;
  nightAlt: string;
  nightCredit: string;
  nightCreditUrl: string;
};

export function PageMasthead({ index, marker, eyebrow, title, italic, description, tone = "warm", photo }: { index: string; marker: string; eyebrow: string; title: string; italic: string; description: string; tone?: "warm" | "cool"; photo?: MastheadPhoto }) {
  return (
    <header className={`page-masthead is-${tone}${photo ? " has-photo" : ""}`}>
      {photo ? <><ThemePhoto className="page-masthead-photo" daySrc={photo.src} nightSrc={photo.nightSrc} dayAlt={photo.alt} nightAlt={photo.nightAlt} preload sizes="100vw"/><span className="page-masthead-shade" aria-hidden="true"/></> : null}
      <div className="page-container page-masthead-grid">
        <div className="page-masthead-mark"><span>{marker}</span><p>{index} / {eyebrow}</p></div>
        <div className="page-masthead-title"><h1>{title}<br/><em>{italic}</em></h1></div>
        <p className="page-masthead-description">{description}</p>
      </div>
      {photo ? <><a className="page-masthead-credit theme-caption-day" href={photo.creditUrl} target="_blank" rel="noreferrer">Photo · {photo.credit}</a><a className="page-masthead-credit theme-caption-night" href={photo.nightCreditUrl} target="_blank" rel="noreferrer">Night photo · {photo.nightCredit}</a></> : null}
      <div className="masthead-runner" aria-hidden="true"><span>{eyebrow} · {marker} · {eyebrow} · {marker} ·</span><span>{eyebrow} · {marker} · {eyebrow} · {marker} ·</span></div>
    </header>
  );
}
