import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Gauge from './Gauge';

const meta: Meta<typeof Gauge> = {
	title: 'Components/Data Display/Gauge',
	component: Gauge,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=8328-16140'
		},
		docs: {
			description: {
				component:
					'Gauges let the user evaluate metrics. Displays a numeric value within a defined range, or the status of a system or process. Gauges must have labels to provide necessary context.'
			}
		}
	},
	args: {
		type: 'semi',
		value: 51,
		valueMax: 100,
		label: true
	},
	argTypes: {
		type: {
			description:
				'Figma: **Type** — Semi Circle, Full Circle, or Status gauge',
			options: ['semi', 'circle', 'status'],
			control: { type: 'select' }
		},
		value: {
			description: 'Current value (used for progress types)',
			control: { type: 'number', min: 0, max: 100 }
		},
		valueMax: {
			description: 'Maximum value',
			control: { type: 'number', min: 1 }
		},
		label: {
			description: 'Whether to show the value/status label',
			control: { type: 'boolean' }
		},
		status: {
			description: 'Figma: **Status** — Used when type is "status"',
			options: ['poor', 'fair', 'good'],
			control: { type: 'select' },
			if: { arg: 'type', eq: 'status' }
		},
		width: {
			description: 'Width in pixels',
			control: { type: 'number' }
		},
		height: {
			description: 'Height in pixels',
			control: { type: 'number' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Gauge>;

// ─── Semi Circle ─────────────────────────────────────────────────────────────

export const SemiCircle: Story = {
	args: {
		type: 'semi',
		value: 51
	}
};

export const SemiCircleNoLabel: Story = {
	name: 'Semi Circle: No Label',
	args: {
		type: 'semi',
		value: 51,
		label: false
	}
};

// ─── Circle ──────────────────────────────────────────────────────────────────

export const Circle: Story = {
	args: {
		type: 'circle',
		value: 51
	}
};

export const CircleNoLabel: Story = {
	name: 'Circle: No Label',
	args: {
		type: 'circle',
		value: 51,
		label: false
	}
};

// ─── Status ──────────────────────────────────────────────────────────────────

export const StatusPoor: Story = {
	name: 'Status: Poor',
	args: {
		type: 'status',
		status: 'poor'
	}
};

export const StatusFair: Story = {
	name: 'Status: Fair',
	args: {
		type: 'status',
		status: 'fair'
	}
};

export const StatusGood: Story = {
	name: 'Status: Good',
	args: {
		type: 'status',
		status: 'good'
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Semi Circle */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Semi Circle
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-end'
				>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							With Label
						</Typography>
						<Gauge
							type='semi'
							value={51}
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							No Label
						</Typography>
						<Gauge
							type='semi'
							value={51}
							label={false}
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Circle */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Circle
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-end'
				>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							With Label
						</Typography>
						<Gauge
							type='circle'
							value={51}
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							No Label
						</Typography>
						<Gauge
							type='circle'
							value={51}
							label={false}
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Status */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Status
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-end'
				>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Poor
						</Typography>
						<Gauge
							type='status'
							status='poor'
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Fair
						</Typography>
						<Gauge
							type='status'
							status='fair'
						/>
					</Stack>
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Good
						</Typography>
						<Gauge
							type='status'
							status='good'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Larger Examples */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Larger (150px)
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-end'
				>
					<Gauge
						type='semi'
						value={75}
						width={150}
						height={100}
					/>
					<Gauge
						type='circle'
						value={75}
						width={150}
						height={150}
					/>
					<Gauge
						type='status'
						status='good'
						width={150}
						height={100}
					/>
				</Stack>
			</Stack>
		</Stack>
	)
};
