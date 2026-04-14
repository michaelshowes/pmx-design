import { type TypographyProps } from '@mui/material';

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
	title: 'Headings (H1-H6)',
	variants: [
		{
			variant: 'h1',
			font: 'Roboto',
			fontSize: 96,
			fontWeight: 300,
			text: 'Header 1 (H1)'
		},
		{
			variant: 'h2',
			font: 'Roboto',
			fontSize: 60,
			fontWeight: 300,
			text: 'Header 2 (H2)'
		},
		{
			variant: 'h3',
			font: 'Roboto',
			fontSize: 48,
			fontWeight: 400,
			text: 'Header 3 (H3)'
		},
		{
			variant: 'h4',
			font: 'Roboto',
			fontSize: 34,
			fontWeight: 300,
			text: 'Header 4 (H4)'
		},
		{
			variant: 'h5',
			font: 'Roboto',
			fontSize: 24,
			fontWeight: 300,
			text: 'Header 5 (H5)'
		},
		{
			variant: 'h6',
			font: 'Roboto',
			fontSize: 20,
			fontWeight: 500,
			text: 'Header 6 (H6)'
		}
	]
};

export const bodyVariants: TypographyVariants = {
	title: 'Body Text',
	variants: [
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: 16,
			fontWeight: 400,
			text: 'Body 1 (B1)'
		},
		{
			variant: 'body2',
			font: 'Roboto',
			fontSize: 16,
			fontWeight: 500,
			text: 'Body 2 (B2)'
		},
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: 14,
			fontWeight: 400,
			text: 'Body 3 (B3)'
		},
		{
			variant: 'body1',
			font: 'Roboto',
			fontSize: 14,
			fontWeight: 500,
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
			fontSize: 16,
			fontWeight: 400,
			text: 'Subtitle 1 (sb1)'
		},
		{
			variant: 'subtitle2',
			font: 'Roboto',
			fontSize: 14,
			fontWeight: 500,
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
			fontSize: 14,
			fontWeight: 500,
			text: 'Button (B1)'
		}
	]
};

export const typographyVariants: TypographyVariants[] = [
	headingVariants,
	bodyVariants,
	subtitleVariants,
	componentVariants
];
