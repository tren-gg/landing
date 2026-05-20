import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SyringeMark from "@/components/SyringeMark";
import RevealAddress from "@/components/contact/RevealAddress";

export const metadata: Metadata = {
  title: "Support & Contact - Tren",
  description: "Support lanes, FAQ, response windows, and contact details for Tren.",
};

const FAQS = [
  ["How do I cancel my subscription?", "Add a short, plain answer here describing cancellation through the Portal and that access continues to the end of the paid period."],
  ["Why did the Client stop working when my subscription expired?", "Explain that the license validates against an active subscription and that Client access is disabled immediately on expiry, even though Portal access stays available."],
  ["How do I move my seat to a different computer?", "Walk through releasing a seat from the Portal and the 24-hour processing window before a new device can be authorized."],
  ["Why is seat release locked for 24 hours?", "Note that the delay is an anti-sharing measure, not waivable, and applies uniformly across tiers."],
  ["Can I get a refund?", "Summarize the narrow refund exception: within 24-48 hours of the original charge, when the Service is materially non-functional. List what does not qualify."],
  ["I was banned on a Minecraft server. What can Tren do?", "Be direct: Tren is not affiliated with Mojang, Microsoft, or any server. Server enforcement is outside our control and bans are not a refund event."],
  ["How do I delete my account?", "Describe the in-Portal deletion flow, that it cancels the Stripe subscription, revokes sessions, hard-deletes the account, and is irreversible."],
  ["Where is my data stored, and who can see it?", "Mention US-based hosting, the five named sub-processors, and the need-to-know access policy for production data."],
  ["Why did you charge me again? I thought I cancelled.", "Cover the most common cause: cancellation happens at end of period, and renewal may have already processed if started after the renewal date."],
  ["Someone is selling Tren keys. Are they legit?", "State plainly: Tren does not work with resellers. Anything sold through a third party is not an account with Tren and has no support recourse."],
];

const LANES = [
  {
    tag: "general / billing",
    title: "Subscriptions, invoices, plan changes.",
    copy: "Questions about your tier, renewals, taxes, or a charge that looks wrong. Write before initiating a chargeback.",
    subject: "billing",
  },
  {
    tag: "privacy / data",
    title: "Access, correction, deletion, portability.",
    copy: "Send the request from your account email. Tell us which right you're exercising and we'll process it under the applicable law.",
    subject: "privacy request",
  },
  {
    tag: "account / access",
    title: "Suspected unauthorized access.",
    copy: "Include the account email and the approximate time you noticed. We'll revoke active sessions and look at the audit records.",
    subject: "account",
  },
  {
    tag: "dmca / copyright",
    title: "Takedown notices and counter-notices.",
    copy: "Submit a notice that meets the requirements of 17 U.S.C. 512. Section 12 of the Terms lists what your notice must contain.",
    subject: "DMCA",
    href: "/terms#s12",
  },
  {
    tag: "security",
    title: "Responsible disclosure.",
    copy: "If you found a vulnerability in the Client, Portal, or API, write before publishing. Include reproduction steps and impact.",
    subject: "security",
  },
  {
    tag: "disputes / legal",
    title: "Pre-arbitration notice, opt-outs.",
    copy: "A written notice of dispute starts the 30-day informal resolution window described in Section 16.",
    subject: "dispute",
    href: "/terms#s16",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <Nav />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-ink-950 text-white">
        <SyringeMark className="pointer-events-none absolute bottom-[-64px] right-[-72px] hidden h-[420px] w-[420px] text-white opacity-[0.07] lg:block" />
        <div className="relative mx-auto max-w-page px-5 py-24 sm:px-6 md:py-36">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-300">
                support & contact
              </div>
              <h1 className="mt-6 text-6xl font-medium leading-[0.92] tracking-tightest text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
                Support
                <br />
                and contact.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 bg-ink-950 text-ink-300">
        <div className="mx-auto flex max-w-page flex-wrap items-center gap-4 px-5 py-6 text-[12px] uppercase tracking-[0.22em] sm:px-6">
          <span className="block h-1.5 w-1.5 bg-white" />
          <span>Reached most weekdays / Pacific time</span>
          <span className="text-white/20">/</span>
          <span>Reply window 24-72 hours</span>
        </div>
      </div>

      <section id="faq" className="border-t border-black/10 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <SectionIntro eyebrow="01 / start here" title="Frequently asked." lede="If your question is in this list, you can answer it right now without writing to us. Click a row to expand." />
          <div className="col-span-12 lg:col-span-7">
            <div className="border-t border-black/10">
              {FAQS.map(([question, answer], index) => (
                <details key={question} className="group border-b border-black/10">
                  <summary className="grid cursor-pointer list-none grid-cols-[56px_1fr_32px] items-baseline gap-5 py-7 transition-colors hover:text-ink-500 [&::-webkit-details-marker]:hidden">
                    <span className="pt-2 text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl font-medium leading-tight tracking-tightest text-ink-950">
                      {question}
                    </span>
                    <span aria-hidden="true" className="relative h-4 w-4 self-center text-ink-500 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-current after:absolute after:bottom-0 after:left-1/2 after:top-0 after:w-px after:bg-current group-open:after:scale-y-0" />
                  </summary>
                  <div className="grid grid-cols-[56px_1fr_32px] gap-5 pb-8">
                    <p className="col-start-2 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                      <span className="mb-3 inline-block border border-dashed border-ink-400 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] text-ink-500">
                        draft / fill in
                      </span>
                      <br />
                      {answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lanes" className="border-t border-black/10 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <SectionIntro eyebrow="02 / lanes" title="Pick a lane." lede="Six common reasons people write to us. Naming the lane in your subject line saves a round-trip." />
          <div className="col-span-12 lg:col-span-7">
            <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
              {LANES.map((lane, index) => (
                <div key={lane.title} className="flex min-h-52 flex-col bg-white p-7">
                  <div className="flex items-baseline justify-between gap-5 text-[10px] uppercase tracking-[0.22em]">
                    <span className="text-ink-400">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-right text-ink-500">{lane.tag}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-medium leading-tight tracking-tightest">
                    {lane.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                    {lane.copy}
                    {lane.href ? (
                      <>
                        {" "}
                        <Link href={lane.href} className="text-ink-950 underline underline-offset-4 hover:text-ink-500">
                          Read the section.
                        </Link>
                      </>
                    ) : null}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-black/10 pt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    <span className="h-1.5 w-1.5 bg-ink-950" />
                    <span>subject: {lane.subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="include" className="border-t border-white/10 bg-ink-950 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex max-w-md flex-col gap-4">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">03 / etiquette</span>
              <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest md:text-5xl">What to put in the email.</h2>
              <p className="text-base leading-relaxed text-ink-200">Five lines that get your request handled faster, regardless of the lane.</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ul className="border-t border-white/10">
              {[
                ["Write from your account email.", "We can only authenticate you against the email associated with your account."],
                ["Name the lane in the subject.", "Billing, privacy request, security disclosure, DMCA, dispute notice. A clear subject saves a round-trip."],
                ["Quote the relevant section.", "When something hinges on our Terms or Privacy Policy, paste the section number you're referring to."],
                ["Times in UTC.", "Timestamps in our audit records are UTC. If you're describing a sign-in, charge, or incident, give us UTC if you can."],
                ["No screenshots of card numbers.", "Stripe handles card data. We never need full card numbers, expiry dates, or CVV. The last four digits are plenty."],
              ].map(([title, copy], index) => (
                <li key={title} className="grid grid-cols-[56px_1fr] gap-5 border-b border-white/10 py-6 text-[15px] leading-relaxed text-ink-200">
                  <span className="pt-1 text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="mb-1 block text-lg font-medium tracking-tightest text-white">{title}</span>
                    {copy}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="response" className="border-t border-black/10 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <SectionIntro eyebrow="04 / response" title="When to expect a reply." lede="Tren is a small team. These are targets, not commitments. Anything urgent should say so in the subject." />
          <div className="col-span-12 lg:col-span-7">
            <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">
              <ResponseCell label="general / billing" figure="24-72" unit="hrs" note="Most charge questions and tier changes are resolved on the first reply." />
              <ResponseCell label="privacy & data" figure="<30" unit="days" note="Privacy requests are answered within the statutory window. Most go out faster." />
              <ResponseCell label="security" figure="<48" unit="hrs" note="Triage acknowledgement for credible vulnerability reports, followed by a detailed reply." />
            </div>
          </div>
        </div>
      </section>

      <section id="nots" className="border-t border-black/10 bg-white py-24">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-10 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <SectionIntro eyebrow="05 / not us" title={<>Places we<br />don't take support.</>} lede="If you see something with the Tren name at one of these surfaces, it isn't an official channel." />
          <div className="col-span-12 lg:col-span-12">
            <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-4">
              {[
                ["Discord DMs", "No staff on Discord. Anyone messaging you in our name is not us."],
                ["Phone & SMS", "No phone number. No SMS. We will never call you about your account."],
                ["In-game chat", "We do not operate any Minecraft account. Anyone using the Tren name there is not us."],
                ["Resellers", "We do not work with resellers. Buying through one means you have no account with Tren and no support recourse."],
              ].map(([title, note]) => (
                <div key={title} className="bg-white p-7">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-500">channel</span>
                  <div className="relative mt-4 inline-block text-2xl font-medium tracking-tightest after:absolute after:left-[-4px] after:right-[-4px] after:top-[55%] after:h-px after:bg-ink-950">
                    {title}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RevealAddress />
      <Footer />
    </main>
  );
}

function SectionIntro({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede: string }) {
  return (
    <div className="col-span-12 lg:col-span-5">
      <div className="flex max-w-md flex-col gap-4">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400">{eyebrow}</span>
        <h2 className="text-4xl font-medium leading-[0.95] tracking-tightest md:text-5xl">{title}</h2>
        <p className="text-base leading-relaxed text-ink-500">{lede}</p>
      </div>
    </div>
  );
}

function ResponseCell({ label, figure, unit, note }: { label: string; figure: string; unit: string; note: string }) {
  return (
    <div className="flex min-h-48 flex-col bg-white p-7">
      <span className="text-[10px] uppercase tracking-[0.22em] text-ink-500">{label}</span>
      <div className="mt-3 text-6xl font-medium leading-none tracking-tightest">
        {figure}
        <span className="ml-1 text-xl text-ink-500">{unit}</span>
      </div>
      <p className="mt-auto max-w-xs pt-5 text-[13px] leading-relaxed text-ink-500">{note}</p>
    </div>
  );
}
