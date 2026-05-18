import { Section, SectionHeader } from "../Section";

const VERSIONS = [
  ["1.7.10",  "casual mappings"],
  ["1.7.10",  "forge mappings"],
  ["1.8",     "casual mappings"],
  ["1.8",     "forge style mappings"],
];

export default function Mappings() {
  return (
    <Section id="compatibility" tone="light">
      <SectionHeader
        tone="light"
        title={
          <>
            Mapping tables,
            <br />
            maintained plainly.
          </>
        }
        lede="The current codebase carries explicit mapping tables for older Minecraft targets. Updating support means editing and validating those tables before making compatibility claims."
      />

      <div className="mt-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <ul className="border-y border-black/10 divide-y divide-black/10">
            {VERSIONS.map(([v, d], i) => (
              <li
                key={`${v}-${d}`}
                className="grid grid-cols-12 items-center gap-4 py-4 text-[13px]"
              >
                <div className="col-span-2 font-medium tracking-tight text-ink-950">
                  {v}
                </div>
                <div className="col-span-7 text-ink-500">{d}</div>
                <div className="col-span-3 flex items-center justify-end gap-3 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  <span
                    aria-hidden
                    className={[
                      "block h-1.5 w-1.5",
                      i === VERSIONS.length - 1 ? "bg-ink-950" : "bg-ink-400",
                    ].join(" ")}
                  />
                  <span>{i === VERSIONS.length - 1 ? "check" : "listed"}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="border border-black/10 p-7">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
              Mapping pipeline
            </div>
            <h3 className="mt-2 text-3xl font-medium tracking-tightest text-ink-950">
              Manual, visible updates.
            </h3>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Mappings are shown as part of the project rather than hidden
              behind vague compatibility language. Each target needs a real
              test pass before it is described as supported.
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-px bg-black/10">
              {[
                ["4", "Tables shown"],
                ["1.7.10", "Primary target"],
                ["1.8", "Secondary target"],
                ["manual", "Validation"],
              ].map(([v, l]) => (
                <div key={l} className="bg-white p-4">
                  <dt className="text-2xl font-medium tracking-tightest text-ink-950">
                    {v}
                  </dt>
                  <dd className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
