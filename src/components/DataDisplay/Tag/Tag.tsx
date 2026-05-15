import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export type TagType = 'solid' | 'transparent' | 'unfilled';
export type TagColor = 'green' | 'yellow' | 'red' | 'blue' | 'gray';
export type TagSize = 'normal' | 'small';

export interface TagProps {
	label?: string;
	type?: TagType;
	color?: TagColor;
	size?: TagSize;
}

export default function Tag({
	label = 'Label',
	type = 'solid',
	color = 'green',
	size = 'normal',
}: TagProps) {
	const theme = useTheme();

	const isNormal = size === 'normal';

	const colorMap = {
		green: {
			solid: {
				bg: theme.palette.success.d20,
				text: theme.palette.common.white,
				border: 'none',
			},
			transparent: {
				bg: theme.palette.success.l80,
				text: theme.palette.text.primary,
				border: theme.palette.success.d20,
			},
			unfilled: {
				bg: 'transparent',
				text: theme.palette.success.d20,
				border: theme.palette.success.d20,
			},
		},
		yellow: {
			solid: {
				bg: theme.palette.warning.main,
				text: theme.palette.text.primary,
				border: 'none',
			},
			transparent: {
				bg: theme.palette.warning.l80,
				text: theme.palette.text.primary,
				border: theme.palette.warning.d40,
			},
			unfilled: {
				bg: 'transparent',
				text: theme.palette.warning.d40,
				border: theme.palette.warning.d40,
			},
		},
		red: {
			solid: {
				bg: theme.palette.error.d20,
				text: theme.palette.common.white,
				border: 'none',
			},
			transparent: {
				bg: theme.palette.error.l90,
				text: theme.palette.text.primary,
				border: theme.palette.error.d20,
			},
			unfilled: {
				bg: 'transparent',
				text: theme.palette.error.d20,
				border: theme.palette.error.d20,
			},
		},
		blue: {
			solid: {
				bg: theme.palette.info.d40,
				text: theme.palette.common.white,
				border: 'none',
			},
			transparent: {
				bg: theme.palette.info.l80,
				text: theme.palette.text.primary,
				border: theme.palette.info.d40,
			},
			unfilled: {
				bg: 'transparent',
				text: theme.palette.info.d40,
				border: theme.palette.info.d40,
			},
		},
		gray: {
			solid: {
				bg: theme.palette.scale.l40,
				text: theme.palette.text.primary,
				border: 'none',
			},
			transparent: {
				bg: theme.palette.layout[8],
				text: theme.palette.text.primary,
				border: theme.palette.scale.main,
			},
			unfilled: {
				bg: 'transparent',
				text: theme.palette.text.secondary,
				border: theme.palette.scale.main,
			},
		},
	};

	const colors = colorMap[color][type];

	return (
		<Box
			component='span'
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: '4px',
				px: '8px',
				py: isNormal ? '4px' : '2px',
				borderRadius: '8px',
				backgroundColor: colors.bg,
				boxShadow:
					colors.border !== 'none'
						? `inset 0 0 0 1px ${colors.border}`
						: 'none',
			}}
		>
			<Typography
				component='span'
				sx={{
					fontSize: isNormal ? 16 : 14,
					fontWeight: 500,
					lineHeight: 'normal',
					color: colors.text,
					whiteSpace: 'nowrap',
					textAlign: 'center',
				}}
			>
				{label}
			</Typography>
		</Box>
	);
}
