import { useEffect, useState } from "react";
import { alphaOf, contrast, opaque, parseHex, setAlpha } from "@/lib/color";
import type { Style } from "@/lib/theme/types";

export function ratioLabel(fg: string, bg: string): { text: string; tone: "ok" | "thin" | "fail" } {
  const a = parseHex(fg);
  const b = parseHex(bg);
  if (!a || !b) return { text: "—", tone: "fail" };
  const value = contrast(a, b);
  const text = value.toFixed(1);
  if (value < 3) return { text, tone: "fail" };
  if (value < 4.5) return { text, tone: "thin" };
  return { text, tone: "ok" };
}

export function HexField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);
  return (
    <div className="flex items-center gap-2">
      <label className="relative size-11 shrink-0">
        <span className="checker absolute inset-0 rounded-md" />
        <span className="absolute inset-0 rounded-md border border-line" style={{ background: value }} />
        <input
          aria-label={label}
          type="color"
          value={opaque(value)}
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={(event) => onChange(keepAlpha(event.target.value, value))}
        />
      </label>
      <input
        aria-label={`${label} hex`}
        spellCheck={false}
        value={draft}
        onChange={(event) => {
          const next = event.target.value;
          setDraft(next);
          if (parseHex(next)) onChange(normalize(next, value));
        }}
        className="h-11 w-full rounded-md border border-line bg-bg-sunken px-2 font-mono text-xs text-fg"
      />
    </div>
  );
}

function keepAlpha(nextOpaque: string, previous: string): string {
  return setAlpha(nextOpaque, alphaOf(previous));
}

function normalize(input: string, previous: string): string {
  const parsed = parseHex(input);
  if (!parsed) return previous;
  if (input.trim().length <= 5) return setAlpha(input, alphaOf(previous));
  return input.startsWith("#") ? input : `#${input}`;
}

export function AlphaSlider({ value, onChange }: { value: string; onChange: (next: string) => void }) {
  const alpha = Math.round(alphaOf(value) * 100);
  return (
    <label className="flex items-center gap-3 text-xs text-muted">
      <span className="w-10">Alpha</span>
      <input
        type="range"
        min={0}
        max={100}
        value={alpha}
        aria-label="Alpha"
        onChange={(event) => onChange(setAlpha(value, Number(event.target.value) / 100))}
        className="h-2 flex-1 accent-accent"
      />
      <span className="w-8 font-mono text-fg">{alpha}</span>
    </label>
  );
}

const FLAGS = [
  ["bold", "B"],
  ["italic", "I"],
  ["underline", "U"],
  ["strike", "S"],
] as const;

export function FlagToggles({
  style,
  onChange,
}: {
  style: Pick<Style, "bold" | "italic" | "underline" | "strike">;
  onChange: (flag: (typeof FLAGS)[number][0], next: boolean) => void;
}) {
  return (
    <div className="flex gap-1">
      {FLAGS.map(([flag, label]) => {
        const on = style[flag];
        return (
          <button
            key={flag}
            type="button"
            aria-pressed={on}
            aria-label={flag}
            onClick={() => onChange(flag, !on)}
            className={
              "size-8 rounded-md border text-xs " +
              (on
                ? "border-accent bg-accent text-accent-ink"
                : "border-line bg-bg-sunken text-muted") +
              (flag === "italic" ? " italic" : "") +
              (flag === "underline" ? " underline" : "") +
              (flag === "strike" ? " line-through" : "")
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
