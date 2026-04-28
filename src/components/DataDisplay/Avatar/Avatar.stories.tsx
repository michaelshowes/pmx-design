import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Data Display/Avatar',
	component: Avatar,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=8344-13386&m=dev'
		},
		docs: {
			description: {
				component:
					'Avatars are used to link distinct users to items (i.e., which user is logged in, which user left a comment, etc.). Use minimum size (40px) for app dashboards. Use maximum size (60px) in the user account menu.'
			}
		}
	},
	args: {
		label: 'JS',
		size: 40,
		variant: 'circular'
	},
	argTypes: {
		label: {
			description: 'User initials displayed in the avatar',
			control: { type: 'text' }
		},
		size: {
			description:
				'Figma: **Size** — Minimum (40px) for dashboards, Maximum (60px) for account menu',
			control: { type: 'number', min: 40, max: 60 }
		},
		variant: {
			description: 'Shape variant of the avatar',
			options: ['circular', 'rounded', 'square'],
			control: { type: 'radio' }
		},
		src: {
			description: 'Image source URL (overrides label when set)',
			control: { type: 'text' }
		},
		alt: {
			description: 'Alt text for image avatars',
			control: { type: 'text' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// ─── Playground ──────────────────────────────────────────────────────────────

export const Default: Story = {};

// ─── Image ───────────────────────────────────────────────────────────────────

export const WithImage: Story = {
	args: {
		src: 'https://i.pravatar.cc/150?img=5',
		alt: 'John Smith',
		label: undefined
	}
};

export const ImageLarge: Story = {
	name: 'With Image (60px)',
	args: {
		src: 'https://i.pravatar.cc/150?img=5',
		alt: 'John Smith',
		size: 60,
		label: undefined
	}
};

// ─── Size ────────────────────────────────────────────────────────────────────

export const MinimumSize: Story = {
	name: 'Size: Minimum (40px)',
	args: { size: 40 }
};

export const MaximumSize: Story = {
	name: 'Size: Maximum (60px)',
	args: { size: 60 }
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={4}>
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Initials
				</Typography>
				<Stack
					direction='row'
					spacing={3}
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
							Minimum (40px)
						</Typography>
						<Avatar
							label='JS'
							size={40}
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
							Maximum (60px)
						</Typography>
						<Avatar
							label='JS'
							size={60}
						/>
					</Stack>
				</Stack>
			</Stack>
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Image
				</Typography>
				<Stack
					direction='row'
					spacing={3}
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
							Minimum (40px)
						</Typography>
						<Avatar
							src='https://i.pravatar.cc/150?img=5'
							alt='User 1'
							size={40}
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
							Maximum (60px)
						</Typography>
						<Avatar
							src='https://i.pravatar.cc/150?img=5'
							alt='User 1'
							size={60}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
};
