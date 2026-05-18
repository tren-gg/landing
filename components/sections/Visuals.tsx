import { Section, SectionHeader } from "../Section";
import { Mockup } from "../Mockup";

export default function Visuals() {
  return (
    <Section id="visuals" tone="light" plain>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <Mockup title="visuals / overlay" subtitle="esp · block esp · array list" tone="light">
            <div className="grid grid-cols-12">
              {/* Faux world canvas */}
              <div className="col-span-8 relative border-r border-black/10 bg-ink-50 p-0">
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  {/* horizon */}
                  <div className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
                  {/* faux boxes for ESP */}
                  {[
                    { l: "12%", t: "32%", w: "10%", h: "28%", tag: "player_07 · 18 hp" },
                    { l: "44%", t: "44%", w: "8%",  h: "22%", tag: "player_12 · 12 hp" },
                    { l: "72%", t: "38%", w: "9%",  h: "26%", tag: "player_03 · 20 hp" },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="absolute border border-ink-950 text-[10px] uppercase tracking-[0.2em] text-ink-950"
                      style={{ left: b.l, top: b.t, width: b.w, height: b.h }}
                    >
                      <span className="absolute -top-5 left-0 whitespace-nowrap bg-white px-1.5 py-0.5">
                        {b.tag}
                      </span>
                      <span className="absolute -bottom-1 left-1/2 block h-2 w-px -translate-x-1/2 bg-ink-950" />
                    </div>
                  ))}
                  {/* crosshair */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-6 w-6">
                      <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-ink-950" />
                      <span className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-ink-950" />
                      <span className="absolute top-1/2 left-0 h-px w-2 -translate-y-1/2 bg-ink-950" />
                      <span className="absolute top-1/2 right-0 h-px w-2 -translate-y-1/2 bg-ink-950" />
                    </div>
                  </div>
                  {/* corner hud */}
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    local preview · 1.7.10
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    coords −248 / 71 / 1394
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-end gap-1">
                    {[5, 8, 6, 9, 12, 7, 11, 14, 9, 13, 10, 8].map((h, i) => (
                      <span key={i} className="block w-1.5 bg-ink-950" style={{ height: `${h * 3}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Radar / details */}
              <div className="col-span-4 p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  Radar · 64 b
                </div>
                <div className="mt-3 relative aspect-square w-full border border-black/10 bg-white">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <span key={i} className="border border-black/[0.04]" />
                    ))}
                  </div>
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-ink-950" />
                  {[
                    { l: "62%", t: "30%" },
                    { l: "30%", t: "55%" },
                    { l: "70%", t: "70%" },
                  ].map((p, i) => (
                    <span
                      key={i}
                      className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-ink-700"
                      style={{ left: p.l, top: p.t }}
                    />
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-[11px]">
                  {[
                    ["ESP", "boxes · names · hp"],
                    ["Block ESP", "radius · block list"],
                    ["Array List", "modules · background"],
                    ["HUD", "greyscale · readable"],
                  ].map(([k, v]) => (
                    <li
                      key={k}
                      className="flex items-center justify-between border-b border-black/10 pb-2"
                    >
                      <span className="text-ink-950">{k}</span>
                      <span className="text-ink-500">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Mockup>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
          <SectionHeader
            tone="light"
            eyebrow="Visuals"
            title={
              <>
                Information,
                <br />
                not decoration.
              </>
            }
            lede="Visuals focus on the modules present in the client: player ESP, Block ESP, and Array List. The mockups stay greyscale and avoid fake color effects."
          />
          <dl className="mt-12 grid grid-cols-2 gap-px bg-black/10">
            {[
              ["1 px", "Outline weight"],
              ["25", "Default block radius"],
              ["0", "Strobing effects"],
              ["3", "Visual modules"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="flex flex-col gap-1 bg-white p-5"
              >
                <dt className="text-3xl font-medium tracking-tightest text-ink-950">
                  {v}
                </dt>
                <dd className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
