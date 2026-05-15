import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SplitButton from './SplitButton';

const defaultOptions = [
	{ label: 'Create a merge commit' },
	{ label: 'Squash and merge' },
	{ label: 'Rebase and merge' }
];

const meta: Meta<typeof SplitButton> = {
	title: 'Components/Inputs/Split Button',
	component: SplitButton,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=7003-22259&m=dev'
		},
		docs: {
			description: {
				component:
					'A two-part button combining a primary action with a dropdown to select from additional options. The selected option becomes the primary action on the next click.'
			}
		}
	},
	args: {
		options: defaultOptions,
		color: 'primary',
		size: 'medium',
		disabled: false
	},
	argTypes: {
		options: {
			description:
				'Array of options. Each option has a `label` and optional `disabled` flag.',
			control: { type: 'object' }
		},
		color: {
			description: 'Color of the button group',
			options: ['primary', 'error', 'success'],
			control: {
				type: 'select',
				labels: {
					primary: 'Primary (Blue)',
					error: 'Danger (Red)',
					success: 'Confirmation (Green)'
				}
			}
		},
		size: {
			description: 'Normal (36px) or Small (30px)',
			options: ['medium', 'small'],
			control: {
				type: 'inline-radio',
				labels: {
					medium: 'Normal (36px)',
					small: 'Small (30px)'
				}
			}
		},
		disabled: {
			description: 'Disables the entire split button',
			control: { type: 'boolean' }
		},
		onClick: {
			description:
				'Called with the selected option index when the primary button is clicked',
			action: 'clicked'
		},
		onOptionSelect: {
			description:
				'Called with the new option index when a dropdown item is selected',
			action: 'option selected'
		}
	}
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Color ────────────────────────────────────────────────────────────────────

export const ColorDanger: Story = {
	name: 'Color: Danger',
	args: { color: 'error' }
};

export const ColorConfirmation: Story = {
	name: 'Color: Confirmation',
	args: { color: 'success' }
};

// ─── Size ─────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
	name: 'Size: Small (30px)',
	args: { size: 'small' }
};

// ─── State ────────────────────────────────────────────────────────────────────

export const StateDisabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true }
};

// ─── Showcase ─────────────────────────────────────────────────────────────────

const colors = ['primary', 'error', 'success'] as const;
const colorLabels: Record<string, string> = {
	primary: 'Primary',
	error: 'Danger',
	success: 'Confirmation'
};

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={4}>
			{(['medium', 'small'] as const).map((size) => (
				<Stack
					key={size}
					spacing={2}
				>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						{size === 'medium' ? 'Normal (36px)' : 'Small (30px)'}
					</Typography>
					<Stack
						direction='row'
						spacing={3}
						alignItems='flex-start'
						flexWrap='wrap'
					>
						{colors.map((color) => (
							<Stack
								key={color}
								spacing={1}
							>
								<Typography
									variant='caption'
									color='text.secondary'
								>
									{colorLabels[color]}
								</Typography>
								<Stack spacing={1}>
									<SplitButton
										options={defaultOptions}
										color={color}
										size={size}
									/>
									<SplitButton
										options={defaultOptions}
										color={color}
										size={size}
										disabled
									/>
								</Stack>
							</Stack>
						))}
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};
