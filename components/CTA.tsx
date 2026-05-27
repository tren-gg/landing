import Link from "next/link";
import { Section } from "./Section";
import SubscribeButton from "./SubscribeButton";
import SyringeMark from "./SyringeMark";

export default function CTA() {
  return (
    <Section id="download" tone="dark" className="overflow-hidden">
      <div className="relative border border-white/10 bg-ink-950 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <SyringeMark className="h-5 w-5 text-white" />
            <span className="text-xl font-medium leading-none">tren.</span>
          </div>
          <div className="text-[10px] font-medium uppercase text-ink-300">
            Download
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-x-0 gap-y-10 px-5 py-10 sm:gap-x-8 sm:px-8 sm:py-12 lg:gap-x-10 lg:px-10 lg:py-14">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest text-white sm:text-5xl md:text-7xl">
              Try the
              <br />
              local build.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:mt-6 sm:text-lg">
              Create an account in the portal first. The Windows app and
              subscription flow use that same signed-in account.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <SubscribeButton />
              <Link
                href="/tldr"
                className="inline-flex h-12 w-full items-center justify-between gap-8 border border-white/15 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                <span>Read the legal TL;DR</span>
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center sm:h-72 sm:w-72">
              <SyringeMark className="h-44 w-44 text-white sm:h-64 sm:w-64" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-[10px] font-medium uppercase text-ink-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Windows / secure sign-in</span>
          <span>portal.tren.gg</span>
        </div>
      </div>
    </Section>
  );
}
