import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themes } from '../src/theme/palettes';

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useMemo(() => themes[themeKey] || themes['blue_light'], [themeKey])

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  };