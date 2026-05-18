import Link from "next/link";
import { Section } from "./Section";
import SyringeMark from "./SyringeMark";

export default function CTA() {
  return (
    <Section id="download" tone="dark">
      <div className="relative grid grid-cols-12 items-center gap-10">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-tightest md:text-7xl">
            Try the
            <br />
            local build.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-200">
            The current build is focused on Windows. Account access stays
            available from the navigation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#account"
              className="inline-flex h-12 items-center gap-3 bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
            >
              Open account
            </Link>
            <Link
              href="#docs"
              className="inline-flex h-12 items-center gap-3 text-[14px] text-ink-200 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Read the feature list
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center border border-white/15">
            <SyringeMark className="h-48 w-48 text-white" />
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-300">
              <span>Tren loader</span>
              <span>x64</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
