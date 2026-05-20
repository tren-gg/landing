import Image from "next/image";
import Link from "next/link";

const COLS: Array<[string, Array<[string, string]>]> = [
  ["Product", [["Modules", "/#features"], ["Blink", "/#blink"], ["Performance", "/#performance"], ["Loader", "/#injection"]]],
  ["Compatibility", [["Mappings", "/#compatibility"], ["Roadmap", "/#roadmap"]]],
  ["Resources", [["Feature list", "/#more"], ["Changelog", "/#changelog"], ["Status", "/#status"]]],
  ["Account", [["Login", "/account"], ["Settings", "/#configs"], ["Support", "/#support"]]],
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-page px-5 pb-12 pt-20 sm:px-6 sm:pt-24">
        <div className="grid grid-cols-12 gap-x-0 gap-y-8 sm:gap-x-8 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="relative h-7 w-[88px]">
              <Image
                src="/tren.jpg"
                alt="tren."
                fill
                sizes="88px"
                className="object-contain object-left"
              />
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

          <div className="col-span-12 grid grid-cols-2 gap-8 lg:col-span-8 md:grid-cols-4">
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
            <Link href="#terms" className="hover:text-white">Terms</Link>
            <Link href="#privacy" className="hover:text-white">Privacy</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div className="mt-16 select-none">
          <div className="relative h-[14vw] min-h-[80px] w-full">
            <Image
              src="/tren.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-contain object-left opacity-[0.06]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
