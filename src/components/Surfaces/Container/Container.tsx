import { Box, Typography, type BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type ContainerBaseProps = Pick<BoxProps, 'children'>;

export interface ContainerProps extends ContainerBaseProps {
	title?: string;
	variant?: 'primary' | 'secondary';
	colorBar?: string;
	showIcon?: boolean;
	onIconClick?: () => void;
	footer?: React.ReactNode;
}

export default function Container({
	title,
	variant = 'primary',
	colorBar,
	showIcon = false,
	onIconClick,
	footer,
	children,
}: ContainerProps) {
	const theme = useTheme();

	const isPrimary = variant === 'primary';
	const hasColorBar = !!colorBar;

	const containerContent = (
		<Box
			sx={{
				backgroundColor: isPrimary
					? theme.palette.layout.base
					: theme.palette.layout[5],
				border: `1px solid ${isPrimary ? theme.palette.layout[5] : theme.palette.layout[11]}`,
				borderRadius: hasColorBar
					? '0 4px 4px 0'
					: '4px',
				...(hasColorBar
					? { borderLeft: 'none' }
					: {}),
				boxShadow: isPrimary && !hasColorBar
					? '1px 2px 1.5px rgba(0,0,0,0.25)'
					: 'none',
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				px: '16px',
				py: '20px',
				flex: 1,
				overflow: 'clip',
			}}
		>
			{title && (
				<Box
					sx={{
						display: 'flex',
						gap: '16px',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: 20,
							color: theme.palette.text.primary,
							flex: 1,
						}}
					>
						{title}
					</Typography>
					{showIcon && onIconClick && (
						<Box
							component='button'
							onClick={onIconClick}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								padding: 0,
								color: theme.palette.text.primary,
								'&:hover': {
									opacity: 0.7,
								},
							}}
						>
							<Box
								component='span'
								className='material-icons'
								sx={{ fontSize: 20 }}
							>
								close
							</Box>
						</Box>
					)}
				</Box>
			)}
			<Box sx={{ flex: 1 }}>{children}</Box>
			{footer && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						gap: '12px',
						width: '100%',
					}}
				>
					{footer}
				</Box>
			)}
		</Box>
	);

	if (hasColorBar) {
		return (
			<Box
				sx={{
					display: 'flex',
					borderRadius: '4px',
					overflow: 'clip',
				}}
			>
				<Box
					sx={{
						width: '8px',
						backgroundColor: colorBar,
						borderRadius: '4px 0 0 4px',
						flexShrink: 0,
					}}
				/>
				{containerContent}
			</Box>
		);
	}

	return containerContent;
}
