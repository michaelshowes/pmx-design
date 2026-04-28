import { type TypographyProps } from '@mui/material';
import { typographyTokens as t } from '../../tokens/typography';

type TypographyVariant = {
	variant: TypographyProps['variant'];
	font: string;
	fontSize: number;
	fontWeight: number;
	text: string;
};

type TypographyVariants = {
	title: string;
	variants: TypographyVariant[];
};

export const headingVariants: TypographyVariants = {
	title: 'Headings (H1-H7)',
	variants: [
		{
			variant: 'h1',
			font: 'Roboto',
			fontSize: t.h1.fontSize,
			fontWeight: t.h1.fontWeight,
			text: 'Header 1 (H1)'
		},
		{
			variant: 'h2',
			font: 'Roboto',
			fontSize: t.h2.fontSize,
			fontWeight: t.h2.fontWeight,
			text: 'Header 2 (H2)'
		},
		{
			variant: 'h3',
			font: 'Roboto',
			fontSize: t.h3.fontSize,
			fontWeight: t.h3.fontWeight,
			text: 'Header 3 (H3)'
		},
		{
			variant: 'h4',
			font: 'Roboto',
			fontSize: t.h4.fontSize,
			fontWeight: t.h4.fontWeight,
			text: 'Header 4 (H4)'
		},
		{
			variant: 'h5',
			font: 'Roboto',
			fontSize: t.h5.fontSize,
			fontWeight: t.h5.fontWeight,
			text: 'Header 5 (H5)'
		},
		{
			variant: 'h6',
			font: 'Roboto',
			fontSize: t.h6.fontSize,
			fontWeight: t.h6.fontWeight,
			text: 'Header 6 (H6)'
		},
		{
			variant: 'h6',
			font: 'Roboto',
			fontSize: t.h7.fontSize,
			fontWeight: t.h7.fontWeight,
			text: 'Header 7 (H7)'
		}
	]
};

export const bodyVariants: TypographyVariants = {
	title: 'Body Text',
	variants: [
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: t.body1.fontSize,
			fontWeight: t.body1.fontWeight,
			text: 'Body 1 (B1)'
		},
		{
			variant: 'body2',
			font: 'Roboto',
			fontSize: t.body2.fontSize,
			fontWeight: t.body2.fontWeight,
			text: 'Body 2 (B2)'
		},
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: t.body3.fontSize,
			fontWeight: t.body3.fontWeight,
			text: 'Body 3 (B3)'
		},
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: t.body4.fontSize,
			fontWeight: t.body4.fontWeight,
			text: 'Body 4 (B4)'
		}
	]
};

export const subtitleVariants: TypographyVariants = {
	title: 'Subtitles',
	variants: [
		{
			variant: 'subtitle1',
			font: 'Roboto',
			fontSize: t.subtitle1.fontSize,
			fontWeight: t.subtitle1.fontWeight,
			text: 'Subtitle 1 (sb1)'
		},
		{
			variant: 'subtitle2',
			font: 'Roboto',
			fontSize: t.subtitle2.fontSize,
			fontWeight: t.subtitle2.fontWeight,
			text: 'Subtitle 2 (sb2)'
		}
	]
};

export const componentVariants: TypographyVariants = {
	title: 'Components',
	variants: [
		{
			variant: 'button',
			font: 'Roboto',
			fontSize: t.button.fontSize,
			fontWeight: t.button.fontWeight,
			text: 'BUTTON'
		}
	]
};

export const typographyVariants: TypographyVariants[] = [
	headingVariants,
	bodyVariants,
	subtitleVariants,
	componentVariants
];
