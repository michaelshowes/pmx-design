import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FloatingActionButton from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
	title: 'Components/Inputs/Floating Action Button',
	component: FloatingActionButton,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=7155-22861&m=dev'
		},
		docs: {
			description: {
				component:
					'A circular button that floats above the UI to promote a primary action. Use at most one FAB per page. The icon should be clear and common — do not use FABs for minor, unclear, or destructive actions.'
			}
		}
	},
	args: {
		size: 'medium',
		disabled: false,
		'aria-label': 'add'
	},
	argTypes: {
		size: {
			description: 'Normal (48px) or Small (40px)',
			options: ['medium', 'small'],
			control: {
				type: 'inline-radio',
				labels: {
					medium: 'Normal (48px)',
					small: 'Small (40px)'
				}
			}
		},
		disabled: {
			description: 'Disables the button',
			control: { type: 'boolean' }
		}
	},
	render: (args) => (
		<FloatingActionButton {...args}>
			<AddIcon />
		</FloatingActionButton>
	)
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Size ─────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
	name: 'Size: Small (40px)',
	args: { size: 'small' }
};

// ─── State ────────────────────────────────────────────────────────────────────

export const StateDisabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true }
};

// ─── Showcase ─────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={4}>
			{(['medium', 'small'] as const).map((size) => (
				<Stack
					key={size}
					spacing={2}
				>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						{size === 'medium' ? 'Normal (48px)' : 'Small (40px)'}
					</Typography>
					<Stack
						direction='row'
						spacing={3}
						alignItems='center'
					>
						<FloatingActionButton
							size={size}
							aria-label='add'
						>
							<AddIcon />
						</FloatingActionButton>
						<FloatingActionButton
							size={size}
							aria-label='edit'
						>
							<EditIcon />
						</FloatingActionButton>
						<FloatingActionButton
							size={size}
							aria-label='delete'
						>
							<DeleteIcon />
						</FloatingActionButton>
						<FloatingActionButton
							size={size}
							aria-label='add'
							disabled
						>
							<AddIcon />
						</FloatingActionButton>
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};
