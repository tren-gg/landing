import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

const FEATURES = [
  {
    name: "Assist",
    copy: "Aim assist settings for range, field of view, horizontal speed, vertical speed, and center or multipoint targeting.",
  },
  {
    name: "Reach",
    copy: "A configurable reach value with optional hitbox adjustment and practical safety checks.",
  },
  {
    name: "Clickers",
    copy: "Left and right click modules with keybinds, average CPS controls, weapon checks, and inventory options.",
  },
  {
    name: "Velocity",
    copy: "Horizontal and vertical knockback settings with chance, delay, and simple context checks.",
  },
];

export default function Combat() {
  return (
    <Section id="features" tone="dark">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            eyebrow="Combat modules"
            title={
              <>
                The actual
                <br />
                combat set.
              </>
            }
            lede="This section reflects the current combat surface: aim assist, clickers, reach, and velocity, with settings that match the desktop client."
          />

          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {FEATURES.map((f) => (
              <li
                key={f.name}
                className="grid grid-cols-12 items-baseline gap-6 py-6"
              >
                <div className="col-span-12 sm:col-span-3 text-xl font-medium tracking-tight">
                  {f.name}
                </div>
                <div className="col-span-12 sm:col-span-9 text-ink-200 leading-relaxed">
                  {f.copy}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Mockup title="combat settings" subtitle="current build" tone="dark">
            <div className="grid grid-cols-12">
              <div className="col-span-7 border-r border-white/10 p-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  Aim assist
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <div className="text-5xl font-medium tracking-tightest">
                    2.5
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                    vertical speed
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    ["Mode", "center / multipoint"],
                    ["Pitch", "0 degrees"],
                    ["FOV", "70 default"],
                    ["Range", "6.0 default"],
                  ].map(([k, v]) => (
                    <div key={k} className="border border-white/10 p-3">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                        {k}
                      </div>
                      <div className="mt-1 text-sm text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    Rotation adjustment
                  </div>
                  <svg
                    viewBox="0 0 320 80"
                    className="mt-3 h-20 w-full text-white"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M0 70 C 40 70, 70 20, 120 28 S 220 70, 260 30 S 320 18, 320 18"
                      strokeWidth="1.5"
                    />
                    <g stroke="currentColor" strokeOpacity="0.25">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="80" />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>

              <div className="col-span-5 p-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  Module list
                </div>
                <ul className="mt-3 space-y-2 text-[12px]">
                  {[
                    ["Aim Assist", "range / fov", "on"],
                    ["Left Clicker", "avg cps", "on"],
                    ["Velocity", "h / v", "on"],
                  ].map(([n, d, t]) => (
                    <li
                      key={n}
                      className="flex items-center justify-between border border-white/10 px-3 py-2"
                    >
                      <span className="text-white">{n}</span>
                      <span className="text-ink-300">{d}</span>
                      <span className="text-ink-100">{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  State preview
                </div>
                <div className="mt-3 grid grid-cols-12 gap-[3px]">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "block h-3",
                        [3, 9, 14, 21, 28, 33, 40, 44].includes(i)
                          ? "bg-ink-600"
                          : "bg-white/85",
                      ].join(" ")}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  <span>local preview</span>
                  <span className="text-white">settings only</span>
                </div>
              </div>
            </div>
          </Mockup>
        </div>
      </div>
    </Section>
  );
}
