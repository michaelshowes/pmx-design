import { grayscale } from '../../tokens/colors';
import { fontSize } from '../../tokens/typography';
import type { ModePalettes } from '../base/ModePalettes.type';

export const muiToggleButtonOverrides = (modePalette: ModePalettes, isDarkMode: boolean) => {
	const palette = isDarkMode ? modePalette.dark : modePalette.light;

	return {
		styleOverrides: {
			root: {
				fontSize: fontSize[16],
				lineHeight: 1,
				// Default (unselected)
				backgroundColor: 'transparent',
				color: grayscale.d20,
				border: `1px solid ${grayscale.main}`,
				'&:hover': {
					backgroundColor: isDarkMode ? palette.primary?.l40 : palette.primary?.l60,
					border: `1px solid ${grayscale.main}`,
					color: grayscale.d20
				},
				'&&.Mui-selected': {
					backgroundColor: isDarkMode ? palette.primary?.l40 : palette.primary?.l60,
					border: `1px solid ${isDarkMode ? palette.primary?.l20 : palette.primary?.main}`,
					color: grayscale.d60,
					'&:hover': {
						backgroundColor: isDarkMode ? palette.primary?.l40 : palette.primary?.l60,
						border: `1px solid ${isDarkMode ? palette.primary?.l20 : palette.primary?.main}`,
						color: grayscale.d60
					}
				},
				'&&.Mui-disabled:not(.Mui-selected)': {
					backgroundColor: grayscale.l80,
					border: `1px solid ${grayscale.l40}`,
					color: grayscale.main
				},
				'&&.Mui-disabled.Mui-selected': {
					backgroundColor: isDarkMode ? palette.primary?.l40 : palette.primary?.l60,
					border: `1px solid ${isDarkMode ? palette.primary?.l20 : palette.primary?.l40}`,
					color: palette.primary?.l20
				}
			},
			sizeMedium: {
				height: 36,
				padding: '0 16px'
			},
			sizeSmall: {
				height: 30,
				padding: '0 16px',
				fontSize: fontSize[16]
			}
		}
	};
};
