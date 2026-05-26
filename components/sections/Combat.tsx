import { Section, SectionHeader } from "../Section";

const FEATURES = [
  {
    name: "Input Assist",
    copy: "Range, field of view, horizontal speed, vertical speed, and targeting preference controls.",
  },
  {
    name: "Interaction Range",
    copy: "Configurable interaction distance with contextual movement, equipment, and environment checks.",
  },
  {
    name: "Click Timing",
    copy: "Left and right input modules with keybinds, average rate controls, equipment checks, and inventory options.",
  },
  {
    name: "Movement Response",
    copy: "Horizontal and vertical response settings with chance, delay, movement, and equipment checks.",
  },
];

export default function Combat() {
  return (
    <Section id="features" tone="light">
      <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="light"
            title={
              <>
                Utility modules
                <br />
                stays readable.
              </>
            }
            lede="The modules page focuses on the settings people actually adjust."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ul className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature.name} className="bg-white p-5 sm:p-7">
                <h3 className="text-xl font-medium tracking-tightest text-ink-950 sm:text-2xl">
                  {feature.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:mt-4 sm:text-base">
                  {feature.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
