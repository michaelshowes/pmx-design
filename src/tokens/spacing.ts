// ─── Base Unit ───

export const spacingBase = 4;

// ─── Spacing Scale (4px grid) ───

export const spacing = {
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  44: 44,
  48: 48,
  52: 52,
  56: 56,
  60: 60,
} as const;

// ─── Spacing Categories ───

export const spacingCategory = {
  small: { min: 0, max: 8, description: 'Compact UI — padding between icons and labels' },
  medium: { min: 12, max: 24, description: 'Containers, form padding, component groups' },
  large: { min: 32, max: 60, description: 'Large hierarchy — section spacing' },
} as const;

// ─── Border Radius ───

export const radius = {
  4: 4,
  12: 12,
} as const;

// ─── 12 Column Grid ───

export const grid = {
  columns: 12,
  columnWidth: 99,
  gutter: 16,
  offset: 60,
} as const;

export type Spacing = typeof spacing;
export type Grid = typeof grid;
