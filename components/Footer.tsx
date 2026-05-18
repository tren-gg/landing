import Image from "next/image";
import Link from "next/link";

const COLS: Array<[string, Array<[string, string]>]> = [
  ["Product", [["Modules", "#features"], ["Blink", "#blink"], ["Configs", "#configs"], ["UI", "#ui"]]],
  ["Compatibility", [["Mappings", "#compatibility"], ["Validation", "#comparison"], ["Roadmap", "#roadmap"]]],
  ["Resources", [["Feature list", "#more"], ["Changelog", "#changelog"], ["Status", "#status"]]],
  ["Account", [["Login", "#account"], ["Settings", "#configs"], ["Support", "#support"]]],
];

export default function Footer() {
  return (
    <footer className="bg-white text-ink-950">
      <div className="mx-auto max-w-page px-6 pt-24 pb-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="relative h-7 w-[88px]">
              <Image
                src="/tren.jpg"
                alt="tren."
                fill
                sizes="88px"
                className="object-contain object-left invert"
              />
            </div>
            <p className="mt-6 max-w-xs text-sm text-ink-500 leading-relaxed">
              A Minecraft utility page with restrained copy, current modules,
              and clear compatibility notes.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
              <span className="block h-1.5 w-1.5 bg-ink-950" />
              <span>Local build focused</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLS.map(([title, links]) => (
              <div key={title}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ink-500">
                  {title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[13px] text-ink-950 hover:underline underline-offset-4"
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
            (c) {new Date().getFullYear()} Tren. Built for players.
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            <Link href="#terms" className="hover:text-ink-950">Terms</Link>
            <Link href="#privacy" className="hover:text-ink-950">Privacy</Link>
            <Link href="#contact" className="hover:text-ink-950">Contact</Link>
          </div>
        </div>

        {/* Oversized wordmark: quiet, technical signature */}
        <div className="mt-16 select-none">
          <div className="relative h-[14vw] min-h-[80px] w-full">
            <Image
              src="/tren.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-contain object-left invert opacity-[0.06]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
