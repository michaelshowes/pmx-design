// src/themes/dark.theme.js

import type { PaletteColor } from "@mui/material/styles";
import { createPalette } from "../base/createPalette";

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: "#fff7d6",
  l60: "#ffeeac",
  l40: "#ffe683",
  l20: "#ffdd59",
  light: "#ffdd59",
  main: "#ffd530",
  dark: "#ccaa26",
  d20: "#ccaa26",
  d40: "#99801d",
  d60: "#665513",
  d80: "#332b0a",
  contrastText: "#ffffff",
};

// Create the light and dark mode palettes using the createPalette function
export const yellowThemeDarkMode = createPalette("dark", darkPalette);

// Export the palettes as an object for easy access in theme creation
// DARK MODE ONLY - Yellow palette is primarily designed for dark mode, and may not provide optimal contrast and visibility in light mode. Use with caution in light mode, and consider customizing the palette for better results if needed.
export default {
  light: yellowThemeDarkMode,
  dark: yellowThemeDarkMode,
};
