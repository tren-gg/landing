import Link from "next/link";
import SyringeMark from "./SyringeMark";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="absolute inset-0 grid-backdrop-dark" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto grid max-w-page grid-cols-12 items-center gap-10 px-6 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="col-span-12 lg:col-span-7">
          <h1 className="max-w-4xl text-[clamp(3.25rem,8vw,8rem)] font-medium leading-[0.92] tracking-tightest">
            A quieter Minecraft utility.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200 md:text-xl">
            Tren keeps the useful parts close: combat controls, visuals, Blink,
            configs, and a loader that stays out of the way.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#download"
              className="inline-flex h-12 items-center bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
            >
              Download Tren
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center border border-white/15 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
            >
              See modules
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="relative mx-auto flex aspect-square max-w-[520px] items-center justify-center border border-white/15 bg-white/[0.02]">
            <SyringeMark className="h-[62%] w-[62%] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
