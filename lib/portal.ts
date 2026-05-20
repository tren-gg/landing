const DEFAULT_PORTAL_URL = "https://portal.tren.gg";

function getPortalBase() {
  return process.env.NEXT_PUBLIC_TREN_PORTAL_URL ?? DEFAULT_PORTAL_URL;
}

export function portalUrl(path = "/") {
  return new URL(path, getPortalBase()).toString();
}

export function portalSignInUrl(next?: string, plan?: "monthly" | "yearly") {
  const url = new URL("/auth/sign-in", getPortalBase());

  if (next) {
    url.searchParams.set("next", next);
  }

  if (plan) {
    url.searchParams.set("plan", plan);
  }

  return url.toString();
}
