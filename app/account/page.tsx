import { redirect } from "next/navigation";
import { portalUrl } from "@/lib/portal";

export default function AccountPage() {
  redirect(portalUrl());
}
