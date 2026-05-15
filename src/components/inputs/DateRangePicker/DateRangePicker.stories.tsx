import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import dayjs from 'dayjs';

import DateRangePicker from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
	title: 'Components/Inputs/Date Range Picker',
	component: DateRangePicker,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8328-14195'
		},
		docs: {
			description: {
				component:
					'Allows users to select a start and end date. Built on [MUI X DateRangePicker](https://mui.com/x/react-date-pickers/date-range-picker/) (Pro). Requires `LocalizationProvider` with `AdapterDayjs` — provided globally by the Storybook decorator.'
			}
		}
	},
	args: {
		localeText: { start: 'Start date', end: 'End date' },
		disabled: false
	},
	argTypes: {
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		readOnly: {
			description: 'Read-only — fields are visible but not editable',
			control: { type: 'boolean' }
		},
		disableFuture: {
			description: 'Prevent selecting future dates',
			control: { type: 'boolean' }
		},
		disablePast: {
			description: 'Prevent selecting past dates',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const exampleRange: [ReturnType<typeof dayjs>, ReturnType<typeof dayjs>] = [
	dayjs('2024-05-10'),
	dayjs('2024-05-22')
];

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── With Value ───────────────────────────────────────────────────────────────

export const WithValue: Story = {
	args: {
		defaultValue: exampleRange
	}
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	name: 'State: Disabled',
	args: {
		defaultValue: exampleRange,
		disabled: true
	}
};

// ─── State: Read Only ─────────────────────────────────────────────────────────

export const ReadOnly: Story = {
	name: 'State: Read Only',
	args: {
		defaultValue: exampleRange,
		readOnly: true
	}
};

// ─── State: Error ─────────────────────────────────────────────────────────────

export const ErrorState: Story = {
	name: 'State: Error',
	args: {
		slotProps: {
			textField: {
				error: true,
				helperText: 'Invalid date range'
			}
		}
	}
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack spacing={3}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Default
				</Typography>
				<DateRangePicker
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					With Value
				</Typography>
				<DateRangePicker
					defaultValue={exampleRange}
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Disabled
				</Typography>
				<DateRangePicker
					defaultValue={exampleRange}
					disabled
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Read Only
				</Typography>
				<DateRangePicker
					defaultValue={exampleRange}
					readOnly
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Error
				</Typography>
				<DateRangePicker
					localeText={{ start: 'Start date', end: 'End date' }}
					slotProps={{
						textField: {
							error: true,
							helperText: 'Invalid date range'
						}
					}}
				/>
			</Stack>
		</Stack>
	)
};

// ─── Single Input ─────────────────────────────────────────────────────────────

export const SingleInput: Story = {
	name: 'Single Input Field',
	parameters: {
		docs: {
			description: {
				story:
					'`SingleInputDateRangeField` combines both dates into one text input. Useful when screen space is limited.'
			}
		}
	},
	render: () => (
		<Stack
			spacing={3}
			maxWidth={300}
		>
			<SingleInputDateRangeField label='Date range' />
			<SingleInputDateRangeField
				label='With value'
				defaultValue={exampleRange}
			/>
			<SingleInputDateRangeField
				label='Disabled'
				defaultValue={exampleRange}
				disabled
			/>
		</Stack>
	)
};

// ─── Static (inline) ──────────────────────────────────────────────────────────

export const StaticInline: Story = {
	name: 'Static (Inline) Calendar',
	parameters: {
		docs: {
			description: {
				story:
					'`StaticDateRangePicker` renders the calendar inline without a text field or popover — useful for dedicated date range selection panels.'
			}
		}
	},
	render: () => <StaticDateRangePicker defaultValue={exampleRange} />
};

// ─── Constrained ──────────────────────────────────────────────────────────────

export const Constrained: Story = {
	name: 'Constrained Dates',
	render: () => (
		<Stack spacing={3}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					No past dates
				</Typography>
				<DateRangePicker
					disablePast
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					No future dates
				</Typography>
				<DateRangePicker
					disableFuture
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					May 2024 only
				</Typography>
				<DateRangePicker
					minDate={dayjs('2024-05-01')}
					maxDate={dayjs('2024-05-31')}
					defaultValue={exampleRange}
					localeText={{ start: 'Start date', end: 'End date' }}
				/>
			</Stack>
		</Stack>
	)
};
