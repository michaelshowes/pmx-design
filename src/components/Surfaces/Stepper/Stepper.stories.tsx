import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
	component: Stepper,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=8320-11459'
		},
		docs: {
			description: {
				component:
					'Steppers convey progress through numbered steps. It provides a wizard-like workflow. Steppers must have at minimum 3 steps and at maximum 7 steps. Use short, concise step names. Allow users to go back after they move to the next step. Use the vertical stepper when designing for mobile.'
			}
		}
	},
	args: {
		steps: ['Step 1', 'Step 2', 'Step 3'],
		activeStep: 0,
		orientation: 'horizontal'
	},
	argTypes: {
		steps: {
			description: 'Array of step label strings (min 3, max 7)',
			control: { type: 'object' }
		},
		activeStep: {
			description:
				'Figma: **Active Step** — Zero-based index of the current active step',
			control: { type: 'number' }
		},
		orientation: {
			description: 'Figma: **Orientation** — Horizontal or Vertical',
			options: ['horizontal', 'vertical'],
			control: { type: 'inline-radio' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const threeSteps = ['Step 1', 'Step 2', 'Step 3'];
const fiveSteps = ['Review', 'Configure', 'Validate', 'Deploy', 'Complete'];

// ─── Horizontal ──────────────────────────────────────────────────────────────

export const HorizontalFirst: Story = {
	name: 'Horizontal: First Step',
	args: {
		steps: threeSteps,
		activeStep: 0
	}
};

export const HorizontalMiddle: Story = {
	name: 'Horizontal: Middle Step',
	args: {
		steps: threeSteps,
		activeStep: 1
	}
};

export const HorizontalLast: Story = {
	name: 'Horizontal: Last Step',
	args: {
		steps: threeSteps,
		activeStep: 2
	}
};

export const HorizontalComplete: Story = {
	name: 'Horizontal: All Complete',
	args: {
		steps: threeSteps,
		activeStep: 3
	}
};

// ─── Vertical ────────────────────────────────────────────────────────────────

export const VerticalFirst: Story = {
	name: 'Vertical: First Step',
	args: {
		steps: threeSteps,
		activeStep: 0,
		orientation: 'vertical'
	}
};

export const VerticalMiddle: Story = {
	name: 'Vertical: Middle Step',
	args: {
		steps: threeSteps,
		activeStep: 1,
		orientation: 'vertical'
	}
};

// ─── More Steps ──────────────────────────────────────────────────────────────

export const FiveSteps: Story = {
	args: {
		steps: fiveSteps,
		activeStep: 2
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Horizontal */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Horizontal
				</Typography>
				<Stack spacing={3}>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Step 1 Active
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={0}
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Step 2 Active
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={1}
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							All Complete
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={3}
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Vertical */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Vertical
				</Typography>
				<Stack
					direction='row'
					spacing={6}
					alignItems='flex-start'
				>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Step 1 Active
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={0}
							orientation='vertical'
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Step 2 Active
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={1}
							orientation='vertical'
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							All Complete
						</Typography>
						<Stepper
							steps={threeSteps}
							activeStep={3}
							orientation='vertical'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Five Steps */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Five Steps
				</Typography>
				<Stepper
					steps={fiveSteps}
					activeStep={2}
				/>
			</Stack>
		</Stack>
	)
};
