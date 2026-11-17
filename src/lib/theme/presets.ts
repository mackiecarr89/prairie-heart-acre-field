import { ensureContrast, hsl, mustHex, rgbToHsl, toHex } from "@/lib/color";
import { ROLE_IDS, styleFrom, type RoleId } from "@/lib/theme/catalog";
import { isDark, type Appearance, type Style } from "@/lib/theme/types";

export type Preset = {
  id: string;
  name: string;
  blurb: string;
  appearance: Appearance;
  bg: string;
  fg: string;
  accent: string;
  accent2: string;
  roles: Record<RoleId, string>;
};

function preset(
  id: string,
  name: string,
  blurb: string,
  appearance: Appearance,
  bg: string,
  fg: string,
  accent: string,
  accent2: string,
  roles: Record<RoleId, string>,
): Preset {
  return { id, name, blurb, appearance, bg, fg, accent, accent2, roles };
}

const harborRoles: Record<RoleId, string> = {
  text: "#d7e2e4",
  comment: "#7d8b90",
  doc: "#93aaa4",
  keyword: "#e0a15a",
  control: "#f0b56a",
  operator: "#c5d4d6",
  string: "#e7c07b",
  verbatim: "#f0d7a8",
  char: "#e7c07b",
  escape: "#f3ddb0",
  regexp: "#e08b7a",
  number: "#d7a0d4",
  constant: "#7ec8c3",
  function: "#8ec8f0",
  method: "#b5daf6",
  type: "#8fd0b4",
  namespace: "#a3c48e",
  variable: "#d7e2e4",
  parameter: "#c5d5ea",
  property: "#c9ddd8",
  tag: "#e0a15a",
  attribute: "#8ec8f0",
  punctuation: "#8ea0a4",
  preprocessor: "#8fd0b4",
  import: "#e0a15a",
  annotation: "#d7a0d4",
  label: "#f0b56a",
  invalid: "#ff8d7a",
  warning: "#f0b56a",
  info: "#8ec8f0",
  inserted: "#8fd0b4",
  deleted: "#ff8d7a",
  changed: "#8ec8f0",
  heading: "#e0a15a",
  emphasis: "#d7a0d4",
};

const daybookRoles: Record<RoleId, string> = {
  text: "#2c2824",
  comment: "#8a7568",
  doc: "#6d5e52",
  keyword: "#0e6e6a",
  control: "#0a5c6e",
  operator: "#5c534c",
  string: "#a14b22",
  verbatim: "#8a3e28",
  char: "#a14b22",
  escape: "#b86a12",
  regexp: "#a33b4a",
  number: "#6d4b98",
  constant: "#0e6e6a",
  function: "#1d4e89",
  method: "#245a96",
  type: "#2a6b45",
  namespace: "#3d6b32",
  variable: "#2c2824",
  parameter: "#3d5270",
  property: "#3e534c",
  tag: "#0e6e6a",
  attribute: "#1d4e89",
  punctuation: "#8a7b70",
  preprocessor: "#2a6b45",
  import: "#0e6e6a",
  annotation: "#6d4b98",
  label: "#a14b22",
  invalid: "#b4232c",
  warning: "#8a5a00",
  info: "#1d4e89",
  inserted: "#1d6b3a",
  deleted: "#b4232c",
  changed: "#1d4e89",
  heading: "#0e6e6a",
  emphasis: "#6d4b98",
};

const signalRoles: Record<RoleId, string> = {
  text: "#e8e6d6",
  comment: "#7d846f",
  doc: "#a3aa90",
  keyword: "#d6f25c",
  control: "#e4f58a",
  operator: "#c9cbb8",
  string: "#ffb086",
  verbatim: "#ffc7a8",
  char: "#ffb086",
  escape: "#ffe0a8",
  regexp: "#ff8f8a",
  number: "#8fd0ff",
  constant: "#7ddeb4",
  function: "#f4f0a4",
  method: "#fff4c2",
  type: "#7ddeb4",
  namespace: "#b7d98a",
  variable: "#e8e6d6",
  parameter: "#d5d2ea",
  property: "#d7e2c8",
  tag: "#d6f25c",
  attribute: "#8fd0ff",
  punctuation: "#8b907c",
  preprocessor: "#7ddeb4",
  import: "#d6f25c",
  annotation: "#ffb086",
  label: "#e4f58a",
  invalid: "#ff7d78",
  warning: "#ffc45a",
  info: "#8fd0ff",
  inserted: "#7ddeb4",
  deleted: "#ff7d78",
  changed: "#8fd0ff",
  heading: "#d6f25c",
  emphasis: "#ffb086",
};

const nightpressRoles: Record<RoleId, string> = {
  text: "#f0e9df",
  comment: "#8d847c",
  doc: "#b3a59a",
  keyword: "#ff5d3a",
  control: "#ff7a5c",
  operator: "#d9cfc4",
  string: "#f0c27a",
  verbatim: "#f6d7a4",
  char: "#f0c27a",
  escape: "#ffe1a8",
  regexp: "#ff8f7a",
  number: "#c6e29a",
  constant: "#9ec1ff",
  function: "#9ec1ff",
  method: "#c2d6ff",
  type: "#e7a0c4",
  namespace: "#d7b48a",
  variable: "#f0e9df",
  parameter: "#e7c8d4",
  property: "#e6d3c4",
  tag: "#ff5d3a",
  attribute: "#9ec1ff",
  punctuation: "#9a9088",
  preprocessor: "#e7a0c4",
  import: "#ff5d3a",
  annotation: "#e7a0c4",
  label: "#f0c27a",
  invalid: "#ff6b6b",
  warning: "#f0c27a",
  info: "#9ec1ff",
  inserted: "#c6e29a",
  deleted: "#ff6b6b",
  changed: "#9ec1ff",
  heading: "#ff5d3a",
  emphasis: "#e7a0c4",
};

const quartzRoles: Record<RoleId, string> = {
  text: "#1c2430",
  comment: "#6d7785",
  doc: "#4e5968",
  keyword: "#2457d6",
  control: "#1d4cb8",
  operator: "#3d4754",
  string: "#a14b28",
  verbatim: "#8a3f24",
  char: "#a14b28",
  escape: "#a16216",
  regexp: "#b4234a",
  number: "#6a3f98",
  constant: "#0f6e62",
  function: "#1d4cb8",
  method: "#2a5f86",
  type: "#0f6e62",
  namespace: "#3d6b32",
  variable: "#1c2430",
  parameter: "#3a4d68",
  property: "#2c4a44",
  tag: "#2457d6",
  attribute: "#1d4cb8",
  punctuation: "#7a8492",
  preprocessor: "#0f6e62",
  import: "#2457d6",
  annotation: "#6a3f98",
  label: "#a14b28",
  invalid: "#c4232b",
  warning: "#8a5a00",
  info: "#2457d6",
  inserted: "#157a45",
  deleted: "#c4232b",
  changed: "#2457d6",
  heading: "#2457d6",
  emphasis: "#6a3f98",
};

const kelpRoles: Record<RoleId, string> = {
  text: "#dce8e2",
  comment: "#7d8f88",
  doc: "#9aafa6",
  keyword: "#3dbe9a",
  control: "#6ed4b4",
  operator: "#c5d4cc",
  string: "#e2b15a",
  verbatim: "#f0cb8a",
  char: "#e2b15a",
  escape: "#f3d7a0",
  regexp: "#e08a78",
  number: "#d7a4cf",
  constant: "#8fd0e0",
  function: "#9ad7c4",
  method: "#c6efe2",
  type: "#8fd0e0",
  namespace: "#b7d48a",
  variable: "#dce8e2",
  parameter: "#c9ddd4",
  property: "#d5e4c8",
  tag: "#3dbe9a",
  attribute: "#8fd0e0",
  punctuation: "#88a099",
  preprocessor: "#8fd0e0",
  import: "#3dbe9a",
  annotation: "#d7a4cf",
  label: "#e2b15a",
  invalid: "#ff8d82",
  warning: "#e2b15a",
  info: "#8fd0e0",
  inserted: "#3dbe9a",
  deleted: "#ff8d82",
  changed: "#8fd0e0",
  heading: "#3dbe9a",
  emphasis: "#d7a4cf",
};

export const PRESETS: Preset[] = [
  preset("harbor", "Harbor", "Slate water, brass fittings", "dark", "#1b2428", "#d7e2e4", "#e0a15a", "#7ec8c3", harborRoles),
  preset("daybook", "Daybook", "Warm paper, teal ink", "light", "#f4efe6", "#2c2824", "#0e6e6a", "#a14b22", daybookRoles),
  preset("signal", "Signal", "Night instrument, chartreuse", "dark", "#121410", "#e8e6d6", "#d6f25c", "#ffb086", signalRoles),
  preset("nightpress", "Nightpress", "Ink black, newsprint red", "dark", "#161417", "#f0e9df", "#ff5d3a", "#f0c27a", nightpressRoles),
  preset("quartz", "Quartz", "Cool daylight, cobalt", "light", "#f4f6f8", "#1c2430", "#2457d6", "#a14b28", quartzRoles),
  preset("kelp", "Kelp", "Sea glass on black water", "dark", "#101816", "#dce8e2", "#3dbe9a", "#e2b15a", kelpRoles),
];

export function rolesFromColors(colors: Record<RoleId, string>): Record<RoleId, Style> {
  const out = {} as Record<RoleId, Style>;
  for (const id of ROLE_IDS) out[id] = styleFrom(id, colors[id]);
  return out;
}

export type GeneratedPalette = {
  bg: string;
  fg: string;
  accent: string;
  accent2: string;
  roles: Record<RoleId, string>;
};

/** Build surfaces and syntax roles from one seed color. Same seed and appearance always match. */
export function paletteFromSeed(seed: string, appearance: Appearance): GeneratedPalette {
  const dark = isDark(appearance);
  const seedC = mustHex(seed);
  const { h, s } = rgbToHsl(seedC);
  const punch = Math.max(s, 0.22);
  const bg = toHex(hsl((h + 200) % 360, dark ? 12 + punch * 8 : 8 + punch * 8, dark ? 10 : 96));
  const bgC = mustHex(bg);
  const fg = toHex(ensureContrast(hsl((h + 200) % 360, 10, dark ? 92 : 14), bgC, 7));
  const accent = toHex(ensureContrast({ ...seedC, a: 1 }, bgC, 3));
  const accent2 = toHex(
    ensureContrast(hsl((h + 38) % 360, Math.min(78, 36 + punch * 48), dark ? 68 : 38), bgC, 3),
  );
  const ink = (offset: number, sat: number, ld: number, ll: number, min = 4.5) =>
    toHex(ensureContrast(hsl((h + offset) % 360, sat * punch, dark ? ld : ll), bgC, min));
  const roles: Record<RoleId, string> = {
    text: fg,
    comment: ink(200, 12, 52, 42, 3.4),
    doc: ink(190, 16, 64, 36, 4),
    keyword: accent,
    control: ink(18, 72, 68, 38),
    operator: ink(200, 10, 78, 32, 4.5),
    string: accent2,
    verbatim: ink(42, 58, 74, 36),
    char: accent2,
    escape: ink(48, 70, 76, 38),
    regexp: ink(8, 68, 68, 40),
    number: ink(300, 42, 72, 40),
    constant: ink(170, 46, 62, 32),
    function: ink(205, 62, 70, 38),
    method: ink(205, 48, 78, 34),
    type: ink(155, 42, 62, 32),
    namespace: ink(120, 36, 64, 32),
    variable: fg,
    parameter: ink(230, 28, 76, 34),
    property: ink(140, 22, 76, 32),
    tag: accent,
    attribute: ink(205, 55, 70, 38),
    punctuation: ink(200, 10, 58, 46, 3.2),
    preprocessor: ink(155, 40, 62, 32),
    import: accent,
    annotation: ink(300, 40, 72, 40),
    label: ink(28, 70, 66, 38),
    invalid: ink(4, 78, 68, 42),
    warning: ink(38, 80, 64, 36),
    info: ink(205, 60, 68, 40),
    inserted: ink(150, 48, 60, 32),
    deleted: ink(4, 74, 68, 42),
    changed: ink(210, 55, 68, 40),
    heading: accent,
    emphasis: ink(320, 36, 72, 40),
  };
  return { bg, fg, accent, accent2, roles };
}

export function shufflePalette(appearance: Appearance): GeneratedPalette {
  const dark = isDark(appearance);
  const hue = Math.random() * 360;
  const seed = toHex(hsl(hue, 62 + Math.random() * 28, dark ? 58 + Math.random() * 16 : 32 + Math.random() * 12));
  return paletteFromSeed(seed, appearance);
}

export function flipHex(input: string): string {
  const c = mustHex(input);
  const { h, s, l } = rgbToHsl(c);
  return toHex(hsl(h, s * 100, (1 - l) * 100, c.a));
}
