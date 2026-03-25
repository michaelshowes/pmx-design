import type { PaletteOptions } from "@mui/material/styles";

export type Mode = "light" | "dark";

/**
 * Defines the structure for themed palettes, containing both light and dark mode palette options.
 */
export type ModePalettes = {
  light: PaletteOptions;
  dark: PaletteOptions;
};
