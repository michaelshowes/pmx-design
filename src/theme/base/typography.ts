import type { TypographyVariantsOptions } from '@mui/material';
import {
	fontFamily,
	fontWeight,
	typographyTokens as t,
} from '../../tokens/typography';

// Base typography settings for the design system
export const typography: TypographyVariantsOptions = {
	fontFamily: fontFamily.roboto,
	fontSize: 14,
	fontWeightLight: fontWeight.light,
	fontWeightRegular: fontWeight.regular,
	fontWeightMedium: fontWeight.medium,
	h1: {
		fontSize: t.h1.fontSize,
		fontWeight: t.h1.fontWeight
	},
	h2: {
		fontSize: t.h2.fontSize,
		fontWeight: t.h2.fontWeight
	},
	h3: {
		fontSize: t.h3.fontSize,
		fontWeight: t.h3.fontWeight
	},
	h4: {
		fontSize: t.h4.fontSize,
		fontWeight: t.h4.fontWeight
	},
	h5: {
		fontSize: t.h5.fontSize,
		fontWeight: t.h5.fontWeight
	},
	h6: {
		fontSize: t.h6.fontSize,
		fontWeight: t.h6.fontWeight
	},
	h7: {
		fontSize: t.h7.fontSize,
		fontWeight: t.h7.fontWeight
	},
	subtitle1: {
		fontSize: t.subtitle1.fontSize,
		fontWeight: t.subtitle1.fontWeight
	},
	subtitle2: {
		fontSize: t.subtitle2.fontSize,
		fontWeight: t.subtitle2.fontWeight
	},
	body1: {
		fontSize: t.body1.fontSize,
		fontWeight: t.body1.fontWeight
	},
	body2: {
		fontSize: t.body2.fontSize,
		fontWeight: t.body2.fontWeight
	},
	body3: {
		fontSize: t.body3.fontSize,
		fontWeight: t.body3.fontWeight
	},
	body4: {
		fontSize: t.body4.fontSize,
		fontWeight: t.body4.fontWeight
	},
	button: {
		fontSize: t.button.fontSize,
		fontWeight: t.button.fontWeight,
		lineHeight: 1
	},
	appNameLight: {
		fontSize: t.appNameLight.fontSize,
		fontWeight: t.appNameLight.fontWeight
	},
	appNameRegular: {
		fontSize: t.appNameRegular.fontSize,
		fontWeight: t.appNameRegular.fontWeight
	},
	appNameBold: {
		fontSize: t.appNameBold.fontSize,
		fontWeight: t.appNameBold.fontWeight
	},
	usArmyRegular: {
		fontFamily: fontFamily.usArmy,
		fontSize: t.usArmyRegular.fontSize,
		fontWeight: t.usArmyRegular.fontWeight
	},
	usArmyBold: {
		fontFamily: fontFamily.usArmy,
		fontSize: t.usArmyBold.fontSize,
		fontWeight: t.usArmyBold.fontWeight
	},
	usArmyLight: {
		fontFamily: fontFamily.usArmy,
		fontSize: t.usArmyLight.fontSize,
		fontWeight: t.usArmyLight.fontWeight
	}
};
