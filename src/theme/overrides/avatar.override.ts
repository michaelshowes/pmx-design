import type { ModePalettes } from "../base/ModePalettes.type";

export const muiAvatarOverrides = (
  _modePalette: ModePalettes,
  isDarkMode: boolean,
) => {
  return {
    styleOverrides: {
      root: {
        backgroundColor: isDarkMode ? "#6EE7D5" : "#005F51",
        color: isDarkMode ? "#1a1a1a" : "#ffffff",
        fontFamily: '"US Army", sans-serif',
        fontSize: 24,
        fontWeight: 400,
        width: 40,
        height: 40,
      },
    },
  };
};
