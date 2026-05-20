import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SubscribeButton from "@/components/SubscribeButton";

export const metadata = {
  title: "Account | Tren",
  description: "Tren account access and subscription status.",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <Nav />

      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid min-h-[60vh] max-w-page grid-cols-12 items-center gap-x-0 gap-y-10 px-5 py-16 sm:gap-x-8 sm:px-6 sm:py-20 md:min-h-[68vh] md:py-32 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-[12px] uppercase tracking-[0.22em] text-ink-300">
              account
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[0.95] tracking-tightest sm:text-5xl md:text-7xl">
              Sign in from the Windows loader.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:mt-7 sm:text-lg">
              The public dashboard is not enabled yet. The current auth flow
              starts inside the Tren client, opens your system browser, and
              returns to the app after email confirmation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/#download"
                className="inline-flex h-12 w-full items-center justify-center bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100 sm:w-auto"
              >
                Get Tren
              </Link>
              <Link
                href="/#features"
                className="inline-flex h-12 w-full items-center justify-center border border-white/15 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                View modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto grid max-w-page grid-cols-12 gap-x-0 gap-y-8 px-5 sm:gap-x-8 sm:px-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-3xl font-medium tracking-tightest sm:text-4xl md:text-6xl">
              Monthly access
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:mt-6 sm:text-lg">
              Checkout is connected to the API route, but Stripe is not turned
              on yet. Until then, subscriptions are handled manually for test
              accounts.
            </p>
          </div>
          <div className="col-span-12 flex items-start lg:col-span-5 lg:justify-end">
            <SubscribeButton />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
