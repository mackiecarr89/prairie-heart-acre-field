import { useMemo, useState } from "react";
import { Copy, Download, RotateCcw, Search, Shuffle, Upload, WandSparkles } from "lucide-react";
import { VSCODE_COLORS } from "@/data/vscode-colors";
import { contrast, mustHex } from "@/lib/color";
import { KATE_EDITOR_COLORS, ROLE_GROUPS, ROLE_LABEL, type RoleId } from "@/lib/theme/catalog";
import type { BuiltTheme } from "@/lib/theme/build";
import {
  downloadText,
  kateThemeJson,
  parseThemeImport,
  themeFileSlug,
  vscodePackageJson,
  vscodeSettingsJson,
  vscodeThemeJson,
} from "@/lib/theme/export";
import { PRESETS } from "@/lib/theme/presets";
import { useStudio, type StudioState } from "@/lib/theme/store";
import type { Appearance, Style } from "@/lib/theme/types";
import { AlphaSlider, FlagToggles, HexField, ratioLabel } from "@/components/app/color-field";

export type PanelId = "palette" | "tokens" | "workbench" | "export";

export function PalettePanel({ theme }: { theme: BuiltTheme }) {
  const state = useStudio();
  const bg = state.bg;
  return (
    <div className="flex flex-col gap-5 p-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs tracking-wide text-muted uppercase">Theme name</span>
        <input
          value={state.name}
          onChange={(event) => state.setName(event.target.value)}
          className="h-11 rounded-md border border-line bg-bg-sunken px-3 text-sm"
        />
      </label>
      <div>
        <p className="mb-2 text-xs tracking-wide text-muted uppercase">Starting point</p>
        <div className="grid grid-cols-2 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => state.applyPreset(preset.id)}
              className={
                "rounded-md border p-2 text-left " +
                (state.presetId === preset.id ? "border-accent" : "border-line bg-bg-sunken")
              }
            >
              <span className="flex gap-1">
                {[preset.bg, preset.fg, preset.accent, preset.accent2].map((color) => (
                  <i key={color} className="size-3 rounded-full" style={{ background: color }} />
                ))}
              </span>
              <span className="mt-1 block text-sm">{preset.name}</span>
              <span className="block text-xs text-muted">{preset.blurb}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs tracking-wide text-muted uppercase">Seed color</p>
        <HexField label="Seed color" value={state.seed} onChange={state.setSeed} />
        <p className="mt-2 text-xs text-muted">The accent keeps this color. Everything else is spun from its hue.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => state.generateFromSeed()}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3 text-sm font-medium text-accent-ink"
        >
          <WandSparkles size={16} /> Generate palette
        </button>
        <button type="button" onClick={() => state.shuffle()} className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm">
          <Shuffle size={16} /> Shuffle
        </button>
        <button type="button" onClick={() => state.liftWeak()} className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm">
          Lift weak contrast
        </button>
      </div>
      <AppearanceControl value={state.appearance} onChange={state.setAppearance} />
      <div className="grid gap-3">
        <Field label="Editor background" value={state.bg} onChange={(value) => state.setSurface("bg", value)} />
        <Field label="Editor foreground" value={state.fg} onChange={(value) => state.setSurface("fg", value)} ratio={ratioLabel(state.fg, bg)} />
        <Field label="Accent" value={state.accent} onChange={(value) => state.setSurface("accent", value)} />
        <Field label="Second accent" value={state.accent2} onChange={(value) => state.setSurface("accent2", value)} />
      </div>
      {ROLE_GROUPS.map((group) => (
        <div key={group.id}>
          <p className="mb-2 text-xs tracking-wide text-muted uppercase">{group.label}</p>
          <div className="flex flex-col gap-2">
            {group.roles.map((id) => (
              <RoleRow key={id} id={id} bg={bg} style={state.roles[id]} onChange={(patch) => state.setRole(id, patch)} />
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-faint">
        {theme.tokens.length} TextMate rules, {theme.semantic.length} semantic rules, and {theme.kateStyles.length} Kate text styles follow these pigments unless you pin them.
      </p>
    </div>
  );
}

function AppearanceControl({ value, onChange }: { value: Appearance; onChange: (next: Appearance) => void }) {
  const options: [Appearance, string][] = [
    ["dark", "Dark"],
    ["light", "Light"],
    ["hc", "HC dark"],
    ["hcLight", "HC light"],
  ];
  return (
    <div>
      <p className="mb-2 text-xs tracking-wide text-muted uppercase">Appearance</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={value === id}
            onClick={() => onChange(id)}
            className={
              "h-11 rounded-md border text-sm " +
              (value === id ? "border-accent bg-accent text-accent-ink" : "border-line bg-bg-sunken text-fg")
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  ratio,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
  ratio?: { text: string; tone: "ok" | "thin" | "fail" };
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-sm">{label}</span>
        {ratio ? <Contrast text={ratio.text} tone={ratio.tone} /> : null}
      </div>
      <HexField label={label} value={value} onChange={onChange} />
    </div>
  );
}

function Contrast({ text, tone }: { text: string; tone: "ok" | "thin" | "fail" }) {
  const color = tone === "fail" ? "text-danger" : tone === "thin" ? "text-warn" : "text-muted";
  return <span className={`font-mono text-xs ${color}`}>{text}:1</span>;
}

function RoleRow({
  id,
  bg,
  style,
  onChange,
}: {
  id: RoleId;
  bg: string;
  style: Style;
  onChange: (patch: Partial<Style>) => void;
}) {
  const ratio = ratioLabel(style.color, bg);
  return (
    <div className="rounded-md border border-line bg-bg-sunken p-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-sm">{ROLE_LABEL[id]}</span>
        <Contrast text={ratio.text} tone={ratio.tone} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="min-w-40 flex-1">
          <HexField label={ROLE_LABEL[id]} value={style.color} onChange={(color) => onChange({ color })} />
        </div>
        <FlagToggles style={style} onChange={(flag, next) => onChange({ [flag]: next })} />
      </div>
    </div>
  );
}

export function TokenPanel({ theme }: { theme: BuiltTheme }) {
  const [tab, setTab] = useState<"textmate" | "semantic" | "kate" | "kate-ui">("textmate");
  const [query, setQuery] = useState("");
  const [pinnedOnly, setPinnedOnly] = useState(false);
  const q = query.trim().toLowerCase();
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-col gap-2 border-b border-line p-3">
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
          {(
            [
              ["textmate", `TextMate ${theme.tokens.length}`],
              ["semantic", `Semantic ${theme.semantic.length}`],
              ["kate", `Kate text ${theme.kateStyles.length}`],
              ["kate-ui", `Kate UI ${KATE_EDITOR_COLORS.length}`],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={tab === id}
              onClick={() => setTab(id)}
              className={
                "h-10 rounded-md px-2 text-xs " + (tab === id ? "bg-accent text-accent-ink" : "bg-bg-sunken text-muted")
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-md border border-line bg-bg-sunken px-2">
            <Search size={16} className="text-faint" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter tokens"
              className="h-full w-full bg-transparent text-sm outline-none"
            />
          </label>
          <button
            type="button"
            aria-pressed={pinnedOnly}
            onClick={() => setPinnedOnly((value) => !value)}
            className={
              "h-11 rounded-md border px-3 text-sm " +
              (pinnedOnly ? "border-accent text-accent" : "border-line text-muted")
            }
          >
            Pins
          </button>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        {tab === "textmate" ? <TextmateList theme={theme} query={q} pinnedOnly={pinnedOnly} /> : null}
        {tab === "semantic" ? <SemanticList theme={theme} query={q} pinnedOnly={pinnedOnly} /> : null}
        {tab === "kate" ? <KateStyleList theme={theme} query={q} pinnedOnly={pinnedOnly} /> : null}
        {tab === "kate-ui" ? <KateColorList theme={theme} query={q} pinnedOnly={pinnedOnly} /> : null}
      </div>
    </div>
  );
}

function TextmateList({ theme, query, pinnedOnly }: { theme: BuiltTheme; query: string; pinnedOnly: boolean }) {
  const pin = useStudio((s) => s.pinToken);
  const unpin = useStudio((s) => s.unpinToken);
  const rows = theme.tokens.filter((token) => {
    if (pinnedOnly && !token.pinned) return false;
    if (!query) return true;
    return (
      token.name.toLowerCase().includes(query) ||
      token.id.includes(query) ||
      token.scopes.some((scope) => scope.toLowerCase().includes(query))
    );
  });
  return (
    <ul>
      {rows.map((token) => (
        <StyleRow
          key={token.id}
          title={token.name}
          meta={token.scopes.slice(0, 2).join(", ")}
          style={token.style}
          pinned={token.pinned}
          onColor={(color) => pin(token.id, { color })}
          onFlag={(flag, next) => pin(token.id, { [flag]: next })}
          onReset={() => unpin(token.id)}
        />
      ))}
      {rows.length === 0 ? <Empty /> : null}
    </ul>
  );
}

function SemanticList({ theme, query, pinnedOnly }: { theme: BuiltTheme; query: string; pinnedOnly: boolean }) {
  const pin = useStudio((s) => s.pinSemantic);
  const unpin = useStudio((s) => s.unpinSemantic);
  const rows = theme.semantic.filter((item) => {
    if (pinnedOnly && !item.pinned) return false;
    if (!query) return true;
    return item.rule.id.toLowerCase().includes(query) || item.rule.detail.toLowerCase().includes(query);
  });
  return (
    <ul>
      {rows.map((item) => (
        <StyleRow
          key={item.rule.id}
          title={item.rule.id}
          meta={item.rule.detail}
          style={item.style}
          pinned={item.pinned}
          hideColor={item.rule.styleOnly}
          onColor={(color) => pin(item.rule.id, { color })}
          onFlag={(flag, next) => pin(item.rule.id, { [flag]: next })}
          onReset={() => unpin(item.rule.id)}
        />
      ))}
      {rows.length === 0 ? <Empty /> : null}
    </ul>
  );
}

function KateStyleList({ theme, query, pinnedOnly }: { theme: BuiltTheme; query: string; pinnedOnly: boolean }) {
  const pin = useStudio((s) => s.pinKateStyle);
  const unpin = useStudio((s) => s.unpinKateStyle);
  const rows = theme.kateStyles.filter((style) => {
    if (pinnedOnly && !style.pinned) return false;
    if (!query) return true;
    return style.name.toLowerCase().includes(query) || style.desc.toLowerCase().includes(query);
  });
  return (
    <ul>
      {rows.map((style) => (
        <StyleRow
          key={style.name}
          title={style.name}
          meta={style.desc}
          style={style.style}
          pinned={style.pinned}
          onColor={(color) => pin(style.name, { color })}
          onFlag={(flag, next) => pin(style.name, { [flag]: next })}
          onReset={() => unpin(style.name)}
        />
      ))}
      {rows.length === 0 ? <Empty /> : null}
    </ul>
  );
}

function KateColorList({ theme, query, pinnedOnly }: { theme: BuiltTheme; query: string; pinnedOnly: boolean }) {
  const pin = useStudio((s) => s.pinKateColor);
  const unpin = useStudio((s) => s.unpinKateColor);
  const rows = KATE_EDITOR_COLORS.filter((color) => {
    const pinned = theme.kateColorPinned[color.id];
    if (pinnedOnly && !pinned) return false;
    if (!query) return true;
    return color.id.toLowerCase().includes(query) || color.desc.toLowerCase().includes(query);
  });
  return (
    <ul>
      {rows.map((color) => (
        <ColorRow
          key={color.id}
          id={color.id}
          desc={color.desc}
          value={theme.kateColors[color.id] ?? "#000"}
          pinned={!!theme.kateColorPinned[color.id]}
          onChange={(value) => pin(color.id, value)}
          onReset={() => unpin(color.id)}
        />
      ))}
      {rows.length === 0 ? <Empty /> : null}
    </ul>
  );
}

function StyleRow({
  title,
  meta,
  style,
  pinned,
  hideColor,
  onColor,
  onFlag,
  onReset,
}: {
  title: string;
  meta: string;
  style: Style;
  pinned: boolean;
  hideColor?: boolean;
  onColor: (color: string) => void;
  onFlag: (flag: "bold" | "italic" | "underline" | "strike", next: boolean) => void;
  onReset: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-line">
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center gap-3 px-3 py-2 text-left">
        <span className="checker relative size-6 shrink-0 rounded-sm">
          <span className="absolute inset-0 rounded-sm" style={{ background: hideColor ? "transparent" : style.color, boxShadow: hideColor ? "inset 0 0 0 1px var(--color-line)" : undefined }} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm">{title}</span>
          <span className="block truncate font-mono text-xs text-faint">{meta}</span>
        </span>
        {pinned ? <i className="size-2 rounded-full bg-accent" /> : null}
      </button>
      {open ? (
        <div className="flex flex-col gap-2 px-3 pb-3">
          {hideColor ? null : <HexField label={title} value={style.color} onChange={onColor} />}
          <FlagToggles style={style} onChange={onFlag} />
          {pinned ? (
            <button type="button" onClick={onReset} className="inline-flex h-10 items-center gap-2 self-start text-sm text-muted">
              <RotateCcw size={14} /> Follow palette
            </button>
          ) : (
            <p className="text-xs text-faint">Follows the palette until you change it.</p>
          )}
        </div>
      ) : null}
    </li>
  );
}

export function WorkbenchPanel({ theme }: { theme: BuiltTheme }) {
  const sections = useMemo(() => [...new Set(VSCODE_COLORS.map((color) => color.section))], []);
  const [section, setSection] = useState("Editor colors");
  const [query, setQuery] = useState("");
  const [pinnedOnly, setPinnedOnly] = useState(false);
  const pin = useStudio((s) => s.pinColor);
  const unpin = useStudio((s) => s.unpinColor);
  const q = query.trim().toLowerCase();
  const rows = VSCODE_COLORS.filter((color) => {
    const pinned = theme.colorPinned[color.id];
    if (pinnedOnly && !pinned) return false;
    if (q) return color.id.toLowerCase().includes(q) || color.desc.toLowerCase().includes(q) || color.section.toLowerCase().includes(q);
    return color.section === section;
  }).slice(0, q ? 120 : 400);
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-col gap-2 border-b border-line p-3">
        <p className="text-xs text-muted">{VSCODE_COLORS.length} workbench colors from the VS Code theme reference, including modern UI.</p>
        <label className="flex h-11 items-center gap-2 rounded-md border border-line bg-bg-sunken px-2">
          <Search size={16} className="text-faint" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search all colors"
            className="h-full w-full bg-transparent text-sm outline-none"
          />
        </label>
        <div className="flex gap-2">
          <select
            aria-label="Color group"
            value={section}
            onChange={(event) => setSection(event.target.value)}
            className="h-11 min-w-0 flex-1 rounded-md border border-line bg-bg-sunken px-2 text-sm"
          >
            {sections.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            type="button"
            aria-pressed={pinnedOnly}
            onClick={() => setPinnedOnly((value) => !value)}
            className={
              "h-11 rounded-md border px-3 text-sm " + (pinnedOnly ? "border-accent text-accent" : "border-line text-muted")
            }
          >
            Pins
          </button>
        </div>
      </div>
      <ul className="min-h-0 flex-1 overflow-auto">
        {rows.map((color) => (
          <ColorRow
            key={color.id}
            id={color.id}
            desc={color.desc}
            value={theme.colors[color.id] ?? "#000"}
            pinned={!!theme.colorPinned[color.id]}
            onChange={(value) => pin(color.id, value)}
            onReset={() => unpin(color.id)}
          />
        ))}
      </ul>
    </div>
  );
}

function ColorRow({
  id,
  desc,
  value,
  pinned,
  onChange,
  onReset,
}: {
  id: string;
  desc: string;
  value: string;
  pinned: boolean;
  onChange: (value: string) => void;
  onReset: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-line">
      <button type="button" onClick={() => setOpen((next) => !next)} className="flex w-full items-center gap-3 px-3 py-2 text-left">
        <span className="checker relative size-6 shrink-0 rounded-sm">
          <span className="absolute inset-0 rounded-sm" style={{ background: value }} />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-xs">{id}</span>
        {pinned ? <i className="size-2 shrink-0 rounded-full bg-accent" /> : null}
      </button>
      {open ? (
        <div className="flex flex-col gap-2 px-3 pb-3">
          <p className="text-xs text-muted">{desc}</p>
          <HexField label={id} value={value} onChange={onChange} />
          <AlphaSlider value={value} onChange={onChange} />
          {pinned ? (
            <button type="button" onClick={onReset} className="inline-flex h-10 items-center gap-2 self-start text-sm text-muted">
              <RotateCcw size={14} /> Follow palette
            </button>
          ) : (
            <p className="text-xs text-faint">Derived from the palette. Editing pins it.</p>
          )}
        </div>
      ) : null}
    </li>
  );
}

function Empty() {
  return <li className="px-3 py-6 text-sm text-muted">Nothing matches.</li>;
}

export function ExportPanel({ state, theme }: { state: StudioState; theme: BuiltTheme }) {
  const [note, setNote] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const slug = themeFileSlug(state.name);
  const weak = useMemo(() => {
    const bg = mustHex(state.bg);
    return (Object.entries(state.roles) as [RoleId, Style][])
      .filter(([, style]) => contrast(mustHex(style.color), bg) < 4.5)
      .map(([id, style]) => ({ id, ratio: contrast(mustHex(style.color), bg) }));
  }, [state.bg, state.roles]);

  async function copy(label: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(label);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-sm text-muted">
        One palette, two editors. VS Code gets every workbench color plus TextMate and semantic tokens. Kate gets every KSyntaxHighlighting text style and editor color.
      </p>
      <div className="grid gap-2">
        <button
          type="button"
          onClick={() => downloadText(`${slug}-color-theme.json`, vscodeThemeJson(state, theme))}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-3 text-sm font-medium text-accent-ink"
        >
          <Download size={16} /> VS Code theme JSON
        </button>
        <button
          type="button"
          onClick={() => downloadText("package.json", vscodePackageJson(state))}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm"
        >
          <Download size={16} /> Extension package.json
        </button>
        <button
          type="button"
          onClick={() => downloadText(`${slug}.theme`, kateThemeJson(state, theme))}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm"
        >
          <Download size={16} /> Kate .theme
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => void copy("settings", vscodeSettingsJson(state, theme))} className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm">
          <Copy size={16} /> {copied === "settings" ? "Copied settings" : "Copy settings snippet"}
        </button>
        <button type="button" onClick={() => void copy("vscode", vscodeThemeJson(state, theme))} className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm">
          <Copy size={16} /> {copied === "vscode" ? "Copied theme" : "Copy theme JSON"}
        </button>
      </div>
      <label className="inline-flex h-11 cursor-pointer items-center gap-2 self-start rounded-md border border-line px-3 text-sm">
        <Upload size={16} /> Import JSON
        <input
          type="file"
          accept="application/json,.json,.theme"
          className="sr-only"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            event.target.value = "";
            if (!file) return;
            const result = parseThemeImport(await file.text());
            if (!result.ok) {
              setNote(result.error);
              return;
            }
            state.applyImport(result.patch);
            setNote(result.note);
          }}
        />
      </label>
      {note ? <p className="text-sm text-muted">{note}</p> : null}
      <div className="rounded-md border border-line bg-bg-sunken p-3 text-sm">
        <p className="mb-2 font-medium">Install in VS Code</p>
        <ol className="list-decimal space-y-1 pl-4 text-muted">
          <li>Put the theme JSON in a folder named themes, next to the package.json.</li>
          <li>Copy that folder into your extensions directory and reload VS Code.</li>
          <li>Or paste the settings snippet into settings.json for an instant preview without an extension.</li>
        </ol>
      </div>
      <div className="rounded-md border border-line bg-bg-sunken p-3 text-sm">
        <p className="mb-2 font-medium">Install in Kate</p>
        <p className="text-muted">
          Save the .theme file to ~/.local/share/org.kde.syntax-highlighting/themes/ and pick it under Settings, Configure Kate, Fonts & Colors. KWrite and KDevelop read the same file.
        </p>
      </div>
      <div>
        <p className="mb-1 text-sm">Contrast against the editor background</p>
        {weak.length === 0 ? (
          <p className="text-sm text-muted">Every syntax color clears 4.5:1.</p>
        ) : (
          <ul className="flex flex-col gap-1">
            {weak.slice(0, 8).map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span>{ROLE_LABEL[item.id]}</span>
                <span className={item.ratio < 3 ? "text-danger" : "text-warn"}>{item.ratio.toFixed(1)}:1</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-xs text-faint">
          Selection foreground is left out of the VS Code file unless you pin it or use a high-contrast appearance. Setting it replaces syntax color inside selections.
        </p>
      </div>
      <button type="button" onClick={() => state.clearPins()} className="inline-flex h-11 items-center gap-2 self-start text-sm text-muted">
        <RotateCcw size={14} /> Clear every pin
      </button>
    </div>
  );
}
