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
    copy: "A focused utility around right-click placement behavior.",
  },
  {
    name: "Item Timing",
    copy: "Switch and use-delay controls for selected items.",
  },
  {
    name: "Consumable Timing",
    copy: "One, double, and smart modes with separate switch and use delays.",
  },
  {
    name: "Block Overlay",
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

      <ul className="mt-10 grid grid-cols-12 gap-px border border-white/10 bg-white/10 sm:mt-12 md:mt-16">
        {ITEMS.map((it, i) => (
          <li
            key={it.name}
            className="col-span-12 bg-ink-950 p-5 sm:col-span-6 sm:p-6 lg:col-span-4 lg:p-7"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-400">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>feature</span>
            </div>
            <h3 className="mt-4 text-xl font-medium tracking-tightest sm:text-2xl">
              {it.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200 sm:text-base">{it.copy}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
