import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
	component: TextField,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=7181-9420'
		},
		docs: {
			description: {
				component:
					'Text fields allow users to input and edit text. [MUI Docs](https://mui.com/material-ui/react-text-field/)'
			}
		}
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 320 }}>
				<Story />
			</div>
		)
	],
	args: {
		label: 'Label Name',
		placeholder: 'Input text here',
		variant: 'outlined',
		size: 'medium',
		disabled: false,
		error: false,
		required: false,
		multiline: false
	},
	argTypes: {
		label: {
			description:
				'Floating label — stays at the top even when the field is empty',
			control: { type: 'text' }
		},
		placeholder: {
			description: 'Ghost text inside the field before the user starts typing',
			control: { type: 'text' }
		},
		helperText: {
			description: 'Helper or error text rendered below the field',
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
		multiline: {
			description:
				'Renders a `<textarea>` — set `rows` or `maxRows` to control height',
			control: { type: 'boolean' }
		},
		rows: {
			description: 'Fixed number of rows (textarea)',
			control: { type: 'number' }
		},
		maxRows: {
			description: 'Maximum rows before scrolling (auto-grow textarea)',
			control: { type: 'number' }
		},
		type: {
			description: 'HTML input type (text, password, email, number, etc.)',
			control: { type: 'text' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof TextField>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── With Value ───────────────────────────────────────────────────────────────

export const WithValue: Story = {
	args: { defaultValue: 'Input text here' }
};

// ─── Variant: Unlined ─────────────────────────────────────────────────────────

export const Unlined: Story = {
	name: 'Variant: Unlined (Standard)',
	args: { variant: 'standard' }
};

// ─── State: Error ─────────────────────────────────────────────────────────────

export const ErrorState: Story = {
	name: 'State: Error',
	args: {
		error: true,
		defaultValue: 'Invalid input',
		helperText: 'This field contains an error'
	}
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true, defaultValue: 'Input text here' }
};

// ─── State: Read Only ─────────────────────────────────────────────────────────

export const ReadOnly: Story = {
	name: 'State: Read Only',
	args: {
		defaultValue: 'Input text here',
		slotProps: { htmlInput: { readOnly: true } }
	}
};

// ─── Required ─────────────────────────────────────────────────────────────────

export const Required: Story = {
	args: { required: true, helperText: 'This field is required' }
};

// ─── Helper Text ──────────────────────────────────────────────────────────────

export const WithHelperText: Story = {
	args: { helperText: 'Additional context about this field' }
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 480 }}>
				<Story />
			</div>
		)
	],
	render: () => (
		<Stack
			direction='row'
			spacing={3}
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
				<TextField
					label='Label Name'
					placeholder='Input text here'
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
				<TextField
					label='Label Name'
					placeholder='Input text here'
					size='small'
				/>
			</Stack>
		</Stack>
	)
};

// ─── Multiline / Text Area ─────────────────────────────────────────────────────

export const Multiline: Story = {
	name: 'Text Area (Multiline)',
	parameters: {
		docs: {
			description: {
				story:
					'Set `multiline` with `rows` for a fixed-height textarea, or `maxRows` for auto-growing input that scrolls once the limit is reached.'
			}
		}
	},
	render: () => (
		<Stack spacing={3}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Fixed rows
				</Typography>
				<TextField
					label='Label Name'
					placeholder='Input text here'
					multiline
					rows={4}
				/>
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Auto-grow (max 4 rows)
				</Typography>
				<TextField
					label='Label Name'
					placeholder='Input text here'
					multiline
					maxRows={4}
				/>
			</Stack>
		</Stack>
	)
};

// ─── With Adornments ──────────────────────────────────────────────────────────

export const WithAdornments: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Use `slotProps.input.startAdornment` or `endAdornment` to add icons or text alongside the input.'
			}
		}
	},
	render: () => (
		<Stack spacing={3}>
			<TextField
				label='Search'
				placeholder='Search...'
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon fontSize='small' />
							</InputAdornment>
						)
					}
				}}
			/>
			<TextField
				label='Username'
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircleIcon fontSize='small' />
							</InputAdornment>
						)
					}
				}}
			/>
			<TextField
				label='Password'
				type='password'
				defaultValue='password123'
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position='end'>
								<VisibilityOffIcon fontSize='small' />
							</InputAdornment>
						)
					}
				}}
			/>
		</Stack>
	)
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 600 }}>
				<Story />
			</div>
		)
	],
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
						spacing={2}
						flexWrap='wrap'
					>
						{[
							{ caption: 'Default', props: {} },
							{
								caption: 'With value',
								props: { defaultValue: 'Input text here' }
							},
							{
								caption: 'Error',
								props: {
									error: true,
									defaultValue: 'Bad value',
									helperText: 'Error message'
								}
							},
							{ caption: 'Disabled', props: { disabled: true } },
							{
								caption: 'Read only',
								props: {
									defaultValue: 'Input text here',
									slotProps: { htmlInput: { readOnly: true } }
								}
							}
						].map(({ caption, props }) => (
							<Stack
								key={caption}
								spacing={0.5}
								flex='1 1 160px'
							>
								<Typography
									variant='caption'
									color='text.disabled'
								>
									{caption}
								</Typography>
								<TextField
									label='Label Name'
									placeholder='Input text here'
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
