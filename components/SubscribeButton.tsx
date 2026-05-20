"use client";

import { useState } from "react";

type CheckoutState = "idle" | "loading" | "blocked" | "error";

const apiUrl = process.env.NEXT_PUBLIC_TREN_API_URL ?? "http://localhost:3001";

export default function SubscribeButton() {
  const [state, setState] = useState<CheckoutState>("idle");
  const [message, setMessage] = useState("");

  async function startCheckout() {
    setState("loading");
    setMessage("");

    try {
      const response = await fetch(`${apiUrl}/v1/billing/checkout`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          plan: "monthly"
        })
      });
      const body = await response.json();

      if (!response.ok) {
        setState(response.status === 501 ? "blocked" : "error");
        setMessage(body.error?.message ?? "Checkout is unavailable.");
        return;
      }

      if (typeof body.url === "string") {
        window.location.href = body.url;
        return;
      }

      setState("error");
      setMessage("Checkout response is missing a redirect URL.");
    } catch {
      setState("error");
      setMessage("Could not reach the billing API.");
    }
  }

  return (
    <div className="flex w-full flex-col items-start gap-3 sm:w-auto">
      <button
        type="button"
        onClick={startCheckout}
        disabled={state === "loading"}
        className="inline-flex h-12 w-full items-center justify-center gap-3 bg-ink-950 px-6 text-[14px] font-medium text-white transition-colors hover:bg-ink-800 disabled:cursor-wait disabled:bg-ink-500 sm:w-auto"
      >
        {state === "loading" ? "Opening checkout..." : "Start monthly access"}
      </button>
      {message ? (
        <p className="max-w-md text-sm leading-6 text-ink-500">{message}</p>
      ) : null}
    </div>
  );
}
