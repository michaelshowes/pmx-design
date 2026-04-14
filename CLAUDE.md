# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm storybook        # Start Storybook dev server (port 6006) — primary workflow
pnpm dev              # Start Vite dev server
pnpm build            # tsc -b && vite build
pnpm lint             # ESLint (flat config, eslint.config.js)
pnpm build-storybook  # Build static Storybook
```

There is no test script defined yet. Vitest + Playwright are installed but not wired up.

## Architecture

This is a **MUI-based design system library** — a component wrapper layer over `@mui/material` with a custom multi-theme system, documented in Storybook.

### Component Pattern

Components live in `src/components/Inputs/[ComponentName]/`. Each component:

- Wraps the corresponding MUI component
- Uses `Pick<MuiProps, ...>` to expose only intentional props
- Adds a `label?: string` prop where applicable (rendered as children or via `FormControlLabel`)
- Has a co-located `Component.stories.tsx`

```tsx
// Standard pattern (Button.tsx)
type ButtonBaseProps = Pick<MuiButtonProps, 'disabled' | 'variant' | 'color' | 'size' | ...>;
export interface ButtonProps extends ButtonBaseProps { label?: string; }
export default function Button({ label, ...rest }: ButtonProps) {
  return <MuiButton {...rest}>{label}</MuiButton>;
}
```

### Theme System

Themes are built in layers inside `src/theme/`:

1. **`primary-palettes/`** — raw color scales (`blue.palette.ts`, `purple.palette.ts`, `yellow.palette.ts`)
2. **`base/createDesignTokens.ts`** — assembles full `ThemeOptions`: spacing (4px base), borderRadius (3px), typography, component overrides
3. **`palettes.ts`** — exports the `themes` map used everywhere (`blue_light`, `blue_dark`, `purple_light`, `purple_dark`, `yellow_dark`)
4. **`material.d.ts`** — augments MUI types with custom palette keys: `scale`, `layout`, `graph`, `stackedBars`, `operationalReadiness`, `boxShadow`, plus custom typography variants (`h7`, `body3`, `body4`, `appNameRegular/Bold/Light`) and IconButton size overrides (`xlarge` → `xxxxlarge`)

Component overrides go in `src/theme/overrides/` (e.g. `button.override.ts`).

### Storybook

- Stories discovered via `src/**/*.stories.tsx` — co-locate next to components
- `withMuiTheme` decorator (`.storybook/with-mui-theme.decorator.tsx`) wraps every story in `ThemeProvider` + `CssBaseline`; theme is selected from the global toolbar
- `autodocs` tag is set globally — all stories get a Docs page automatically
- `propFilter` in `main.ts` strips third-party `node_modules` props but passes through `@mui/*` props

### Story Conventions

Follow the pattern in `src/components/Inputs/Button/Button.stories.tsx`:

```tsx
const meta: Meta<typeof Component> = {
  title: 'Inputs/ComponentName',
  component: Component,
  parameters: {
    design: { type: 'figma', url: '<figma-url>' },
    docs: { description: { component: '...' } }
  },
  args: { /* sensible defaults */ },
  argTypes: {
    propName: {
      description: 'Figma: **PropertyName** — explanation',
      control: { type: 'select' | 'inline-radio' | 'boolean' | 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {};                          // playground
export const SomeName: Story = { name: 'State: Foo', ... }; // use name only when it differs from the export identifier
```

- **Do not add `name` when it matches what Storybook auto-generates** from the export identifier (e.g. `export const AllStates` → "All States"; adding `name: 'All States'` triggers a lint error)
- Use section-divider comments: `// ─── Section Name ───`
- Figma URL goes in `parameters.design`

### File Naming

| Type               | Convention          |
| ------------------ | ------------------- |
| Component directories | `PascalCase/` |
| Component files | `PascalCase.tsx` |
| Stories | `PascalCase.stories.tsx` |
| Theme / util files | `kebab-case.ts` |
| Type-only files | `*.type.ts` |
| MUI augmentation | `material.d.ts` |

### Package Manager

Use **pnpm** (not npm or yarn). Lock file is `pnpm-lock.yaml`.
