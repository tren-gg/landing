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
    <Section id="features" tone="dark">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
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
          <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature.name} className="bg-ink-950 p-7">
                <h3 className="text-2xl font-medium tracking-tightest">
                  {feature.name}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-200">
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
