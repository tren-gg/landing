import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

const PROFILES = [
  ["default", "baseline settings", "json"],
  ["combat test", "aim / clicker tuning", "json"],
  ["visual pass", "esp / array list", "json"],
  ["utility pass", "blink / throw tools", "json"],
];

export default function Configs() {
  return (
    <Section id="configs" tone="dark">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            eyebrow="Configuration profiles"
            title={
              <>
                Save the
                <br />
                current setup.
              </>
            }
            lede="Configs are local data. The loader saves module toggles, binds, values, colors, and mode choices so a setup can be restored later."
          />

          <div className="mt-12 grid grid-cols-2 gap-px bg-white/10">
            {[
              ["local", "Stored settings"],
              ["json", "Config format"],
              ["binds", "Saved with modules"],
              ["colors", "Saved for visuals"],
            ].map(([v, l]) => (
              <div key={l} className="bg-ink-950 p-5">
                <div className="text-2xl font-medium tracking-tightest text-white">
                  {v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Mockup title="configs" subtitle="local settings" tone="dark">
            <div className="grid grid-cols-12">
              <div className="col-span-5 border-r border-white/10 p-5 text-[12px]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  Stored profiles
                </div>
                <ul className="mt-3 space-y-1.5">
                  {PROFILES.map(([n, d, f], i) => (
                    <li
                      key={n}
                      className={[
                        "flex items-center justify-between border px-3 py-2",
                        i === 0
                          ? "border-white bg-white text-ink-950"
                          : "border-white/10 text-ink-100",
                      ].join(" ")}
                    >
                      <div className="flex flex-col">
                        <span>{n}</span>
                        <span
                          className={[
                            "text-[10px] uppercase tracking-[0.22em]",
                            i === 0 ? "text-ink-500" : "text-ink-400",
                          ].join(" ")}
                        >
                          {d}
                        </span>
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  <span>saved values</span>
                  <span>example</span>
                </div>
                <pre className="mt-3 overflow-hidden border border-white/10 bg-ink-900 p-4 text-[11px] leading-relaxed">
{`  combat.aimassist.enabled       true
  combat.aimassist.range         6.00
  combat.aimassist.vertical      2.50
  combat.leftclicker.avg         14
  combat.velocity.horizontal     80
  utilities.blink.packetMode     "outgoing-only"
  utilities.blink.timerLimit     7.50
  visuals.esp.boxes              true
  visuals.arraylist.background   false
  visuals.blockesp.radius        25
  movement.timer.speed           1.00`}
                </pre>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  <span>saved locally</span>
                  <span>load / save</span>
                </div>
              </div>
            </div>
          </Mockup>
        </div>
      </div>
    </Section>
  );
}
