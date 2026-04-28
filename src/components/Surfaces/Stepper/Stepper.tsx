import {
	Stepper as MuiStepper,
	type StepperProps as MuiStepperProps,
	Step,
	StepLabel,
	StepConnector,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';

type StepperBaseProps = Pick<MuiStepperProps, 'orientation'>;

export interface StepperProps extends StepperBaseProps {
	steps: string[];
	activeStep?: number;
}

const CustomConnector = styled(StepConnector)(({ theme }) => ({
	'& .MuiStepConnector-line': {
		borderColor: theme.palette.divider,
		borderTopWidth: 1,
		minWidth: 20,
	},
	'&.MuiStepConnector-vertical .MuiStepConnector-line': {
		borderLeftWidth: 1,
		minHeight: 20,
	},
}));

function StepIconComponent({
	active,
	completed,
	icon,
}: {
	active?: boolean;
	completed?: boolean;
	icon?: React.ReactNode;
}) {
	const theme = useTheme();

	if (completed) {
		return (
			<Box
				sx={{
					width: 24,
					height: 24,
					borderRadius: '50%',
					backgroundColor: theme.palette.primary.main,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CheckIcon
					sx={{
						fontSize: 20,
						color: theme.palette.common.white,
					}}
				/>
			</Box>
		);
	}

	if (active) {
		return (
			<Box
				sx={{
					width: 24,
					height: 24,
					borderRadius: '50%',
					backgroundColor: theme.palette.primary.l80,
					border: `1px solid ${theme.palette.primary.d20}`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					component='span'
					sx={{
						fontWeight: 500,
						fontSize: 16,
						color: theme.palette.primary.d20,
						lineHeight: 1,
					}}
				>
					{icon}
				</Box>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				width: 24,
				height: 24,
				borderRadius: '50%',
				backgroundColor: theme.palette.scale.l40,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				component='span'
				sx={{
					fontWeight: 400,
					fontSize: 16,
					color: theme.palette.text.secondary,
					lineHeight: 1,
				}}
			>
				{icon}
			</Box>
		</Box>
	);
}

export default function Stepper({
	steps,
	activeStep = 0,
	orientation = 'horizontal',
}: StepperProps) {
	const theme = useTheme();

	return (
		<MuiStepper
			activeStep={activeStep}
			orientation={orientation}
			connector={<CustomConnector />}
			sx={{
				'& .MuiStepLabel-label': {
					fontWeight: 400,
					fontSize: 16,
					color: theme.palette.text.secondary,
					'&.Mui-active': {
						fontWeight: 500,
						color: theme.palette.text.primary,
					},
					'&.Mui-completed': {
						fontWeight: 400,
						color: theme.palette.text.primary,
					},
				},
				'& .MuiStep-root': {
					cursor: 'default',
				},
				'& .MuiStep-root.Mui-completed': {
					cursor: 'pointer',
					'&:hover .MuiStepLabel-root': {
						backgroundColor: theme.palette.scale.l60,
						borderRadius: '4px',
					},
				},
			}}
		>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel
						slots={{
							stepIcon: StepIconComponent,
						}}
					>
						{label}
					</StepLabel>
				</Step>
			))}
		</MuiStepper>
	);
}
