import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/IconButton";

/**
 * ???
 *
 * Elevations for backgrounds
 * Paper instead of Containers
 * - Containers is meant to be used for layout, not backgrounds. Paper is meant to be used for backgrounds, not layout.
 *
 * Call out additions to MUI, Use a color to make it clear that these are custom additions to the MUI palette, not standard MUI options. Maybe a bright pink or something that stands out.
 *
 * Document Sections:
 * - Icons
 * - Typography
 * - Colors
 *
 * Exclusions and Inclusions for component props:
 * - Need to Document/Call out these decisions in the code and documentation. For example, for the Button component, we are only including variant, size, color, disabled, startIcon, and endIcon. We are excluding other props like disableRipple, onClick, etc. This is a decision we made to simplify the API and focus on the most commonly used props. We should document this decision and call out which props are included and which are excluded in the documentation for the Button component.
 *
 *
 */

declare module "@mui/material/styles" {
  // (Custom) Define the structure of the scale palette
  interface ScalePalette {
    white: string;
    l90: string;
    l80: string;
    l60: string;
    l40: string;
    l20: string;
    main: string;
    d20: string;
    d40: string;
    d60: string;
    d80: string;
    d90: string;
    black: string;
  }

  // (Custom) Define the structure of the layout palette
  interface LayoutPalette {
    base: string;
    5: string;
    7: string;
    8: string;
    9: string;
    11: string;
    12: string;
    14: string;
    15: string;
    16: string;
  }

  // (Custom) Define the structure of the Graph palette
  interface GraphPalette {
    purple: string; // 1_purple
    cyan: string; // 2_cyan
    teal: string; // 3_teal
    pink: string; // 4_pink
    green: string; // 5_green
    blue: string; // 6_blue
    magenta: string; // 7_magenta
    yellow: string; // 8_yellow
    teal2: string; // 9_teal2
    cyan2: string; // 10_cyan2
    orange: string; // 11_orange
    purple2: string; // 12_purple
  }

  // (Custom) Define the structure of the Stacked Bars palette
  interface StackedBarsPalette {
    blue: string; // 6_blue
    magenta: string; // 7_magenta
    cyan: string; // 10_cyan2
    teal: string; // 9_teal2
    purple: string; // 1_purple
  }

  // ??? Should this be here. Specific to Griffin.AI
  // (Custom) Define the structure of the Operational Readiness palette
  interface OperationalReadinessPalette {
    fmc: string;
    pmc: string; // Added by Ancel
    pmcs: string;
    pmcm: string;
    nmc: string; // Added by Ancel
    nmcs: string;
    nmcm: string;
    dade: string;
    unknown: string; // Added by Ancel
  }

  // Extend the default MUI palette to include our custom scale and layout palettes
  interface Color {
    white?: string;
    black?: string;
    l90?: string;
    l80: string;
    l60: string;
    l40: string;
    l20: string;
    main: string;
    d20: string;
    d40: string;
    d60: string;
    d80: string;
    d90?: string;
    contrastText?: string;
  }

  // Extend the default MUI palette to include our custom scale and layout palettes
  interface PaletteColor {
    white?: string;
    black?: string;
    l90?: string;
    l80: string;
    l60: string;
    l40: string;
    l20: string;
    main: string;
    d20: string;
    d40: string;
    d60: string;
    d80: string;
    d90?: string;
    contrastText?: string;
  }

  // Extend the default MUI palette to include our custom scale and layout palettes
  interface SimplePaletteColorOptions {
    white?: string;
    black?: string;
    l90?: string;
    l80?: string;
    l60?: string;
    l40?: string;
    l20?: string;
    main: string;
    d20?: string;
    d40?: string;
    d60?: string;
    d80?: string;
    d90?: string;
  }

  interface PaletteColorOptions {
    white?: string;
    black?: string;
    l90?: string;
    l80?: string;
    l60?: string;
    l40?: string;
    l20?: string;
    main: string;
    d20?: string;
    d40?: string;
    d60?: string;
    d80?: string;
    d90?: string;
  }

  // Extend the MUI palette to include our custom scale and layout palettes
  interface Palette {
    scale: ScalePalette;
    layout: LayoutPalette;
    graph: GraphPalette;
    stackedBars: StackedBarsPalette;
    operationalReadiness: OperationalReadinessPalette;
    boxShadow: string; // Box shadow for DX Overwrite MUI default box shadow with our custom option
  }

  // Extend the MUI palette options to include our custom scale and layout palettes
  interface PaletteOptions {
    scale?: Partial<ScalePalette>;
    layout?: Partial<LayoutPalette>;
    graph?: Partial<GraphPalette>;
    stackedBars?: Partial<StackedBarsPalette>;
    operationalReadiness?: Partial<OperationalReadinessPalette>;
    boxShadow?: string; // Box shadow for DX Overwrite MUI default box shadow with our custom option
  }

  // Extend the MUI theme options to include our custom palette options
  interface Theme {
    palette: {
      scale: ScalePalette;
      layout: LayoutPalette;
      graph: GraphPalette;
      stackedBars: StackedBarsPalette;
      operationalReadiness: OperationalReadinessPalette;
    };
  }

  // Extend the MUI theme options to include our custom palette options
  interface ThemeOptions {
    palette: {
      scale?: Partial<ScalePalette>;
      layout?: Partial<LayoutPalette>;
      graph?: Partial<GraphPalette>;
      stackedBars?: Partial<StackedBarsPalette>;
      operationalReadiness?: Partial<OperationalReadinessPalette>;
    };
  }

  // Extend the default MUI typography variants to include our custom h7 variant
  interface TypographyVariants {
    h7: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    appNameRegular: React.CSSProperties;
    appNameBold: React.CSSProperties;
    appNameLight: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    appNameRegular?: React.CSSProperties;
    appNameBold?: React.CSSProperties;
    appNameLight?: React.CSSProperties;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    xlarge: true;
    xxlarge: true;
    xxxlarge: true;
    xxxxlarge: true;
  }
}
