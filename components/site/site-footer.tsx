import { Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { routePath } from "@/lib/urls";

export function SiteFooter({ coreLinks, legalLinks }: { coreLinks: InternalLink[]; legalLinks: InternalLink[] }) {
  const email = siteConfig.contact.email;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-title">{siteConfig.siteName}</p>
          <p>{siteConfig.description}</p>
          <p className="site-footer-note">
            Independent, fan-made and not affiliated with the game developer or platform owner.
          </p>
        </div>
        <div>
          <p className="site-footer-label">Explore</p>
          <ul>
            {coreLinks.map((link) => (
              <li key={link.slug}><Link href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="site-footer-label">Site</p>
          <ul>
            {legalLinks.map((link) => (
              <li key={link.slug}><Link href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
          {email ? (
            <a className="site-footer-mail" href={`mailto:${email}`}>
              <Mail size={15} aria-hidden="true" />
              {email}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
