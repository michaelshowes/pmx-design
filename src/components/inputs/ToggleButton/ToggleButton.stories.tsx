import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import ToggleButton from './ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';

// ─── Controlled Wrappers ──────────────────────────────────────────────────────

function SingleButtonWrapper({
	size,
	disabled
}: {
	size?: 'small' | 'medium';
	disabled?: boolean;
}) {
	const [selected, setSelected] = useState(false);
	return (
		<ToggleButton
			value='option'
			selected={selected}
			onChange={() => setSelected(!selected)}
			size={size}
			disabled={disabled}
		>
			Option
		</ToggleButton>
	);
}

type GroupWrapperProps = {
	size?: 'small' | 'medium';
	disabled?: boolean;
	exclusive?: boolean;
};

function ToggleButtonGroupWrapper({ size, disabled, exclusive = true }: GroupWrapperProps) {
	const [value, setValue] = useState<string | null>('option1');

	const handleChange = (_: React.MouseEvent, newValue: string | null) => {
		if (newValue !== null) setValue(newValue);
	};

	return (
		<ToggleButtonGroup
			exclusive={exclusive}
			value={value}
			onChange={handleChange}
			size={size}
			disabled={disabled}
		>
			<ToggleButton value='option1'>Option 1</ToggleButton>
			<ToggleButton value='option2'>Option 2</ToggleButton>
			<ToggleButton value='option3'>Option 3</ToggleButton>
		</ToggleButtonGroup>
	);
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof ToggleButton> = {
	title: 'Components/Inputs/Toggle Button',
	component: ToggleButton,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=7019-25148&m=dev'
		},
		docs: {
			description: {
				component:
					'A set of mutually exclusive buttons for selecting between two to five options. Always has one option selected. Use for simple view/filter/sort choices; for more complex workflows use Chips.'
			}
		}
	},
	args: {
		size: 'medium',
		disabled: false
	},
	argTypes: {
		size: {
			description: 'Normal (36px) or Small (30px)',
			options: ['medium', 'small'],
			control: {
				type: 'inline-radio',
				labels: {
					medium: 'Normal (36px)',
					small: 'Small (30px)'
				}
			}
		},
		disabled: {
			description: 'Disables the button',
			control: { type: 'boolean' }
		}
	},
	render: (args) => (
		<SingleButtonWrapper
			size={args.size as 'small' | 'medium'}
			disabled={args.disabled}
		/>
	)
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Group ────────────────────────────────────────────────────────────────────

export const Group: Story = {
	render: (args) => (
		<ToggleButtonGroupWrapper
			size={args.size as 'small' | 'medium'}
			disabled={args.disabled}
		/>
	)
};

// ─── Size ─────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
	name: 'Size: Small (30px)',
	args: { size: 'small' }
};

// ─── State ────────────────────────────────────────────────────────────────────

export const StateDisabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true }
};

// ─── With Icons ───────────────────────────────────────────────────────────────

function IconGroupWrapper({ size, disabled }: { size?: 'small' | 'medium'; disabled?: boolean }) {
	const [value, setValue] = useState<string | null>('star');

	const handleChange = (_: React.MouseEvent, newValue: string | null) => {
		if (newValue !== null) setValue(newValue);
	};

	return (
		<ToggleButtonGroup
			exclusive
			value={value}
			onChange={handleChange}
			size={size}
			disabled={disabled}
			aria-label='icon toggle group'
		>
			<ToggleButton
				value='star'
				aria-label='star'
			>
				<StarIcon />
			</ToggleButton>
			<ToggleButton
				value='star2'
				aria-label='star 2'
			>
				<StarIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

export const WithIcons: Story = {
	render: (args) => (
		<IconGroupWrapper
			size={args.size as 'small' | 'medium'}
			disabled={args.disabled}
		/>
	)
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
						{size === 'medium' ? 'Normal (36px)' : 'Small (30px)'}
					</Typography>
					<Stack
						spacing={2}
						alignItems='flex-start'
					>
						<ToggleButtonGroupWrapper size={size} />
						<ToggleButtonGroupWrapper
							size={size}
							disabled
						/>
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};
