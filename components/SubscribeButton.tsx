import Link from "next/link";
import { portalSignInUrl } from "@/lib/portal";

export default function SubscribeButton() {
  return (
    <div className="flex w-full flex-col items-start gap-3 sm:w-auto">
      <Link
        href={portalSignInUrl("/subscribe", "monthly")}
        className="inline-flex h-12 w-full items-center justify-between gap-8 bg-white px-6 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100 sm:w-auto"
      >
        <span>Start monthly access</span>
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </div>
  );
}
