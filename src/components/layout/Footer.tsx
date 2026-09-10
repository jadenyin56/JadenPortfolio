import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><div className="page-container footer-shell"><Link className="footer-brand" href="/"><span className="brand-seal" aria-hidden="true">JY</span>{site.name}</Link><p>Thoughtful software, wherever I land.</p><p>Toronto · {new Date().getFullYear()}</p></div></footer>;
}
