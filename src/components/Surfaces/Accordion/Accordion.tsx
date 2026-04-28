import {
	Accordion as MuiAccordion,
	type AccordionProps as MuiAccordionProps,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionBaseProps = Pick<
	MuiAccordionProps,
	'defaultExpanded' | 'expanded' | 'onChange' | 'disabled' | 'children'
>;

export interface AccordionProps extends AccordionBaseProps {
	title?: string;
	variant?: 'primary' | 'secondary';
}

export default function Accordion({
	title = 'Accordion Title',
	variant = 'primary',
	children,
	...rest
}: AccordionProps) {
	const theme = useTheme();

	const isPrimary = variant === 'primary';

	return (
		<MuiAccordion
			disableGutters
			elevation={0}
			sx={{
				backgroundColor: isPrimary
					? theme.palette.layout.base
					: theme.palette.layout[5],
				border: `1px solid ${isPrimary ? theme.palette.layout[7] : theme.palette.layout[11]}`,
				borderRadius: '4px !important',
				boxShadow: '0px 1px 1px rgba(0,0,0,0.25)',
				'&::before': {
					display: 'none',
				},
				'&.Mui-expanded': {
					margin: 0,
				},
			}}
			{...rest}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				sx={{
					px: '16px',
					py: isPrimary ? '12px' : '4px',
					minHeight: 'unset',
					'& .MuiAccordionSummary-content': {
						margin: 0,
						fontWeight: 500,
						fontSize: 16,
					},
					'& .MuiAccordionSummary-expandIconWrapper': {
						color: theme.palette.text.primary,
					},
				}}
			>
				{title}
			</AccordionSummary>
			<AccordionDetails
				sx={{
					px: '16px',
					pt: 0,
					pb: isPrimary ? '20px' : '12px',
				}}
			>
				{children}
			</AccordionDetails>
		</MuiAccordion>
	);
}
