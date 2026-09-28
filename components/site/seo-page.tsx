import Link from "next/link";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import type { SeoPageDefinition } from "@/config/types";
import { getRelatedPages } from "@/content/registry";
import { pageSchemas } from "@/lib/schema";
import { routePath } from "@/lib/urls";
import { ArticleSections } from "./article-sections";
import { JsonLd } from "./json-ld";

export function SeoPage({ page }: { page: SeoPageDefinition }) {
  const linked = new Set(page.sections.flatMap((section) => (section.links ?? []).map((link) => link.slug)));
  const related = getRelatedPages(page).filter((item) => !linked.has(item.slug));
  const toc = [
    ...page.sections.map((section) => ({ id: section.id, label: section.heading })),
    ...(page.faq?.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(related.length ? [{ id: "related", label: "Related" }] : []),
  ];

  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <section className="wrap inner-hero">
        <div className="crumb">
          <Link href="/">Home</Link>
          {" › "}
          {page.navLabel}
        </div>
        <h1>{page.hero.heading}</h1>
        <p>{page.hero.lead}</p>
      </section>
      <main className="wrap layout">
        <article>
          <ArticleSections sections={page.sections} />
          {page.faq?.length ? (
            <section id="faq">
              <h2>FAQ</h2>
              {page.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
          {related.length ? (
            <section id="related">
              <h2>Related</h2>
              <ul>
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={routePath(item.slug)}>{item.navLabel}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
        <aside className="toc">
          <b>On this page</b>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </aside>
      </main>
      <div className="site-container"><NativeAdSlot /></div>
    </>
  );
}
