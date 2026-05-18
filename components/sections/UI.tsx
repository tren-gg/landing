import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

export default function UI() {
  return (
    <Section id="ui" tone="light">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <Mockup title="tren.ui" subtitle="settings · combat" tone="light">
            <div className="grid grid-cols-12">
              <div className="col-span-3 border-r border-black/10 p-4 text-[12px]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  Sections
                </div>
                <ul className="mt-3 space-y-1">
                  {[
                    "Combat",
                    "Movement",
                    "Visuals",
                    "Utilities",
                    "Settings",
                    "Configs",
                    "Keybinds",
                    "About",
                  ].map((s, i) => (
                    <li
                      key={s}
                      className={[
                        "px-2 py-1.5 border",
                        i === 0
                          ? "border-ink-950 bg-ink-950 text-white"
                          : "border-transparent text-ink-950 hover:border-black/10",
                      ].join(" ")}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-9 p-6">
                <div className="flex items-end justify-between border-b border-black/10 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                      Combat
                    </div>
                    <h4 className="mt-1 text-2xl font-medium tracking-tightest text-ink-950">
                      Assist
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    <span>enabled</span>
                    <span className="block h-4 w-8 border border-ink-950">
                      <span className="block h-full w-1/2 translate-x-full bg-ink-950" />
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-5 text-[12px]">
                  {[
                    ["Range", "6.0 blocks", 78],
                    ["Horizontal", "2.5 speed", 62],
                    ["Vertical", "2.5 speed", 62],
                    ["FOV", "70 deg", 45],
                    ["Mode", "center", 50],
                    ["Pitch", "0 deg", 50],
                  ].map(([k, v, p]) => (
                    <div key={String(k)}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-ink-500">{k}</span>
                        <span className="text-ink-950">{v}</span>
                      </div>
                      <div className="mt-2 h-1 w-full bg-black/10">
                        <div
                          className="h-full bg-ink-950"
                          style={{ width: `${p as number}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  <span>last edit · just now</span>
                  <span>geist sans · 13 / 14</span>
                </div>
              </div>
            </div>
          </Mockup>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
          <SectionHeader
            tone="light"
            eyebrow="Clean greyscale UI"
            title={
              <>
                A desktop app,
                <br />
                not a menu.
              </>
            }
            lede="tren. uses a restrained interface: one font, greyscale controls, and direct labels for module settings. The site should reflect the actual desktop UI."
          />
          <ul className="mt-12 space-y-5 text-ink-500">
            {[
              "Geist Sans throughout, with no decorative typefaces.",
              "Keybinds are saved with their modules.",
              "Greyscale-only tokens; no theme accents to break.",
              "Module settings are grouped by combat, visuals, movement, and utilities.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span aria-hidden className="mt-3 block h-px w-5 bg-ink-500/60" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
