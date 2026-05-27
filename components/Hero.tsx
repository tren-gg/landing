import Link from "next/link";
import { portalSignInUrl } from "@/lib/portal";
import AsciiFlowBackground from "./AsciiFlowBackground";
import SyringeMark from "./SyringeMark";

const SIGNALS = [
  ["Loader", "Windows"],
  ["Modules", "Combat / visuals / configs"],
  ["Account", "Portal secured"],
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden bg-ink-950 text-white">
      <AsciiFlowBackground className="z-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_52%_at_50%_45%,rgba(7,7,8,0.50)_0%,rgba(7,7,8,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-3rem] z-[2] select-none overflow-hidden text-center text-[clamp(9rem,24vw,19rem)] font-medium leading-[0.82] text-white/[0.055]"
      >
        tren.
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-page flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 border border-white/10 bg-ink-950/75 px-4 py-3 text-[10px] font-medium uppercase text-ink-200">
            <span className="text-white">01</span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span>Landing</span>
          </div>

          <h1 className="mt-8 max-w-5xl text-[clamp(4.5rem,13vw,10rem)] font-medium leading-[0.86] tracking-tightest">
            Inject tren.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg md:mt-8 md:text-xl">
            Tren is a sleek Minecraft utility with secure configs, clean
            utility modules, overlays, sync controls, and a loader that stays
            out of the way.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={portalSignInUrl("/download")}
              className="inline-flex h-12 w-full items-center justify-between gap-8 bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100 sm:w-auto"
            >
              <span>Download Tren</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 w-full items-center justify-between gap-8 border border-white/15 bg-ink-950/55 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              <span>See modules</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid border border-white/10 bg-ink-950/82 shadow-[0_24px_90px_rgba(0,0,0,0.55)] sm:mt-16 lg:grid-cols-[1fr_2fr]">
          <div className="flex items-center justify-between gap-6 border-b border-white/10 px-5 py-4 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <SyringeMark className="h-5 w-5 text-white" />
              <span className="text-2xl font-medium leading-none">tren.</span>
            </div>
            <div className="text-[10px] font-medium uppercase text-ink-300">
              Secured / TLS
            </div>
          </div>
          <dl className="grid gap-px bg-white/10 sm:grid-cols-3">
            {SIGNALS.map(([label, value]) => (
              <div key={label} className="bg-ink-950/92 p-5">
                <dt className="text-[10px] font-medium uppercase text-ink-300">
                  {label}
                </dt>
                <dd className="mt-3 text-lg font-medium leading-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
