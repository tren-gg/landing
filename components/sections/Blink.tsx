import { Section, SectionHeader } from "../Section";

const MODES = [
  {
    name: "Outgoing Only",
    desc: "Queues outgoing packets while incoming updates continue.",
  },
  {
    name: "Incoming and Outgoing",
    desc: "Uses the full Blink behavior for both directions.",
  },
];

export default function Blink() {
  return (
    <Section id="blink" tone="light">
      <SectionHeader
        tone="light"
        title={
          <>
            Choose what
            <br />
            Blink holds.
          </>
        }
        lede="Blink exposes its packet behavior as a simple mode choice."
      />

      <ul className="mt-16 grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-2">
        {MODES.map((mode) => (
          <li key={mode.name} className="bg-white p-7">
            <h3 className="text-3xl font-medium tracking-tightest">
              {mode.name}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-500">{mode.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
