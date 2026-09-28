import type { IntegrationConfig } from "./types";

const adScriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SCRIPT_URL?.trim();
const adContainerId = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID?.trim();
const DEFAULT_GA_MEASUREMENT_ID = "G-1KYH0R5SQ2";
const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || DEFAULT_GA_MEASUREMENT_ID;
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim() || null;
const bingVerification = process.env.BING_SITE_VERIFICATION?.trim() || null;

export const integrations: IntegrationConfig = {
  analytics: /^G-[A-Z0-9]+$/i.test(gaMeasurementId)
    ? { provider: "google-analytics", measurementId: gaMeasurementId.toUpperCase() }
    : { provider: "none" },
  ads:
    adScriptUrl && adContainerId
      ? {
          provider: "adsterra-native",
          scriptUrl: adScriptUrl,
          containerId: adContainerId,
        }
      : { provider: "none" },
  verification: {
    google: googleVerification,
    bing: bingVerification,
  },
};
