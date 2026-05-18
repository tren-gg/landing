import { Section, SectionHeader } from "../Section";

const POINTS = [
  "Greyscale controls with no color accents.",
  "Direct labels for module settings.",
  "Keybinds saved with their modules.",
  "Combat, visuals, utilities, and configs stay separate.",
];

export default function UI() {
  return (
    <Section id="ui" tone="light">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="light"
            title={
              <>
                Clean controls,
                <br />
                fewer distractions.
              </>
            }
            lede="Tren uses a restrained greyscale interface built around fast setting changes."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {POINTS.map((point) => (
              <li key={point} className="py-6 text-xl font-medium text-ink-950">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
