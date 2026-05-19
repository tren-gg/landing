import Link from "next/link";
import { Section } from "./Section";
import SubscribeButton from "./SubscribeButton";
import SyringeMark from "./SyringeMark";

export default function CTA() {
  return (
    <Section id="download" tone="light">
      <div className="relative grid grid-cols-12 items-center gap-10">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-tightest md:text-7xl">
            Try the
            <br />
            local build.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-500">
            The current build is focused on Windows. Account access stays
            available from the navigation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <SubscribeButton />
            <Link
              href="#docs"
              className="inline-flex h-12 items-center gap-3 text-[14px] text-ink-500 underline-offset-4 transition-colors hover:text-ink-950 hover:underline"
            >
              Read the feature list
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
            <SyringeMark className="h-64 w-64 text-ink-950" />
          </div>
        </div>
      </div>
    </Section>
  );
}
