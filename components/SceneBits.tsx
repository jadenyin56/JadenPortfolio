export function Cloud({ className = "" }: { className?: string }) {
  return <span className={`cloud ${className}`} aria-hidden="true"><i /><b /></span>;
}

export function Stars() {
  return <div className="stars" aria-hidden="true">✦　·　✧　　·　✦　·　✧　　✦</div>;
}
