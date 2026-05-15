import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import Button from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=7062-3676&m=dev'
		},
		a11y: { test: 'error' }
	},
	args: {
		label: 'Button',
		variant: 'contained',
		color: 'primary',
		size: 'medium',
		disabled: false,
		onClick: fn()
	},
	argTypes: {
		variant: {
			description: 'Primary (Filled), Outlined, or Text',
			options: ['contained', 'outlined', 'text'],
			control: {
				type: 'radio',
				labels: {
					contained: 'Primary (Filled)',
					outlined: 'Outlined',
					text: 'Text'
				}
			}
		},
		color: {
			description: 'Primary (Blue), Danger (Red), Confirmation (Green)',
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
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		label: {
			description: 'Button label text',
			control: { type: 'text' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Playground ──────────────────────────────────────────────────────────────

export const Default: Story = {
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: 'Button' });
		await expect(button).toBeEnabled();
		await expect(button).toHaveClass('MuiButton-contained');
	}
};

// ─── Type ────────────────────────────────────────────────────────────────────

export const Primary: Story = {
	name: 'Type: Primary',
	args: { variant: 'contained' },
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: 'Button' });
		await expect(button).toHaveClass('MuiButton-contained');
	}
};

export const Outlined: Story = {
	name: 'Type: Outlined',
	args: { variant: 'outlined' },
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: 'Button' });
		await expect(button).toHaveClass('MuiButton-outlined');
	}
};

export const Text: Story = {
	name: 'Type: Text',
	args: { variant: 'text' }
};

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

// ─── State: Disabled ─────────────────────────────────────────────────────────

export const DisabledPrimary: Story = {
	name: 'State: Disabled — Primary',
	args: { disabled: true },
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: 'Button' });
		await expect(button).toBeDisabled();
	}
};

export const DisabledOutlined: Story = {
	name: 'State: Disabled — Outlined',
	args: { variant: 'outlined', disabled: true }
};

// ─── With Icon ───────────────────────────────────────────────────────────────

export const WithIcon: Story = {
	name: 'With Leading Icon',
	render: (args) => (
		<Button
			{...args}
			startIcon={<StarIcon />}
		/>
	),
	args: { label: 'Add Item' }
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
								alignItems='center'
							>
								<Typography
									variant='caption'
									color='text.secondary'
								>
									{colorLabels[color]}
								</Typography>
								<Stack
									direction='row'
									spacing={1}
								>
									<Stack
										spacing={4}
										alignItems='center'
									>
										<Typography
											variant='caption'
											color='text.disabled'
											fontSize={10}
										>
											Primary
										</Typography>
										<Button
											label='Button'
											variant='contained'
											color={color}
											size={size}
										/>
										<Button
											label='Button'
											variant='contained'
											color={color}
											size={size}
											disabled
										/>
										<Button
											label='Add'
											variant='contained'
											color={color}
											size={size}
											startIcon={<StarIcon />}
										/>
									</Stack>
									<Stack
										spacing={4}
										alignItems='center'
									>
										<Typography
											variant='caption'
											color='text.disabled'
											fontSize={10}
										>
											Outlined
										</Typography>
										<Button
											label='Button'
											variant='outlined'
											color={color}
											size={size}
										/>
										<Button
											label='Button'
											variant='outlined'
											color={color}
											size={size}
											disabled
										/>
										<Button
											label='Add'
											variant='outlined'
											color={color}
											size={size}
											startIcon={<StarIcon />}
										/>
									</Stack>
								</Stack>
							</Stack>
						))}
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};
