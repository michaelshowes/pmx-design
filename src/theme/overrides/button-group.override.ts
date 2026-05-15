export const muiButtonGroupOverrides = () => ({
	defaultProps: {
		variant: 'contained' as const,
		disableElevation: true
	},
	styleOverrides: {
		root: {
			boxShadow: 'none'
		}
	}
});
