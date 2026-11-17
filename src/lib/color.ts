export type RGBA = { r: number; g: number; b: number; a: number };

const HEX = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function parseHex(input: string): RGBA | null {
  let s = input.trim();
  if (!s) return null;
  if (!s.startsWith("#")) s = `#${s}`;
  if (!HEX.test(s)) return null;
  let h = s.slice(1);
  if (h.length <= 4) h = [...h].map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return { r, g, b, a };
}

export function mustHex(input: string, fallback = "#888888"): RGBA {
  return parseHex(input) ?? parseHex(fallback)!;
}

export function rgb(r: number, g: number, b: number, a = 1): RGBA {
  return { r, g, b, a };
}

export function toHex({ r, g, b, a }: RGBA): string {
  const c = (n: number) =>
    Math.round(clamp(n, 0, 255)).toString(16).padStart(2, "0");
  const base = `#${c(r)}${c(g)}${c(b)}`;
  if (a >= 0.999) return base;
  return base + c(a * 255);
}

export function withAlpha(c: RGBA, a: number): RGBA {
  return { ...c, a: clamp(a, 0, 1) };
}

export function mix(a: RGBA, b: RGBA, t: number): RGBA {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
    a: a.a + (b.a - a.a) * t,
  };
}

export function flatten(c: RGBA, bg: RGBA): RGBA {
  const a = clamp(c.a, 0, 1);
  return {
    r: c.r * a + bg.r * (1 - a),
    g: c.g * a + bg.g * (1 - a),
    b: c.b * a + bg.b * (1 - a),
    a: 1,
  };
}

export function luminance(c: RGBA): number {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
}

export function contrast(a: RGBA, b: RGBA): number {
  const paintA = a.a < 0.999 ? flatten(a, b) : a;
  const L1 = luminance(paintA);
  const L2 = luminance(b);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

export function rgbToHsl(c: RGBA): { h: number; s: number; l: number } {
  const r = c.r / 255;
  const g = c.g / 255;
  const b = c.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h *= 60;
  }
  return { h, s, l };
}

export function hsl(h: number, s: number, l: number, a = 1): RGBA {
  const hh = ((h % 360) + 360) % 360;
  const ss = clamp(s, 0, 100) / 100;
  const ll = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * ll - 1)) * ss;
  const x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
  const m = ll - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hh < 60) [r, g, b] = [c, x, 0];
  else if (hh < 120) [r, g, b] = [x, c, 0];
  else if (hh < 180) [r, g, b] = [0, c, x];
  else if (hh < 240) [r, g, b] = [0, x, c];
  else if (hh < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255, a };
}

export function onColor(bg: RGBA): RGBA {
  return luminance(bg) > 0.42 ? rgb(22, 24, 18) : rgb(247, 244, 234);
}

export function flipLightness(c: RGBA): RGBA {
  const { h, s, l } = rgbToHsl(c);
  return hsl(h, s * 100, (1 - l) * 100, c.a);
}

export function ensureContrast(fg: RGBA, bg: RGBA, min = 4.5): RGBA {
  if (contrast(fg, bg) >= min) return fg;
  const { h, s } = rgbToHsl(fg);
  const dir = luminance(bg) > 0.45 ? -1 : 1;
  let l = rgbToHsl(fg).l;
  let best = fg;
  for (let i = 0; i < 28; i++) {
    l = clamp(l + dir * 0.03, 0.02, 0.98);
    best = hsl(h, Math.max(s * 100, 18), l * 100, fg.a);
    if (contrast(best, bg) >= min) return best;
  }
  return dir > 0 ? rgb(245, 244, 238, fg.a) : rgb(18, 18, 16, fg.a);
}

export function opaque(input: string): string {
  const c = parseHex(input);
  if (!c) return "#888888";
  return toHex({ ...c, a: 1 });
}

export function alphaOf(input: string): number {
  return parseHex(input)?.a ?? 1;
}

export function setAlpha(input: string, a: number): string {
  const c = parseHex(input);
  if (!c) return input;
  return toHex(withAlpha(c, a));
}
