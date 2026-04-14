import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import dayjs from 'dayjs';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8328-14195'
		},
		docs: {
			description: {
				component:
					'Date and time pickers allow users to select a specific date, time, or both. Built on [MUI X Date Pickers](https://mui.com/x/react-date-pickers/). Requires `LocalizationProvider` with `AdapterDayjs` — provided globally by the Storybook decorator.'
			}
		}
	},
	args: {
		label: 'Date',
		disabled: false
	},
	argTypes: {
		label: {
			description: 'Label for the text field input',
			control: { type: 'text' }
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		readOnly: {
			description: 'Read-only state — field is visible but not editable',
			control: { type: 'boolean' }
		},
		disableFuture: {
			description: 'Prevent selecting future dates',
			control: { type: 'boolean' }
		},
		disablePast: {
			description: 'Prevent selecting past dates',
			control: { type: 'boolean' }
		},
		format: {
			description: 'Date display format string (e.g. `MM/DD/YYYY`)',
			control: { type: 'text' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── With Default Value ───────────────────────────────────────────────────────

export const WithValue: Story = {
	args: {
		defaultValue: dayjs('2024-05-15')
	}
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	name: 'State: Disabled',
	args: {
		defaultValue: dayjs('2024-05-15'),
		disabled: true
	}
};

// ─── State: Read Only ─────────────────────────────────────────────────────────

export const ReadOnly: Story = {
	name: 'State: Read Only',
	args: {
		defaultValue: dayjs('2024-05-15'),
		readOnly: true
	}
};

// ─── State: Error ─────────────────────────────────────────────────────────────

export const ErrorState: Story = {
	name: 'State: Error',
	args: {
		defaultValue: dayjs('2024-02-30'), // invalid date
		slotProps: {
			textField: {
				error: true,
				helperText: 'Invalid date'
			}
		}
	}
};

// ─── Formats ──────────────────────────────────────────────────────────────────

export const Formats: Story = {
	name: 'Date Formats',
	render: () => (
		<Stack
			spacing={3}
			maxWidth={300}
		>
			<DatePicker
				label='MM/DD/YYYY'
				format='MM/DD/YYYY'
				defaultValue={dayjs()}
			/>
			<DatePicker
				label='DD/MM/YYYY'
				format='DD/MM/YYYY'
				defaultValue={dayjs()}
			/>
			<DatePicker
				label='YYYY-MM-DD'
				format='YYYY-MM-DD'
				defaultValue={dayjs()}
			/>
			<DatePicker
				label='MMM D, YYYY'
				format='MMM D, YYYY'
				defaultValue={dayjs()}
			/>
		</Stack>
	)
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack
			spacing={3}
			maxWidth={300}
		>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Default
				</Typography>
				<DatePicker label='Date' />
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					With Value
				</Typography>
				<DatePicker
					label='Date'
					defaultValue={dayjs('2024-05-15')}
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Disabled
				</Typography>
				<DatePicker
					label='Date'
					defaultValue={dayjs('2024-05-15')}
					disabled
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Read Only
				</Typography>
				<DatePicker
					label='Date'
					defaultValue={dayjs('2024-05-15')}
					readOnly
				/>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Error
				</Typography>
				<DatePicker
					label='Date'
					slotProps={{
						textField: {
							error: true,
							helperText: 'Invalid date'
						}
					}}
				/>
			</Stack>
		</Stack>
	)
};

// ─── Time Picker ──────────────────────────────────────────────────────────────

export const TimePickerStory: Story = {
	name: 'Time Picker',
	render: () => (
		<Stack
			spacing={3}
			maxWidth={300}
		>
			<TimePicker label='Time' />
			<TimePicker
				label='With Value'
				defaultValue={dayjs().hour(14).minute(30)}
			/>
			<TimePicker
				label='Disabled'
				defaultValue={dayjs().hour(14).minute(30)}
				disabled
			/>
		</Stack>
	)
};

// ─── Date Time Picker ─────────────────────────────────────────────────────────

export const DateTimePickerStory: Story = {
	name: 'Date Time Picker',
	render: () => (
		<Stack
			spacing={3}
			maxWidth={320}
		>
			<DateTimePicker label='Date & Time' />
			<DateTimePicker
				label='With Value'
				defaultValue={dayjs('2024-05-15T14:30')}
			/>
			<DateTimePicker
				label='Disabled'
				defaultValue={dayjs('2024-05-15T14:30')}
				disabled
			/>
		</Stack>
	)
};

// ─── Date Calendar (static) ───────────────────────────────────────────────────

export const DateCalendarStory: Story = {
	name: 'Date Calendar',
	parameters: {
		docs: {
			description: {
				story:
					'`DateCalendar` renders an always-visible calendar without a text field. Useful for inline date selection.'
			}
		}
	},
	render: () => (
		<Stack
			direction='row'
			spacing={4}
			flexWrap='wrap'
		>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Default
				</Typography>
				<DateCalendar defaultValue={dayjs()} />
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Disabled
				</Typography>
				<DateCalendar
					defaultValue={dayjs()}
					disabled
				/>
			</Stack>
		</Stack>
	)
};

// ─── Static Pickers ───────────────────────────────────────────────────────────

export const StaticPickers: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Static variants render the picker UI inline without a popover — useful for embedded selection panels.'
			}
		}
	},
	render: () => (
		<Stack
			direction='row'
			spacing={4}
			flexWrap='wrap'
			alignItems='flex-start'
		>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Static Date Picker
				</Typography>
				<StaticDatePicker defaultValue={dayjs()} />
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Static Time Picker
				</Typography>
				<StaticTimePicker defaultValue={dayjs().hour(14).minute(30)} />
			</Stack>
		</Stack>
	)
};

// ─── Constrained Dates ────────────────────────────────────────────────────────

export const ConstrainedDates: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Use `disableFuture`, `disablePast`, `minDate`, or `maxDate` to restrict selectable dates.'
			}
		}
	},
	render: () => (
		<Stack
			spacing={3}
			maxWidth={300}
		>
			<DatePicker
				label='No future dates'
				disableFuture
			/>
			<DatePicker
				label='No past dates'
				disablePast
			/>
			<DatePicker
				label='May 2024 only'
				minDate={dayjs('2024-05-01')}
				maxDate={dayjs('2024-05-31')}
				defaultValue={dayjs('2024-05-15')}
			/>
		</Stack>
	)
};
