// src/themes/dark.theme.js

import type { PaletteColor } from "@mui/material/styles";
import { createPalette } from "../base/createPalette";

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: "#dbedff",
  l60: "#d8dbff",
  l40: "#94caff",
  l20: "#71b8ff",
  light: "#71b8ff",
  main: "#4da6ff",
  dark: "#3e85cc",
  d20: "#3e85cc",
  d40: "#2e6499",
  d60: "#1f4266",
  d80: "#0f2133",
  contrastText: "#ffffff",
};

export const lightPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: "#cce3fa",
  l60: "#99c7f5",
  l40: "#66abf0",
  l20: "#338feb",
  light: "#338feb",
  main: "#0073e6",
  dark: "#005cb8",
  d20: "#005cb8",
  d40: "#00458a",
  d60: "#002e5c",
  d80: "#00172e",
  contrastText: "#ffffff",
};

// Create the light and dark mode palettes using the createPalette function
export const blueThemeLightMode = createPalette("light", lightPalette);
export const blueThemeDarkMode = createPalette("dark", darkPalette);

console.log("Blue Theme Light Mode Palette:", blueThemeLightMode);

// Export the palettes as an object for easy access in theme creation
export default {
  light: blueThemeLightMode,
  dark: blueThemeDarkMode,
};
