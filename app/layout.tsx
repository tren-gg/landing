import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "tren. Minecraft client UI",
  description:
    "tren. is a Minecraft desktop client interface focused on current modules, local configs, Blink packet modes, and clear mapping notes.",
  applicationName: "tren.",
  authors: [{ name: "tren." }],
  keywords: [
    "tren",
    "Minecraft utility",
    "Minecraft client",
    "Blink",
    "module configuration",
  ],
  openGraph: {
    title: "tren.",
    description:
      "A Minecraft desktop client page with current modules and honest compatibility notes.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans bg-white text-ink-950 antialiased">
        {children}
      </body>
    </html>
  );
}
