import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	Radio as MuiRadio,
	FormControl,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Stack,
	Typography
} from '@mui/material';

import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
	component: RadioButton,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=7072-28068'
		},
		docs: {
			description: {
				component:
					'Radio buttons allow the user to select one item from a list. The most commonly used option should be selected by default. [MUI Docs](https://mui.com/material-ui/react-radio-button/)'
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
			description: 'Color of the radio button',
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
			description: 'Size of the radio button',
			options: ['small', 'medium'],
			control: { type: 'inline-radio' }
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		checked: {
			description: 'Controlled checked state',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── State: Selected ──────────────────────────────────────────────────────────

export const Selected: Story = {
	name: 'State: Selected',
	args: { checked: true, label: 'Selected' }
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const DisabledUnselected: Story = {
	name: 'State: Disabled — Unselected',
	args: { disabled: true, label: 'Disabled' }
};

export const DisabledSelected: Story = {
	name: 'State: Disabled — Selected',
	args: { disabled: true, checked: true, label: 'Disabled Selected' }
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
				control={<MuiRadio />}
				label='Unselected'
			/>
			<FormControlLabel
				control={<MuiRadio defaultChecked />}
				label='Selected'
			/>
			<FormControlLabel
				control={<MuiRadio disabled />}
				label='Disabled'
			/>
			<FormControlLabel
				control={
					<MuiRadio
						disabled
						checked
					/>
				}
				label='Disabled Selected'
			/>
		</Stack>
	)
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
					<MuiRadio
						size='small'
						defaultChecked
					/>
				}
				label='Small'
			/>
			<FormControlLabel
				control={
					<MuiRadio
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
						<MuiRadio
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

// ─── Radio Group ──────────────────────────────────────────────────────────────

export const Group: Story = {
	name: 'Radio Group',
	parameters: {
		docs: {
			description: {
				story:
					'Use `RadioGroup` inside `FormControl` to group options. Always pre-select the most commonly used option.'
			}
		}
	},
	render: () => (
		<Stack
			direction='row'
			spacing={6}
		>
			<FormControl>
				<FormLabel>Seat Selection</FormLabel>
				<RadioGroup defaultValue='no-preference'>
					<FormControlLabel
						value='no-preference'
						control={<MuiRadio />}
						label='No preference'
					/>
					<FormControlLabel
						value='aisle'
						control={<MuiRadio />}
						label='Aisle'
					/>
					<FormControlLabel
						value='middle'
						control={<MuiRadio />}
						label='Middle'
					/>
					<FormControlLabel
						value='window'
						control={<MuiRadio />}
						label='Window'
					/>
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel>Tea Toppings</FormLabel>
				<RadioGroup defaultValue='boba'>
					<FormControlLabel
						value='none'
						control={<MuiRadio />}
						label='None'
					/>
					<FormControlLabel
						value='boba'
						control={<MuiRadio />}
						label='Boba'
					/>
					<FormControlLabel
						value='honey-boba'
						control={<MuiRadio />}
						label='Honey boba'
					/>
					<FormControlLabel
						value='brown-sugar'
						control={<MuiRadio />}
						label='Brown sugar boba'
					/>
					<FormControlLabel
						value='crystal'
						control={<MuiRadio />}
						label='Crystal boba'
					/>
					<FormControlLabel
						value='grass-jelly'
						control={<MuiRadio />}
						label='Grass jelly'
					/>
					<FormControlLabel
						value='lychee'
						control={<MuiRadio />}
						label='Lychee'
					/>
				</RadioGroup>
			</FormControl>
		</Stack>
	)
};

// ─── Radio Group: Disabled ────────────────────────────────────────────────────

export const GroupDisabled: Story = {
	name: 'Radio Group — Disabled',
	render: () => (
		<FormControl disabled>
			<FormLabel>Radio Button Group Label</FormLabel>
			<RadioGroup defaultValue='option1'>
				<FormControlLabel
					value='option1'
					control={<MuiRadio />}
					label='Option 1'
				/>
				<FormControlLabel
					value='option2'
					control={<MuiRadio />}
					label='Option 2'
				/>
				<FormControlLabel
					value='option3'
					control={<MuiRadio />}
					label='Option 3'
				/>
			</RadioGroup>
		</FormControl>
	)
};

// ─── Radio Group: Row Layout ──────────────────────────────────────────────────

export const GroupRow: Story = {
	name: 'Radio Group — Row Layout',
	render: () => (
		<FormControl>
			<FormLabel>Radio Button Group Label</FormLabel>
			<RadioGroup
				row
				defaultValue='option1'
			>
				<FormControlLabel
					value='option1'
					control={<MuiRadio />}
					label='Option 1'
				/>
				<FormControlLabel
					value='option2'
					control={<MuiRadio />}
					label='Option 2'
				/>
				<FormControlLabel
					value='option3'
					control={<MuiRadio />}
					label='Option 3'
				/>
			</RadioGroup>
		</FormControl>
	)
};

// ─── Showcase ─────────────────────────────────────────────────────────────────

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
						control={<MuiRadio />}
						label='Unselected'
					/>
					<FormControlLabel
						control={<MuiRadio defaultChecked />}
						label='Selected'
					/>
					<FormControlLabel
						control={<MuiRadio disabled />}
						label='Disabled'
					/>
					<FormControlLabel
						control={
							<MuiRadio
								disabled
								checked
							/>
						}
						label='Disabled Selected'
					/>
				</Stack>
			</Stack>

			<Stack
				direction='row'
				spacing={6}
			>
				<Stack spacing={1}>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						Vertical Group
					</Typography>
					<FormControl>
						<FormLabel>Radio Button Group Label</FormLabel>
						<RadioGroup defaultValue='option1'>
							<FormControlLabel
								value='option1'
								control={<MuiRadio />}
								label='Option 1'
							/>
							<FormControlLabel
								value='option2'
								control={<MuiRadio />}
								label='Option 2'
							/>
							<FormControlLabel
								value='option3'
								control={<MuiRadio />}
								label='Option 3'
							/>
						</RadioGroup>
					</FormControl>
				</Stack>

				<Stack spacing={1}>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						Disabled Group
					</Typography>
					<FormControl disabled>
						<FormLabel>Radio Button Group Label</FormLabel>
						<RadioGroup defaultValue='option1'>
							<FormControlLabel
								value='option1'
								control={<MuiRadio />}
								label='Option 1'
							/>
							<FormControlLabel
								value='option2'
								control={<MuiRadio />}
								label='Option 2'
							/>
							<FormControlLabel
								value='option3'
								control={<MuiRadio />}
								label='Option 3'
							/>
						</RadioGroup>
					</FormControl>
				</Stack>
			</Stack>
		</Stack>
	)
};
