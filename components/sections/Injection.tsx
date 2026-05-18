import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";
import SyringeMark from "../SyringeMark";

const STEPS = [
  ["select running Java process", "step 01"],
  ["prepare native loader", "step 02"],
  ["map internal module", "step 03"],
  ["load shared settings", "step 04"],
  ["link selected mappings", "step 05"],
  ["hand off to client UI", "step 06"],
];

export default function Injection() {
  return (
    <Section id="injection" tone="dark">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            eyebrow="Injection & loading"
            title={
              <>
                A focused
                <br />
                Windows loader.
              </>
            }
            lede="The release build centers on a Windows loader executable and an internal module, with loading steps presented plainly instead of as unverified benchmarks."
          />

          <div className="relative mt-12 flex h-32 w-32 items-center justify-center border border-white/15">
            <SyringeMark className="h-20 w-20 text-white" />
          </div>
          <p className="mt-6 max-w-md text-ink-300">
            Built around the local release artifacts: loader.exe and
            internal.dll. The UI keeps loading feedback simple and greyscale.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Mockup title="loader · release" subtitle="x64 Windows" tone="dark">
            <div className="p-5">
              <ol className="space-y-2">
                {STEPS.map(([label, ms], i) => {
                  const pct = ((i + 1) / STEPS.length) * 100;
                  return (
                    <li
                      key={label}
                      className="grid grid-cols-12 items-center gap-3 border border-white/10 px-3 py-2 text-[12px]"
                    >
                      <div className="col-span-1 text-ink-400">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="col-span-4 text-white">{label}</div>
                      <div className="col-span-5 h-1 bg-white/10">
                        <div
                          className="h-full bg-white"
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                      <div className="col-span-2 text-right text-ink-100">
                        {ms}
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-5 grid grid-cols-3 gap-3 text-[11px]">
                {[
                  ["Artifact", "loader.exe"],
                  ["Module", "internal.dll"],
                  ["Build", "Release x64"],
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
