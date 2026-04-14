import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	Switch as MuiSwitch,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Stack,
	Typography
} from '@mui/material';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
	component: Switch,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=7062-24087'
		},
		docs: {
			description: {
				component:
					'Switches toggle a single standalone setting on or off, or select a more verbose option from a list. Use checkboxes instead when selecting multiple items. [MUI Docs](https://mui.com/material-ui/react-switch/)'
			}
		}
	},
	args: {
		label: 'Label',
		color: 'primary',
		size: 'medium',
		disabled: false
	},
	argTypes: {
		label: {
			description: 'Label text rendered via `FormControlLabel`',
			control: { type: 'text' }
		},
		color: {
			description: 'Color of the switch',
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'info',
				'warning',
				'default'
			],
			control: { type: 'select' }
		},
		size: {
			description: 'Size of the switch',
			options: ['small', 'medium'],
			control: { type: 'inline-radio' }
		},
		checked: {
			description: 'Controlled checked state',
			control: { type: 'boolean' }
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── State: On ────────────────────────────────────────────────────────────────

export const On: Story = {
	name: 'State: On',
	args: { checked: true, label: 'On' }
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const DisabledOff: Story = {
	name: 'State: Disabled — Off',
	args: { disabled: true, label: 'Disabled' }
};

export const DisabledOn: Story = {
	name: 'State: Disabled — On',
	args: { disabled: true, checked: true, label: 'Disabled On' }
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack
			direction='row'
			spacing={1}
			flexWrap='wrap'
		>
			<FormControlLabel
				control={<MuiSwitch />}
				label='Off'
			/>
			<FormControlLabel
				control={<MuiSwitch defaultChecked />}
				label='On'
			/>
			<FormControlLabel
				control={<MuiSwitch disabled />}
				label='Disabled Off'
			/>
			<FormControlLabel
				control={
					<MuiSwitch
						disabled
						checked
					/>
				}
				label='Disabled On'
			/>
		</Stack>
	)
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	render: () => (
		<Stack
			direction='row'
			spacing={3}
			alignItems='center'
		>
			<FormControlLabel
				control={
					<MuiSwitch
						size='small'
						defaultChecked
					/>
				}
				label='Small'
			/>
			<FormControlLabel
				control={
					<MuiSwitch
						size='medium'
						defaultChecked
					/>
				}
				label='Medium'
			/>
		</Stack>
	)
};

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
	render: () => (
		<Stack
			direction='row'
			spacing={2}
			flexWrap='wrap'
		>
			{(
				['primary', 'secondary', 'success', 'error', 'info', 'warning'] as const
			).map((color) => (
				<FormControlLabel
					key={color}
					control={
						<MuiSwitch
							color={color}
							defaultChecked
						/>
					}
					label={color.charAt(0).toUpperCase() + color.slice(1)}
				/>
			))}
		</Stack>
	)
};

// ─── Switch Group ─────────────────────────────────────────────────────────────

export const SwitchGroup: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Use `FormGroup` inside `FormControl` to group related switches. Best for standalone verbose settings — use checkboxes for multi-select lists.'
			}
		}
	},
	render: () => (
		<Stack
			direction='row'
			spacing={6}
		>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>Notifications</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={<MuiSwitch defaultChecked />}
						label='Email alerts'
					/>
					<FormControlLabel
						control={<MuiSwitch defaultChecked />}
						label='Push notifications'
					/>
					<FormControlLabel
						control={<MuiSwitch />}
						label='SMS alerts'
					/>
				</FormGroup>
			</FormControl>

			<FormControl component='fieldset'>
				<FormLabel component='legend'>Order options</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={<MuiSwitch defaultChecked />}
						label='Include napkins and condiments'
					/>
					<FormControlLabel
						control={<MuiSwitch />}
						label='Contactless delivery'
					/>
				</FormGroup>
			</FormControl>
		</Stack>
	)
};

// ─── Switch Group: Disabled ───────────────────────────────────────────────────

export const SwitchGroupDisabled: Story = {
	name: 'Switch Group — Disabled',
	render: () => (
		<FormControl
			component='fieldset'
			disabled
		>
			<FormLabel component='legend'>Notifications</FormLabel>
			<FormGroup>
				<FormControlLabel
					control={<MuiSwitch defaultChecked />}
					label='Email alerts'
				/>
				<FormControlLabel
					control={<MuiSwitch />}
					label='Push notifications'
				/>
				<FormControlLabel
					control={<MuiSwitch />}
					label='SMS alerts'
				/>
			</FormGroup>
		</FormControl>
	)
};

// ─── All Variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={4}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Individual States
				</Typography>
				<Stack
					direction='row'
					spacing={1}
					flexWrap='wrap'
				>
					<FormControlLabel
						control={<MuiSwitch />}
						label='Off'
					/>
					<FormControlLabel
						control={<MuiSwitch defaultChecked />}
						label='On'
					/>
					<FormControlLabel
						control={<MuiSwitch disabled />}
						label='Disabled Off'
					/>
					<FormControlLabel
						control={
							<MuiSwitch
								disabled
								checked
							/>
						}
						label='Disabled On'
					/>
				</Stack>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Sizes
				</Typography>
				<Stack
					direction='row'
					spacing={3}
					alignItems='center'
				>
					<FormControlLabel
						control={
							<MuiSwitch
								size='small'
								defaultChecked
							/>
						}
						label='Small'
					/>
					<FormControlLabel
						control={
							<MuiSwitch
								size='medium'
								defaultChecked
							/>
						}
						label='Medium'
					/>
				</Stack>
			</Stack>

			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Switch Group
				</Typography>
				<FormControl component='fieldset'>
					<FormLabel component='legend'>Notifications</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={<MuiSwitch defaultChecked />}
							label='Email alerts'
						/>
						<FormControlLabel
							control={<MuiSwitch defaultChecked />}
							label='Push notifications'
						/>
						<FormControlLabel
							control={<MuiSwitch />}
							label='SMS alerts'
						/>
					</FormGroup>
				</FormControl>
			</Stack>
		</Stack>
	)
};
