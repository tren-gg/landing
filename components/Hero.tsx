import Link from "next/link";
import { Mockup } from "./Mockup";
import SyringeMark from "./SyringeMark";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      {/* Backdrop grid */}
      <div aria-hidden className="absolute inset-0 grid-backdrop-dark" />

      {/* Faint syringe motif, lower-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 hidden h-[640px] w-[640px] opacity-[0.06] md:block"
      >
        <SyringeMark className="h-full w-full text-white" />
      </div>

      {/* Top hairline (under nav) */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-page px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        {/* Top meta strip */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-ink-300">
          <div className="flex items-center gap-3">
            <span className="block h-px w-6 bg-ink-300/60" />
            <span>release x64</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <span>1.7.10 / 1.8 mapping work</span>
            <span>Java client · Windows loader</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-white" />
            <span>online</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(3.25rem,9vw,8.5rem)] font-medium leading-[0.92] tracking-tightest">
              A quieter
              <br />
              desktop client.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200 md:text-xl">
              tren. is a focused desktop client for Minecraft testing and
              configuration. It keeps the module set small, the settings
              readable, and the loader out of the way.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#download"
                className="inline-flex h-12 items-center gap-3 bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
              >
                Download tren.
                <span aria-hidden className="text-ink-400">→</span>
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center gap-3 border border-white/15 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
              >
                See the modules
              </Link>
              <div className="ml-2 hidden items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-300 sm:flex">
                <span className="block h-px w-6 bg-ink-300/60" />
                <span>local config · release build</span>
              </div>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="col-span-12 lg:col-span-5">
            <Mockup title="tren.client" subtitle="hud · modules · blink" tone="dark">
              <div className="grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-4 border-r border-white/10 bg-ink-900/60 p-3 text-[11px]">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-ink-400">
                    Modules
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      ["Aim Assist", true],
                      ["Left Clicker", true],
                      ["Right Clicker", true],
                      ["Reach", true],
                      ["Velocity", true],
                      ["Blink", true],
                      ["ESP", true],
                      ["Block ESP", true],
                      ["Timer", true],
                      ["Bhop", true],
                    ].map(([name, on]) => (
                      <li
                        key={String(name)}
                        className="flex items-center justify-between border border-transparent px-2 py-1.5 hover:border-white/10"
                      >
                        <span className="text-ink-100">{name as string}</span>
                        <span
                          className={[
                            "h-1.5 w-3.5",
                            on ? "bg-white" : "bg-ink-500",
                          ].join(" ")}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main panel */}
                <div className="col-span-8 p-4 text-[11px]">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400">
                      Aim Assist · settings
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400">
                      active
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["range", "3.6", "blocks"],
                      ["horizontal", "2.5", "speed"],
                      ["vertical", "2.5", "speed"],
                      ["fov", "70", "deg"],
                    ].map(([k, v, u]) => (
                      <div
                        key={k}
                        className="grid grid-cols-12 items-center gap-3"
                      >
                        <div className="col-span-3 text-ink-300">{k}</div>
                        <div className="col-span-6 h-1 bg-white/10">
                          <div
                            className="h-full bg-white"
                            style={{
                              width:
                                k === "range"
                                  ? "78%"
                                  : k === "cps"
                                  ? "62%"
                                  : k === "aps"
                                  ? "84%"
                                  : "92%",
                            }}
                          />
                        </div>
                        <div className="col-span-3 text-right">
                          <span className="text-white">{v}</span>{" "}
                          <span className="text-ink-400">{u}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["Center", "Multipoint", "Pitch 0"].map((t) => (
                      <div
                        key={t}
                        className="border border-white/10 px-2 py-1.5 text-center text-[10px] uppercase tracking-[0.18em] text-ink-200"
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ink-400">
                      <span>blink · outgoing queue</span>
                      <span>release on toggle</span>
                    </div>
                    <div className="mt-3 flex h-10 items-end gap-1">
                      {[5, 8, 6, 9, 12, 7, 11, 14, 9, 13, 10, 8, 12, 9, 11, 7, 10, 13, 9, 12].map(
                        (h, i) => (
                          <span
                            key={i}
                            className="block w-2 bg-white/80"
                            style={{ height: `${h * 6}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-ink-900/80 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-ink-300">
                <span>release x64 · mapping table</span>
                <span>local settings</span>
              </div>
            </Mockup>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {[
            ["14", "Current modules"],
            ["x64", "Release build"],
            ["1.7.10 / 1.8", "Mapping focus"],
            ["local", "Configs"],
          ].map(([v, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <div className="text-2xl font-medium tracking-tightest text-white md:text-3xl">
                {v}
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
