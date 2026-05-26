import { Section, SectionHeader } from "../Section";

const MODES = [
  {
    name: "Outgoing Only",
    desc: "Temporarily pauses outbound session updates while incoming updates continue. Release when you want your current state to sync.",
  },
  {
    name: "Incoming and Outgoing",
    desc: "Temporarily pauses both inbound and outbound session updates. Release when you want the session to reconcile everything at once.",
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
        lede="Blink gives you a simple way to manage when local session state is held and released."
      />

      <ul className="mt-10 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:mt-12 md:mt-16 md:grid-cols-2">
        {MODES.map((mode) => (
          <li key={mode.name} className="bg-white p-5 sm:p-7">
            <h3 className="text-2xl font-medium tracking-tightest sm:text-3xl">
              {mode.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:mt-4 sm:text-base">{mode.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
