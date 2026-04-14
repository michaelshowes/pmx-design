import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { themes } from '../src/theme/palettes';

export const withMuiTheme = (Story, context) => {
	const { theme: themeKey } = context.globals;

	// only recompute the theme if the themeKey changes
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const theme = useMemo(
		() => themes[themeKey] || themes['blue_light'],
		[themeKey]
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Story />
			</ThemeProvider>
		</LocalizationProvider>
	);
};
