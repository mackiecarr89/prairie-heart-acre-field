import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ensureContrast, mustHex, toHex } from "@/lib/color";
import { ROLE_IDS, type RoleId } from "@/lib/theme/catalog";
import type { ThemeState } from "@/lib/theme/build";
import { emptyOverrides } from "@/lib/theme/export";
import { PRESETS, flipHex, rolesFromColors, shufflePalette } from "@/lib/theme/presets";
import { isDark, type Appearance, type Style } from "@/lib/theme/types";

const harbor = PRESETS[0]!;

export type StudioState = ThemeState & {
  presetId: string | null;
  setName: (name: string) => void;
  setAppearance: (appearance: Appearance) => void;
  setSurface: (key: "bg" | "fg" | "accent" | "accent2", value: string) => void;
  setRole: (id: RoleId, patch: Partial<Style>) => void;
  pinColor: (id: string, value: string) => void;
  unpinColor: (id: string) => void;
  pinToken: (id: string, patch: Partial<Style>) => void;
  unpinToken: (id: string) => void;
  pinSemantic: (id: string, patch: Partial<Style>) => void;
  unpinSemantic: (id: string) => void;
  pinKateStyle: (name: string, patch: Partial<Style>) => void;
  unpinKateStyle: (name: string) => void;
  pinKateColor: (id: string, value: string) => void;
  unpinKateColor: (id: string) => void;
  applyPreset: (id: string) => void;
  shuffle: () => void;
  clearPins: () => void;
  liftWeak: () => void;
  applyImport: (patch: Partial<ThemeState>) => void;
};

function baseFromPreset(preset = harbor): ThemeState & { presetId: string | null } {
  return {
    name: preset.name,
    appearance: preset.appearance,
    presetId: preset.id,
    bg: preset.bg,
    fg: preset.fg,
    accent: preset.accent,
    accent2: preset.accent2,
    roles: rolesFromColors(preset.roles),
    ...emptyOverrides(),
  };
}

export const useStudio = create<StudioState>()(
  persist(
    (set, get) => ({
      ...baseFromPreset(),
      setName: (name) => set({ name }),
      setAppearance: (appearance) => {
        const current = get();
        if (current.appearance === appearance) return;
        const flip = isDark(current.appearance) !== isDark(appearance);
        if (!flip) {
          set({ appearance, presetId: null });
          return;
        }
        const roles = { ...current.roles };
        for (const id of ROLE_IDS) roles[id] = { ...roles[id], color: flipHex(roles[id].color) };
        const flipMap = (record: Record<string, string>) => {
          const next: Record<string, string> = {};
          for (const [key, value] of Object.entries(record)) next[key] = flipHex(value);
          return next;
        };
        set({
          appearance,
          presetId: null,
          bg: flipHex(current.bg),
          fg: flipHex(current.fg),
          accent: flipHex(current.accent),
          accent2: flipHex(current.accent2),
          roles,
          colorOverrides: flipMap(current.colorOverrides),
          kateColorOverrides: flipMap(current.kateColorOverrides),
        });
      },
      setSurface: (key, value) => set({ [key]: value, presetId: null }),
      setRole: (id, patch) =>
        set({
          presetId: null,
          roles: { ...get().roles, [id]: { ...get().roles[id], ...patch } },
        }),
      pinColor: (id, value) => set({ colorOverrides: { ...get().colorOverrides, [id]: value } }),
      unpinColor: (id) => {
        const next = { ...get().colorOverrides };
        delete next[id];
        set({ colorOverrides: next });
      },
      pinToken: (id, patch) =>
        set({ tokenOverrides: { ...get().tokenOverrides, [id]: { ...get().tokenOverrides[id], ...patch } } }),
      unpinToken: (id) => {
        const next = { ...get().tokenOverrides };
        delete next[id];
        set({ tokenOverrides: next });
      },
      pinSemantic: (id, patch) =>
        set({
          semanticOverrides: { ...get().semanticOverrides, [id]: { ...get().semanticOverrides[id], ...patch } },
        }),
      unpinSemantic: (id) => {
        const next = { ...get().semanticOverrides };
        delete next[id];
        set({ semanticOverrides: next });
      },
      pinKateStyle: (name, patch) =>
        set({
          kateStyleOverrides: {
            ...get().kateStyleOverrides,
            [name]: { ...get().kateStyleOverrides[name], ...patch },
          },
        }),
      unpinKateStyle: (name) => {
        const next = { ...get().kateStyleOverrides };
        delete next[name];
        set({ kateStyleOverrides: next });
      },
      pinKateColor: (id, value) => set({ kateColorOverrides: { ...get().kateColorOverrides, [id]: value } }),
      unpinKateColor: (id) => {
        const next = { ...get().kateColorOverrides };
        delete next[id];
        set({ kateColorOverrides: next });
      },
      applyPreset: (id) => {
        const preset = PRESETS.find((item) => item.id === id);
        if (!preset) return;
        set(baseFromPreset(preset));
      },
      shuffle: () => {
        const rolled = shufflePalette(get().appearance);
        set({
          presetId: null,
          name: get().name === harbor.name ? "Draft" : get().name,
          bg: rolled.bg,
          fg: rolled.fg,
          accent: rolled.accent,
          accent2: rolled.accent2,
          roles: rolesFromColors(rolled.roles),
          ...emptyOverrides(),
        });
      },
      clearPins: () => set(emptyOverrides()),
      liftWeak: () => {
        const state = get();
        const bg = mustHex(state.bg);
        const roles = { ...state.roles };
        for (const id of ROLE_IDS) {
          const min = id === "comment" || id === "punctuation" ? 3.4 : 4.5;
          roles[id] = { ...roles[id], color: toHex(ensureContrast(mustHex(roles[id].color), bg, min)) };
        }
        set({
          roles,
          fg: toHex(ensureContrast(mustHex(state.fg), bg, 7)),
        });
      },
      applyImport: (patch) => set({ ...patch, presetId: null }),
    }),
    {
      name: "scopewright.v1",
      skipHydration: true,
      partialize: (state) => ({
        name: state.name,
        appearance: state.appearance,
        presetId: state.presetId,
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
    },
  ),
);
