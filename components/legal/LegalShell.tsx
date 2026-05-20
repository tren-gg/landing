import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LegalBlocks, type LegalDocument } from "./LegalMarkdown";

type LegalShellProps = {
  document: LegalDocument;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  meta: Array<[string, string]>;
  calloutCopy: string;
};

export default function LegalShell({
  document,
  eyebrow,
  title,
  lede,
  meta,
  calloutCopy,
}: LegalShellProps) {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <Nav />
      <section className="border-b border-white/10 bg-ink-950 text-white">
        <div className="mx-auto max-w-page px-5 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-32">
          <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
                {eyebrow}
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.95] tracking-tightest sm:text-6xl md:text-7xl">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
                {lede}
              </p>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-6">
                {meta.map(([label, value]) => (
                  <div key={label} className="min-w-36">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
                      {label}
                    </div>
                    <div className="mt-2 text-[13px] text-white">{value}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/tldr"
                className="mt-12 flex flex-col border border-white/10 transition-colors hover:bg-white/[0.04] sm:flex-row"
              >
                <span className="flex flex-1 flex-col border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:p-7">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
                    in a hurry
                  </span>
                  <span className="mt-4 text-2xl font-medium tracking-tightest text-white">
                    Read the TL;DR.
                  </span>
                  <span className="mt-2 max-w-xl text-sm leading-relaxed text-ink-200">
                    {calloutCopy}
                  </span>
                </span>
                <span className="flex items-center gap-3 p-6 text-[13px] text-white sm:p-7">
                  open
                  <span aria-hidden="true" className="relative h-px w-8 bg-white after:absolute after:right-0 after:top-[-3px] after:h-2 after:w-2 after:rotate-45 after:border-r after:border-t after:border-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-12 px-5 py-20 sm:gap-x-8 sm:px-6 md:py-32 lg:gap-x-10">
          <aside className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                contents
              </div>
              <nav className="flex flex-col">
                {document.sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex gap-4 border-b border-black/10 py-3.5 text-[13px] text-ink-500 transition-colors first:border-t hover:text-ink-950"
                  >
                    <span className="w-6 shrink-0 text-ink-400">
                      {section.number.padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8">
            {document.intro.length ? (
              <article className="pb-14">
                <LegalBlocks blocks={document.intro} />
              </article>
            ) : null}

            {document.sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-black/10 py-14 first:border-t-0"
              >
                <header className="mb-6 flex items-baseline justify-between gap-5">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    {section.number.padStart(2, "0")} / section
                  </span>
                  <span className="text-right text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    {section.title}
                  </span>
                </header>
                <h2 className="mb-5 text-3xl font-medium leading-[1.05] tracking-tightest text-ink-950">
                  {section.title}.
                </h2>
                <LegalBlocks blocks={section.blocks} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
