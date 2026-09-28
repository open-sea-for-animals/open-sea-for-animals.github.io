"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

function isCurrent(slug: string, pathname: string) {
  const target = routePath(slug).replace(/\/+$/, "") || "/";
  const path = pathname.replace(/\/+$/, "") || "/";
  if (target === "/") return path === "/";
  return path === target || path.endsWith(target);
}

export function SiteHeader({ links }: { links: InternalLink[] }) {
  const pathname = usePathname() || "/";
  const parts = (siteConfig.game.name || siteConfig.shortName).trim().split(/\s+/).filter(Boolean);
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  const rest = parts.length > 1 ? parts.slice(0, -1).join(" ") : parts.join(" ");

  return (
    <nav className="floating">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="Back to homepage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={assetPath(siteConfig.assets.logo)}
            style={{ height: 28, width: 28, objectFit: "cover" }}
          />
          <span className="brand-name">
            {rest}
            {last ? <span className="brand-accent"> {last}</span> : null}
          </span>
        </Link>
        <div className="nav">
          {links.map((link) => {
            const active = isCurrent(link.slug, pathname);
            return (
              <Link
                key={link.slug}
                className={`nav-link${active ? " active" : ""}`}
                href={routePath(link.slug)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
