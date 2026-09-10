import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  marker?: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeading({ index, eyebrow, marker, title, description, light = false, className }: SectionHeadingProps) {
  return <header className={cn("section-heading-grid", light && "section-heading-light", className)}>
    <div className="section-identity">{marker ? <span className="section-marker" aria-hidden="true">{marker}</span> : null}<p className="section-kicker"><span>{index}</span>{eyebrow}</p></div>
    <h2>{title}</h2>
    {description ? <p className="section-description">{description}</p> : null}
  </header>;
}
