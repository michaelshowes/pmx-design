// src/themes/dark.theme.js

import type { PaletteColor } from "@mui/material/styles";
import { createPalette } from "../base/createPalette";

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: "#f3e9ff",
  l60: "#e7d3ff",
  l40: "#dabeff",
  l20: "#cea8ff",
  light: "#cea8ff",
  main: "#c292ff",
  dark: "#9b75cc",
  d20: "#9b75cc",
  d40: "#745899",
  d60: "#4e3a66",
  d80: "#271d33",
  contrastText: "#ffffff",
};

export const lightPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: "#e4cef9",
  l60: "#ca9ef3",
  l40: "#af6dec",
  l20: "#953de6",
  light: "#953de6",
  main: "#7a0ce0",
  dark: "#620ab3",
  d20: "#620ab3",
  d40: "#490786",
  d60: "#31055a",
  d80: "#18022d",
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
