import type { PaletteColor } from "@mui/material/styles";
import { primary } from "../../tokens/colors";
import { createPalette } from "../base/createPalette";

const blue = primary.blue;

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: blue.dark.l80,
  l60: blue.dark.l60,
  l40: blue.dark.l40,
  l20: blue.dark.l20,
  light: blue.dark.l20,
  main: blue.dark.main,
  dark: blue.dark.d20,
  d20: blue.dark.d20,
  d40: blue.dark.d40,
  d60: blue.dark.d60,
  d80: blue.dark.d80,
  contrastText: "#ffffff",
};

export const lightPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: blue.light.l80,
  l60: blue.light.l60,
  l40: blue.light.l40,
  l20: blue.light.l20,
  light: blue.light.l20,
  main: blue.light.main,
  dark: blue.light.d20,
  d20: blue.light.d20,
  d40: blue.light.d40,
  d60: blue.light.d60,
  d80: blue.light.d80,
  contrastText: "#ffffff",
};

// Create the light and dark mode palettes using the createPalette function
export const blueThemeLightMode = createPalette("light", lightPalette);
export const blueThemeDarkMode = createPalette("dark", darkPalette);

// Export the palettes as an object for easy access in theme creation
export default {
  light: blueThemeLightMode,
  dark: blueThemeDarkMode,
};
