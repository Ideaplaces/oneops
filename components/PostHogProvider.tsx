"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com";
const ENV = process.env.NEXT_PUBLIC_ENVIRONMENT || "production";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) return;
    if (posthog.__loaded) return;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: "history_change",
      capture_pageleave: true,
      persistence: "localStorage+cookie",
      loaded: (p) => {
        // Shared PostHog project super-properties (per IdeaPlaces convention)
        p.register({
          app: "oneops",
          environment: ENV,
        });
      },
    });
  }, []);

  return <>{children}</>;
}
