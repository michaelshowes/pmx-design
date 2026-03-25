import { createTheme } from "@mui/material";
import { createDesignTokens } from "./base/createDesignTokens";
import { bluePalette, purplePalette, yellowPalette } from "./primary-palettes";


// Define the available theme keys as a TypeScript type for better type safety
export type Themes =
  | "blue_light"
  | "blue_dark"
  | "purple_light"
  | "purple_dark"
  | "yellow_dark";

// Create MUI themes using the createDesignTokens function and the primary palettes
export const themes = {
  blue_light: createTheme({ ...createDesignTokens("light", bluePalette) }),
  blue_dark: createTheme({ ...createDesignTokens("dark", bluePalette) }),
  purple_light: createTheme({ ...createDesignTokens("light", purplePalette) }),
  purple_dark: createTheme({ ...createDesignTokens("dark", purplePalette) }),
  yellow_dark: createTheme({ ...createDesignTokens("dark", yellowPalette) }),
};
