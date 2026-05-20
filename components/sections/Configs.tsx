import { Section, SectionHeader } from "../Section";

const SAVED = [
  "Module toggles",
  "Keybinds",
  "Slider values",
  "Mode choices",
  "Visual colors",
  "Blink settings",
];

export default function Configs() {
  return (
    <Section id="configs" tone="dark">
      <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            title={
              <>
                Save the
                <br />
                current setup.
              </>
            }
            lede="Configs keep the settings you already dialed in, so switching setups does not mean rebuilding them by hand."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {SAVED.map((item) => (
              <li key={item} className="bg-ink-950 p-5 text-lg font-medium sm:p-6 sm:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
