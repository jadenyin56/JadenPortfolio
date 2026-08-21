import { ArrowUpRight, Code2, ExternalLink, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return <footer id="contact" className="night-footer relative z-10 border-t border-white/10">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <span className="destination-tag">Final stop · Open route</span><p className="eyebrow">Contact</p><h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl md:text-7xl">Where to next?</h2>
      <p className="mt-6 max-w-xl leading-7 text-zinc-400">I&apos;m interested in software engineering opportunities across backend, full-stack, cloud, infrastructure, and AI.</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a className="button-primary" href={`mailto:${site.email}`}><Mail size={17} /> Email <ArrowUpRight size={15} /></a>
        <a className="button-secondary" href={site.linkedinUrl}><ExternalLink size={17} /> LinkedIn</a>
        <a className="button-secondary" href={site.githubUrl}><Code2 size={17} /> GitHub</a>
        <a className="button-secondary" href={site.resumeUrl}>Resume</a>
      </div>
      <div className="developer-boarding-pass">
        <div className="boarding-pass-label"><span>Boarding pass</span><small>OPEN ROUTE / 2026</small></div>
        <dl><div><dt>Passenger</dt><dd>Jaden Yin</dd></div><div><dt>Origin</dt><dd>Waterloo / YYZ</dd></div><div><dt>Destination</dt><dd>Next</dd></div><div><dt>Role</dt><dd>Software Engineer</dd></div><div><dt>Gate</dt><dd><a href={site.githubUrl}>GitHub ↗</a></dd></div><div><dt>Status</dt><dd className="boarding-ready">Ready to build</dd></div></dl>
        <div className="boarding-barcode" aria-hidden="true" />
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-zinc-500 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Jaden Yin</span><span>YYZ → wherever the next problem leads</span></div>
    </div>
  </footer>;
}
