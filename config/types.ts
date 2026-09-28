export type PageType =
  | "home"
  | "database"
  | "guide"
  | "codes"
  | "updates"
  | "article"
  | "list"
  | "legal";

export interface SiteConfig {
  siteName: string;
  shortName: string;
  description: string;
  language: string;
  locale: string;
  authorName: string;
  theme: {
    tokens: Record<string, string>;
  };
  hosting: {
    siteUrl: string;
    basePath: string;
    customDomain: string | null;
  };
  contact: {
    email: string | null;
    url: string | null;
  };
  assets: {
    logo: string;
    cover: string;
    openGraph: string;
    favicon: string;
  };
  game: {
    name: string;
    platform: string;
    developer: string;
    genre: string;
    officialUrl: string | null;
  };
  seo: {
    titleTemplate: string;
    defaultKeywords: string[];
  };
}

export interface IntegrationConfig {
  analytics:
    | { provider: "none" }
    | { provider: "google-analytics"; measurementId: string };
  ads:
    | { provider: "none" }
    | {
        provider: "adsterra-native";
        scriptUrl: string;
        containerId: string;
      };
  verification: {
    google: string | null;
    bing: string | null;
  };
}

export interface InternalLink {
  label: string;
  slug: string;
  description?: string;
}

export interface DataTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface Subsection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: DataTable;
}

export interface PageSection {
  id: string;
  heading: string;
  eyebrow?: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: Subsection[];
  links?: InternalLink[];
  steps?: Array<{ heading: string; description: string }>;
  table?: DataTable;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ScreenshotItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface SeoPageDefinition {
  enabled: boolean;
  slug: string;
  pageType: Exclude<PageType, "home">;
  navLabel: string;
  title: string;
  description: string;
  keywords: string[];
  summary?: string;
  navVisible: boolean;
  hero: {
    eyebrow?: string;
    heading: string;
    lead: string;
  };
  sections: PageSection[];
  faq?: FaqItem[];
  screenshots?: ScreenshotItem[];
  relatedSlugs?: string[];
  lastReviewed: string;
}

export interface HomePageDefinition {
  enabled: true;
  slug: "";
  pageType: "home";
  title: string;
  description: string;
  keywords: string[];
  navVisible: true;
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    supportingText: string;
    primaryLink?: InternalLink;
    secondaryLink?: { label: string; url: string };
  };
  sections: PageSection[];
  faq: FaqItem[];
  screenshots?: ScreenshotItem[];
  lastReviewed: string;
}
