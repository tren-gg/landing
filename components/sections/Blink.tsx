import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

const MODES = [
  {
    name: "Outgoing Only",
    desc: "Queues outgoing WSASend buffers and releases them when Blink ends, while incoming updates continue.",
    detail: "queued send",
  },
  {
    name: "Incoming + Outgoing",
    desc: "Uses the legacy blocking behavior so the client pauses network updates while Blink is held.",
    detail: "full choke",
  },
];

export default function Blink() {
  return (
    <Section id="blink" tone="light">
      <SectionHeader
        tone="light"
        eyebrow="Blink packet modes"
        title={
          <>
            Choose what
            <br />
            Blink holds.
          </>
        }
        lede="Blink now exposes the real packet behavior as a mode: queue only outgoing movement traffic, or use the legacy incoming-plus-outgoing pause."
      />

      <div className="mt-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <Mockup title="blink / packet mode" subtitle="outgoing queue" tone="light">
            <div className="p-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-500">
                <span>mode</span>
                <span>buffered</span>
                <span>drift</span>
              </div>
              <div className="mt-3 border border-black/10">
                <div className="grid grid-cols-12 items-center gap-3 border-b border-black/10 px-4 py-3 text-[12px]">
                  <div className="col-span-3 text-ink-950">outgoing</div>
                  <div className="col-span-6 flex items-end gap-[3px] h-10">
                    {[12, 10, 14, 11, 16, 13, 18, 14, 20, 16, 22, 18, 24, 20, 26, 22, 28, 24, 30, 26].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="block w-2 bg-ink-950"
                          style={{ height: `${h * 1.2}px` }}
                        />
                      )
                    )}
                  </div>
                  <div className="col-span-3 text-right text-ink-950">queued</div>
                </div>

                <div className="grid grid-cols-12 items-center gap-3 border-b border-black/10 px-4 py-3 text-[12px]">
                  <div className="col-span-3 text-ink-950">incoming</div>
                  <div className="col-span-6 flex items-end gap-[3px] h-10">
                    {[18, 22, 26, 20, 24, 18, 14, 12, 10, 8, 10, 12, 14, 18, 16, 20, 18, 22, 20, 24].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="block w-2 bg-ink-700"
                          style={{ height: `${h * 1.2}px` }}
                        />
                      )
                    )}
                  </div>
                  <div className="col-span-3 text-right text-ink-950">live</div>
                </div>

                <div className="grid grid-cols-12 items-center gap-3 px-4 py-3 text-[12px]">
                  <div className="col-span-3 text-ink-950">legacy</div>
                  <div className="col-span-6 flex items-end gap-[3px] h-10">
                    {[6, 4, 8, 5, 7, 4, 6, 5, 7, 4, 6, 5, 7, 4, 6, 5, 7, 4, 6, 5].map((h, i) => (
                      <span
                        key={i}
                        className="block w-2 bg-ink-400"
                        style={{ height: `${h * 1.2}px` }}
                      />
                    ))}
                  </div>
                  <div className="col-span-3 text-right text-ink-950">blocked</div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
                <div className="border border-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    Outbound queue
                  </div>
                  <div className="mt-2 text-ink-950">copied buffers</div>
                </div>
                <div className="border border-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    Release policy
                  </div>
                  <div className="mt-2 text-ink-950">flush on release</div>
                </div>
              </div>
            </div>
          </Mockup>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <ul className="grid grid-cols-1 gap-px bg-black/10">
            {MODES.map((m) => (
              <li key={m.name} className="bg-white p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tightest">
                    {m.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {m.detail}
                  </span>
                </div>
                <p className="mt-3 text-ink-500 leading-relaxed">{m.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
