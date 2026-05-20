import { Section, SectionHeader } from "../Section";

const POINTS = [
  {
    name: "Internal module",
    copy: "The core runs inside the game process, so module logic stays close to the state it reads and updates.",
  },
  {
    name: "C++ core",
    copy: "Native C++ keeps the runtime lean, responsive, and suited for fast module loops.",
  },
  {
    name: "Java Native Interface",
    copy: "JNI lets the internal module bridge native C++ with Minecraft's Java objects while keeping the loader small.",
  },
  {
    name: "Secure settings",
    copy: "Saved configs keep the setup consistent without making the interface feel heavy.",
  },
];

export default function Performance() {
  return (
    <Section id="performance" tone="dark">
      <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
            title={
              <>
                High performance
                <br />
                because it is internal.
              </>
            }
            lede="Tren keeps the loader small and puts the performance critical work in the injected C++ module."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10">
            {POINTS.map((point) => (
              <li key={point.name} className="bg-ink-950 p-5 sm:p-7">
                <h3 className="text-xl font-medium tracking-tightest text-white sm:text-2xl">
                  {point.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200 sm:mt-4 sm:text-base">
                  {point.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
