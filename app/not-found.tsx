import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <Nav />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-32 text-center">
        <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
          404
        </div>
        <h1 className="mt-6 text-5xl font-medium tracking-tightest sm:text-6xl md:text-7xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500">
          The page you were looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center justify-center bg-ink-950 px-8 text-[14px] font-medium text-white transition-colors hover:bg-ink-800"
        >
          Back to home
        </Link>
      </section>
      <Footer />
    </main>
  );
}
