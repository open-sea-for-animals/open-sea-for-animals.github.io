import Link from "next/link";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { ResponsiveBanner } from "@/components/integrations/responsive-banner";
import { ArticleSections } from "@/components/site/article-sections";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import { homePage } from "@/content/home";
import { visibleCorePages } from "@/content/registry";
import { homeSchemas } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { assetPath, routePath } from "@/lib/urls";

export const metadata = pageMetadata(homePage);

const coverAlt = "Player carrying a creature along a sandy path between walls of water, with a large dinosaur close behind";

export default function HomePage() {
  const entries = visibleCorePages.slice(0, 6);

  return (
    <>
      <JsonLd data={homeSchemas(homePage)} />
      <div className="wrap">
        <div className="site-breadcrumb">
          <Link href="/">Home</Link>
        </div>
      </div>
      <main className="wrap">
        <section className="hero">
          <div className="hero-banner">
            <div className="hero-copy">
              <span className="sticker">{homePage.hero.eyebrow}</span>
              <h1>{homePage.hero.heading}</h1>
              <p>{homePage.hero.lead}</p>
              <p>{homePage.hero.supportingText}</p>
              <div className="actions">
                {homePage.hero.primaryLink ? (
                  <Link className="btn primary" href={routePath(homePage.hero.primaryLink.slug)}>
                    {homePage.hero.primaryLink.label}
                  </Link>
                ) : null}
                <Link className="btn" href="/guide/">Read the Guide</Link>
                {siteConfig.game.officialUrl ? (
                  <a className="btn" href={siteConfig.game.officialUrl} rel="noopener noreferrer">
                    {homePage.hero.secondaryLink?.label || "Play on Roblox"}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={coverAlt} src={assetPath(siteConfig.assets.cover)} />
            </div>
          </div>
        </section>
        <ResponsiveBanner />
        <div className="blocks">
          {entries.map((page, index) => (
            <Link className="block" href={routePath(page.slug)} key={page.slug}>
              <div className="num">{`0${index + 1}`}</div>
              <b>{page.navLabel}</b>
              {page.summary ? <p>{page.summary}</p> : null}
            </Link>
          ))}
        </div>
        <NativeAdSlot />
        <ArticleSections sections={homePage.sections} />
      </main>
      {homePage.faq.length ? (
        <div className="site-container"><Faq items={homePage.faq} /></div>
      ) : null}
    </>
  );
}
