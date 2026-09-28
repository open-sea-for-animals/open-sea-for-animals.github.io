import Link from "next/link";
import type { DataTable, PageSection } from "@/config/types";
import { routePath } from "@/lib/urls";

function TableView({ table }: { table: DataTable }) {
  return (
    <div className="table-scroll">
      <table>
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${table.caption}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArticleSections({ sections }: { sections: PageSection[] }) {
  return sections.map((section) => (
    <section id={section.id} key={section.id}>
      <h2>{section.heading}</h2>
      {section.intro ? <p>{section.intro}</p> : null}
      {section.table ? <TableView table={section.table} /> : null}
      {section.paragraphs?.map((paragraph, index) => (
        <p key={`${section.id}-p-${index}`}>{paragraph}</p>
      ))}
      {section.subsections?.map((subsection) => (
        <div key={subsection.heading}>
          <h3>{subsection.heading}</h3>
          {subsection.paragraphs.map((paragraph, index) => (
            <p key={`${subsection.heading}-${index}`}>{paragraph}</p>
          ))}
          {subsection.bullets?.length ? (
            <ul>
              {subsection.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {subsection.table ? <TableView table={subsection.table} /> : null}
        </div>
      ))}
      {section.steps?.length ? (
        <ol>
          {section.steps.map((step) => (
            <li key={step.heading}>
              <b>{step.heading}</b> {step.description}
            </li>
          ))}
        </ol>
      ) : null}
      {section.links?.length ? (
        <ul className="text-links">
          {section.links.map((link) => (
            <li key={`${link.slug}-${link.label}`}>
              <Link href={routePath(link.slug)}>{link.label}</Link>
              {link.description ? <span> {link.description}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  ));
}
