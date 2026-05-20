import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Fragment, type ReactNode } from "react";

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
};

type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalDocument = {
  title: string;
  effectiveDate?: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

const CONTENT_ROOT = join(process.cwd(), "content", "legal");

export function loadLegalDocument(file: "privacy.md" | "terms.md" | "tldr.md") {
  return parseMarkdown(readFileSync(join(CONTENT_ROOT, file), "utf8"));
}

function parseMarkdown(markdown: string): LegalDocument {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const title = lines.find((line) => line.startsWith("# "))?.replace(/^#\s+/, "").trim() ?? "";
  const effectiveLine = lines.find((line) => /^\*\*Effective (date|Date):\*\*/.test(line));
  const effectiveDate = effectiveLine?.replace(/^\*\*Effective (date|Date):\*\*\s*/, "").trim();
  const intro: LegalBlock[] = [];
  const sections: LegalSection[] = [];
  let current: LegalSection | null = null;
  let paragraph: string[] = [];
  let list: string[] = [];

  function targetBlocks() {
    return current ? current.blocks : intro;
  }

  function flushParagraph() {
    if (!paragraph.length) return;
    targetBlocks().push({ type: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  }

  function flushList() {
    if (!list.length) return;
    targetBlocks().push({ type: "list", items: list });
    list = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === "---" || line.startsWith("# ") || /^\*\*Effective (date|Date):\*\*/.test(line)) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^##\s+(?:(\d+)\.\s+)?(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const number = heading[1] ?? String(sections.length + 1);
      const titleText = heading[2].replace(/\.$/, "");
      current = {
        id: `s${number.padStart(2, "0")}`,
        number,
        title: titleText,
        blocks: [],
      };
      sections.push(current);
      continue;
    }

    const mdBullet = line.match(/^-\s+(.+)$/);
    const legalBullet = line.match(/^\(([a-z])\)\s+(.+)$/);
    if (mdBullet || legalBullet) {
      flushParagraph();
      list.push(legalBullet ? `${legalBullet[1]} / ${legalBullet[2]}` : mdBullet![1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return { title, effectiveDate, intro, sections };
}

export function LegalBlocks({
  blocks,
  variant = "legal",
  tone = "light",
}: {
  blocks: LegalBlock[];
  variant?: "legal" | "topic";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        variant === "legal" ? "space-y-4 text-base leading-relaxed" : "space-y-3 text-sm leading-relaxed",
        isDark ? "text-ink-200" : "text-ink-500",
      ].join(" ")}
    >
      {blocks.map((block, index) =>
        block.type === "paragraph" ? (
          <p key={index}>{renderInline(block.text, tone)}</p>
        ) : (
          <ul
            key={index}
            className={[
              "border-t",
              isDark ? "border-white/10" : "border-black/10",
            ].join(" ")}
          >
            {block.items.map((item) => {
              const keyed = item.match(/^([a-z] \/ )(.+)$/);
              return (
                <li
                  key={item}
                  className={[
                    "grid grid-cols-[56px_1fr] gap-5 border-b py-4 text-sm leading-relaxed",
                    isDark ? "border-white/10" : "border-black/10",
                  ].join(" ")}
                >
                  <span className={["pt-1 text-[10px] uppercase tracking-[0.22em]", isDark ? "text-white" : "text-ink-950"].join(" ")}>
                    {keyed ? keyed[1].replace(" / ", "") : ""}
                  </span>
                  <span>{renderInline(keyed ? keyed[2] : item, tone)}</span>
                </li>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
}

function renderInline(text: string, tone: "light" | "dark" = "light"): ReactNode[] {
  const linkClass =
    tone === "dark"
      ? "text-white underline underline-offset-4 hover:text-ink-200"
      : "text-ink-950 underline underline-offset-4 hover:text-ink-500";
  const strongClass = tone === "dark" ? "font-medium text-white" : "font-medium text-ink-950";
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|legal@tren\.gg|portal\.tren\.gg|Privacy Policy|Terms of Service|TL;DR)/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className={strongClass}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    const mdLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLink) {
      return (
        <Link key={index} href={normalizeHref(mdLink[2])} className={linkClass}>
          {mdLink[1]}
        </Link>
      );
    }

    if (part === "legal@tren.gg") {
      return (
        <a key={index} href="mailto:legal@tren.gg" className={linkClass}>
          legal@tren.gg
        </a>
      );
    }

    if (part === "portal.tren.gg") {
      return (
        <a key={index} href="https://portal.tren.gg" className={linkClass}>
          portal.tren.gg
        </a>
      );
    }

    if (part === "Privacy Policy") {
      return (
        <Link key={index} href="/privacy" className={linkClass}>
          Privacy Policy
        </Link>
      );
    }

    if (part === "Terms of Service") {
      return (
        <Link key={index} href="/terms" className={linkClass}>
          Terms of Service
        </Link>
      );
    }

    if (part === "TL;DR") {
      return (
        <Link key={index} href="/tldr" className={linkClass}>
          TL;DR
        </Link>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

function normalizeHref(href: string) {
  if (href === "/privacy") return "/privacy";
  if (href === "/terms") return "/terms";
  if (href.includes("Privacy")) return "/privacy";
  if (href.includes("Terms")) return "/terms";
  if (href.includes("TLDR") || href.includes("tldr")) return "/tldr";
  return href;
}
