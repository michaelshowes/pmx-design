import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	Checkbox as MuiCheckbox,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Stack,
	Typography
} from '@mui/material';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=7062-24087'
		},
		docs: {
			description: {
				component:
					'Checkboxes allow the user to select one or more items from a list. [MUI Docs](https://mui.com/material-ui/react-checkbox/)'
			}
		}
	},
	args: {
		label: 'Label',
		color: 'primary',
		size: 'medium',
		checked: undefined,
		disabled: false,
		indeterminate: false
	},
	argTypes: {
		label: {
			description: 'Label text rendered via `FormControlLabel`',
			control: { type: 'text' }
		},
		color: {
			description: 'Color of the checkbox',
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
			description: 'Size of the checkbox',
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
		},
		indeterminate: {
			description:
				'If true, the component appears indeterminate. Use for a "select all" parent checkbox.',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── State: Checked ───────────────────────────────────────────────────────────

export const Checked: Story = {
	name: 'State: Checked',
	args: { checked: true, label: 'Checked' }
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const DisabledUnchecked: Story = {
	name: 'State: Disabled — Unchecked',
	args: { disabled: true, label: 'Disabled' }
};

export const DisabledChecked: Story = {
	name: 'State: Disabled — Checked',
	args: { disabled: true, checked: true, label: 'Disabled Checked' }
};

// ─── State: Indeterminate ─────────────────────────────────────────────────────

export const Indeterminate: Story = {
	name: 'State: Indeterminate',
	args: { indeterminate: true, label: 'Indeterminate' }
};

// ─── Size ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	render: () => (
		<Stack
			direction='row'
			spacing={3}
			alignItems='center'
		>
			<FormControlLabel
				control={
					<MuiCheckbox
						size='small'
						defaultChecked
					/>
				}
				label='Small'
			/>
			<FormControlLabel
				control={
					<MuiCheckbox
						size='medium'
						defaultChecked
					/>
				}
				label='Medium'
			/>
		</Stack>
	)
};

// ─── Color ────────────────────────────────────────────────────────────────────

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
						<MuiCheckbox
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

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack spacing={2}>
			<Typography
				variant='overline'
				color='text.secondary'
			>
				Primary
			</Typography>
			<Stack
				direction='row'
				spacing={1}
				flexWrap='wrap'
			>
				<FormControlLabel
					control={<MuiCheckbox />}
					label='Unchecked'
				/>
				<FormControlLabel
					control={<MuiCheckbox defaultChecked />}
					label='Checked'
				/>
				<FormControlLabel
					control={<MuiCheckbox indeterminate />}
					label='Indeterminate'
				/>
				<FormControlLabel
					control={<MuiCheckbox disabled />}
					label='Disabled'
				/>
				<FormControlLabel
					control={
						<MuiCheckbox
							disabled
							checked
						/>
					}
					label='Disabled Checked'
				/>
				<FormControlLabel
					control={
						<MuiCheckbox
							disabled
							indeterminate
						/>
					}
					label='Disabled Indeterminate'
				/>
			</Stack>
		</Stack>
	)
};

// ─── Checkbox Group ───────────────────────────────────────────────────────────

export const CheckboxGroup: Story = {
	render: () => (
		<Stack spacing={3}>
			<Stack spacing={1}>
				<FormLabel>Pizza Toppings</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={<MuiCheckbox defaultChecked />}
						label='Cheese'
					/>
					<FormControlLabel
						control={<MuiCheckbox defaultChecked />}
						label='Pepperoni'
					/>
					<FormControlLabel
						control={<MuiCheckbox />}
						label='Sausage'
					/>
					<FormControlLabel
						control={<MuiCheckbox />}
						label='Bell Pepper'
					/>
					<FormControlLabel
						control={<MuiCheckbox defaultChecked />}
						label='Basil'
					/>
				</FormGroup>
			</Stack>
		</Stack>
	)
};

// ─── Indeterminate / Select All ───────────────────────────────────────────────

const toppings = ['Cheese', 'Pepperoni', 'Sausage', 'Bell Pepper', 'Basil'];

function IndeterminateGroupDemo() {
	const [checked, setChecked] = useState([true, false, false, false, false]);

	const allChecked = checked.every(Boolean);
	const someChecked = checked.some(Boolean) && !allChecked;

	const handleParent = () => {
		setChecked(checked.map(() => !allChecked));
	};

	const handleChild = (index: number) => {
		const next = [...checked];
		next[index] = !next[index];
		setChecked(next);
	};

	return (
		<Stack spacing={1}>
			<FormControlLabel
				label='All toppings'
				control={
					<MuiCheckbox
						checked={allChecked}
						indeterminate={someChecked}
						onChange={handleParent}
					/>
				}
			/>
			<FormGroup sx={{ pl: 3 }}>
				{toppings.map((topping, i) => (
					<FormControlLabel
						key={topping}
						label={topping}
						control={
							<MuiCheckbox
								checked={checked[i]}
								onChange={() => handleChild(i)}
							/>
						}
					/>
				))}
			</FormGroup>
		</Stack>
	);
}

export const IndeterminateSelectAll: Story = {
	name: 'Indeterminate — Select All Pattern',
	parameters: {
		docs: {
			description: {
				story:
					'Use the indeterminate state for a parent checkbox that controls a group of child checkboxes. The parent shows indeterminate when some (but not all) children are checked.'
			}
		}
	},
	render: () => <IndeterminateGroupDemo />
};
