import { KATE_STYLES, type KateStyleName, type RoleId } from "@/lib/theme/catalog";

export type Span = {
  t: string;
  r: RoleId;
  k?: KateStyleName;
  sel?: boolean;
  find?: boolean;
  wave?: "error" | "warning";
};

export type SampleLine = {
  n: number;
  spans: Span[];
  current?: boolean;
  modified?: boolean;
  saved?: boolean;
  bookmark?: boolean;
  breakpoint?: boolean;
  fold?: boolean;
};

const s = (t: string, r: RoleId, extra?: Partial<Span>): Span => ({ t, r, ...extra });

export const SAMPLE: SampleLine[] = [
  {
    n: 1,
    spans: [s("// scopewright · every token the editor will actually paint", "comment")],
  },
  {
    n: 2,
    spans: [
      s("import", "import"),
      s(" { ", "punctuation"),
      s("readTheme", "variable", { sel: true }),
      s(" } ", "punctuation"),
      s("from", "import"),
      s(" ", "text"),
      s('"@scope/wright"', "string"),
      s(";", "punctuation"),
    ],
  },
  { n: 3, spans: [s("", "text")] },
  {
    n: 4,
    bookmark: true,
    spans: [
      s("/** ", "doc"),
      s("@deprecated", "annotation"),
      s(" use ThemeSpec — kept for the old pipeline */", "doc"),
    ],
  },
  {
    n: 5,
    spans: [
      s("export", "keyword"),
      s(" ", "text"),
      s("type", "keyword"),
      s(" ", "text"),
      s("ThemeSpec", "type"),
      s("<", "punctuation"),
      s("T", "type"),
      s(" ", "text"),
      s("extends", "keyword"),
      s(" ", "text"),
      s("string", "type"),
      s("> = {", "punctuation"),
    ],
  },
  {
    n: 6,
    spans: [
      s("  ", "text"),
      s("name", "property"),
      s(": ", "punctuation"),
      s("T", "type"),
      s(";", "punctuation"),
    ],
  },
  {
    n: 7,
    spans: [
      s("  ", "text"),
      s("revision", "property"),
      s(": ", "punctuation"),
      s("12", "number"),
      s(";", "punctuation"),
    ],
  },
  {
    n: 8,
    spans: [
      s("  ", "text"),
      s("accents", "property"),
      s(": ", "punctuation"),
      s("readonly", "keyword"),
      s(" [", "punctuation"),
      s("0x1B", "number", { k: "BaseN" }),
      s(", ", "punctuation"),
      s("0.86", "number", { k: "Float" }),
      s("];", "punctuation"),
    ],
  },
  { n: 9, spans: [s("};", "punctuation")] },
  { n: 10, spans: [s("", "text")] },
  {
    n: 11,
    breakpoint: true,
    spans: [
      s("const", "keyword"),
      s(" ", "text"),
      s("HEX", "constant"),
      s(" = ", "operator"),
      s("/^#(?:[0-9a-f]{6}|[0-9a-f]{8})$/i", "regexp"),
      s(";", "punctuation"),
    ],
  },
  { n: 12, spans: [s("", "text")] },
  {
    n: 13,
    spans: [
      s("export", "keyword"),
      s(" ", "text"),
      s("function", "keyword"),
      s(" ", "text"),
      s("paint", "function"),
      s("(", "punctuation"),
      s("spec", "parameter"),
      s(": ", "punctuation"),
      s("ThemeSpec", "type"),
      s("<", "punctuation"),
      s('"harbor"', "string"),
      s(">, ", "punctuation"),
      s("token", "parameter", { find: true }),
      s(": ", "punctuation"),
      s("string", "type"),
      s("): ", "punctuation"),
      s("string", "type"),
      s(" {", "punctuation"),
    ],
  },
  {
    n: 14,
    current: true,
    modified: true,
    spans: [
      s("  ", "text"),
      s("if", "control"),
      s(" (", "punctuation"),
      s("token", "variable", { find: true }),
      s(" ", "text"),
      s("===", "operator"),
      s(" ", "text"),
      s('"keyword"', "string"),
      s(") ", "punctuation"),
      s("return", "control"),
      s(" ", "text"),
      s("spec", "variable"),
      s(".", "punctuation"),
      s("name", "property"),
      s(";", "punctuation"),
    ],
  },
  {
    n: 15,
    spans: [
      s("  ", "text"),
      s("throw", "control"),
      s(" ", "text"),
      s("new", "keyword"),
      s(" ", "text"),
      s("Error", "type"),
      s("(", "punctuation"),
      s("`unknown ", "string"),
      s("${", "keyword"),
      s("token", "variable", { wave: "error" }),
      s("}`", "keyword"),
      s(");", "punctuation"),
    ],
  },
  { n: 16, spans: [s("}", "punctuation")] },
  { n: 17, spans: [s("", "text")] },
  {
    n: 18,
    fold: true,
    spans: [s("#region", "label"), s(" marks", "text")],
  },
  {
    n: 19,
    saved: true,
    spans: [
      s("paint", "function"),
      s("(", "punctuation"),
      s("spec", "variable"),
      s(", ", "punctuation"),
      s('r"verbatim"', "verbatim"),
      s("); ", "punctuation"),
      s("// ", "comment"),
      s("TODO", "warning", { k: "Alert" }),
      s(": cover alerts", "comment"),
    ],
  },
  { n: 20, spans: [s("#endregion", "label")] },
];

export function kateNameFor(role: RoleId, explicit?: KateStyleName): KateStyleName {
  if (explicit) return explicit;
  const found = KATE_STYLES.find((row) => row[2] === role);
  return found?.[0] ?? "Normal";
}
