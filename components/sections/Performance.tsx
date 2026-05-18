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
    <Section id="performance" tone="light">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="light"
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
          <ul className="grid grid-cols-1 gap-px border border-black/10 bg-black/10">
            {POINTS.map((point) => (
              <li key={point.name} className="bg-white p-7">
                <h3 className="text-2xl font-medium tracking-tightest text-ink-950">
                  {point.name}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-500">
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
