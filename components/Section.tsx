import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
  bleed?: boolean;
  plain?: boolean;
};

export function Section({
  id,
  tone = "dark",
  className = "",
  children,
  bleed = false,
  plain = false,
}: SectionProps) {
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={[
        "relative w-full",
        plain
          ? isDark
            ? "bg-ink-950 text-white"
            : "bg-white text-ink-950"
          : isDark
          ? "bg-ink-950 text-white grid-backdrop-dark"
          : "bg-white text-ink-950 grid-backdrop-light",
        bleed ? "" : "py-28 md:py-36",
        className,
      ].join(" ")}
    >
      {/* top + bottom hairlines */}
      <div
        aria-hidden
        className={[
          "absolute inset-x-0 top-0 h-px",
          isDark ? "bg-white/10" : "bg-black/10",
        ].join(" ")}
      />
      <div
        aria-hidden
        className={[
          "absolute inset-x-0 bottom-0 h-px",
          isDark ? "bg-white/10" : "bg-black/10",
        ].join(" ")}
      />
      <div className="relative mx-auto max-w-page px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]",
        isDark ? "text-ink-300" : "text-ink-500",
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "block h-px w-6",
          isDark ? "bg-ink-300/60" : "bg-ink-500/60",
        ].join(" ")}
      />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl font-medium tracking-tightest md:text-6xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={[
            "mt-6 text-base md:text-lg leading-relaxed",
            isDark ? "text-ink-200" : "text-ink-500",
          ].join(" ")}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function Stat({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl font-medium tracking-tightest md:text-5xl">
        {value}
      </div>
      <div
        className={[
          "text-[11px] uppercase tracking-[0.22em]",
          isDark ? "text-ink-300" : "text-ink-500",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  );
}
