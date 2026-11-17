import {
  flatten,
  hsl,
  mix,
  mustHex,
  onColor,
  rgb,
  rgbToHsl,
  toHex,
  withAlpha,
  type RGBA,
} from "@/lib/color";
import {
  KATE_EDITOR_COLORS,
  KATE_STYLES,
  type KateStyleName,
  type RoleId,
} from "@/lib/theme/catalog";
import { isDark, isHc, type Appearance, type Style } from "@/lib/theme/types";

export type Palette = {
  dark: boolean;
  hc: boolean;
  bg: RGBA;
  fg: RGBA;
  accent: RGBA;
  accent2: RGBA;
  muted: RGBA;
  faint: RGBA;
  border: RGBA;
  shell: RGBA;
  sunken: RGBA;
  raised: RGBA;
  overlay: RGBA;
  widget: RGBA;
  hover: RGBA;
  onAccent: RGBA;
  onAccent2: RGBA;
  selection: RGBA;
  find: RGBA;
  findSoft: RGBA;
  error: RGBA;
  warning: RGBA;
  success: RGBA;
  info: RGBA;
  inactiveFg: RGBA;
  disabledFg: RGBA;
  black: RGBA;
  white: RGBA;
  role: Record<RoleId, Style>;
  ansi: Record<string, string>;
};

const BLACK = rgb(0, 0, 0);
const WHITE = rgb(255, 255, 255);

export function makePalette(
  appearance: Appearance,
  bgHex: string,
  fgHex: string,
  accentHex: string,
  accent2Hex: string,
  roles: Record<RoleId, Style>,
): Palette {
  const dark = isDark(appearance);
  const hc = isHc(appearance);
  const bg = mustHex(bgHex);
  const fg = mustHex(fgHex);
  const accent = mustHex(accentHex);
  const accent2 = mustHex(accent2Hex);
  const ink = dark ? BLACK : rgb(30, 32, 28);
  const paper = dark ? WHITE : rgb(255, 255, 255);
  const shell = dark ? mix(bg, BLACK, 0.42) : mix(bg, BLACK, 0.055);
  const sunken = dark ? mix(bg, BLACK, 0.22) : mix(bg, BLACK, 0.035);
  const raised = dark ? mix(bg, WHITE, 0.075) : mix(bg, WHITE, 0.55);
  const overlay = dark ? mix(bg, WHITE, 0.09) : mix(bg, BLACK, 0.045);
  const widget = dark ? mix(bg, WHITE, 0.055) : mix(bg, WHITE, 0.72);
  const hover = dark ? mix(bg, WHITE, 0.07) : mix(bg, BLACK, 0.05);
  const border = flatten(withAlpha(fg, hc ? 0.5 : dark ? 0.16 : 0.14), bg);
  const muted = mix(fg, bg, 0.48);
  const faint = mix(fg, bg, 0.72);
  const inactiveFg = mix(fg, bg, 0.4);
  const disabledFg = mix(fg, bg, 0.62);
  const onAccent = onColor(accent);
  const onAccent2 = onColor(accent2);
  const selection = withAlpha(accent, hc ? 0.62 : dark ? 0.34 : 0.28);
  const find = withAlpha(accent2, hc ? 0.7 : 0.55);
  const findSoft = withAlpha(accent2, hc ? 0.4 : 0.28);
  const hue = rgbToHsl(accent).h;
  const error = hsl(4, dark ? 78 : 62, dark ? 68 : 40);
  const warning = hsl(38, dark ? 85 : 70, dark ? 64 : 36);
  const success = hsl(152, dark ? 52 : 48, dark ? 58 : 32);
  const info = hsl(hue, 62, dark ? 68 : 40);

  const ansiBase: Record<string, RGBA> = {
    Black: dark ? mix(bg, BLACK, 0.35) : rgb(28, 30, 26),
    Red: error,
    Green: success,
    Yellow: warning,
    Blue: hsl(hue, 58, dark ? 66 : 42),
    Magenta: hsl((hue + 300) % 360, 52, dark ? 70 : 42),
    Cyan: hsl(178, 48, dark ? 62 : 34),
    White: dark ? mix(fg, WHITE, 0.15) : mix(fg, BLACK, 0.15),
  };
  const ansi: Record<string, string> = {};
  for (const [name, color] of Object.entries(ansiBase)) {
    ansi[`ansi${name}`] = toHex(color);
    const bright = dark
      ? mix(color, WHITE, 0.28)
      : mix(color, BLACK, 0.12);
    ansi[`ansiBright${name}`] = toHex(name === "Black" ? muted : bright);
  }

  return {
    dark,
    hc,
    bg,
    fg,
    accent,
    accent2,
    muted,
    faint,
    border,
    shell,
    sunken,
    raised,
    overlay,
    widget,
    hover,
    onAccent,
    onAccent2,
    selection,
    find,
    findSoft,
    error,
    warning,
    success,
    info,
    inactiveFg,
    disabledFg,
    black: BLACK,
    white: WHITE,
    role: roles,
    ansi,
  };
}

function hex(c: RGBA): string {
  return toHex(c);
}

function a(c: RGBA, alpha: number, onto?: RGBA): string {
  const next = withAlpha(c, alpha);
  return onto ? hex(flatten(next, onto)) : hex(next);
}

function toneOf(id: string): "error" | "warning" | "success" | "info" | "neutral" {
  const s = id.toLowerCase();
  if (/error|invalid|deleted|removed|conflict|failed|errored|uncovered|deletions|stopforeground|disconnect/.test(s)) {
    return "error";
  }
  if (/warning|deprecated/.test(s)) return "warning";
  if (/success|added|inserted|passed|untracked|addition|savedline|incoming/.test(s)) return "success";
  if (/infoforeground|infobackground|infoborder|infohighlight|\.info|hintforeground|hintborder/.test(s)) {
    return "info";
  }
  return "neutral";
}

function toneColor(p: Palette, tone: ReturnType<typeof toneOf>): RGBA {
  if (tone === "error") return p.error;
  if (tone === "warning") return p.warning;
  if (tone === "success") return p.success;
  if (tone === "info") return p.info;
  return p.fg;
}

function symbolColor(leaf: string, p: Palette): string {
  const map: Record<string, RoleId> = {
    arrayForeground: "variable",
    booleanForeground: "constant",
    classForeground: "type",
    colorForeground: "string",
    constantForeground: "constant",
    constructorForeground: "method",
    enumeratorForeground: "type",
    enumeratorMemberForeground: "constant",
    eventForeground: "annotation",
    fieldForeground: "property",
    fileForeground: "text",
    folderForeground: "keyword",
    functionForeground: "function",
    interfaceForeground: "type",
    keyForeground: "property",
    keywordForeground: "keyword",
    methodForeground: "method",
    moduleForeground: "namespace",
    namespaceForeground: "namespace",
    nullForeground: "constant",
    numberForeground: "number",
    objectForeground: "variable",
    operatorForeground: "operator",
    packageForeground: "namespace",
    propertyForeground: "property",
    referenceForeground: "variable",
    snippetForeground: "string",
    stringForeground: "string",
    structForeground: "type",
    textForeground: "text",
    typeParameterForeground: "type",
    unitForeground: "number",
    variableForeground: "variable",
  };
  const role = map[leaf];
  if (role) return p.role[role].color;
  return hex(p.fg);
}

function chartColor(leaf: string, p: Palette): string {
  const hue = rgbToHsl(p.accent).h;
  const table: Record<string, RGBA> = {
    red: p.error,
    orange: hsl(28, 78, p.dark ? 62 : 42),
    yellow: p.warning,
    green: p.success,
    blue: hsl(hue, 60, p.dark ? 64 : 42),
    purple: hsl((hue + 70) % 360, 46, p.dark ? 68 : 40),
    foreground: p.fg,
    lines: p.border,
    line: p.accent,
    axis: p.muted,
    guide: p.faint,
  };
  return hex(table[leaf] ?? p.accent);
}

function terminalSymbol(leaf: string, p: Palette): string {
  if (/error|deleted/.test(leaf)) return hex(p.error);
  if (/success|done/.test(leaf)) return hex(p.success);
  if (/branch|commit|tag|remote/.test(leaf)) return hex(p.accent);
  if (/method/.test(leaf)) return p.role.method.color;
  if (/folder|file|alias|argument|option|flag/.test(leaf)) return p.role.variable.color;
  if (/stash|pull/.test(leaf)) return p.role.constant.color;
  return hex(p.fg);
}

function debugIcon(leaf: string, p: Palette): string {
  if (/disabled|unverified/.test(leaf)) return hex(p.muted);
  if (/breakpointCurrent|pause/.test(leaf)) return hex(p.warning);
  if (/breakpoint|stop|disconnect/.test(leaf)) return hex(p.error);
  if (/start|continue/.test(leaf)) return hex(p.success);
  if (/restart|step/.test(leaf)) return hex(p.accent);
  return hex(p.fg);
}

function gitColor(id: string, p: Palette): string {
  const s = id.toLowerCase();
  if (/ignored/.test(s)) return hex(p.faint);
  if (/conflict|deleted|submodule/.test(s)) return /submodule/.test(s) ? hex(p.accent) : hex(p.error);
  if (/added|untracked|renamed/.test(s)) return /renamed/.test(s) ? hex(p.info) : hex(p.success);
  if (/modified|stage/.test(s)) return hex(p.warning);
  if (/addition/.test(s)) return hex(p.success);
  if (/deletion/.test(s)) return hex(p.error);
  return hex(p.fg);
}

export function paintColor(id: string, p: Palette): string {
  const leaf = id.split(".").pop() ?? id;
  const s = id.toLowerCase();

  if (id.startsWith("terminal.ansi") || /^ansi(Bright)?(Black|Red|Green|Yellow|Blue|Magenta|Cyan|White)$/.test(leaf)) {
    return p.ansi[leaf] ?? hex(p.fg);
  }
  if (id.startsWith("symbolIcon.")) return symbolColor(leaf, p);
  if (id.startsWith("charts.") || id.startsWith("chart.")) return chartColor(leaf, p);
  if (id.startsWith("debugIcon.")) return debugIcon(leaf, p);
  if (id.startsWith("gitDecoration.") || id.includes("historyItemHoverAdditions") || id.includes("historyItemHoverDeletions") || id.includes("historyItem")) {
    if (id.startsWith("gitDecoration.") || /Additions|Deletions/.test(id)) return gitColor(id, p);
  }
  if (id.startsWith("terminalSymbolIcon.")) return terminalSymbol(leaf, p);
  if (id.startsWith("debugTokenExpression.")) {
    if (leaf === "string") return p.role.string.color;
    if (leaf === "number") return p.role.number.color;
    if (leaf === "boolean") return p.role.constant.color;
    if (leaf === "error") return hex(p.error);
    if (leaf === "type") return p.role.type.color;
    if (leaf === "name") return p.role.variable.color;
    return hex(p.fg);
  }

  if (id === "contrastBorder" || id === "contrastActiveBorder") {
    return p.hc ? hex(p.fg) : "#00000000";
  }
  if (id === "focusBorder" || id === "sash.hoverBorder") return hex(p.accent);
  if (id === "foreground") return hex(p.fg);
  if (id === "disabledForeground") return hex(p.disabledFg);
  if (id === "descriptionForeground") return hex(p.muted);
  if (id === "errorForeground") return hex(p.error);
  if (id === "icon.foreground") return hex(p.muted);
  if (id === "widget.border") return hex(p.border);
  if (id === "widget.shadow") return a(BLACK, p.dark ? 0.45 : 0.18);
  if (id === "selection.background") return hex(p.selection);

  if (/shadow$/i.test(leaf)) return a(BLACK, p.dark ? 0.4 : 0.16);

  const tone = toneOf(id);
  const toneInk = toneColor(p, tone);

  if (id.startsWith("editorBracketHighlight.")) {
    if (s.includes("unexpected")) return hex(p.error);
    const n = Number(leaf.replace(/\D/g, "")) || 1;
    const cycle = [p.accent, p.accent2, p.success, p.warning, p.info, p.error];
    return hex(cycle[(n - 1) % cycle.length]!);
  }
  if (id.startsWith("editorBracketPairGuide.")) {
    const n = Number(leaf.replace(/\D/g, "")) || 1;
    return a(p.fg, p.hc ? 0.35 : 0.08 + n * 0.025);
  }
  if (id.startsWith("editorIndentGuide.")) {
    return s.includes("active") ? hex(p.muted) : a(p.fg, p.hc ? 0.45 : 0.14);
  }

  if (id.startsWith("button.")) {
    const secondary = s.includes("secondary");
    const ink = secondary ? p.fg : p.onAccent;
    const fill = secondary ? p.raised : p.accent;
    if (s.includes("separator")) return a(p.onAccent, 0.35);
    if (s.includes("foreground")) return hex(ink);
    if (s.includes("border")) return secondary ? hex(p.border) : hex(mix(fill, p.bg, 0.15));
    if (s.includes("hover")) return hex(mix(fill, p.white, p.dark ? 0.12 : 0.18));
    return hex(fill);
  }

  if (id.startsWith("badge") || id.startsWith("activityBarBadge") || id.startsWith("activityWarningBadge") || id.startsWith("activityErrorBadge") || id.startsWith("panelTitleBadge")) {
    const fill = s.includes("warning") ? p.warning : s.includes("error") ? p.error : p.accent;
    if (s.includes("foreground")) return hex(onColor(fill));
    return hex(fill);
  }

  if (id.startsWith("textLink")) return hex(p.accent);
  if (id.startsWith("textPreformat")) {
    if (s.includes("foreground")) return p.role.string.color;
    if (s.includes("border")) return hex(p.border);
    return hex(p.sunken);
  }
  if (id.startsWith("textBlockQuote")) {
    if (s.includes("border")) return hex(p.accent);
    return hex(p.sunken);
  }
  if (id.startsWith("textSeparator") || id.startsWith("textCodeBlock")) {
    return s.includes("background") ? hex(p.sunken) : hex(p.muted);
  }

  if (id.startsWith("input.") || id.startsWith("dropdown") || id.startsWith("checkbox") || id.startsWith("radio")) {
    if (s.includes("foreground") || s.includes("placeholder")) {
      return s.includes("placeholder") || s.includes("inactive") || s.includes("disabled") ? hex(p.muted) : hex(p.fg);
    }
    if (s.includes("border")) return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
    if (s.includes("hover")) return hex(p.hover);
    return hex(p.widget);
  }

  if (id.startsWith("list.") || id.startsWith("listFilter") || id.startsWith("tree.")) {
    if (s.includes("err")) return hex(p.error);
    if (s.includes("warning")) return hex(p.warning);
    if (s.includes("highlightforeground") || s.includes("filtermatch")) return s.includes("border") ? hex(p.accent) : hex(p.find);
    if (s.includes("invalid")) return hex(p.error);
    if (s.includes("deemphasized")) return hex(p.faint);
    if (s.includes("indent") || s.includes("border") || s.includes("outline") || s.includes("stroke")) {
      return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
    }
    if (s.includes("shadow")) return a(BLACK, 0.35);
    if (s.includes("drop")) return hex(p.selection);
    if (s.includes("foreground") || s.includes("iconforeground")) {
      if (s.includes("activeselection") || (s.includes("focus") && !s.includes("inactive"))) return hex(p.onAccent);
      if (s.includes("inactive")) return hex(p.inactiveFg);
      return hex(p.fg);
    }
    if (s.includes("activeselection") || (s.includes("focusbackground") && !s.includes("inactive"))) return hex(p.accent);
    if (s.includes("inactiveselection") || s.includes("inactivefocus")) return a(p.accent, 0.28, p.sunken);
    if (s.includes("hover")) return hex(p.hover);
    if (s.includes("odd")) return a(p.fg, 0.04, p.bg);
    return hex(p.sunken);
  }

  if (id.startsWith("activityBar") || id.startsWith("activityBarTop") || id.startsWith("modernActivityBar")) {
    if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    if (s.includes("foreground")) {
      if (s.includes("inactive") || s.includes("hover") && s.includes("modern")) return s.includes("active") ? hex(p.fg) : hex(p.inactiveFg);
      if (s.includes("active") || s.includes("hover")) return hex(p.fg);
      return hex(p.inactiveFg);
    }
    if (s.includes("border") || s.includes("dropborder")) {
      return s.includes("active") || s.includes("focus") ? hex(p.accent) : hex(p.border);
    }
    if (s.includes("activebackground") || s.includes("hoverbackground")) return hex(p.overlay);
    if (s.includes("inactive")) return hex(mix(p.shell, BLACK, 0.15));
    return hex(p.shell);
  }

  if (id.startsWith("sideBar") || id.startsWith("auxiliaryBar") || id.startsWith("panel") || id.startsWith("banner")) {
    if (tone !== "neutral" && (s.includes("foreground") || s.includes("border"))) return hex(toneInk);
    if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    if (s.includes("foreground")) return s.includes("inactive") ? hex(p.inactiveFg) : s.includes("title") ? hex(p.fg) : hex(p.fg);
    if (s.includes("border") || s.includes("drop")) return s.includes("active") || s.includes("drop") ? hex(p.accent) : hex(p.border);
    if (s.includes("shadow")) return a(BLACK, 0.35);
    if (s.includes("header") || s.includes("sectionheader")) return hex(p.dark ? mix(p.sunken, BLACK, 0.2) : p.sunken);
    if (id.startsWith("banner")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    return hex(p.sunken);
  }

  if (id.startsWith("titleBar") || id.startsWith("menu") || id.startsWith("menubar") || id.startsWith("commandCenter")) {
    if (s.includes("selection") || s.includes("activebackground")) return hex(p.accent);
    if (s.includes("foreground")) {
      return s.includes("inactive") ? hex(p.inactiveFg) : s.includes("selection") ? hex(p.onAccent) : hex(p.fg);
    }
    if (s.includes("border") || s.includes("separator")) return hex(p.border);
    if (s.includes("inactive")) return hex(mix(p.shell, p.bg, 0.4));
    return hex(id.startsWith("menu") ? p.widget : p.shell);
  }

  if (id.startsWith("tab.") || id.startsWith("modernTab") || id.startsWith("modernEditorTab") || id.startsWith("editorGroup")) {
    if (s.includes("modified")) return hex(p.warning);
    if (s.includes("foreground")) {
      if (s.includes("inactive") || s.includes("unfocused")) return hex(p.inactiveFg);
      return hex(p.fg);
    }
    if (s.includes("bordertop") || s.includes("activeborder") || s.includes("selectedborder")) return hex(p.accent);
    if (s.includes("border") || s.includes("drop")) return s.includes("drag") || s.includes("focus") || s.includes("drop") ? hex(p.accent) : hex(p.border);
    if (s.includes("hover")) return hex(p.hover);
    if (s.includes("inactive") || s.includes("unfocusedinactive") || s.includes("notabs") || s.includes("tabsbackground") || s.includes("empty")) {
      return hex(p.sunken);
    }
    if (s.includes("active") || s.includes("selected")) return hex(p.bg);
    return hex(p.sunken);
  }

  if (id.startsWith("editorGroupHeader") || id === "editorPane.background") {
    if (s.includes("border")) return hex(p.border);
    if (s.includes("notabs") || s.includes("tabs")) return hex(p.sunken);
    return hex(p.bg);
  }
  if (id.startsWith("sideBySideEditor")) return hex(p.border);

  if (id.startsWith("statusBar")) {
    const fill = s.includes("debugging") ? p.info : s.includes("nofolder") ? p.warning : s.includes("error") ? p.error : s.includes("warning") ? p.warning : s.includes("offline") ? p.muted : s.includes("remote") || s.includes("prominent") ? p.accent2 : p.accent;
    if (s.includes("foreground") || s.includes("hoverforeground")) return hex(onColor(fill));
    if (s.includes("border") || s.includes("focus")) return s.includes("focus") ? hex(p.onAccent) : a(onColor(fill), 0.25, fill);
    if (s.includes("hoverbackground") || s.includes("activebackground")) return hex(mix(fill, p.white, 0.14));
    if (s.includes("compact")) return a(p.white, 0.08, fill);
    if (!s.includes("background") && s.includes("item")) return hex(onColor(p.accent));
    return hex(fill);
  }

  if (id.startsWith("terminal.")) {
    if (s.includes("findmatch") && !s.includes("highlight")) return s.includes("border") ? hex(p.accent2) : hex(p.find);
    if (s.includes("findmatchhighlight")) return s.includes("border") ? a(p.accent2, 0.5) : hex(p.findSoft);
    if (s.includes("selection")) return s.includes("foreground") ? hex(p.fg) : hex(p.selection);
    if (s.includes("border") || s.includes("guide")) return hex(p.border);
    if (s.includes("cursor")) return s.includes("background") ? hex(p.bg) : hex(p.accent);
    if (s.includes("initialhint")) return hex(p.muted);
    if (s.includes("hover")) return hex(p.hover);
    if (s.includes("drop")) return hex(p.selection);
    if (s.includes("success")) return hex(p.success);
    if (s.includes("error")) return hex(p.error);
    if (s.includes("foreground")) return hex(p.fg);
    if (s.includes("decoration")) return hex(p.muted);
    return hex(mix(p.bg, BLACK, p.dark ? 0.18 : 0.04));
  }

  if (id.startsWith("terminalCursor")) return s.includes("background") ? hex(p.bg) : hex(p.accent);
  if (id.startsWith("terminalSticky") || id.startsWith("terminalOverview") || id.startsWith("terminalCommand")) {
    if (s.includes("success")) return hex(p.success);
    if (s.includes("error")) return hex(p.error);
    if (s.includes("foreground") || s.includes("cursor")) return hex(p.accent);
    if (s.includes("border") || s.includes("guide")) return hex(p.border);
    return hex(p.sunken);
  }

  if (id.startsWith("minimap") || id.startsWith("editorMinimap") || id.startsWith("minimapGutter") || id.startsWith("minimapSlider")) {
    if (s.includes("error") || s.includes("deleted")) return hex(p.error);
    if (s.includes("warning") || s.includes("modified")) return hex(p.warning);
    if (s.includes("info") || s.includes("added") || s.includes("inserted")) return s.includes("added") || s.includes("inserted") ? hex(p.success) : hex(p.info);
    if (s.includes("find") || s.includes("chat")) return hex(p.find);
    if (s.includes("selection") || s.includes("occurrence")) return hex(p.selection);
    if (s.includes("slider")) return a(p.fg, s.includes("active") ? 0.35 : s.includes("hover") ? 0.24 : 0.14);
    if (s.includes("opacity") || s.includes("foregroundopacity")) return "#00000099";
    return hex(p.bg);
  }

  if (id.startsWith("editorOverviewRuler") || id.startsWith("editorGutter")) {
    if (tone !== "neutral") return hex(toneInk);
    if (s.includes("added")) return hex(p.success);
    if (s.includes("modified")) return hex(p.warning);
    if (s.includes("deleted")) return hex(p.error);
    if (s.includes("bracket") || s.includes("find") || s.includes("selection") || s.includes("word") || s.includes("range")) return hex(p.accent);
    if (s.includes("comment") || s.includes("folding") || s.includes("glyph") || s.includes("itemglyph")) return hex(p.muted);
    if (s.includes("foreground")) return hex(p.muted);
    if (s.includes("border")) return hex(p.border);
    if (s.includes("background") && id.startsWith("editorGutter.background")) return hex(p.bg);
    if (s.includes("background")) return a(p.fg, 0.08, p.bg);
    return hex(p.bg);
  }

  if (id.startsWith("editorLineNumber")) {
    if (s.includes("active")) return hex(p.fg);
    if (s.includes("dimmed")) return hex(p.faint);
    return hex(p.muted);
  }
  if (id.startsWith("editorCursor") || id.startsWith("editorMultiCursor")) {
    return s.includes("background") ? a(p.accent, 0.2, p.bg) : hex(s.includes("secondary") ? p.accent2 : p.accent);
  }
  if (id.startsWith("editorWhitespace") || id.startsWith("editorRuler") || id === "editorUnicodeHighlight.border") {
    return hex(p.faint);
  }

  if (id.startsWith("editor.") || id.startsWith("searchEditor") || id.startsWith("search.") || id.startsWith("editorLink") || id.startsWith("editorUnnecessary") || id.startsWith("editorComments") || id.startsWith("peekView") || id.startsWith("editorWidget") || id.startsWith("editorSuggest") || id.startsWith("editorHover") || id.startsWith("editorMarker") || id.startsWith("editorGhost") || id.startsWith("editorLightBulb") || id.startsWith("editorInlay") || id.startsWith("editorSticky") || id.startsWith("inlineEdit")) {
    if (id === "editor.background" || id === "editorGhostText.background") return id.endsWith("background") && id.startsWith("editorGhost") ? "#00000000" : hex(p.bg);
    if (id === "editor.foreground") return hex(p.fg);
    if (id === "editor.selectionForeground") return hex(p.fg);
    if (s.includes("unnecessary") && s.includes("opacity")) return "#000000c0";
    if (s.includes("foldbackground")) return a(p.accent, 0.12);
    if (s.includes("foldplaceholder")) return hex(p.muted);
    if (s.includes("inlay") || s.includes("ghost")) return s.includes("background") ? a(p.fg, 0.08, p.bg) : hex(p.muted);
    if (s.includes("lightbulb")) return s.includes("auto") ? hex(p.muted) : hex(p.warning);
    if (s.includes("sticky")) return s.includes("border") || s.includes("shadow") ? (s.includes("shadow") ? a(BLACK, 0.25) : hex(p.border)) : hex(p.bg);
    if (tone !== "neutral" && !s.includes("original")) return s.includes("background") ? a(toneInk, 0.18) : s.includes("border") ? hex(toneInk) : hex(toneInk);
    if (s.includes("findmatch") && !s.includes("highlight")) return s.includes("border") ? hex(p.accent2) : s.includes("foreground") ? hex(p.onAccent2) : hex(p.find);
    if (s.includes("find") || s.includes("filtermatch")) return s.includes("border") ? a(p.accent2, 0.7) : s.includes("foreground") ? hex(p.fg) : hex(p.findSoft);
    if (s.includes("selectionhighlight") || s.includes("wordhighlight") || s.includes("symbolhighlight") || s.includes("rangehighlight") || s.includes("hoverhighlight") || s.includes("linked")) {
      return s.includes("border") ? a(p.accent, 0.45) : a(p.accent, s.includes("strong") ? 0.28 : 0.16);
    }
    if (s.includes("selection")) return s.includes("foreground") ? hex(p.fg) : s.includes("inactive") ? a(p.accent, 0.16) : hex(p.selection);
    if (s.includes("linehighlight")) return s.includes("border") ? "#00000000" : a(p.fg, p.dark ? 0.05 : 0.045, p.bg);
    if (s.includes("placeholder") || s.includes("resultsinfo")) return hex(p.muted);
    if (s.includes("link")) return hex(p.accent);
    if (s.includes("bracketmatch")) return s.includes("border") ? hex(p.accent) : a(p.accent, 0.2);
    if (s.includes("widget") || s.includes("suggest") || s.includes("hoverwidget") || s.includes("peek") || s.includes("marker")) {
      if (s.includes("highlight")) return hex(p.accent);
      if (s.includes("foreground")) return s.includes("highlight") || s.includes("selected") || s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
      if (s.includes("border")) return s.includes("focus") || s.includes("peek") ? hex(p.accent) : hex(p.border);
      if (s.includes("selected") || s.includes("focusbackground")) return hex(p.accent);
      if (s.includes("header") || s.includes("title")) return s.includes("background") ? hex(p.accent) : hex(p.onAccent);
      return hex(p.widget);
    }
    if (s.includes("original")) return s.includes("border") ? hex(p.border) : a(p.fg, 0.06, p.bg);
    if (s.includes("foreground")) return hex(p.fg);
    if (s.includes("border")) return hex(p.border);
    return hex(p.bg);
  }

  if (id.startsWith("diffEditor") || id.startsWith("merge") || id.startsWith("mergeEditor") || id.startsWith("inlineChat")) {
    if (s.includes("removed") || s.includes("deleted") || s.includes("unhandled") && s.includes("conflict")) return s.includes("border") || s.includes("foreground") || s.includes("ruler") ? hex(p.error) : a(p.error, 0.22);
    if (s.includes("inserted") || s.includes("added") || s.includes("handled")) return s.includes("border") || s.includes("foreground") || s.includes("ruler") ? hex(p.success) : a(p.success, 0.2);
    if (s.includes("diagonal") || s.includes("border") || s.includes("separator")) return hex(p.border);
    if (s.includes("unchanged")) return s.includes("foreground") ? hex(p.muted) : hex(p.sunken);
    if (s.includes("shadow")) return a(BLACK, 0.3);
    return a(p.warning, 0.16);
  }

  if (id.startsWith("testing.")) {
    if (s.includes("passed") || s.includes("covered") && !s.includes("uncovered")) return s.includes("gutter") || s.includes("background") ? a(p.success, 0.25) : hex(p.success);
    if (s.includes("failed") || s.includes("errored") || s.includes("uncovered")) return s.includes("background") || s.includes("gutter") ? a(p.error, 0.22) : hex(p.error);
    if (s.includes("queued") || s.includes("message")) return hex(p.warning);
    if (s.includes("skipped") || s.includes("unset") || s.includes("retired")) return hex(p.muted);
    if (s.includes("run")) return hex(p.success);
    if (s.includes("border") || s.includes("peek")) return hex(p.accent);
    if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    return hex(p.fg);
  }

  if (id.startsWith("debug") || id.startsWith("debugConsole") || id.startsWith("debugToken") || id.startsWith("debugView")) {
    if (s.includes("error") || s.includes("exception") || s.includes("breakpoint") && !s.includes("disabled")) return hex(p.error);
    if (s.includes("warning") || s.includes("valuechanged")) return hex(p.warning);
    if (s.includes("info") || s.includes("start")) return hex(p.info);
    if (s.includes("disabled")) return hex(p.muted);
    if (s.includes("foreground") && !s.includes("background")) return hex(p.fg);
    if (s.includes("border")) return hex(p.accent);
    return hex(p.widget);
  }

  if (id.startsWith("notification") || id.startsWith("notifications")) {
    if (tone !== "neutral") return s.includes("background") ? a(toneInk, 0.16, p.widget) : hex(toneInk);
    if (s.includes("foreground") || s.includes("link")) return s.includes("link") ? hex(p.accent) : hex(p.fg);
    if (s.includes("border")) return hex(p.border);
    return hex(p.widget);
  }

  if (id.startsWith("breadcrumb")) {
    if (s.includes("focus") || s.includes("active") && s.includes("foreground")) return hex(p.fg);
    if (s.includes("foreground")) return hex(p.muted);
    if (s.includes("background")) return s.includes("focus") || s.includes("picker") ? hex(p.widget) : hex(p.bg);
    return hex(p.accent);
  }

  if (id.startsWith("scrollbar") || id.startsWith("editorOverviewRuler") || s.includes("scrollbarslider")) {
    if (s.includes("shadow")) return a(BLACK, 0.25);
    const alpha = s.includes("active") ? 0.45 : s.includes("hover") ? 0.32 : 0.2;
    return a(p.fg, alpha);
  }

  if (id.startsWith("progressBar")) return hex(p.accent);
  if (id.startsWith("pickerGroup") || id.startsWith("quickInput")) {
    if (s.includes("foreground")) return s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
    if (s.includes("border")) return hex(p.border);
    if (s.includes("focus") || s.includes("selected")) return hex(p.accent);
    return hex(p.widget);
  }
  if (id.startsWith("keybinding") || id.startsWith("keyboard")) {
    if (s.includes("foreground")) return hex(p.fg);
    if (s.includes("border") || s.includes("bottom")) return hex(p.border);
    return hex(p.raised);
  }

  if (id.startsWith("welcome") || id.startsWith("walkThrough") || id.startsWith("settings") || id.startsWith("notebook") || id.startsWith("chat") || id.startsWith("inlineChat") || id.startsWith("agent") || id.startsWith("agents") || id.startsWith("interactive")) {
    if (tone !== "neutral") return s.includes("background") ? a(toneInk, 0.18) : hex(toneInk);
    if (s.includes("slash") || s.includes("badge") || s.includes("requestborder") || s.includes("activecode")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    if (s.includes("foreground")) return s.includes("inactive") ? hex(p.inactiveFg) : hex(p.fg);
    if (s.includes("border") || s.includes("sash")) return hex(p.border);
    if (s.includes("hover")) return hex(p.hover);
    if (s.includes("editor") && s.includes("background")) return hex(p.bg);
    return hex(p.sunken);
  }

  if (id.startsWith("extension") || id.startsWith("ports") || id.startsWith("comments") || id.startsWith("issues") || id.startsWith("scm") || id.startsWith("gitlens")) {
    if (tone !== "neutral") return hex(toneInk);
    if (s.includes("button") || s.includes("prominent")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
    if (s.includes("foreground") || s.includes("icon")) return s.includes("star") || s.includes("verified") || s.includes("prerelease") ? hex(p.accent) : hex(p.fg);
    if (s.includes("border")) return hex(p.border);
    if (s.includes("hover")) return hex(p.hover);
    return hex(p.sunken);
  }

  if (id.startsWith("markdownAlert") || id.startsWith("problems") || id.startsWith("notificationsError") || id.startsWith("notificationsWarning") || id.startsWith("notificationsInfo")) {
    if (s.includes("warning") || s.includes("caution")) return hex(p.warning);
    if (s.includes("error") || s.includes("caution")) return s.includes("caution") ? hex(p.error) : hex(p.error);
    if (s.includes("note") || s.includes("tip") || s.includes("info") || s.includes("important")) return hex(p.info);
    return hex(p.fg);
  }

  if (id.startsWith("gauge")) {
    if (s.includes("error")) return s.includes("foreground") ? hex(onColor(p.error)) : hex(p.error);
    if (s.includes("warning")) return s.includes("foreground") ? hex(onColor(p.warning)) : hex(p.warning);
    if (s.includes("foreground")) return hex(p.onAccent);
    if (s.includes("border")) return hex(p.border);
    return hex(p.accent);
  }

  if (id.startsWith("toolbar") || id.startsWith("actionBar") || id.startsWith("editorActionList") || id.startsWith("simpleFind")) {
    if (s.includes("foreground")) return s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
    if (s.includes("border") || s.includes("outline")) return hex(p.border);
    if (s.includes("focus") || s.includes("toggled") || s.includes("active")) return s.includes("background") ? hex(p.accent) : hex(p.fg);
    if (s.includes("hover") || s.includes("background")) return s.includes("background") ? hex(p.hover) : hex(p.fg);
    return hex(p.hover);
  }

  if (id.startsWith("surface.") || id.startsWith("modern") || id.startsWith("modernUI") || id === "editor.border" || id.startsWith("modernPanel") || id.startsWith("modernSash")) {
    if (s.includes("foreground") || s.includes("grip")) return s.includes("grip") ? hex(p.muted) : hex(p.fg);
    if (s.includes("border")) return hex(p.border);
    if (s.includes("hover") || s.includes("active") && s.includes("background") && s.includes("item")) return hex(p.overlay);
    if (s.includes("shell") || s.includes("inactive")) return hex(s.includes("inactive") ? mix(p.shell, BLACK, 0.12) : p.shell);
    return hex(p.widget);
  }

  if (id.startsWith("window.")) return hex(p.border);
  if (id.startsWith("profile") || id.startsWith("profiles")) {
    return s.includes("foreground") ? hex(p.fg) : hex(p.sunken);
  }
  if (id.startsWith("snippet")) {
    return s.includes("border") ? hex(p.accent) : a(p.accent, s.includes("final") ? 0.18 : 0.28);
  }
  if (id.startsWith("peekView")) {
    if (s.includes("foreground")) return hex(p.onAccent);
    if (s.includes("border")) return hex(p.accent);
    return hex(p.accent);
  }

  if (tone !== "neutral") {
    if (s.includes("background") || s.includes("highlight") || s.includes("fill")) return a(toneInk, 0.2);
    return hex(toneInk);
  }
  if (/border|stroke|separator|outline/.test(s)) return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
  if (/foreground|icon/.test(s)) {
    if (s.includes("inactive") || s.includes("disabled") || s.includes("dimmed") || s.includes("unfocused")) return hex(p.inactiveFg);
    return hex(p.fg);
  }
  if (/background|highlight/.test(s)) {
    if (s.includes("hover")) return hex(p.hover);
    if (s.includes("active") || s.includes("focus") || s.includes("selected")) return hex(p.accent);
    if (s.includes("editor")) return hex(p.bg);
    if (s.includes("input") || s.includes("widget") || s.includes("dropdown")) return hex(p.widget);
    return hex(p.sunken);
  }
  return hex(p.fg);
}

export function paintKateEditor(p: Palette): Record<string, string> {
  const out: Record<string, string> = {};
  const map: Record<string, RGBA> = {
    BackgroundColor: p.bg,
    TextSelection: flatten(p.selection, p.bg),
    CurrentLine: flatten(withAlpha(p.fg, p.dark ? 0.06 : 0.05), p.bg),
    SearchHighlight: flatten(p.find, p.bg),
    ReplaceHighlight: flatten(withAlpha(p.warning, 0.45), p.bg),
    BracketMatching: flatten(withAlpha(p.accent, 0.28), p.bg),
    TabMarker: p.faint,
    SpellChecking: p.error,
    IndentationLine: p.border,
    IconBorder: p.sunken,
    CodeFolding: mix(p.accent, p.bg, 0.45),
    LineNumbers: p.muted,
    CurrentLineNumber: p.fg,
    WordWrapMarker: p.faint,
    ModifiedLines: p.warning,
    SavedLines: p.success,
    Separator: p.border,
    MarkBookmark: p.accent,
    MarkBreakpointActive: p.error,
    MarkBreakpointReached: p.warning,
    MarkBreakpointDisabled: p.muted,
    MarkExecution: p.success,
    MarkWarning: p.warning,
    MarkError: p.error,
    TemplateBackground: p.raised,
    TemplatePlaceholder: mix(p.success, p.bg, 0.55),
    TemplateFocusedPlaceholder: mix(p.accent, p.bg, 0.45),
    TemplateReadOnlyPlaceholder: mix(p.error, p.bg, 0.62),
  };
  for (const color of KATE_EDITOR_COLORS) {
    out[color.id] = hex(map[color.id] ?? p.fg);
  }
  return out;
}

export function kateStyleForRole(name: KateStyleName, p: Palette): { role: RoleId; flags?: Partial<Style> } {
  const row = KATE_STYLES.find((item) => item[0] === name);
  const role = (row?.[2] ?? "text") as RoleId;
  const flags: Partial<Style> = {};
  if (name === "Keyword" || name === "ControlFlow" || name === "Constant" || name === "Alert") flags.bold = true;
  if (name === "Comment" || name === "Documentation") flags.italic = true;
  if (name === "Error") flags.underline = true;
  if (name === "RegionMarker") flags.background = hex(mix(p.accent, p.bg, 0.72));
  if (name === "Alert") flags.background = hex(mix(p.error, p.bg, 0.72));
  return { role, flags };
}
