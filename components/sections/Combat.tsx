import { Section, SectionHeader } from "../Section";

const FEATURES = [
  {
    name: "Aim Assist",
    copy: "Range, field of view, horizontal speed, vertical speed, and center or multipoint targeting.",
  },
  {
    name: "Reach",
    copy: "Configurable reach with hitbox adjustment, combo behavior, ground checks, weapon checks, and liquid checks.",
  },
  {
    name: "Clickers",
    copy: "Left and right click modules with keybinds, average CPS controls, weapon checks, and inventory options.",
  },
  {
    name: "Velocity",
    copy: "Horizontal and vertical knockback settings with chance, delay, air only, moving only, and weapon only checks.",
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
                Combat that
                <br />
                stays readable.
              </>
            }
            lede="The combat page focuses on the settings people actually adjust."
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
