import {
	Card as MuiCard,
	type CardProps as MuiCardProps,
	CardContent,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

type CardBaseProps = Pick<MuiCardProps, 'children' | 'onClick'>;

export interface CardProps extends CardBaseProps {
	title?: string;
	variant?: 'primary' | 'secondary';
	selected?: boolean;
}

export default function Card({
	title,
	variant = 'primary',
	selected = false,
	children,
	onClick,
}: CardProps) {
	const theme = useTheme();

	const isPrimary = variant === 'primary';
	const isInteractive = !!onClick;

	return (
		<MuiCard
			elevation={0}
			onClick={onClick}
			sx={{
				backgroundColor: isPrimary
					? theme.palette.layout[5]
					: theme.palette.layout[12],
				borderRadius: '4px',
				boxShadow: '1px 2px 2px 0px rgba(0,0,0,0.25)',
				overflow: 'clip',
				cursor: isInteractive ? 'pointer' : 'default',
				border: selected
					? `2px solid ${theme.palette.primary.main}`
					: '2px solid transparent',
				'&:hover': isInteractive
					? {
							border: `2px solid ${selected ? theme.palette.primary.main : theme.palette.primary.l60}`,
						}
					: {},
			}}
		>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
					px: '16px',
					py: '20px',
					'&:last-child': {
						pb: '20px',
					},
				}}
			>
				{title && (
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: 16,
							color: theme.palette.text.primary,
						}}
					>
						{title}
					</Typography>
				)}
				{children}
			</CardContent>
		</MuiCard>
	);
}
