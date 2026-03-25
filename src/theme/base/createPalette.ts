import type { PaletteColor, PaletteOptions } from "@mui/material";
import { baseLightPalette } from "./base.light.palette";
import { baseDarkPalette } from "./base.dark.palette";
import type { Mode } from "./ModePalettes.type";

/**
 * Creates a MUI theme palette based on the specified mode.
 *
 * @param mode - "light" or "dark" mode to determine which base palette to use
 * @returns PaletteOptions object that can be used to create a MUI theme palette,
 * including both standard MUI palette options and custom Design System palette options
 */
export const createPalette = (
  mode: Mode,
  palette: PaletteColor,
): PaletteOptions => {
  const basePalette = mode === "light" ? baseLightPalette : baseDarkPalette;

  return {
    mode: mode,
    common: { ...basePalette.common },
    primary: palette,
    secondary: { ...basePalette.secondary },
    error: { ...basePalette.error },
    warning: { ...basePalette.warning },
    info: { ...basePalette.info },
    success: { ...basePalette.success },
    grey: { ...basePalette.grey },
    text: { ...basePalette.text },
    divider: basePalette.divider || "#e0e0e0", // Default divider color if not provided in base palette
    action: { ...basePalette.action },
    background: { ...basePalette.background },

    // Common palette options
    contrastThreshold: 4.5, // MUI default is 3, but we want to ensure better contrast for accessibility
    tonalOffset: 0.2, // ??? Ask Designers

    // Design System specific palette options
    scale: basePalette.scale,
    layout: basePalette.layout,
    graph: basePalette.graph,
    stackedBars: basePalette.stackedBars,
    operationalReadiness: basePalette.operationalReadiness,
  };
};
