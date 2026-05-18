import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

const MODES = [
  ["Bhop", "Power setting and liquid check", "on"],
  ["Timer Speed", "Speed value with movement and weapon checks", "on"],
  ["Bridge Assist", "Right-click assist for bridge workflows", "utility"],
  ["Throw Pearl", "Switch and throw delay controls", "utility"],
  ["Throw Pots", "One, double, and smart throw modes", "utility"],
  ["Blink", "Packet mode and timer controls", "utility"],
];

export default function Movement() {
  return (
    <Section id="movement" tone="dark">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            eyebrow="Movement utilities"
            title={
              <>
                Movement
                <br />
                without fiction.
              </>
            }
            lede="The current build keeps this category small: Bhop, Timer Speed, and practical utilities around bridging and item throws."
          />

          <div className="mt-12 space-y-3">
            {[
              "Bhop and Timer Speed are the active movement modules.",
              "Bridge Assist, Throw Pearl, and Throw Pots live in utilities.",
              "Packet handling is exposed through Blink's mode selector.",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span aria-hidden className="mt-2 block h-px w-5 bg-ink-300" />
                <span className="text-ink-100">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Mockup title="movement / utilities" subtitle="current build" tone="dark">
            <div className="p-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
                <span>module</span>
                <span>detail</span>
                <span>status</span>
              </div>
              <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
                {MODES.map(([n, d, f]) => (
                  <li
                    key={n}
                    className="grid grid-cols-12 items-center gap-3 py-3 text-[12px]"
                  >
                    <div className="col-span-3 text-white">{n}</div>
                    <div className="col-span-6 text-ink-300">{d}</div>
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="h-1 flex-1 bg-white/10">
                        <div
                          className="h-full bg-white"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="text-white">{f}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-3 text-[11px]">
                {[
                  ["Timer", "speed value"],
                  ["Bhop", "power value"],
                  ["Utilities", "delay controls"],
                ].map(([k, v]) => (
                  <div key={k} className="border border-white/10 p-3">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      {k}
                    </div>
                    <div className="mt-1 text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Mockup>
        </div>
      </div>
    </Section>
  );
}
