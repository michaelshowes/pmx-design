// ─── Font Families ───

export const fontFamily = {
	roboto: '"Roboto", "Helvetica", "Arial", sans-serif',
	usArmy: '"US Army", sans-serif'
} as const;

// ─── Font Weights ───

export const fontWeight = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700
} as const;

// ─── Font Sizes (px) ───

export const fontSize = {
	96: 96,
	60: 60,
	48: 48,
	34: 34,
	24: 24,
	20: 20,
	16: 16,
	14: 14
} as const;

// ─── Typography Variants ───

export const typographyTokens = {
	h1: {
		fontSize: fontSize[96],
		fontWeight: fontWeight.light,
		letterSpacing: 0
	},
	h2: {
		fontSize: fontSize[60],
		fontWeight: fontWeight.light,
		letterSpacing: 0
	},
	h3: {
		fontSize: fontSize[48],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	h4: {
		fontSize: fontSize[34],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	h5: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	h6: {
		fontSize: fontSize[20],
		fontWeight: fontWeight.medium,
		letterSpacing: 0
	},
	h7: {
		fontSize: fontSize[20],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	subtitle1: {
		fontSize: fontSize[16],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	subtitle2: {
		fontSize: fontSize[14],
		fontWeight: fontWeight.medium,
		letterSpacing: 0
	},
	body1: {
		fontSize: fontSize[16],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	body2: {
		fontSize: fontSize[16],
		fontWeight: fontWeight.medium,
		letterSpacing: 0
	},
	body3: {
		fontSize: fontSize[14],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	body4: {
		fontSize: fontSize[14],
		fontWeight: fontWeight.medium,
		letterSpacing: 0
	},
	button: {
		fontSize: fontSize[16],
		fontWeight: fontWeight.medium,
		letterSpacing: 0
	},
	appNameRegular: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	appNameBold: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.bold,
		letterSpacing: 0
	},
	appNameLight: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.light,
		letterSpacing: 0
	},
	usArmyRegular: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.regular,
		letterSpacing: 0
	},
	usArmyBold: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.bold,
		letterSpacing: 0
	},
	usArmyLight: {
		fontSize: fontSize[24],
		fontWeight: fontWeight.light,
		letterSpacing: 0
	}
} as const;

export type TypographyTokens = typeof typographyTokens;
