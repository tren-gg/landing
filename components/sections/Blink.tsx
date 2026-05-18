import { Section, SectionHeader } from "../Section";

const MODES = [
  {
    name: "Outgoing Only",
    desc: "Your packets stop leaving while incoming ones keep arriving. Other players see you frozen in place. You can move freely and see everything happening around you, then release and teleport to your new position from their perspective.",
  },
  {
    name: "Incoming and Outgoing",
    desc: "All packets are held in both directions. The world freezes for you too. When you release, your position updates and the world catches up at once. Useful when you want full control over exactly what state gets synced.",
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
        lede="Hold your position in place for other players, move freely, then release. They see you teleport instantly to wherever you ended up."
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
