import type { SiteConfig } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const site: SiteConfig = {
  siteName: "Open Sea For Animals! Guide",
  shortName: "Open Sea For Animals!",
  description:
    "Player guides for the Roblox game Open Sea For Animals!, including codes, eggs, animals, a tier list, and upgrades.",
  language: "en",
  locale: "en_US",
  authorName: "Editorial Team",
  theme: {
    tokens: {
      background: "222 100% 95%",
      foreground: "0 0% 7%",
      card: "222 35% 100%",
      "card-foreground": "0 0% 7%",
      primary: "189 94% 43%",
      "primary-foreground": "0 0% 0%",
      secondary: "222 100% 88%",
      muted: "222 100% 90%",
      "muted-foreground": "0 0% 7%",
      border: "222 100% 79%",
      radius: "1.6rem",
      "card-shadow": "0 18px 50px rgba(37, 99, 235, .14)",
      "hero-gradient":
        "radial-gradient(circle at 18% 0%, hsl(189 94% 43% / .38), transparent 42%), radial-gradient(circle at 88% 8%, hsl(189 94% 43% / .2), transparent 36%)",
      "background-pattern": "radial-gradient(hsl(189 94% 43% / .08) 1px, transparent 1px)",
      "font-sans": "\"Inter\", ui-sans-serif, system-ui, sans-serif",
      "font-heading": "\"Space Grotesk\", ui-sans-serif, system-ui, sans-serif",
      "heading-weight": "700",
      "heading-letter-spacing": "-0.04em",
    },
  },
  hosting: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://open-sea-for-animals.github.io",
    basePath,
    customDomain: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN?.trim() || null,
  },
  contact: {
    email: "support@open-sea-for-animals.com",
    url: null,
  },
  assets: {
    logo: "/images/open-sea-for-animals-logo.webp",
    cover: "/images/open-sea-for-animals-cover.webp",
    openGraph: "/images/open-sea-for-animals-og.svg",
    favicon: "/images/open-sea-for-animals-logo.webp",
  },
  game: {
    name: "Open Sea For Animals!",
    platform: "Roblox",
    developer: "xFrozen x Dudes",
    genre: "Simulation / Tycoon",
    officialUrl: "https://www.roblox.com/games/88047783411976/Open-Sea-For-Animals",
  },
  seo: {
    titleTemplate: "%s",
    defaultKeywords: [
      "open sea for animals",
      "open sea for animals codes",
      "open sea for animals guide",
    ],
  },
};

export const siteConfig: SiteConfig = site;
