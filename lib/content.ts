import type { HomePageDefinition, PageSection, SeoPageDefinition } from "@/config/types";

function sectionText(section: PageSection) {
  const parts = [section.heading, section.intro, ...(section.paragraphs ?? [])];
  for (const subsection of section.subsections ?? []) {
    parts.push(subsection.heading, ...subsection.paragraphs, ...(subsection.bullets ?? []));
  }
  for (const step of section.steps ?? []) parts.push(step.heading, step.description);
  return parts.filter(Boolean).join("\n");
}

export function pagePlainText(page: HomePageDefinition | SeoPageDefinition) {
  const sections = page.sections.map(sectionText);
  const faq = (page.faq ?? []).flatMap((item) => [item.question, item.answer]);
  return [page.title, page.description, page.hero.heading, page.hero.lead, ...sections, ...faq].join("\n");
}
