import { Section, SectionHeader } from "../Section";

const VISUALS = [
  {
    name: "Player ESP",
    copy: "Boxes, names, and health display options for player visibility.",
  },
  {
    name: "Block ESP",
    copy: "Block list and radius controls for highlighting selected blocks.",
  },
  {
    name: "Array List",
    copy: "A compact list of enabled modules with background and greyscale wave options.",
  },
];

export default function Visuals() {
  return (
    <Section id="visuals" tone="dark" plain>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            title={
              <>
                Clear overlays,
                <br />
                no extra noise.
              </>
            }
            lede="Visual settings stay direct: player ESP, Block ESP, and Array List."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {VISUALS.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-12 gap-6 py-7"
              >
                <h3 className="col-span-12 text-2xl font-medium tracking-tightest text-white sm:col-span-4">
                  {item.name}
                </h3>
                <p className="col-span-12 leading-relaxed text-ink-200 sm:col-span-8">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
