"use client";

import { useEffect, useRef } from "react";

const scriptUrl = "https://pl31582333.profitableratecpmnetwork.com/79beacc2d32d01064b7ea7f7db01155f/invoke.js";
const containerId = "container-79beacc2d32d01064b7ea7f7db01155f";

export function NativeAdClient() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Deferring one frame also avoids a duplicate request from React's dev
    // Strict Mode effect replay.
    const frame = window.requestAnimationFrame(() => {
      const container = document.createElement("div");
      container.id = containerId;
      host.appendChild(container);

      const script = document.createElement("script");
      script.async = true;
      script.src = scriptUrl;
      script.dataset.cfasync = "false";
      host.insertBefore(script, container);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      host.replaceChildren();
    };
  }, []);

  return <div ref={hostRef} data-native-ad-slot />;
}
