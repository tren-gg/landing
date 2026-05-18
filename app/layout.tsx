import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tren Minecraft utility",
  description:
    "Tren is a Minecraft utility focused on current modules, saved configs, Blink packet modes, and clear mapping notes.",
  applicationName: "Tren",
  authors: [{ name: "Tren" }],
  keywords: [
    "tren",
    "Minecraft utility",
    "Minecraft utility",
    "Blink",
    "module configuration",
  ],
  openGraph: {
    title: "Tren",
    description:
      "A Minecraft utility page with current modules and honest compatibility notes.",
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
