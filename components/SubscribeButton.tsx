import Link from "next/link";
import { portalSignInUrl } from "@/lib/portal";

export default function SubscribeButton() {
  return (
    <div className="flex w-full flex-col items-start gap-3 sm:w-auto">
      <Link
        href={portalSignInUrl("/subscribe", "monthly")}
        className="inline-flex h-12 w-full items-center justify-center gap-3 bg-ink-950 px-6 text-[14px] font-medium text-white transition-colors hover:bg-ink-800 sm:w-auto"
      >
        Start monthly access
      </Link>
    </div>
  );
}
