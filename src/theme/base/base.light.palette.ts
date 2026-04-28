import type { PaletteOptions } from "@mui/material/styles";
import {
  grayscale,
  primary,
  semantic,
  layout,
  graph,
  stackedBars,
  operationalReadiness,
} from "../../tokens/colors";

const blue = primary.blue.light;
const danger = semantic.danger.light;
const warning = semantic.warning.light;
const info = semantic.info.light;
const confirmation = semantic.confirmation.light;

export const baseLightPalette: PaletteOptions = {
  mode: "light",
  common: {
    black: grayscale.black,
    white: grayscale.white,
  },
  primary: {
    l80: blue.l80,
    l60: blue.l60,
    l40: blue.l40,
    l20: blue.l20,
    light: blue.l20,
    main: blue.main,
    dark: blue.d20,
    d20: blue.d20,
    d40: blue.d40,
    d60: blue.d60,
    d80: blue.d80,
    contrastText: grayscale.white,
  },
  /**
   * Army Palette in Design System
   * (Dark Mode Only) - Adjusted for better visibility and contrast in dark mode, while maintaining the overall color identity.
   * Generally not used in Design System, but available for use in specific needs.
   */
  secondary: {
    l80: primary.army.dark.l80,
    l60: primary.army.dark.l60,
    l40: primary.army.dark.l40,
    l20: primary.army.dark.l20,
    light: primary.army.dark.l20,
    main: primary.army.dark.main,
    dark: primary.army.dark.d20,
    d20: primary.army.dark.d20,
    d40: primary.army.dark.d40,
    d60: primary.army.dark.d60,
    d80: primary.army.dark.d80,
    contrastText: grayscale.white,
  },
  error: {
    l90: danger.l90,
    l80: danger.l80,
    l60: danger.l60,
    l40: danger.l40,
    l20: danger.l20,
    light: danger.l20,
    main: danger.main,
    dark: danger.d20,
    d20: danger.d20,
    d40: danger.d40,
    d60: danger.d60,
    d80: danger.d80,
    contrastText: grayscale.white,
  },
  // Caution in Design System
  warning: {
    l90: "",
    l80: warning.l80,
    l60: warning.l60,
    l40: "",
    l20: "",
    light: "",
    main: warning.main,
    dark: warning.d20,
    d20: warning.d20,
    d40: warning.d40,
    d60: warning.d60,
    d80: "",
    d90: "",
    contrastText: grayscale.white,
  },
  info: {
    l90: "",
    l80: info.l80,
    l60: info.l60,
    l40: info.l40,
    l20: "",
    light: "",
    main: info.main,
    dark: info.d20,
    d20: info.d20,
    d40: info.d40,
    d60: info.d60,
    d80: "",
    d90: "",
    contrastText: grayscale.white,
  },
  // Confimation in Design System
  success: {
    l90: "",
    l80: confirmation.l80,
    l60: confirmation.l60,
    l40: confirmation.l40,
    l20: confirmation.l20,
    light: confirmation.l20,
    main: confirmation.main,
    dark: confirmation.d20,
    d20: confirmation.d20,
    d40: confirmation.d40,
    d60: confirmation.d60,
    d80: "",
    d90: "",
    contrastText: grayscale.white,
  },
  // ??? Not defined in Design System, but available for use in specific needs.
  grey: {
    white: grayscale.white,
    50: grayscale.l90,
    100: grayscale.l80,
    200: grayscale.l60,
    300: grayscale.l40,
    400: grayscale.l20,
    500: grayscale.main,
    600: grayscale.d20,
    700: grayscale.d40,
    800: grayscale.d60,
    900: grayscale.d80,
    A100: grayscale.l80,
    A200: grayscale.l60,
    A400: grayscale.l20,
    A700: grayscale.d40,
    black: grayscale.black,
    l90: grayscale.l90,
    l80: grayscale.l80,
    l60: grayscale.l60,
    l40: grayscale.l40,
    l20: grayscale.l20,
    main: grayscale.main,
    d20: grayscale.d20,
    d40: grayscale.d40,
    d60: grayscale.d60,
    d80: grayscale.d80,
    d90: grayscale.d90,
  },
  text: {
    primary: grayscale.d80, // scale.d80
    secondary: grayscale.d40, // scale.d40
    disabled: grayscale.d20, // scale.d20
  },
  divider: layout.light[16],
  background: { default: grayscale.white, paper: grayscale.white },
  // Custom from Design System
  scale: {
    white: grayscale.white,
    l90: grayscale.l90,
    l80: grayscale.l80,
    l60: grayscale.l60,
    l40: grayscale.l40,
    l20: grayscale.l20,
    main: grayscale.main,
    d20: grayscale.d20,
    d40: grayscale.d40,
    d60: grayscale.d60,
    d80: grayscale.d80,
    d90: grayscale.d90,
    black: grayscale.black,
  },
  layout: {
    base: layout.light.base,
    5: layout.light[5],
    7: layout.light[7],
    8: layout.light[8],
    9: layout.light[9],
    11: layout.light[11],
    12: layout.light[12],
    14: layout.light[14],
    15: layout.light[15],
    16: layout.light[16],
  },
  /**
   * ??? Ask/Chat design team about Data Visualization/Graph color strategies.
   * Grayscale
   * Qualitative/Categorical (12 colors)
   * Sequential (Gradation of 1-3 colors with light/dark variants to represent low to high values)
   * Diverging (2-3 colors with high contrast representing two different extremes, plus neutral center)
   *
   * eg: https://spectrum.adobe.com/page/color-for-data-visualization/
   * For now, we have defined a set of 12 qualitative colors for graphs, as well as a specific palette for stacked bars and operational readiness. These can be used in specific needs, but we may want to consider how to integrate them more broadly into the Design System and MUI theme.
   */
  graph: {
    purple: graph.light.purple,
    cyan: graph.light.cyan,
    teal: graph.light.teal,
    pink: graph.light.pink,
    green: graph.light.green,
    blue: graph.light.blue,
    magenta: graph.light.magenta,
    yellow: graph.light.yellow,
    teal2: graph.light.teal2,
    cyan2: graph.light.cyan2,
    orange: graph.light.orange,
    purple2: graph.light.purple2,
  },
  stackedBars: {
    blue: stackedBars.light.blue,
    magenta: stackedBars.light.magenta,
    cyan: stackedBars.light.cyan,
    teal: stackedBars.light.teal,
    purple: stackedBars.light.purple,
  },
  operationalReadiness: {
    fmc: operationalReadiness.light.fmc,
    pmc: operationalReadiness.light.pmc,
    pmcs: operationalReadiness.light.pmcs,
    pmcm: operationalReadiness.light.pmcm,
    nmc: operationalReadiness.light.nmc,
    nmcs: operationalReadiness.light.nmcs,
    nmcm: operationalReadiness.light.nmcm,
    dade: operationalReadiness.light.dade,
    unknown: operationalReadiness.light.unknown,
  },
};
