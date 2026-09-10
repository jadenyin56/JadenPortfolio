import { site } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><div className="page-container footer-shell"><a className="footer-brand" href="#home"><span className="brand-seal" aria-hidden="true">JY</span>{site.name}</a><p>Thoughtful software, wherever I land.</p><p>Toronto · {new Date().getFullYear()}</p></div></footer>;
}
