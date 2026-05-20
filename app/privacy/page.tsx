import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { loadLegalDocument } from "@/components/legal/LegalMarkdown";

export const metadata: Metadata = {
  title: "Privacy Policy - Tren",
  description: "How Tren collects, processes, stores, and protects data for the client, portal, and service.",
};

export default function PrivacyPage() {
  const document = loadLegalDocument("privacy.md");

  return (
    <LegalShell
      document={document}
      eyebrow="privacy policy"
      title={
        <>
          How Tren handles
          <br />
          your data.
        </>
      }
      lede="The categories of personal information we collect, why we process it, the sub-processors who handle it for us, and the rights you have over it."
      meta={[
        ["effective", document.effectiveDate ?? "May 20, 2026"],
        ["applies to", "Client, Portal, Service"],
        ["storage", "United States"],
        ["reading time", "~14 min"],
      ]}
      calloutCopy="Same data practices, distilled. The full policy below is the one that governs in any conflict."
    />
  );
}
