import type { ThemeOptions } from "@mui/material/styles";
import type { Mode, ModePalettes } from "./ModePalettes.type";
import { typography } from "./typography";
import { spacingBase } from "../../tokens/spacing";
import { muiAvatarOverrides, muiButtonGroupOverrides, muiButtonOverrides, muiChipOverrides, muiFabOverrides, muiIconButtonOverrides, muiToggleButtonOverrides } from "../overrides";

/**
 * Create design tokens for the theme based on the mode (light or dark) and the provided palettes for each mode.
 * This function generates a ThemeOptions object that can be used to create a MUI theme, including both standard MUI theme options and custom design system options.
 *
 * @param mode - "light" or "dark" mode to determine which palette to use from ModePalettes
 * @param ModePalettes
 * @returns ThemeOptions object that can be used to create a MUI theme, including both standard MUI theme options and custom design system options
 */
export const createDesignTokens = (
  mode: Mode,
  palettes: ModePalettes,
): ThemeOptions => {
  const isDarkMode = mode === "dark";

  return {
    palette: {
      mode,
      ...(mode === "light" ? palettes.light : palettes.dark),
      // Custom option for box shadows (DX improvement)
      boxShadow: "1px 2px 3px 0px rgba(0,0,0,0.25)",
    },
    spacing: spacingBase, // Base spacing unit (4px) for consistent spacing throughout the app
    shape: {
      borderRadius: 3, // Base border radius for components
    },
    typography: typography,
    components: {
      MuiAvatar: muiAvatarOverrides(palettes, isDarkMode),
      MuiButton: muiButtonOverrides(palettes, isDarkMode),
      MuiButtonGroup: muiButtonGroupOverrides(),
      MuiChip: muiChipOverrides(palettes, isDarkMode),
      MuiIconButton: muiIconButtonOverrides(palettes, isDarkMode),
      MuiFab: muiFabOverrides(palettes, isDarkMode),
      MuiToggleButton: muiToggleButtonOverrides(palettes, isDarkMode),
    },
  };
};
