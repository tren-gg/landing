import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SyringeMark from "@/components/SyringeMark";
import { LegalBlocks, loadLegalDocument } from "@/components/legal/LegalMarkdown";

export const metadata: Metadata = {
  title: "TL;DR - Tren Legal",
  description: "A plain-language summary of Tren's Terms of Service and Privacy Policy.",
};

const DARK_TOPICS = new Set(["Service Providers", "Prohibited Conduct", "Use on Third-Party Platforms"]);

export default function TldrPage() {
  const document = loadLegalDocument("tldr.md");

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <Nav />
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-ink-950 text-white">
        <SyringeMark className="pointer-events-none absolute bottom-[-64px] right-[-72px] hidden h-[420px] w-[420px] text-white opacity-[0.07] lg:block" />
        <div className="relative mx-auto max-w-page px-5 py-24 sm:px-6 md:py-36">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
                summary of privacy & terms
              </div>
              <h1 className="mt-6 text-6xl font-medium leading-[0.92] tracking-tightest text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
                The short
                <br />
                version.<span className="text-ink-500"> tren.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-200 sm:text-xl">
                A plain-language read-through of our Terms of Service and Privacy Policy.
                Provided for convenience only. The full documents control in any conflict.
              </p>

              <div className="mt-12 grid border border-white/10 sm:grid-cols-2">
                <HeroDocLink href="/terms" label="Terms of Service" sub="22 sections · ~12 min read" />
                <HeroDocLink href="/privacy" label="Privacy Policy" sub="11 sections · ~14 min read" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 bg-ink-950 text-ink-300">
        <div className="mx-auto flex max-w-page flex-wrap items-center gap-4 px-5 py-6 text-[12px] uppercase tracking-[0.22em] sm:px-6">
          <span className="block h-1.5 w-1.5 bg-white" />
          <span>Effective {document.effectiveDate ?? "May 20, 2026"}</span>
          <span className="text-white/20">/</span>
          <span>Read time ~5 minutes</span>
        </div>
      </div>

      {document.intro.length ? (
        <section className="border-t border-black/10 py-16 md:py-20">
          <div className="mx-auto max-w-page px-5 sm:px-6">
            <div className="max-w-3xl text-base leading-relaxed text-ink-500">
              <LegalBlocks blocks={document.intro} />
            </div>
          </div>
        </section>
      ) : null}

      {document.sections.map((section, index) => {
        const isDark = DARK_TOPICS.has(section.title);
        const isLiability = section.title === "Limitation of Liability";
        return (
          <section
            key={section.id}
            id={section.id}
            className={[
              "border-t py-24 md:py-32",
              isDark ? "border-white/10 bg-ink-950 text-white" : "border-black/10 bg-white text-ink-950",
              isLiability ? "bg-ink-950 text-white" : "",
            ].join(" ")}
          >
            <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
              <div className="col-span-12 lg:col-span-5">
                <div className="flex flex-col gap-4">
                  <span className={["text-[11px] uppercase tracking-[0.22em]", isDark || isLiability ? "text-ink-300" : "text-ink-400"].join(" ")}>
                    {String(index + 1).padStart(2, "0")} / topic
                  </span>
                  <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest md:text-5xl">
                    {section.title}.
                  </h2>
                  <Link
                    href={sourceHref(section.title)}
                    className={["mt-6 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] transition-colors after:h-px after:w-6 after:bg-current", isDark || isLiability ? "text-ink-300 hover:text-white" : "text-ink-500 hover:text-ink-950"].join(" ")}
                  >
                    Read in full
                  </Link>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                {isLiability ? (
                  <div className="grid border border-white/10 bg-white text-ink-950 sm:grid-cols-2">
                    <div className="border-b border-black/10 p-7 sm:border-b-0 sm:border-r">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">liability floor</div>
                      <div className="mt-4 text-6xl font-medium tracking-tightest">$10</div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-500">The minimum cap described in the full Terms.</p>
                    </div>
                    <div className="p-7">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">lookback</div>
                      <div className="mt-4 text-6xl font-medium tracking-tightest">12<span className="ml-1 text-xl text-ink-500">mo</span></div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-500">The alternative cap is what you paid Tren in the previous twelve months.</p>
                    </div>
                  </div>
                ) : null}
                <div className={["grid gap-px border", isDark || isLiability ? "mt-8 border-white/10 bg-white/10" : "border-black/10 bg-black/10"].join(" ")}>
                  <div className={["p-7", isDark || isLiability ? "bg-ink-950" : "bg-white"].join(" ")}>
                    <LegalBlocks blocks={section.blocks} tone={isDark || isLiability ? "dark" : "light"} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-black/10 bg-white py-24">
        <div className="mx-auto grid max-w-page grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest md:text-6xl">
              Need the actual contract?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500">
              This summary is here to make the rules legible. The full Terms and Privacy Policy are the documents that control.
            </p>
          </div>
          <div className="border border-black/10">
            <ClosingLink href="/terms" label="Terms of Service" />
            <ClosingLink href="/privacy" label="Privacy Policy" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HeroDocLink({ href, label, sub }: { href: string; label: string; sub: string }) {
  return (
    <Link href={href} className="border-b border-white/10 p-6 transition-colors hover:bg-white/[0.04] sm:border-b-0 sm:border-r last:sm:border-r-0">
      <span className="block text-[10px] uppercase tracking-[0.22em] text-ink-300">full document</span>
      <span className="mt-3 block text-xl font-medium tracking-tightest text-white">{label}</span>
      <span className="mt-1 block text-[13px] text-ink-200">{sub}</span>
    </Link>
  );
}

function ClosingLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="flex items-center justify-between border-b border-black/10 p-6 transition-colors last:border-b-0 hover:bg-ink-50">
      <span>
        <span className="block text-[10px] uppercase tracking-[0.22em] text-ink-500">full document</span>
        <span className="mt-2 block text-2xl font-medium tracking-tightest">{label}</span>
      </span>
      <span aria-hidden="true" className="relative h-px w-8 bg-ink-950 after:absolute after:right-0 after:top-[-3px] after:h-2 after:w-2 after:rotate-45 after:border-r after:border-t after:border-ink-950" />
    </Link>
  );
}

function sourceHref(title: string) {
  if (["Information Collected", "Service Providers", "Account Deletion", "Security", "User Rights"].includes(title)) {
    return "/privacy";
  }
  return "/terms";
}
