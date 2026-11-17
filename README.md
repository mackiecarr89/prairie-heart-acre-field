# Scopewright

Scopewright is a syntax-highlighting and editor-theme studio. One palette paints a full [VS Code](https://code.visualstudio.com/) color theme and a [KSyntaxHighlighting](https://invent.kde.org/frameworks/syntax-highlighting) theme for Kate, KWrite, and KDevelop.

The studio covers:

- **971** VS Code workbench colors
- **93** TextMate token rules and **46** semantic token rules
- **35** syntax roles (keywords, strings, types, and the rest)
- **31** Kate text styles and **28** Kate editor colors
- Dark, light, high-contrast dark, and high-contrast light appearances

Themes stay in the browser. Nothing is uploaded. The current theme is saved under the `scopewright.v1` key in `localStorage`.

## Using the studio

1. Pick a starting preset, or shuffle a new palette.
2. Tune the editor background, foreground, two accents, and the syntax roles. **Lift weak contrast** raises colors that fall below a readable ratio against the background.
3. Open **Tokens** to pin individual TextMate or semantic rules, and **Colors** to pin workbench or Kate UI colors. A pin overrides the color derived from the palette. **Follow palette** (or **Clear every pin** on Export) drops those overrides.
4. Switch the preview between a VS Code chrome mock and a Kate editor, and between a code snippet and a type specimen.
5. Export from the **Export** tab.

### Presets

| Name | Look |
| --- | --- |
| Harbor | Dark slate and brass |
| Daybook | Warm paper, teal ink |
| Signal | Night instrument, chartreuse |
| Nightpress | Ink black, newsprint red |
| Quartz | Cool daylight, cobalt |
| Kelp | Sea glass on black water |

### Export

| Download | What it is |
| --- | --- |
| `{slug}-color-theme.json` | VS Code color theme (`colors`, `tokenColors`, `semanticTokenColors`) |
| `package.json` | Minimal local extension manifest that points at that theme file |
| `{slug}.theme` | Kate / KSyntaxHighlighting theme |

You can also copy a `settings.json` snippet (`workbench.colorCustomizations` plus token customizations) or the theme JSON, and import an existing VS Code theme, a settings snippet, or a Kate `.theme` file. JSONC comments are stripped on import.

**VS Code.** Put the theme JSON in a folder named `themes`, next to the generated `package.json`. Copy that folder into your extensions directory and reload, or paste the settings snippet into `settings.json` to preview without an extension.

**Kate.** Save the `.theme` file to `~/.local/share/org.kde.syntax-highlighting/themes/` and choose it under **Settings → Configure Kate → Fonts & Colors**. KWrite and KDevelop read the same file.

`editor.selectionForeground` (and the terminal equivalent) are left out of the VS Code file unless you pin them or use a high-contrast appearance. Setting them replaces syntax color inside selections.

## Requirements

- [Node.js](https://nodejs.org/) 22
- npm

No database is required. Studio state is local.

## Getting started

```bash
npm install
npm run dev
```

The dev server listens on `0.0.0.0:8080`. Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

`npm run dev` goes through `scripts/with-app-env.mjs` so the app environment is loaded before Vite starts. Use the npm script rather than calling `vite` directly.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server on port 8080 |
| `npm run build` | Production build. Also runs `db:migrate`, which no-ops when `DATABASE_URL` is unset or there are no app migrations |
| `npm run preview` | Serve the production build |
| `npm run preview:restart` | Restart the production preview on `127.0.0.1:8081` |
| `npm run preview:stop` | Stop that preview |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Script tests and theme-adjacent unit tests |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |

A typical check before shipping a change:

```bash
npm run typecheck
npm test
npm run build
```

## Project layout

```text
src/components/app/     Studio UI: palette, tokens, colors, export, preview
src/data/vscode-colors.ts
src/lib/color.ts        Hex, HSL, and WCAG contrast
src/lib/theme/
  catalog.ts            Roles, TextMate rules, semantic tokens, Kate styles
  presets.ts            Starting palettes, shuffle, light/dark flip
  paint.ts              Derives workbench and editor colors from the palette
  build.ts              Resolves pins on top of the painted theme
  export.ts             VS Code / Kate writers and importers
  store.ts              Zustand store, persisted to localStorage
src/routes/             TanStack Start routes (the app is a single page)
scripts/                Env wrapper, production preview, checks
public/                 Static assets
```

Path alias `@/*` maps to `src/*` (see `tsconfig.json`).

## How a theme is built

1. Surfaces (`bg`, `fg`, `accent`, `accent2`) and an appearance set the palette.
2. Each syntax role is a color plus bold, italic, underline, and strikethrough.
3. `paint.ts` derives workbench colors, TextMate settings, semantic tokens, and Kate styles from those roles.
4. Pins in the Tokens and Colors panels replace individual derived values. Extra TextMate rules that do not match the built-in catalog are kept and exported as-is.
5. `export.ts` writes the VS Code theme JSON, the extension `package.json`, the settings snippet, and the Kate `.theme` file.

## Stack

React 19, TanStack Start and TanStack Router, Vite, Tailwind CSS 4, Zustand, and TypeScript. Production builds target Vercel through Nitro (`npm run build`).

## License

Generated Kate files are marked SPDX MIT. The Scopewright application itself does not currently declare a license.
