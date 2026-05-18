import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#blink", label: "Blink" },
  { href: "#configs", label: "Configs" },
  { href: "#compatibility", label: "Compatibility" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between px-6">
        <Link
          href="/"
          aria-label="tren. home"
          className="group flex items-center gap-2.5"
        >
          <span className="relative block h-6 w-[72px] overflow-hidden">
            <Image
              src="/tren.jpg"
              alt="tren."
              fill
              priority
              sizes="72px"
              className="object-contain object-left"
            />
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
            href="#login"
            className="hidden text-[13px] text-ink-200 transition-colors hover:text-white sm:inline"
          >
            login
          </Link>
          <Link
            href="#account"
            className="inline-flex h-9 items-center gap-2 border border-white/15 bg-white px-4 text-[13px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
          >
            account
            <span aria-hidden className="text-ink-400">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
