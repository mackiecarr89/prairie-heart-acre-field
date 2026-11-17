export type Appearance = "dark" | "light" | "hc" | "hcLight";

export type Style = {
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  background?: string;
};

export type ExtraTextmate = {
  name?: string;
  scopes: string[];
  foreground?: string;
  background?: string;
  fontStyle?: string;
};

export function isDark(appearance: Appearance): boolean {
  return appearance === "dark" || appearance === "hc";
}

export function isHc(appearance: Appearance): boolean {
  return appearance === "hc" || appearance === "hcLight";
}

export function fontStyleOf(style: Pick<Style, "bold" | "italic" | "underline" | "strike">): string {
  const parts: string[] = [];
  if (style.italic) parts.push("italic");
  if (style.bold) parts.push("bold");
  if (style.underline) parts.push("underline");
  if (style.strike) parts.push("strikethrough");
  return parts.join(" ");
}

export function slugify(name: string): string {
  const s = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s || "theme";
}
