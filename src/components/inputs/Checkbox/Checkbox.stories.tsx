import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
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
			description:
				'Color of the checkbox — only primary is used in this design system',
			options: ['primary'],
			control: { type: 'select' }
		},
		size: {
			description:
				'Size of the checkbox — only medium is used in this design system',
			options: ['medium'],
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
					control={<Checkbox />}
					label='Unchecked'
				/>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label='Checked'
				/>
				<FormControlLabel
					control={<Checkbox indeterminate />}
					label='Indeterminate'
				/>
				<FormControlLabel
					control={<Checkbox disabled />}
					label='Disabled'
				/>
				<FormControlLabel
					control={
						<Checkbox
							disabled
							checked
						/>
					}
					label='Disabled Checked'
				/>
				<FormControlLabel
					control={
						<Checkbox
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
						control={<Checkbox defaultChecked />}
						label='Cheese'
					/>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label='Pepperoni'
					/>
					<FormControlLabel
						control={<Checkbox />}
						label='Sausage'
					/>
					<FormControlLabel
						control={<Checkbox />}
						label='Bell Pepper'
					/>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
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
					<Checkbox
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
							<Checkbox
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
