import type { ModePalettes } from "../base/ModePalettes.type";

export const muiChipOverrides = (
  modePalette: ModePalettes,
  isDarkMode: boolean,
) => {
  const palette = isDarkMode ? modePalette.dark : modePalette.light;

  return {
    styleOverrides: {
      root: {
        height: 36,
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 400,
      },
      icon: {
        fontSize: 20,
        marginLeft: 4,
      },
      deleteIcon: {
        fontSize: 20,
        marginRight: 4,
      },
      // Outlined (unselected chips, input chips default)
      outlined: {
        borderColor: isDarkMode
          ? palette.text?.disabled
          : palette.text?.disabled,
      },
      // Filled default (input chip filled, plain chip filled)
      filledDefault: {
        backgroundColor: isDarkMode
          ? palette.action?.selected
          : "#ebebeb",
      },
      // Filled primary (selected choice chip)
      filledPrimary: {
        backgroundColor: isDarkMode
          ? palette.primary?.d60
          : palette.primary?.l60,
        color: palette.text?.primary,
        border: `1px solid ${palette.primary?.main}`,
        fontWeight: 500,
        "& .MuiChip-icon": {
          color: palette.primary?.main,
        },
        "&:hover": {
          backgroundColor: isDarkMode
            ? palette.primary?.d40
            : palette.primary?.l40,
          boxShadow: "1px 2px 2px 0px rgba(0,0,0,0.15)",
        },
      },
      // Outlined hover — only applies to clickable chips, not plain chips
      outlinedDefault: {
        "&.MuiChip-clickable:hover": {
          boxShadow: "1px 2px 2px 0px rgba(0,0,0,0.15)",
        },
      },
    },
  };
};
