export default function SectionHeading({ label, title, copy, destination }: { label: string; title: string; copy?: string; destination?: string }) {
  return <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[1fr_.8fr] md:items-end">
    <div>{destination && <span className="destination-tag">{destination}</span>}<p className="eyebrow">{label}</p><h2 className="section-title">{title}</h2></div>
    {copy && <p className="max-w-xl text-pretty leading-7 text-zinc-400 md:justify-self-end">{copy}</p>}
  </div>;
}
