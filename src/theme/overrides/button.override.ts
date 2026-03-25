import type { ModePalettes } from "../base/ModePalettes.type";

export const muiButtonOverrides = (
  modePalette: ModePalettes,
  isDarkMode: boolean,
) => {
  const palette = isDarkMode ? modePalette.dark : modePalette.light;

  return {
    styleOverrides: {
      text: {
        color: palette.primary?.main,
        "&:hover": { color: palette.primary?.d40 },
        "&:active": { color: palette.primary?.d60 },
        "&:disabled": { color: palette.primary?.l40 },
      },
      // variant='contained' color='primary'
      containedPrimary: {
        backgroundColor: palette.primary?.main,
        "&:hover": {
          backgroundColor: isDarkMode
            ? palette.primary?.l40
            : palette.primary?.d40,
        },
        "&:active": {
          backgroundColor: isDarkMode
            ? palette.primary?.l60
            : palette.primary?.d60,
        },
        "&:disabled": {
          backgroundColor: isDarkMode
            ? palette.primary?.d40
            : palette.primary?.l40,
        },
      },
      // variant='contained' color='error' // Danger
      containedError: {
        backgroundColor: palette.error?.main,
        "&:hover": {
          backgroundColor: isDarkMode ? palette.error?.l40 : palette.error?.d40,
        },
        "&:active": {
          backgroundColor: isDarkMode ? palette.error?.l60 : palette.error?.d60,
        },
        "&:disabled": {
          backgroundColor: isDarkMode ? palette.error?.d40 : palette.error?.l80,
        },
      },
      // variant='contained' color='success' // Confirmation
      containedSuccess: {
        backgroundColor: palette.success?.main,
        "&:hover": {
          backgroundColor: isDarkMode
            ? palette.success?.l40
            : palette.success?.d40,
        },
        "&:active": {
          backgroundColor: isDarkMode
            ? palette.success?.l60
            : palette.success?.d60,
        },
        "&:disabled": {
          backgroundColor: isDarkMode
            ? palette.success?.d40
            : palette.success?.l80,
        },
      },
      // variant='outlined' color='primary'
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: isDarkMode
            ? palette.primary?.d60
            : palette.primary?.l60,
          borderColor: isDarkMode ? palette.primary?.l20 : palette.primary?.d20,
          color: isDarkMode ? palette.primary?.l20 : palette.primary?.d20,
        },
        "&:active": {
          backgroundColor: isDarkMode
            ? palette.primary?.d40
            : palette.primary?.l40,
          borderColor: isDarkMode ? palette.primary?.l20 : palette.primary?.d20,
          color: isDarkMode ? palette.primary?.l20 : palette.primary?.d20,
        },
        "&:disabled": {
          borderColor: isDarkMode ? palette.primary?.d60 : palette.primary?.l60,
          color: isDarkMode ? palette.primary?.d40 : palette.primary?.l40,
        },
      },
      // variant='outlined' color='error' // Danger
      outlinedError: {
        "&:hover": {
          backgroundColor: isDarkMode ? palette.error?.d60 : palette.error?.l40,
          borderColor: isDarkMode ? palette.error?.l20 : palette.error?.d20,
          color: isDarkMode ? palette.error?.l20 : palette.error?.d20,
        },
        "&:active": {
          backgroundColor: isDarkMode ? palette.error?.d40 : palette.error?.l60,
          borderColor: isDarkMode ? palette.error?.l20 : palette.error?.d20,
          color: isDarkMode ? palette.error?.l20 : palette.error?.d20,
        },
        "&:disabled": {
          borderColor: isDarkMode ? palette.error?.d60 : palette.error?.l40,
          color: isDarkMode ? palette.error?.d40 : palette.error?.l40,
        },
      },
      // variant='outlined' color='success' // Danger
      outlinedSuccess: {
        "&:hover": {
          backgroundColor: isDarkMode
            ? palette.success?.d60
            : palette.success?.l80,
          borderColor: isDarkMode ? palette.success?.l20 : palette.success?.d20,
          color: isDarkMode ? palette.success?.l20 : palette.success?.d20,
        },
        "&:active": {
          backgroundColor: isDarkMode
            ? palette.success?.d40
            : palette.success?.l60,
          borderColor: isDarkMode ? palette.success?.l20 : palette.success?.d20,
          color: isDarkMode ? palette.success?.l20 : palette.success?.d20,
        },
        "&:disabled": {
          borderColor: isDarkMode ? palette.success?.d40 : palette.success?.l40,
          color: isDarkMode ? palette.success?.d40 : palette.success?.l40,
        },
      },
    },
  };
};
