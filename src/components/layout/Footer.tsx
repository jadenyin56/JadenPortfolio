import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><div className="page-container footer-shell"><Link className="footer-brand" href="/"><span className="brand-seal" aria-hidden="true"><span className="brand-logo" /></span>{site.name}</Link><p>@2026 jadenyin.dev</p><p>Toronto · {new Date().getFullYear()}</p></div></footer>;
}
