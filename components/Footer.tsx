import Link from "next/link";
import { portalSignInUrl, portalUrl } from "@/lib/portal";

const COLS: Array<[string, Array<[string, string]>]> = [
  ["Product", [["Modules", "/#features"], ["Blink", "/#blink"], ["Performance", "/#performance"], ["Loader", "/#injection"]]],
  ["Compatibility", [["Mappings", "/#compatibility"], ["Roadmap", "/#roadmap"]]],
  ["Resources", [["Feature list", "/#more"], ["Changelog", "/#changelog"], ["Status", "https://tren.statuspage.io/"]]],
  ["Legal", [["Terms", "/terms"], ["Privacy", "/privacy"], ["TL;DR", "/tldr"], ["Support", "/contact"]]],
  ["Account", [["Login", portalSignInUrl()], ["Settings", portalUrl("/account")], ["Support", "/contact"]]],
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-page px-5 pb-12 pt-20 sm:px-6 sm:pt-24">
        <div className="grid grid-cols-12 gap-x-0 gap-y-8 sm:gap-x-8 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <div
              aria-label="tren."
              className="select-none text-[32px] font-light leading-none text-white"
            >
              tren.
            </div>
            <p className="mt-6 max-w-xs text-sm text-ink-200 leading-relaxed">
              A Minecraft utility page with restrained copy, current modules,
              and clear compatibility notes.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-300">
              <span className="block h-1.5 w-1.5 bg-white" />
              <span>Local build focused</span>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8 xl:grid-cols-5">
            {COLS.map(([title, links]) => (
              <div key={title}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ink-300">
                  {title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[13px] text-white hover:underline underline-offset-4"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 pt-6 md:mt-16 md:flex-row md:items-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
            (c) {new Date().getFullYear()} Tren. Built for players.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-ink-300">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/tldr" className="hover:text-white">TL;DR</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none overflow-hidden"
        >
          <div className="text-[96px] font-light leading-[0.75] text-white opacity-[0.06] sm:text-[140px] md:text-[190px] lg:text-[250px] xl:text-[300px]">
            tren.
          </div>
        </div>
      </div>
    </footer>
  );
}
