import Link from "next/link";
import { portalSignInUrl } from "@/lib/portal";
import SyringeMark from "./SyringeMark";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="relative mx-auto grid max-w-page grid-cols-12 items-center gap-x-0 gap-y-10 px-5 py-16 sm:gap-x-8 sm:px-6 sm:py-20 md:py-28 lg:gap-x-10 lg:py-32">
        <div className="col-span-12 lg:col-span-7">
          <h1 className="max-w-4xl text-6xl font-medium leading-[0.92] tracking-tightest sm:text-7xl md:text-8xl lg:text-[8rem]">
            Inject tren.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg md:mt-8 md:text-xl">
            Tren is a sleek C++ Minecraft utility with secure configs, clean
            combat controls, visuals, Blink, and a loader that stays out of the
            way.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={portalSignInUrl("/download")}
              className="inline-flex h-12 w-full items-center justify-center bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100 sm:w-auto"
            >
              Download Tren
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 w-full items-center justify-center border border-white/15 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              See modules
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="relative mx-auto flex aspect-square max-w-[300px] items-center justify-center sm:max-w-[420px] lg:max-w-[520px]">
            <SyringeMark className="h-[78%] w-[78%] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
