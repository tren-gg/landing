import Link from "next/link";
import { Section } from "./Section";
import SubscribeButton from "./SubscribeButton";
import SyringeMark from "./SyringeMark";

export default function CTA() {
  return (
    <Section id="download" tone="light">
      <div className="relative grid grid-cols-12 items-center gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest sm:text-5xl md:text-7xl">
            Try the
            <br />
            local build.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:mt-6 sm:text-lg">
            Create an account in the portal first. The Windows loader and
            subscription flow use that same signed-in account.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <SubscribeButton />
            <Link
              href="#docs"
              className="inline-flex h-12 w-full items-center justify-center gap-3 text-[14px] text-ink-500 underline-offset-4 transition-colors hover:text-ink-950 hover:underline sm:w-auto sm:justify-start"
            >
              Read the feature list
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="relative mx-auto flex h-48 w-48 items-center justify-center sm:h-72 sm:w-72">
            <SyringeMark className="h-44 w-44 text-ink-950 sm:h-64 sm:w-64" />
          </div>
        </div>
      </div>
    </Section>
  );
}
