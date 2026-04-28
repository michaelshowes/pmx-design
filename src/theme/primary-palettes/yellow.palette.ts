import type { PaletteColor } from "@mui/material/styles";
import { primary } from "../../tokens/colors";
import { createPalette } from "../base/createPalette";

const army = primary.army;

export const darkPalette: PaletteColor = {
  white: "#ffffff",
  black: "#000000",
  l80: army.dark.l80,
  l60: army.dark.l60,
  l40: army.dark.l40,
  l20: army.dark.l20,
  light: army.dark.l20,
  main: army.dark.main,
  dark: army.dark.d20,
  d20: army.dark.d20,
  d40: army.dark.d40,
  d60: army.dark.d60,
  d80: army.dark.d80,
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
