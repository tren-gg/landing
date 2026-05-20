"use client";

import { useState } from "react";

export default function RevealAddress() {
  const [address, setAddress] = useState("");
  const user = ["s", "u", "p", "p", "o", "r", "t"].join("");
  const domain = ["t", "r", "e", "n", ".", "g", "g"].join("");

  function reveal() {
    setAddress(`${user}${String.fromCharCode(64)}${domain}`);
  }

  return (
    <section id="reveal" className="border-t border-white/10 bg-ink-950 py-28 text-white md:py-36">
      <div className="mx-auto flex max-w-page flex-col items-center gap-8 px-5 text-center sm:px-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
          support address
        </span>
        <span
          id="reveal-address"
          className={[
            "block text-4xl font-medium leading-none md:text-6xl",
            address ? "tracking-tightest text-white" : "font-normal tracking-[0.04em] text-ink-300",
          ].join(" ")}
        >
          {address || "....... @ tren.gg"}
        </span>
        {address ? (
          <a
            href={`mailto:${address}`}
            className="inline-flex h-12 items-center gap-4 bg-white px-7 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-100"
          >
            Open in mail app
            <span aria-hidden="true" className="relative h-px w-6 bg-current after:absolute after:right-0 after:top-[-3px] after:h-1.5 after:w-1.5 after:rotate-45 after:border-r after:border-t after:border-current" />
          </a>
        ) : (
          <button
            id="reveal-btn"
            type="button"
            onClick={reveal}
            className="inline-flex h-12 cursor-pointer items-center gap-4 bg-white px-7 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-100"
          >
            Reveal address
            <span aria-hidden="true" className="relative h-px w-6 bg-current after:absolute after:right-0 after:top-[-3px] after:h-1.5 after:w-1.5 after:rotate-45 after:border-r after:border-t after:border-current" />
          </button>
        )}
      </div>
    </section>
  );
}
