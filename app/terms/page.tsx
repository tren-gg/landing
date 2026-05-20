import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { loadLegalDocument } from "@/components/legal/LegalMarkdown";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Binding terms governing the Tren desktop client, account portal at portal.tren.gg, subscriptions, seat management, and dispute resolution.",
  alternates: { canonical: "https://tren.gg/terms" },
  openGraph: {
    title: "Terms of Service - Tren",
    description:
      "Binding terms governing the Tren desktop client, account portal, subscriptions, seat management, and dispute resolution.",
    url: "https://tren.gg/terms",
  },
};

export default function TermsPage() {
  const document = loadLegalDocument("terms.md");

  return (
    <LegalShell
      document={document}
      eyebrow="terms of service"
      title={
        <>
          The terms
          <br />
          you agree to
          <br />
          when using Tren.
        </>
      }
      lede="A binding agreement between you and Tren governing the desktop client, the account portal at portal.tren.gg, and related features. Read Section 16 carefully."
      meta={[
        ["effective", document.effectiveDate ?? "May 20, 2026"],
        ["applies to", "Client, Portal, Service"],
        ["jurisdiction", "California, USA"],
        ["reading time", "~12 min"],
      ]}
      calloutCopy="A plain-language summary of these Terms and our Privacy Policy. For convenience only, this full document controls in any conflict."
      breadcrumbLabel="Terms of Service"
      breadcrumbHref="/terms"
    />
  );
}
