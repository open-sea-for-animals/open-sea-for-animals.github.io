"use client";

import { useEffect, useState } from "react";

// Keep each Adsterra GET CODE unchanged inside its own document. The vendor's
// invoke.js can use document.write without touching the Next.js page.
const desktopCode = `<script>
  atOptions = {
    'key' : '173c6edc4592e201c6bf5bc67f3dc142',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/173c6edc4592e201c6bf5bc67f3dc142/invoke.js"></script>`;

const mobileCode = `<script>
  atOptions = {
    'key' : 'ed2e66f836359ab410d0d8e4de37b5c4',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/ed2e66f836359ab410d0d8e4de37b5c4/invoke.js"></script>`;

export function ResponsiveBanner() {
  const [size, setSize] = useState<"mobile" | "desktop" | null>(null);

  useEffect(() => {
    // Decide once per mount, so resizing cannot execute both GET CODEs for one visit.
    const frame = window.requestAnimationFrame(() => {
      setSize(window.innerWidth < 768 ? "mobile" : "desktop");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="ad-banner" aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <div className="ad-banner-space">
        {size ? (
          <iframe
            className="ad-banner-frame"
            title="Advertisement"
            width={size === "mobile" ? 320 : 728}
            height={size === "mobile" ? 50 : 90}
            srcDoc={size === "mobile" ? mobileCode : desktopCode}
            scrolling="no"
          />
        ) : null}
      </div>
    </div>
  );
}
