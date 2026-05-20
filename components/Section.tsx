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
          ? "bg-ink-950 text-white"
          : "bg-white text-ink-950",
        bleed ? "" : "py-20 sm:py-24 md:py-32 lg:py-36",
        className,
      ].join(" ")}
    >
      <div className="relative mx-auto max-w-page px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  lede,
  tone = "dark",
  align = "left",
}: {
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
      <h2 className="text-3xl font-medium tracking-tightest sm:text-4xl md:text-6xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={[
            "mt-5 text-base leading-relaxed md:mt-6 md:text-lg",
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
      <div className="text-3xl font-medium tracking-tightest md:text-5xl">
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
