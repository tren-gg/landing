import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tren.gg"),
  title: {
    default: "Tren - Minecraft Utility Modules, Overlays & Configs",
    template: "%s | Tren",
  },
  description:
    "Tren is a high-performance Minecraft utility with configurable modules, clean overlays, sync controls, and secure saved configs.",
  applicationName: "Tren",
  authors: [{ name: "Tren" }],
  creator: "Tren",
  publisher: "Tren",
  keywords: [
    "tren",
    "minecraft utility",
    "minecraft client",
    "minecraft mod",
    "C++ minecraft utility",
    "minecraft utility modules",
    "minecraft input modules",
    "minecraft overlay modules",
    "minecraft sync controls",
    "minecraft overlays",
    "minecraft configs",
    "minecraft desktop utility",
    "minecraft pvp modules",
    "tren client",
    "tren minecraft",
  ],
  openGraph: {
    title: "Tren - Minecraft Utility Modules",
    description:
      "A high-performance Minecraft utility with configurable modules, clean overlays, sync controls, and secure saved configs.",
    url: "https://tren.gg",
    siteName: "Tren",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tren - Minecraft Utility Modules",
    description:
      "A high-performance Minecraft utility with configurable modules, clean overlays, sync controls, and secure saved configs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tren.gg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tren.gg/#organization",
      name: "Tren",
      url: "https://tren.gg",
      logo: {
        "@type": "ImageObject",
        url: "https://tren.gg/icon.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://tren.gg/contact",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://tren.gg/#website",
      url: "https://tren.gg",
      name: "Tren",
      publisher: { "@id": "https://tren.gg/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Tren",
      applicationCategory: "GameApplication",
      operatingSystem: "Windows",
      description:
        "A high-performance Minecraft utility featuring configurable modules, clean overlays, sync controls, and secure saved configs.",
      url: "https://tren.gg",
      author: { "@id": "https://tren.gg/#organization" },
      offers: {
        "@type": "Offer",
        category: "Subscription",
        url: "https://portal.tren.gg",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans bg-white text-ink-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
