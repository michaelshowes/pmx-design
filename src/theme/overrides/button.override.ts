import { fontSize } from '../../tokens/typography';
import { grayscale } from '../../tokens/colors';
import type { ModePalettes } from '../base/ModePalettes.type';

export const muiButtonOverrides = (
	modePalette: ModePalettes,
	isDarkMode: boolean
) => {
	const palette = isDarkMode ? modePalette.dark : modePalette.light;

	return {
		styleOverrides: {
			sizeMedium: {
				padding: '8px 16px'
			},
			sizeSmall: {
				fontSize: fontSize[16],
				padding: '5px 16px'
			},
			outlined: {
				border: 'none'
			},
			text: {
				color: grayscale.d80,
				'&:hover': { backgroundColor: grayscale.l60, color: grayscale.d80 },
				'&:active': { backgroundColor: grayscale.l40, color: grayscale.d80 },
				'&:disabled': { color: grayscale.main }
			},
			containedPrimary: {
				backgroundColor: palette.primary?.main,
				boxShadow: 'none',
				'&:hover': {
					backgroundColor: isDarkMode
						? palette.primary?.l40
						: palette.primary?.d40,
					boxShadow: 'none'
				},
				'&:active': {
					backgroundColor: isDarkMode
						? palette.primary?.l60
						: palette.primary?.d60,
					boxShadow: 'none'
				},
				'&:disabled': {
					backgroundColor: isDarkMode
						? palette.primary?.d40
						: palette.primary?.l40,
					color: grayscale.l80,
					boxShadow: 'none'
				}
			},
			containedError: {
				backgroundColor: palette.error?.main,
				boxShadow: 'none',
				'&:hover': {
					backgroundColor: isDarkMode ? palette.error?.l40 : palette.error?.d40,
					boxShadow: 'none'
				},
				'&:active': {
					backgroundColor: isDarkMode ? palette.error?.l60 : palette.error?.d60,
					boxShadow: 'none'
				},
				'&:disabled': {
					backgroundColor: isDarkMode ? palette.error?.d40 : palette.error?.l40,
					color: grayscale.l80,
					boxShadow: 'none'
				}
			},
			containedSuccess: {
				backgroundColor: palette.success?.main,
				boxShadow: 'none',
				'&:hover': {
					backgroundColor: isDarkMode
						? palette.success?.l40
						: palette.success?.d40,
					boxShadow: 'none'
				},
				'&:active': {
					backgroundColor: isDarkMode
						? palette.success?.l60
						: palette.success?.d60,
					boxShadow: 'none'
				},
				'&:disabled': {
					backgroundColor: isDarkMode
						? palette.success?.d40
						: palette.success?.l40,
					color: grayscale.l80,
					boxShadow: 'none'
				}
			},
			outlinedPrimary: {
				boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.primary?.l20 : palette.primary?.d20}`,
				color: isDarkMode ? palette.primary?.l20 : palette.primary?.d20,
				'&:hover': {
					backgroundColor: isDarkMode
						? palette.primary?.d60
						: palette.primary?.l60,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.primary?.l20 : palette.primary?.d20}`,
					color: isDarkMode ? palette.primary?.l20 : palette.primary?.d20
				},
				'&:active': {
					backgroundColor: isDarkMode
						? palette.primary?.d40
						: palette.primary?.l40,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.primary?.l20 : palette.primary?.d20}`,
					color: isDarkMode ? palette.primary?.l20 : palette.primary?.d20
				},
				'&:disabled': {
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.primary?.d60 : palette.primary?.l60}`,
					color: isDarkMode ? palette.primary?.d40 : palette.primary?.l40
				}
			},
			outlinedError: {
				boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.error?.l20 : palette.error?.d20}`,
				color: isDarkMode ? palette.error?.l20 : palette.error?.d20,
				'&:hover': {
					backgroundColor: isDarkMode ? palette.error?.d60 : palette.error?.l80,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.error?.l20 : palette.error?.d20}`,
					color: isDarkMode ? palette.error?.l20 : palette.error?.d20
				},
				'&:active': {
					backgroundColor: isDarkMode ? palette.error?.d40 : palette.error?.l60,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.error?.l20 : palette.error?.d20}`,
					color: isDarkMode ? palette.error?.l20 : palette.error?.d20
				},
				'&:disabled': {
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.error?.d60 : palette.error?.l40}`,
					color: isDarkMode ? palette.error?.d40 : palette.error?.l40
				}
			},
			outlinedSuccess: {
				boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.success?.l20 : palette.success?.d20}`,
				color: isDarkMode ? palette.success?.l20 : palette.success?.d20,
				'&:hover': {
					backgroundColor: isDarkMode
						? palette.success?.d60
						: palette.success?.l80,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.success?.l20 : palette.success?.d20}`,
					color: isDarkMode ? palette.success?.l20 : palette.success?.d20
				},
				'&:active': {
					backgroundColor: isDarkMode
						? palette.success?.d40
						: palette.success?.l60,
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.success?.l20 : palette.success?.d20}`,
					color: isDarkMode ? palette.success?.l20 : palette.success?.d20
				},
				'&:disabled': {
					boxShadow: `inset 0 0 0 1px ${isDarkMode ? palette.success?.d40 : palette.success?.d20}`,
					color: isDarkMode ? palette.success?.d40 : palette.success?.d20
				}
			}
		}
	};
};
