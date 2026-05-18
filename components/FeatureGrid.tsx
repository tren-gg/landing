import { Section, SectionHeader } from "./Section";

const ITEMS = [
  {
    name: "Array List",
    copy: "A simple greyscale list of enabled modules with optional background styling.",
  },
  {
    name: "Keybinds",
    copy: "Binds for toggles and quick testing.",
  },
  {
    name: "Bridge Assist",
    copy: "A focused utility around right click bridge behavior.",
  },
  {
    name: "Throw Pearl",
    copy: "Switch and throw delay controls for pearl use.",
  },
  {
    name: "Throw Pots",
    copy: "One, double, and smart modes with separate switch and throw delays.",
  },
  {
    name: "Block ESP",
    copy: "Radius and block list settings for block highlighting.",
  },
  {
    name: "Blink Display",
    copy: "Path display controls for Blink sessions.",
  },
  {
    name: "Saved Configs",
    copy: "Secure saved settings for module values, binds, colors, and modes.",
  },
];

export default function FeatureGrid() {
  return (
    <Section id="more" tone="dark">
      <SectionHeader
        tone="dark"
        title={
          <>
            More controls
            <br />
            without the clutter.
          </>
        }
        lede="Additional controls that are currently part of Tren."
      />

      <ul className="mt-16 grid grid-cols-12 gap-px bg-white/10 border border-white/10">
        {ITEMS.map((it, i) => (
          <li
            key={it.name}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-ink-950 p-7"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>feature</span>
            </div>
            <h3 className="mt-4 text-2xl font-medium tracking-tightest">
              {it.name}
            </h3>
            <p className="mt-3 text-ink-200 leading-relaxed">{it.copy}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
