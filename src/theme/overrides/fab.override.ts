import { grayscale } from '../../tokens/colors';
import type { ModePalettes } from '../base/ModePalettes.type';

const fabShadow = '1px 2px 4px 0px rgba(0, 0, 0, 0.25)';

export const muiFabOverrides = (modePalette: ModePalettes, isDarkMode: boolean) => {
	const palette = isDarkMode ? modePalette.dark : modePalette.light;

	return {
		styleOverrides: {
			root: {
				boxShadow: fabShadow,
				'&:hover': { boxShadow: fabShadow },
				'&:active': { boxShadow: fabShadow },
				'&&.Mui-disabled': { boxShadow: fabShadow }
			},
			primary: {
				backgroundColor: palette.primary?.main,
				color: grayscale.white,
				'&:hover': {
					backgroundColor: isDarkMode ? palette.primary?.l20 : palette.primary?.d40
				},
				'&:active': {
					backgroundColor: isDarkMode ? palette.primary?.l40 : palette.primary?.d60
				},
				'&&.Mui-disabled': {
					backgroundColor: isDarkMode ? palette.primary?.l20 : palette.primary?.l40,
					color: grayscale.white
				}
			},
			sizeMedium: {
				width: 48,
				height: 48,
				'& .MuiSvgIcon-root': { fontSize: 30 }
			},
			sizeSmall: {
				width: 40,
				height: 40,
				'& .MuiSvgIcon-root': { fontSize: 24 }
			}
		}
	};
};
