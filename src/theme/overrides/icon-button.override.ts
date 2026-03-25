import type { ModePalettes } from "../base/ModePalettes.type";

export const muiIconButtonOverrides = (
  modePalette: ModePalettes,
  isDarkMode: boolean,
) => {
  const palette = isDarkMode ? modePalette.dark : modePalette.light;

  return {
    styleOverrides: {
      root: {
        fill: isDarkMode ? palette.scale?.d80 : palette.scale?.l20,
        background: "transparent",
        "&.MuiSvgIcon-root": {
          fill: isDarkMode ? palette.scale?.d80 : palette.scale?.l20,
        },
        "&:hover": { background: palette.scale?.l60 },
        "&:active": { background: palette.scale?.l40 },
        "&:disabled": { background: palette.scale?.main },
      },
      sizeSmall: {
        "& .MuiSvgIcon-root": {
          fontSize: 15,
        },
      },
      sizeMedium: {
        "& .MuiSvgIcon-root": {
          fontSize: 16,
        },
      },
      sizeLarge: {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
        },
      },
      sizeXlarge: {
        "& .MuiSvgIcon-root": {
          fontSize: 24,
        },
      },
      sizeXxlarge: {
        "& .MuiSvgIcon-root": {
          fontSize: 28,
        },
      },
      sizeXxxlarge: {
        "& .MuiSvgIcon-root": {
          fontSize: 30,
        },
      },
      sizeXxxxlarge: {
        "& .MuiSvgIcon-root": {
          fontSize: 36,
        },
      },
    },
  };
};
