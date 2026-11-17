import { type ReactNode } from "react";
import { Bug, Files, GitBranch, Search } from "lucide-react";
import type { BuiltTheme } from "@/lib/theme/build";
import type { KateStyleName, RoleId } from "@/lib/theme/catalog";
import { SAMPLE, kateNameFor, type Span } from "@/lib/theme/sample";
import type { Style } from "@/lib/theme/types";

type EditorKind = "vscode" | "kate";
type ViewKind = "snippet" | "specimen";

export function PreviewStage({
  theme,
  name,
  editor,
  view,
  onEditor,
  onView,
}: {
  theme: BuiltTheme;
  name: string;
  editor: EditorKind;
  view: ViewKind;
  onEditor: (next: EditorKind) => void;
  onView: (next: ViewKind) => void;
}) {
  return (
    <section className="flex h-full min-h-0 flex-col gap-3 p-3 lg:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs tracking-widest text-faint uppercase">Preview</p>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Segment
            value={editor}
            onChange={onEditor}
            options={[
              ["vscode", "VS Code"],
              ["kate", "Kate"],
            ]}
          />
          <Segment
            value={view}
            onChange={onView}
            options={[
              ["snippet", "Snippet"],
              ["specimen", "All tokens"],
            ]}
          />
        </div>
      </div>
      <div className="stage h-80 overflow-hidden rounded-md border border-line sm:h-96 lg:h-auto lg:min-h-0 lg:flex-1">
        {editor === "vscode" ? (
          <VscodeFrame theme={theme} name={name} view={view} />
        ) : (
          <KateFrame theme={theme} name={name} view={view} />
        )}
      </div>
    </section>
  );
}

function Segment<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (next: T) => void;
  options: [T, string][];
}) {
  return (
    <div className="flex rounded-md border border-line bg-bg-sunken p-1">
      {options.map(([id, label]) => (
        <button
          key={id}
          type="button"
          aria-pressed={value === id}
          onClick={() => onChange(id)}
          className={
            "h-9 rounded-sm px-3 text-sm motion " +
            (value === id ? "bg-accent text-accent-ink" : "text-muted")
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ink(style: Style, wave?: Span["wave"], colors?: Record<string, string>) {
  const deco = [
    style.underline ? "underline" : "",
    style.strike ? "line-through" : "",
    wave ? "underline" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return {
    color: style.color,
    background: style.background,
    fontWeight: style.bold ? 650 : 450,
    fontStyle: style.italic ? "italic" : "normal",
    textDecorationLine: deco || undefined,
    textDecorationStyle: wave ? ("wavy" as const) : ("solid" as const),
    textDecorationColor: wave === "error" ? colors?.["editorError.foreground"] : wave === "warning" ? colors?.["editorWarning.foreground"] : undefined,
  } as const;
}

function VscodeFrame({ theme, name, view }: { theme: BuiltTheme; name: string; view: ViewKind }) {
  const c = theme.colors;
  const files = [
    ["theme.ts", true],
    ["kate.theme", false],
    ["package.json", false],
    ["README.md", false],
  ] as const;
  return (
    <div className="flex h-full min-h-0 flex-col" style={{ background: c["modernUI.shellBackground"], color: c.foreground }}>
      <div className="flex min-h-0 flex-1 gap-2 p-2">
        <div
          className="stage-side flex w-12 shrink-0 flex-col items-center gap-3 py-3"
          style={{ background: c["modernActivityBar.background"], borderRight: `1px solid ${c["modernActivityBar.border"]}` }}
        >
          <Activity icon={<Files size={18} />} active color={c["modernActivityBarItem.activeForeground"]} bg={c["modernActivityBarItem.activeBackground"]} />
          <Activity icon={<Search size={18} />} color={c["activityBar.inactiveForeground"]} />
          <Activity icon={<GitBranch size={18} />} color={c["activityBar.inactiveForeground"]} />
          <Activity icon={<Bug size={18} />} color={c["activityBar.inactiveForeground"]} />
        </div>
        <div
          className="stage-side flex w-40 shrink-0 flex-col py-2"
          style={{ background: c["sideBar.background"], color: c["sideBar.foreground"] }}
        >
          <p className="px-3 pb-2 text-xs tracking-wide" style={{ color: c["sideBarTitle.foreground"] }}>
            SCOPEWRIGHT
          </p>
          {files.map(([file, active]) => (
            <div
              key={file}
              className="mx-1 truncate rounded-sm px-2 py-1 text-xs"
              style={{
                background: active ? c["list.activeSelectionBackground"] : "transparent",
                color: active ? c["list.activeSelectionForeground"] : c["sideBar.foreground"],
              }}
            >
              {file}
            </div>
          ))}
        </div>
        <div
          className="flex min-w-0 flex-1 flex-col overflow-hidden"
          style={{ background: c["editor.background"], border: `1px solid ${c["editor.border"]}`, borderRadius: 8 }}
        >
          <div className="flex" style={{ background: c["editorGroupHeader.tabsBackground"] }}>
            <div className="px-3 py-2 text-xs" style={{ background: c["tab.activeBackground"], color: c["tab.activeForeground"], boxShadow: `inset 0 2px 0 ${c["tab.activeBorderTop"]}` }}>
              theme.ts
            </div>
            <div className="px-3 py-2 text-xs" style={{ color: c["tab.inactiveForeground"] }}>
              notes.md
            </div>
          </div>
          <div className="px-3 py-1 text-xs" style={{ color: c["breadcrumb.foreground"] }}>
            src <span style={{ color: c["breadcrumb.focusForeground"] }}>/ theme.ts</span>
          </div>
          <div className="relative min-h-0 flex-1 overflow-auto">
            {view === "snippet" ? <VscodeSnippet theme={theme} /> : <VscodeSpecimen theme={theme} />}
            <div
              className="absolute top-2 right-3 hidden items-center gap-2 rounded-md px-2 py-1 text-xs sm:flex"
              style={{
                background: c["editorWidget.background"],
                color: c["editorWidget.foreground"],
                border: `1px solid ${c["editorWidget.border"]}`,
                boxShadow: `0 8px 24px ${c["widget.shadow"]}`,
              }}
            >
              <span>token</span>
              <span style={{ background: c["button.background"], color: c["button.foreground"] }} className="rounded-sm px-2 py-0.5">
                1 of 2
              </span>
            </div>
          </div>
          <div className="truncate px-3 py-1 font-mono text-xs" style={{ background: c["terminal.background"], color: c["terminal.foreground"] }}>
            <span style={{ color: c["terminal.ansiGreen"] }}>scopewright</span>
            <span style={{ color: c["terminal.ansiBrightBlack"] }}> $ </span>
            echo{" "}
            <span style={{ color: c["terminal.ansiYellow"] }}>"{name}"</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-1 text-xs" style={{ background: c["statusBar.background"], color: c["statusBar.foreground"] }}>
        <span>Scopewright</span>
        <span className="flex gap-3">
          <span style={{ background: c["statusBarItem.errorBackground"], color: c["statusBarItem.errorForeground"] }} className="rounded-sm px-1">1</span>
          <span>UTF-8</span>
          <span>TypeScript</span>
        </span>
      </div>
    </div>
  );
}

function Activity({
  icon,
  color,
  bg,
  active,
}: {
  icon: ReactNode;
  color: string;
  bg?: string;
  active?: boolean;
}) {
  return (
    <span className="flex size-8 items-center justify-center rounded-md" style={{ color, background: active ? bg : "transparent" }}>
      {icon}
    </span>
  );
}

function roleStyle(theme: BuiltTheme, role: RoleId): Style {
  return theme.palette.role[role];
}

function VscodeSnippet({ theme }: { theme: BuiltTheme }) {
  const c = theme.colors;
  return (
    <pre className="m-0 px-2 py-1 font-mono text-sm leading-6" style={{ background: c["editor.background"], color: c["editor.foreground"] }}>
      {SAMPLE.map((line) => (
        <div
          key={line.n}
          className="flex"
          style={{ background: line.current ? c["editor.lineHighlightBackground"] : "transparent" }}
        >
          <span className="w-8 shrink-0 text-right select-none" style={{ color: line.current ? c["editorLineNumber.activeForeground"] : c["editorLineNumber.foreground"] }}>
            {line.n}
          </span>
          <span
            className="mr-2 w-1 shrink-0"
            style={{
              background: line.modified
                ? c["editorGutter.modifiedBackground"]
                : line.saved
                  ? c["editorGutter.addedBackground"]
                  : "transparent",
            }}
          />
          <span>
            {line.spans.map((span, index) => (
              <span
                key={`${line.n}-${index}`}
                style={{
                  ...ink(roleStyle(theme, span.r), span.wave, c),
                  background: span.sel
                    ? c["editor.selectionBackground"]
                    : span.find
                      ? c["editor.findMatchBackground"]
                      : roleStyle(theme, span.r).background,
                }}
              >
                {span.t || " "}
              </span>
            ))}
          </span>
        </div>
      ))}
    </pre>
  );
}

function VscodeSpecimen({ theme }: { theme: BuiltTheme }) {
  const c = theme.colors;
  return (
    <div className="font-mono text-xs leading-6" style={{ background: c["editor.background"] }}>
      {theme.tokens.map((token) => (
        <div key={token.id} className="flex gap-3 px-3">
          <span className="w-40 shrink-0 truncate" style={{ color: c["editorLineNumber.foreground"] }}>
            {token.name}
          </span>
          <span style={ink(token.style)}>Aa {token.scopes[0]}</span>
        </div>
      ))}
      <div className="px-3 pt-3 pb-1 text-xs" style={{ color: c["breadcrumb.foreground"] }}>
        Semantic
      </div>
      {theme.semantic.map((item) => (
        <div key={item.rule.id} className="flex gap-3 px-3">
          <span className="w-40 shrink-0 truncate" style={{ color: c["editorLineNumber.foreground"] }}>
            {item.rule.id}
          </span>
          <span style={item.rule.styleOnly ? { ...ink(item.style), color: c["editor.foreground"] } : ink(item.style)}>
            {item.rule.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function KateFrame({ theme, name, view }: { theme: BuiltTheme; name: string; view: ViewKind }) {
  const k = theme.kateColors;
  return (
    <div className="flex h-full min-h-0 flex-col" style={{ background: k.BackgroundColor, color: theme.kateStyles[0]?.style.color }}>
      <div className="flex items-center justify-between px-3 py-2 text-xs" style={{ background: k.IconBorder, color: k.LineNumbers }}>
        <span>{name}.theme</span>
        <span>Kate · KSyntaxHighlighting</span>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        {view === "snippet" ? <KateSnippet theme={theme} /> : <KateSpecimen theme={theme} />}
      </div>
    </div>
  );
}

function kateStyle(theme: BuiltTheme, name: KateStyleName) {
  return theme.kateStyles.find((style) => style.name === name) ?? theme.kateStyles[0]!;
}

function KateSnippet({ theme }: { theme: BuiltTheme }) {
  const k = theme.kateColors;
  return (
    <pre className="m-0 font-mono text-sm leading-6" style={{ background: k.BackgroundColor }}>
      {SAMPLE.map((line) => (
        <div key={line.n} className="flex" style={{ background: line.current ? k.CurrentLine : "transparent" }}>
          <span className="flex w-5 shrink-0 justify-center" style={{ background: k.IconBorder }}>
            <i
              className="my-1 w-1.5"
              style={{
                background: line.bookmark
                  ? k.MarkBookmark
                  : line.breakpoint
                    ? k.MarkBreakpointActive
                    : line.modified
                      ? k.ModifiedLines
                      : line.saved
                        ? k.SavedLines
                        : line.fold
                          ? k.CodeFolding
                          : "transparent",
              }}
            />
          </span>
          <span className="w-8 shrink-0 pr-2 text-right select-none" style={{ background: k.IconBorder, color: line.current ? k.CurrentLineNumber : k.LineNumbers }}>
            {line.n}
          </span>
          <span className="px-2">
            {line.spans.map((span, index) => {
              const style = kateStyle(theme, kateNameFor(span.r, span.k));
              return (
                <span
                  key={`${line.n}-${index}`}
                  style={{
                    ...ink(style.style, span.wave, {
                      "editorError.foreground": k.MarkError,
                      "editorWarning.foreground": k.MarkWarning,
                    }),
                    background: span.sel ? k.TextSelection : span.find ? k.SearchHighlight : style.style.background,
                    color: span.sel ? style.selected : style.style.color,
                  }}
                >
                  {span.t || " "}
                </span>
              );
            })}
          </span>
        </div>
      ))}
    </pre>
  );
}

function KateSpecimen({ theme }: { theme: BuiltTheme }) {
  const k = theme.kateColors;
  return (
    <div className="font-mono text-xs leading-7" style={{ background: k.BackgroundColor }}>
      {theme.kateStyles.map((style) => (
        <div key={style.name} className="flex gap-3 px-3">
          <span className="w-36 shrink-0" style={{ color: k.LineNumbers }}>
            {style.name}
          </span>
          <span style={{ ...ink(style.style), background: style.style.background ?? "transparent" }}>
            The quick token
          </span>
        </div>
      ))}
    </div>
  );
}
