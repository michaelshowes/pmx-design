import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Select from './Select';

const fruitOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'durian', label: 'Durian' }
];

const meta: Meta<typeof Select> = {
	component: Select,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8227-129845'
		},
		docs: {
			description: {
				component:
					'Select fields allow users to make a selection from a menu of options. [MUI Docs](https://mui.com/material-ui/react-select/)'
			}
		}
	},
	args: {
		label: 'Label Name',
		options: fruitOptions,
		variant: 'outlined',
		size: 'medium',
		disabled: false,
		error: false,
		required: false,
		readOnly: false
	},
	argTypes: {
		label: {
			description: 'Floating label above the field',
			control: { type: 'text' }
		},
		variant: {
			description: 'Figma: **Type** — Outlined or Unlined (standard)',
			options: ['outlined', 'standard'],
			control: {
				type: 'inline-radio',
				labels: { outlined: 'Outlined', standard: 'Unlined' }
			}
		},
		size: {
			description: 'Figma: **Size** — Normal or Small',
			options: ['medium', 'small'],
			control: {
				type: 'inline-radio',
				labels: { medium: 'Normal', small: 'Small' }
			}
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		error: {
			description: 'Error state — pair with `helperText` for an error message',
			control: { type: 'boolean' }
		},
		required: {
			description: 'Marks the field as required with an asterisk',
			control: { type: 'boolean' }
		},
		readOnly: {
			description: 'Read-only — field is visible but not interactive',
			control: { type: 'boolean' }
		},
		helperText: {
			description: 'Helper or error text rendered below the field',
			control: { type: 'text' }
		},
		options: {
			control: false
		}
	}
};

export default meta;
type Story = StoryObj<typeof Select>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── With Value ───────────────────────────────────────────────────────────────

export const WithValue: Story = {
	args: { defaultValue: 'apple' }
};

// ─── Variant: Standard (Unlined) ─────────────────────────────────────────────

export const Unlined: Story = {
	name: 'Variant: Unlined (Standard)',
	args: { variant: 'standard' }
};

// ─── State: Error ─────────────────────────────────────────────────────────────

export const ErrorState: Story = {
	name: 'State: Error',
	args: {
		error: true,
		helperText: 'This field is required'
	}
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true, defaultValue: 'apple' }
};

// ─── State: Read Only ─────────────────────────────────────────────────────────

export const ReadOnly: Story = {
	name: 'State: Read Only',
	args: { readOnly: true, defaultValue: 'apple' }
};

// ─── Required ─────────────────────────────────────────────────────────────────

export const Required: Story = {
	args: { required: true }
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	render: () => (
		<Stack
			direction='row'
			spacing={3}
			alignItems='flex-start'
		>
			<Stack
				spacing={1}
				flex={1}
			>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Normal
				</Typography>
				<Select
					label='Label Name'
					options={fruitOptions}
					size='medium'
				/>
			</Stack>
			<Stack
				spacing={1}
				flex={1}
			>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Small
				</Typography>
				<Select
					label='Label Name'
					options={fruitOptions}
					size='small'
				/>
			</Stack>
		</Stack>
	)
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack spacing={4}>
			{(['outlined', 'standard'] as const).map((variant) => (
				<Stack
					key={variant}
					spacing={2}
				>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						{variant === 'outlined' ? 'Outlined' : 'Unlined (Standard)'}
					</Typography>
					<Stack
						direction='row'
						spacing={3}
						flexWrap='wrap'
					>
						{[
							{ label: 'Default', props: {} },
							{ label: 'With value', props: { defaultValue: 'apple' } },
							{
								label: 'Error',
								props: { error: true, helperText: 'Required' }
							},
							{ label: 'Disabled', props: { disabled: true } },
							{
								label: 'Read only',
								props: { readOnly: true, defaultValue: 'apple' }
							}
						].map(({ label, props }) => (
							<Stack
								key={label}
								spacing={0.5}
								minWidth={160}
							>
								<Typography
									variant='caption'
									color='text.disabled'
								>
									{label}
								</Typography>
								<Select
									label='Label Name'
									options={fruitOptions}
									variant={variant}
									{...props}
								/>
							</Stack>
						))}
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};

// ─── Helper Text ──────────────────────────────────────────────────────────────

export const WithHelperText: Story = {
	args: {
		helperText: 'Select the option that best matches your needs'
	}
};

// ─── Multi-select ─────────────────────────────────────────────────────────────

export const MultiSelect: Story = {
	name: 'Multi-select',
	parameters: {
		docs: {
			description: {
				story:
					'Pass `multiple` to allow selecting more than one option. Values are returned as an array.'
			}
		}
	},
	args: {
		multiple: true,
		defaultValue: ['apple', 'cherry'],
		label: 'Toppings',
		options: [
			{ value: 'cheese', label: 'Cheese' },
			{ value: 'pepperoni', label: 'Pepperoni' },
			{ value: 'sausage', label: 'Sausage' },
			{ value: 'apple', label: 'Bell Pepper' },
			{ value: 'cherry', label: 'Basil' }
		]
	}
};
