import { type ReactNode } from "react";

type MockupProps = {
  title?: string;
  subtitle?: string;
  tone?: "dark" | "light";
  children: ReactNode;
  className?: string;
};

export function Mockup({
  title = "tren.client",
  subtitle,
  tone = "dark",
  children,
  className = "",
}: MockupProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        "relative w-full overflow-hidden border",
        isDark
          ? "border-white/12 bg-ink-900 text-white shadow-[0_30px_120px_-30px_rgba(0,0,0,0.7)]"
          : "border-black/10 bg-white text-ink-950 shadow-[0_30px_120px_-30px_rgba(0,0,0,0.18)]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "flex h-9 items-center justify-between border-b px-3",
          isDark ? "border-white/10 bg-ink-850" : "border-black/10 bg-ink-50",
        ].join(" ")}
      >
        <div className="flex items-center gap-1.5">
          <span className="win-dot" />
          <span className="win-dot" />
          <span className="win-dot" />
        </div>
        <div className="flex items-center gap-2">
          <span
            className={[
              "text-[11px] tracking-tight",
              isDark ? "text-ink-200" : "text-ink-500",
            ].join(" ")}
          >
            {title}
          </span>
          {subtitle ? (
            <span
              className={[
                "text-[11px] tracking-tight",
                isDark ? "text-ink-400" : "text-ink-400",
              ].join(" ")}
            >
              · {subtitle}
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <span
            className={[
              "block h-1.5 w-1.5 rounded-full",
              isDark ? "bg-white/70" : "bg-ink-700",
            ].join(" ")}
          />
          <span
            className={[
              "text-[10px] uppercase tracking-[0.2em]",
              isDark ? "text-ink-300" : "text-ink-400",
            ].join(" ")}
          >
            live
          </span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
