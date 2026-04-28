import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FaceIcon from '@mui/icons-material/Face';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
	title: 'Components/Data Display/Chip',
	component: Chip,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=7420-26088'
		},
		docs: {
			description: {
				component:
					'Chips allow users to make selections, filter content, or trigger actions.'
			}
		}
	},
	args: {
		label: 'Chip label',
		variant: 'outlined',
		color: 'default',
		size: 'medium',
		disabled: false
	},
	argTypes: {
		variant: {
			description: 'Figma: **Filled** — Outlined (default) or Filled',
			options: ['outlined', 'filled'],
			control: { type: 'inline-radio' }
		},
		color: {
			description:
				'Figma: **Selected** — Default (gray) or Primary (blue, selected state)',
			options: ['default', 'primary'],
			control: {
				type: 'select',
				labels: {
					default: 'Default',
					primary: 'Primary (Selected)'
				}
			}
		},
		size: {
			description: 'Chip size',
			options: ['medium', 'small'],
			control: { type: 'inline-radio' }
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		label: {
			description: 'Chip label text',
			control: { type: 'text' }
		},
		clickable: {
			description: 'Whether the chip is clickable',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ─── Choice Chip ─────────────────────────────────────────────────────────────

export const ChoiceChipUnselected: Story = {
	name: 'Choice Chip: Unselected',
	args: {
		variant: 'outlined',
		clickable: true
	}
};

export const ChoiceChipSelected: Story = {
	name: 'Choice Chip: Selected',
	args: {
		variant: 'filled',
		color: 'primary',
		icon: <CheckIcon />,
		clickable: true
	}
};

export const ChoiceChipDisabled: Story = {
	name: 'Choice Chip: Disabled',
	args: {
		variant: 'outlined',
		clickable: true,
		disabled: true
	}
};

// ─── Input Chip ──────────────────────────────────────────────────────────────

export const InputChipOutlined: Story = {
	name: 'Input Chip: Outlined',
	args: {
		variant: 'outlined',
		onDelete: () => {}
	}
};

export const InputChipFilled: Story = {
	name: 'Input Chip: Filled',
	args: {
		variant: 'filled',
		onDelete: () => {}
	}
};

export const InputChipDisabled: Story = {
	name: 'Input Chip: Disabled',
	args: {
		variant: 'outlined',
		onDelete: () => {},
		disabled: true
	}
};

// ─── Plain Chip ──────────────────────────────────────────────────────────────

export const PlainChipOutlined: Story = {
	name: 'Plain Chip: Outlined',
	args: {
		variant: 'outlined'
	}
};

export const PlainChipFilled: Story = {
	name: 'Plain Chip: Filled',
	args: {
		variant: 'filled'
	}
};

// ─── With Icon ───────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
	args: {
		icon: <FaceIcon />,
		variant: 'outlined'
	}
};

// ─── Dropdown Chip ───────────────────────────────────────────────────────────

export const DropdownChip: Story = {
	args: {
		variant: 'outlined',
		deleteIcon: <ArrowDropDownIcon />,
		onDelete: () => {},
		clickable: true
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Choice Chips */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Choice Chip
				</Typography>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
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
							Unselected
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
							clickable
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
							Selected
						</Typography>
						<Chip
							label='Chip label'
							variant='filled'
							color='primary'
							icon={<CheckIcon />}
							clickable
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
							Disabled
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
							clickable
							disabled
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Input Chips */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Input Chip
				</Typography>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
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
							Default
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
							onDelete={() => {}}
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
							Filled
						</Typography>
						<Chip
							label='Chip label'
							variant='filled'
							onDelete={() => {}}
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
							Disabled
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
							onDelete={() => {}}
							disabled
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Plain Chips */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Plain Chip
				</Typography>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
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
							Default
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
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
							Filled
						</Typography>
						<Chip
							label='Chip label'
							variant='filled'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Dropdown Chips */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Dropdown Chip
				</Typography>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
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
							Single Select
						</Typography>
						<Chip
							label='Option 1'
							variant='outlined'
							deleteIcon={<ArrowDropDownIcon />}
							onDelete={() => {}}
							clickable
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
							Multi-select
						</Typography>
						<Chip
							label='Chip label'
							variant='outlined'
							deleteIcon={<ArrowDropDownIcon />}
							onDelete={() => {}}
							clickable
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
							Selected
						</Typography>
						<Chip
							label='Selected option'
							variant='filled'
							color='primary'
							icon={<CheckIcon />}
							deleteIcon={<ArrowDropDownIcon />}
							onDelete={() => {}}
							clickable
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Chip Group */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Chip Group (Sort/Filter)
				</Typography>
				<Stack
					direction='row'
					spacing={1.5}
					alignItems='center'
					flexWrap='wrap'
				>
					<Typography variant='body1'>Sort/Filter By:</Typography>
					<Chip
						label='Chip label'
						variant='filled'
						color='primary'
						icon={<CheckIcon />}
						clickable
					/>
					<Chip
						label='Chip label'
						variant='outlined'
						clickable
					/>
					<Chip
						label='Chip label'
						variant='outlined'
						clickable
					/>
				</Stack>
			</Stack>

			{/* Chip Group — Filled Input */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Chip Group (Filled Input)
				</Typography>
				<Stack
					direction='row'
					spacing={1}
					alignItems='center'
					flexWrap='wrap'
				>
					<Chip
						label='Chip label'
						variant='filled'
						onDelete={() => {}}
					/>
					<Chip
						label='Chip label'
						variant='filled'
						onDelete={() => {}}
					/>
					<Chip
						label='Chip label'
						variant='filled'
						onDelete={() => {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	)
};
