import { Section, SectionHeader } from "../Section";
import SyringeMark from "../SyringeMark";

const STEPS = [
  "Find the running game",
  "Prepare the loader",
  "Attach through Java Native Interface",
  "Apply saved settings",
  "Open the Tren UI",
];

export default function Injection() {
  return (
    <Section id="injection" tone="light">
      <div className="grid grid-cols-12 items-center gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="light"
            title={
              <>
                A sleek
                <br />
                C++ loader.
              </>
            }
            lede="The loader keeps startup secure, simple, and focused."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div className="grid grid-cols-12 gap-6 border border-black/10 p-6">
            <div className="col-span-12 flex items-center justify-center py-12 sm:col-span-4">
              <SyringeMark className="h-48 w-48 text-ink-950" />
            </div>
            <ol className="col-span-12 divide-y divide-black/10 sm:col-span-8">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-center gap-5 py-5">
                  <span className="text-sm text-ink-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
