import { useEffect, useMemo, useState } from "react";
import { Braces, Download, Palette, SwatchBook } from "lucide-react";
import { VSCODE_COLORS } from "@/data/vscode-colors";
import { KATE_EDITOR_COLORS, KATE_STYLES } from "@/lib/theme/catalog";
import { buildTheme } from "@/lib/theme/build";
import { useStudio } from "@/lib/theme/store";
import { ExportPanel, PalettePanel, TokenPanel, WorkbenchPanel, type PanelId } from "@/components/app/panels";
import { PreviewStage } from "@/components/app/preview-stage";

const TABS: { id: PanelId; label: string; icon: typeof Palette }[] = [
  { id: "palette", label: "Palette", icon: Palette },
  { id: "tokens", label: "Tokens", icon: Braces },
  { id: "workbench", label: "Colors", icon: SwatchBook },
  { id: "export", label: "Export", icon: Download },
];

export function Studio() {
  const state = useStudio();
  const [panel, setPanel] = useState<PanelId>("palette");
  const [editor, setEditor] = useState<"vscode" | "kate">("vscode");
  const [view, setView] = useState<"snippet" | "specimen">("snippet");

  useEffect(() => {
    void useStudio.persist.rehydrate();
  }, []);

  const theme = useMemo(
    () =>
      buildTheme({
        name: state.name,
        appearance: state.appearance,
        bg: state.bg,
        fg: state.fg,
        accent: state.accent,
        accent2: state.accent2,
        roles: state.roles,
        colorOverrides: state.colorOverrides,
        tokenOverrides: state.tokenOverrides,
        semanticOverrides: state.semanticOverrides,
        kateStyleOverrides: state.kateStyleOverrides,
        kateColorOverrides: state.kateColorOverrides,
        extraTextmate: state.extraTextmate,
      }),
    [
      state.name,
      state.appearance,
      state.bg,
      state.fg,
      state.accent,
      state.accent2,
      state.roles,
      state.colorOverrides,
      state.tokenOverrides,
      state.semanticOverrides,
      state.kateStyleOverrides,
      state.kateColorOverrides,
      state.extraTextmate,
    ],
  );

  return (
    <main className="flex min-h-dvh flex-col bg-bg text-fg lg:h-dvh">
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div className="flex items-center gap-3">
          <Mark />
          <div>
            <h1 className="text-base font-semibold tracking-tight">Scopewright</h1>
            <p className="text-xs text-muted">VS Code and Kate, every token and editor color</p>
          </div>
        </div>
        <p className="hidden font-mono text-xs text-faint sm:block">
          {VSCODE_COLORS.length} colors · {KATE_STYLES.length} styles · {KATE_EDITOR_COLORS.length} Kate UI
        </p>
      </header>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="order-1 flex min-h-80 flex-col lg:order-2 lg:min-h-0 lg:flex-1">
          <PreviewStage
            theme={theme}
            name={state.name}
            editor={editor}
            view={view}
            onEditor={setEditor}
            onView={setView}
          />
        </div>
        <div className="order-2 flex min-h-0 flex-1 flex-col border-line lg:order-1 lg:h-full lg:w-[26rem] lg:flex-none lg:border-r">
          <div className="grid grid-cols-4 border-b border-line">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const on = panel === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPanel(tab.id)}
                  className={
                    "flex h-12 flex-col items-center justify-center gap-0.5 text-xs " +
                    (on ? "text-accent" : "text-muted")
                  }
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            {panel === "palette" ? <PalettePanel theme={theme} /> : null}
            {panel === "tokens" ? <TokenPanel theme={theme} /> : null}
            {panel === "workbench" ? <WorkbenchPanel theme={theme} /> : null}
            {panel === "export" ? <ExportPanel state={state} theme={theme} /> : null}
          </div>
        </div>
      </div>
    </main>
  );
}

function Mark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
      <rect width="32" height="32" rx="7" className="fill-bg-sunken" />
      <path d="M8 9h8M8 16h16M8 23h11" stroke="currentColor" className="text-accent" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="23.5" cy="9" r="2" className="fill-warn" />
      <circle cx="24.5" cy="23" r="2" className="fill-fg" />
    </svg>
  );
}
