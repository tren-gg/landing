import Link from "next/link";
import { portalSignInUrl, portalUrl } from "@/lib/portal";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#blink", label: "Blink" },
  { href: "/#performance", label: "Performance" },
  { href: "/#configs", label: "Configs" },
  { href: "/#compatibility", label: "Compatibility" },
  { href: "/tldr", label: "Legal" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Tren home"
          className="group flex items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="select-none text-[27px] font-light leading-none text-white"
          >
            tren.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-ink-200 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={portalSignInUrl()}
            className="hidden text-[13px] text-ink-200 transition-colors hover:text-white sm:inline"
          >
            login
          </Link>
          <Link
            href={portalUrl()}
            className="inline-flex h-9 items-center gap-2 border border-white/15 bg-white px-4 text-[13px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
          >
            account
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile sections"
        className="mx-auto flex max-w-page gap-5 overflow-x-auto border-t border-white/10 px-6 py-3 text-[12px] text-ink-200 md:hidden"
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="shrink-0 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
