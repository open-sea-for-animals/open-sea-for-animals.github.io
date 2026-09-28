import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/urls";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: assetPath("/"),
    display: "standalone",
    background_color: `hsl(${siteConfig.theme.tokens.background})`,
    theme_color: `hsl(${siteConfig.theme.tokens.primary})`,
    icons: [{ src: assetPath(siteConfig.assets.logo), sizes: "any", type: "image/webp" }],
  };
}
