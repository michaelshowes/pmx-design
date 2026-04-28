import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Tag from './Tag';

const meta: Meta<typeof Tag> = {
	title: 'Components/Data Display/Tag',
	component: Tag,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=8320-14162'
		},
		docs: {
			description: {
				component:
					'Tags are used to display the status of an item. Tags should be used individually and are not meant to display related groups of items. Consider using chips to show groups. Tags are not actionable and are for information/status display only.'
			}
		}
	},
	args: {
		label: 'Label',
		type: 'solid',
		color: 'green',
		size: 'normal'
	},
	argTypes: {
		type: {
			description:
				'Figma: **Type** — Solid, Transparent, or Unfilled',
			options: ['solid', 'transparent', 'unfilled'],
			control: { type: 'select' }
		},
		color: {
			description:
				'Figma: **Color** — Green, Yellow, Red, Blue, or Gray',
			options: ['green', 'yellow', 'red', 'blue', 'gray'],
			control: { type: 'select' }
		},
		size: {
			description: 'Figma: **Size** — Normal or Small',
			options: ['normal', 'small'],
			control: { type: 'inline-radio' }
		},
		label: {
			description: 'Tag label text',
			control: { type: 'text' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Tag>;

// ─── Solid ───────────────────────────────────────────────────────────────────

export const SolidGreen: Story = {
	name: 'Solid: Green',
	args: { type: 'solid', color: 'green' }
};

export const SolidYellow: Story = {
	name: 'Solid: Yellow',
	args: { type: 'solid', color: 'yellow' }
};

export const SolidRed: Story = {
	name: 'Solid: Red',
	args: { type: 'solid', color: 'red' }
};

export const SolidBlue: Story = {
	name: 'Solid: Blue',
	args: { type: 'solid', color: 'blue' }
};

export const SolidGray: Story = {
	name: 'Solid: Gray',
	args: { type: 'solid', color: 'gray' }
};

// ─── Transparent ─────────────────────────────────────────────────────────────

export const TransparentGreen: Story = {
	name: 'Transparent: Green',
	args: { type: 'transparent', color: 'green' }
};

export const TransparentYellow: Story = {
	name: 'Transparent: Yellow',
	args: { type: 'transparent', color: 'yellow' }
};

export const TransparentRed: Story = {
	name: 'Transparent: Red',
	args: { type: 'transparent', color: 'red' }
};

export const TransparentBlue: Story = {
	name: 'Transparent: Blue',
	args: { type: 'transparent', color: 'blue' }
};

export const TransparentGray: Story = {
	name: 'Transparent: Gray',
	args: { type: 'transparent', color: 'gray' }
};

// ─── Unfilled ────────────────────────────────────────────────────────────────

export const UnfilledGreen: Story = {
	name: 'Unfilled: Green',
	args: { type: 'unfilled', color: 'green' }
};

export const UnfilledYellow: Story = {
	name: 'Unfilled: Yellow',
	args: { type: 'unfilled', color: 'yellow' }
};

export const UnfilledRed: Story = {
	name: 'Unfilled: Red',
	args: { type: 'unfilled', color: 'red' }
};

export const UnfilledBlue: Story = {
	name: 'Unfilled: Blue',
	args: { type: 'unfilled', color: 'blue' }
};

export const UnfilledGray: Story = {
	name: 'Unfilled: Gray',
	args: { type: 'unfilled', color: 'gray' }
};

// ─── Small ───────────────────────────────────────────────────────────────────

export const SmallSolid: Story = {
	name: 'Small: Solid',
	args: { type: 'solid', color: 'green', size: 'small' }
};

export const SmallTransparent: Story = {
	name: 'Small: Transparent',
	args: { type: 'transparent', color: 'green', size: 'small' }
};

export const SmallUnfilled: Story = {
	name: 'Small: Unfilled',
	args: { type: 'unfilled', color: 'green', size: 'small' }
};

// ─── Showcase ────────────────────────────────────────────────────────────────

const colors = ['green', 'yellow', 'red', 'blue', 'gray'] as const;

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Normal Size */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Normal
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
				>
					{/* Solid */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Solid
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='solid'
									color={c}
								/>
							))}
						</Stack>
					</Stack>

					{/* Transparent */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Transparent
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='transparent'
									color={c}
								/>
							))}
						</Stack>
					</Stack>

					{/* Unfilled */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Unfilled
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='unfilled'
									color={c}
								/>
							))}
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			{/* Small Size */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Small
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
				>
					{/* Solid */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Solid
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='solid'
									color={c}
									size='small'
								/>
							))}
						</Stack>
					</Stack>

					{/* Transparent */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Transparent
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='transparent'
									color={c}
									size='small'
								/>
							))}
						</Stack>
					</Stack>

					{/* Unfilled */}
					<Stack
						spacing={1}
						alignItems='center'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Unfilled
						</Typography>
						<Stack spacing={1}>
							{colors.map((c) => (
								<Tag
									key={c}
									type='unfilled'
									color={c}
									size='small'
								/>
							))}
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
};
