const FONT_FILES: Array<{ family: string; weight: number; file: string }> = [
  { family: "Inter", weight: 400, file: "inter-latin-400-normal.woff2" },
  { family: "Inter", weight: 600, file: "inter-latin-600-normal.woff2" },
  { family: "Inter", weight: 700, file: "inter-latin-700-normal.woff2" },
  { family: "Space Grotesk", weight: 500, file: "space-grotesk-latin-500-normal.woff2" },
  { family: "Space Grotesk", weight: 700, file: "space-grotesk-latin-700-normal.woff2" },
];

export function fontFaceCss(basePath = "") {
  const prefix = basePath.replace(/\/$/, "");
  return FONT_FILES.map(
    (face) =>
      `@font-face{font-family:"${face.family}";src:url("${prefix}/fonts/${face.file}") format("woff2");font-weight:${face.weight};font-style:normal;font-display:swap;}`,
  ).join("");
}
