import {
	Accordion as MuiAccordion,
	type AccordionProps as MuiAccordionProps,
	AccordionSummary,
	AccordionDetails
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { fontFamily } from '../../../tokens/typography';

type AccordionBaseProps = Pick<
	MuiAccordionProps,
	'defaultExpanded' | 'expanded' | 'onChange' | 'children'
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
					display: 'none'
				},
				'&.Mui-expanded': {
					margin: 0
				}
			}}
			{...rest}
		>
			<AccordionSummary
				expandIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
				sx={{
					px: '16px',
					py: isPrimary ? '20px' : '12px',
					minHeight: 'unset',
					'& .MuiAccordionSummary-content': {
						margin: 0,
						fontWeight: 500,
						fontFamily: fontFamily.roboto,
						fontSize: 16
					},
					'& .MuiAccordionSummary-expandIconWrapper': {
						color: theme.palette.text.primary
					}
				}}
			>
				{title}
			</AccordionSummary>
			<AccordionDetails
				sx={{
					px: '16px',
					pt: '0',
					pb: isPrimary ? '20px' : '12px',
					mt: isPrimary ? '-4px' : '4px'
				}}
			>
				{children}
			</AccordionDetails>
		</MuiAccordion>
	);
}
