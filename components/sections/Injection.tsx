import { Section, SectionHeader } from "../Section";
import SyringeMark from "../SyringeMark";

const STEPS = [
  "Find the running game",
  "Prepare the loader",
  "Load local components",
  "Apply saved settings",
  "Open the Tren UI",
];

export default function Injection() {
  return (
    <Section id="injection" tone="light">
      <div className="grid grid-cols-12 items-center gap-x-0 gap-y-10 sm:gap-x-8 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            tone="light"
            title={
              <>
                A sleek
                <br />
                local loader.
              </>
            }
            lede="The loader keeps startup secure, simple, and focused."
          />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div className="grid grid-cols-12 gap-5 border border-black/10 p-5 sm:gap-6 sm:p-6">
            <div className="col-span-12 flex items-center justify-center py-6 sm:col-span-4 sm:py-12">
              <SyringeMark className="h-32 w-32 text-ink-950 sm:h-48 sm:w-48" />
            </div>
            <ol className="col-span-12 divide-y divide-black/10 sm:col-span-8">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-center gap-4 py-4 sm:gap-5 sm:py-5">
                  <span className="text-sm text-ink-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium sm:text-xl">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
