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
    <Section id="injection" tone="dark">
      <div className="grid grid-cols-12 items-center gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="dark"
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
          <div className="grid grid-cols-12 gap-6 border border-white/10 p-6">
            <div className="col-span-12 flex items-center justify-center border border-white/10 py-12 sm:col-span-4">
              <SyringeMark className="h-36 w-36 text-white" />
            </div>
            <ol className="col-span-12 divide-y divide-white/10 sm:col-span-8">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-center gap-5 py-5">
                  <span className="text-sm text-ink-300">
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
