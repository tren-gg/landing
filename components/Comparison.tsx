import { Section, SectionHeader } from "./Section";

const ROWS: Array<[string, string, string]> = [
  ["Visual language", "Greyscale only", "Matches the app"],
  ["Build target", "Windows build", "Current local target"],
  ["Loader", "Plain loading flow", "No unverified timing claim"],
  ["Mapping focus", "1.7.10 / 1.8 tables", "Validated before broader claims"],
  ["Configs", "Saved settings", "Module values and binds"],
  ["Blink", "Outgoing only or full choke", "Selectable in the GUI"],
  ["UI density", "Compact controls", "Designed for repeated edits"],
  ["Updates", "Manual validation", "Roadmap items stay separate"],
];

export default function Comparison() {
  return (
    <Section id="comparison" tone="light">
      <SectionHeader
        tone="light"
        title={
          <>
            What the
            <br />
            page can say.
          </>
        }
        lede="The current build is focused on Windows, saved configs, and the modules shown above."
      />

      <div className="mt-16 border-y border-black/10">
        <div className="grid grid-cols-12 items-center gap-4 border-b border-black/10 py-4 text-[10px] uppercase tracking-[0.22em] text-ink-500">
          <div className="col-span-4">Area</div>
          <div className="col-span-4 text-ink-950">Tren</div>
          <div className="col-span-4">Note</div>
        </div>
        {ROWS.map(([dim, tren, other]) => (
          <div
            key={dim}
            className="grid grid-cols-12 items-center gap-4 border-b border-black/10 py-5 text-[13px] last:border-b-0"
          >
            <div className="col-span-4 text-ink-500">{dim}</div>
            <div className="col-span-4 font-medium tracking-tight text-ink-950">
              {tren}
            </div>
            <div className="col-span-4 text-ink-500">{other}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
