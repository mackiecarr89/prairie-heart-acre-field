import { contrast, mustHex, onColor, toHex } from "@/lib/color";
import { VSCODE_COLORS } from "@/data/vscode-colors";
import {
  KATE_EDITOR_COLORS,
  KATE_STYLES,
  OMIT_UNLESS_PINNED,
  SEMANTIC,
  TEXTMATE,
  type KateStyleName,
  type RoleId,
  type SemanticRule,
  type TextmateRule,
} from "@/lib/theme/catalog";
import { kateStyleForRole, makePalette, paintColor, paintKateEditor, type Palette } from "@/lib/theme/paint";
import { isHc, fontStyleOf, type Appearance, type ExtraTextmate, type Style } from "@/lib/theme/types";

export type ThemeState = {
  name: string;
  appearance: Appearance;
  bg: string;
  fg: string;
  accent: string;
  accent2: string;
  roles: Record<RoleId, Style>;
  colorOverrides: Record<string, string>;
  tokenOverrides: Record<string, Partial<Style>>;
  semanticOverrides: Record<string, Partial<Style>>;
  kateStyleOverrides: Record<string, Partial<Style>>;
  kateColorOverrides: Record<string, string>;
  extraTextmate: ExtraTextmate[];
};

export type ResolvedToken = {
  id: string;
  name: string;
  scopes: string[];
  role: RoleId;
  style: Style;
  pinned: boolean;
  source: TextmateRule;
};

export type ResolvedSemantic = {
  rule: SemanticRule;
  style: Style;
  pinned: boolean;
};

export type ResolvedKateStyle = {
  name: KateStyleName;
  desc: string;
  style: Style;
  selected: string;
  pinned: boolean;
};

export type BuiltTheme = {
  palette: Palette;
  colors: Record<string, string>;
  colorPinned: Record<string, boolean>;
  tokens: ResolvedToken[];
  semantic: ResolvedSemantic[];
  kateStyles: ResolvedKateStyle[];
  kateColors: Record<string, string>;
  kateColorPinned: Record<string, boolean>;
};

function mergeStyle(base: Style, over?: Partial<Style>): Style {
  if (!over) return base;
  return {
    color: over.color ?? base.color,
    bold: over.bold ?? base.bold,
    italic: over.italic ?? base.italic,
    underline: over.underline ?? base.underline,
    strike: over.strike ?? base.strike,
    background: over.background !== undefined ? over.background : base.background,
  };
}

function selectedInk(color: string, selection: string, fg: string): string {
  const ink = mustHex(color);
  const sel = mustHex(selection);
  if (contrast({ ...ink, a: 1 }, sel) >= 3) return toHex({ ...ink, a: 1 });
  const base = mustHex(fg);
  if (contrast(base, sel) >= 3) return toHex(base);
  return toHex(onColor(sel));
}

export function buildTheme(state: ThemeState): BuiltTheme {
  const palette = makePalette(state.appearance, state.bg, state.fg, state.accent, state.accent2, state.roles);
  const colors: Record<string, string> = {};
  const colorPinned: Record<string, boolean> = {};
  for (const color of VSCODE_COLORS) {
    const pinned = state.colorOverrides[color.id] !== undefined;
    colorPinned[color.id] = pinned;
    colors[color.id] = pinned ? state.colorOverrides[color.id]! : paintColor(color.id, palette);
  }

  const tokens: ResolvedToken[] = TEXTMATE.map((rule) => {
    const roleStyle = state.roles[rule.role];
    const base = mergeStyle(roleStyle, rule.flags);
    const over = state.tokenOverrides[rule.id];
    return {
      id: rule.id,
      name: rule.name,
      scopes: rule.scopes,
      role: rule.role,
      style: mergeStyle(base, over),
      pinned: over !== undefined && Object.keys(over).length > 0,
      source: rule,
    };
  });

  const semantic: ResolvedSemantic[] = SEMANTIC.map((rule) => {
    const base = mergeStyle(state.roles[rule.role], rule.flags);
    const over = state.semanticOverrides[rule.id];
    return { rule, style: mergeStyle(base, over), pinned: over !== undefined && Object.keys(over).length > 0 };
  });

  const derivedKate = paintKateEditor(palette);
  const kateColors: Record<string, string> = {};
  const kateColorPinned: Record<string, boolean> = {};
  for (const color of KATE_EDITOR_COLORS) {
    const pinned = state.kateColorOverrides[color.id] !== undefined;
    kateColorPinned[color.id] = pinned;
    kateColors[color.id] = pinned ? state.kateColorOverrides[color.id]! : derivedKate[color.id]!;
  }

  const selection = kateColors.TextSelection ?? "#333333";
  const kateStyles: ResolvedKateStyle[] = KATE_STYLES.map(([name, desc]) => {
    const mapped = kateStyleForRole(name, palette);
    const base = mergeStyle(state.roles[mapped.role], mapped.flags);
    const over = state.kateStyleOverrides[name];
    const style = mergeStyle(base, over);
    return {
      name,
      desc,
      style,
      selected: selectedInk(style.color, selection, state.fg),
      pinned: over !== undefined && Object.keys(over).length > 0,
    };
  });

  return { palette, colors, colorPinned, tokens, semantic, kateStyles, kateColors, kateColorPinned };
}

export function exportedWorkbench(theme: BuiltTheme, appearance: Appearance, overrides: Record<string, string>): Record<string, string> {
  const hc = isHc(appearance);
  const out: Record<string, string> = {};
  for (const [id, value] of Object.entries(theme.colors)) {
    if (OMIT_UNLESS_PINNED.has(id) && overrides[id] === undefined && !hc) continue;
    out[id] = value;
  }
  return out;
}

export function tokenSettings(style: Style): { foreground: string; fontStyle?: string; background?: string } {
  const fontStyle = fontStyleOf(style);
  return {
    foreground: style.color,
    ...(fontStyle ? { fontStyle } : {}),
    ...(style.background ? { background: style.background } : {}),
  };
}
