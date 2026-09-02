export const SITE_TITLE = "Gary Hsu";
export const SITE_TAGLINE = "Practical software notes, technical thinking, and lessons from building.";
export const SITE_DESCRIPTION =
  "A blog-first personal website focused on practical technical writing, engineering tradeoffs, and a compact profile.";

export function withBase(path = "/") {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "");
  return normalizedPath ? `${base}${normalizedPath}` : base;
}

export function absoluteUrl(path = "/") {
  return new URL(withBase(path), "https://yourusername.github.io").toString();
}
