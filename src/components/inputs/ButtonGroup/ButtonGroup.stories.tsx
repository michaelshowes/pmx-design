import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
	title: 'Components/Inputs/Button Group',
	component: ButtonGroup,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=6992-10134&m=dev'
		},
		docs: {
			description: {
				component:
					'A group of related buttons with shared styling. Variant, color, and size are applied to all children automatically.'
			}
		}
	},
	args: {
		color: 'primary',
		size: 'medium',
		disabled: false
	},
	argTypes: {
		color: {
			description: 'Applies to all buttons in the group',
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
			description: 'Disables all buttons in the group',
			control: { type: 'boolean' }
		},
		orientation: {
			description: 'Layout direction of the group',
			options: ['horizontal', 'vertical'],
			control: { type: 'inline-radio' }
		}
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button label='Left' />
			<Button label='Middle' />
			<Button label='Right' />
		</ButtonGroup>
	)
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// ─── Playground ──────────────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Color ───────────────────────────────────────────────────────────────────

export const ColorDanger: Story = {
	name: 'Color: Danger',
	args: { color: 'error' }
};

export const ColorConfirmation: Story = {
	name: 'Color: Confirmation',
	args: { color: 'success' }
};

// ─── Size ────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
	name: 'Size: Small (30px)',
	args: { size: 'small' }
};

// ─── State ───────────────────────────────────────────────────────────────────

export const StateDisabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true }
};

// ─── Orientation ─────────────────────────────────────────────────────────────

export const OrientationVertical: Story = {
	name: 'Orientation: Vertical',
	args: { orientation: 'vertical' }
};

// ─── Showcase ────────────────────────────────────────────────────────────────

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
									<ButtonGroup
										color={color}
										size={size}
									>
										<Button label='Left' />
										<Button label='Middle' />
										<Button label='Right' />
									</ButtonGroup>
									<ButtonGroup
										color={color}
										size={size}
										disabled
									>
										<Button label='Left' />
										<Button label='Middle' />
										<Button label='Right' />
									</ButtonGroup>
								</Stack>
							</Stack>
						))}
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};
