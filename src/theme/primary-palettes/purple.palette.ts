import type { PaletteColor } from "@mui/material/styles";
import { primary } from "../../tokens/colors";
import { createPalette } from "../base/createPalette";

const purple = primary.purple;

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: purple.dark.l80,
  l60: purple.dark.l60,
  l40: purple.dark.l40,
  l20: purple.dark.l20,
  light: purple.dark.l20,
  main: purple.dark.main,
  dark: purple.dark.d20,
  d20: purple.dark.d20,
  d40: purple.dark.d40,
  d60: purple.dark.d60,
  d80: purple.dark.d80,
  contrastText: "#ffffff",
};

export const lightPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: purple.light.l80,
  l60: purple.light.l60,
  l40: purple.light.l40,
  l20: purple.light.l20,
  light: purple.light.l20,
  main: purple.light.main,
  dark: purple.light.d20,
  d20: purple.light.d20,
  d40: purple.light.d40,
  d60: purple.light.d60,
  d80: purple.light.d80,
  contrastText: "#ffffff",
};

// Create the light and dark mode palettes using the createPalette function
export const purpleThemeLightMode = createPalette("light", lightPalette);
export const purpleThemeDarkMode = createPalette("dark", darkPalette);

// Export the palettes as an object for easy access in theme creation
export default {
  light: purpleThemeLightMode,
  dark: purpleThemeDarkMode,
};
