import { Box, Typography, Link, type BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

type PopupBaseProps = Pick<BoxProps, 'children'>;

export interface PopupProps extends PopupBaseProps {
	title?: string;
	linkText?: string;
	onLinkClick?: () => void;
	showCloseIcon?: boolean;
	onClose?: () => void;
	footer?: React.ReactNode;
}

export default function Popup({
	title = 'Pop-up Title',
	linkText,
	onLinkClick,
	showCloseIcon = false,
	onClose,
	footer,
	children,
}: PopupProps) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				backgroundColor: theme.palette.layout.base,
				border: `1px solid ${theme.palette.layout[5]}`,
				borderRadius: '4px',
				boxShadow: '1px 2px 1.5px rgba(0,0,0,0.25)',
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				px: '16px',
				py: '20px',
				overflow: 'clip',
			}}
		>
			{/* Title Row */}
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
						fontSize: 16,
						color: theme.palette.text.primary,
						flex: 1,
					}}
				>
					{title}
				</Typography>
				{linkText && (
					<Link
						component='button'
						underline='always'
						onClick={onLinkClick}
						sx={{
							fontSize: 16,
							cursor: 'pointer',
							flexShrink: 0,
						}}
					>
						{linkText}
					</Link>
				)}
				{showCloseIcon && (
					<Box
						component='button'
						onClick={onClose}
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
						<CloseIcon sx={{ fontSize: 20 }} />
					</Box>
				)}
			</Box>

			{/* Content */}
			<Box sx={{ flex: 1 }}>{children}</Box>

			{/* Footer */}
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
}
