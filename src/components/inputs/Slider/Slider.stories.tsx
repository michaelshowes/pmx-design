import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Slider from './Slider';

const meta: Meta<typeof Slider> = {
	component: Slider,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8277-130211'
		},
		docs: {
			description: {
				component:
					'Sliders let users make selections from a range of values. [MUI Docs](https://mui.com/material-ui/react-slider/)'
			}
		}
	},
	decorators: [
		(Story) => (
			<Box sx={{ px: 3, py: 2, maxWidth: 400 }}>
				<Story />
			</Box>
		)
	],
	args: {
		defaultValue: 40,
		min: 0,
		max: 100,
		disabled: false,
		size: 'medium',
		valueLabelDisplay: 'auto'
	},
	argTypes: {
		size: {
			description: 'Figma: **Size** — Medium or Small',
			options: ['medium', 'small'],
			control: { type: 'inline-radio' }
		},
		valueLabelDisplay: {
			description:
				'Figma: **Indicator** — `auto` shows on hover/focus, `on` always visible, `off` hidden',
			options: ['auto', 'on', 'off'],
			control: { type: 'inline-radio' }
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		min: { control: { type: 'number' } },
		max: { control: { type: 'number' } },
		step: { control: { type: 'number' } },
		marks: { control: { type: 'boolean' } },
		defaultValue: { control: { type: 'number' } },
		color: {
			options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
			control: { type: 'select' }
		},
		orientation: {
			options: ['horizontal', 'vertical'],
			control: { type: 'inline-radio' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Discrete (with marks) ────────────────────────────────────────────────────

export const Discrete: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Set `step` and `marks` to snap to discrete values along the track. Use when the slider has a lot of values and you want the user to pick a specific one.'
			}
		}
	},
	args: {
		defaultValue: 50,
		step: 25,
		marks: true,
		min: 0,
		max: 100,
		valueLabelDisplay: 'auto'
	}
};

// ─── Discrete with Labels ─────────────────────────────────────────────────────

export const DiscreteLabeled: Story = {
	name: 'Discrete — Labeled Marks',
	parameters: {
		docs: {
			description: {
				story:
					'Pass an array to `marks` with `value` and `label` to render labeled steps beneath the track.'
			}
		}
	},
	args: {
		defaultValue: 2500,
		min: 0,
		max: 12500,
		step: 2500,
		marks: [
			{ value: 0, label: '0' },
			{ value: 2500, label: '2,500' },
			{ value: 5000, label: '5,000' },
			{ value: 7500, label: '7,500' },
			{ value: 10000, label: '10,000' },
			{ value: 12500, label: '12,500' }
		],
		valueLabelDisplay: 'auto'
	}
};

// ─── Range Slider ─────────────────────────────────────────────────────────────

export const Range: Story = {
	name: 'Range Slider',
	parameters: {
		docs: {
			description: {
				story:
					'Pass an array as `defaultValue` to enable a dual-thumb range slider. The user selects both a minimum and maximum value.'
			}
		}
	},
	args: {
		defaultValue: [25, 75],
		valueLabelDisplay: 'auto',
		getAriaLabel: () => 'Range'
	}
};

// ─── Indicator: Always On ─────────────────────────────────────────────────────

export const IndicatorAlwaysOn: Story = {
	name: 'Indicator — Always On',
	parameters: {
		docs: {
			description: {
				story:
					'`valueLabelDisplay="on"` keeps the indicator bubble always visible. Use when the current value needs to be permanently visible for user awareness.'
			}
		}
	},
	args: {
		defaultValue: 40,
		valueLabelDisplay: 'on'
	}
};

// ─── Custom Value Label ───────────────────────────────────────────────────────

export const CustomValueLabel: Story = {
	name: 'Custom Value Label',
	args: {
		defaultValue: 60,
		valueLabelDisplay: 'on',
		min: 0,
		max: 100,
		valueLabelFormat: (value: number) => `${value}%`
	}
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	decorators: [
		(Story) => (
			<Box sx={{ px: 3, py: 2, maxWidth: 500 }}>
				<Story />
			</Box>
		)
	],
	render: () => (
		<Stack spacing={4}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Medium (default)
				</Typography>
				<Slider
					defaultValue={40}
					size='medium'
					valueLabelDisplay='auto'
				/>
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Small
				</Typography>
				<Slider
					defaultValue={40}
					size='small'
					valueLabelDisplay='auto'
				/>
			</Stack>
		</Stack>
	)
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	args: { defaultValue: 40, disabled: true }
};

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
	decorators: [
		(Story) => (
			<Box sx={{ px: 3, py: 2, maxWidth: 500 }}>
				<Story />
			</Box>
		)
	],
	render: () => (
		<Stack spacing={3}>
			{(
				['primary', 'secondary', 'success', 'error', 'info', 'warning'] as const
			).map((color) => (
				<Stack
					key={color}
					spacing={0.5}
				>
					<Typography
						variant='caption'
						color='text.secondary'
						textTransform='capitalize'
					>
						{color}
					</Typography>
					<Slider
						defaultValue={40}
						color={color}
						valueLabelDisplay='auto'
					/>
				</Stack>
			))}
		</Stack>
	)
};

// ─── All Types ────────────────────────────────────────────────────────────────

export const AllTypes: Story = {
	decorators: [
		(Story) => (
			<Box sx={{ px: 3, py: 2, maxWidth: 500 }}>
				<Story />
			</Box>
		)
	],
	render: () => (
		<Stack spacing={5}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Continuous
				</Typography>
				<Slider
					defaultValue={40}
					valueLabelDisplay='auto'
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Discrete
				</Typography>
				<Slider
					defaultValue={50}
					step={25}
					marks
					valueLabelDisplay='auto'
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Range
				</Typography>
				<Slider
					defaultValue={[20, 70]}
					valueLabelDisplay='auto'
					getAriaLabel={() => 'Range'}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Indicator always on
				</Typography>
				<Slider
					defaultValue={40}
					valueLabelDisplay='on'
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Disabled
				</Typography>
				<Slider
					defaultValue={40}
					disabled
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Small
				</Typography>
				<Slider
					defaultValue={40}
					size='small'
					valueLabelDisplay='auto'
				/>
			</Stack>
		</Stack>
	)
};
