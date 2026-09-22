export const SITE_TITLE = "Gary Hsu";
export const SITE_TAGLINE = "Practical software notes, technical thinking, and lessons from building.";
export const SITE_DESCRIPTION =
  "A blog-first personal website focused on practical technical writing, engineering tradeoffs, and a compact profile.";
export const SITE_URL = "https://garyhsu123.github.io";

export function withBase(path = "/") {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "");
  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function absoluteUrl(path = "/") {
  return new URL(withBase(path), SITE_URL).toString();
}
