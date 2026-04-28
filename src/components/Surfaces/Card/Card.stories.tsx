import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Card from './Card';

const meta: Meta<typeof Card> = {
	title: 'Components/Surfaces/Card',
	component: Card,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=6375-7690'
		},
		docs: {
			description: {
				component:
					'A card contains related content that users can view and/or take action on. Use primary card when nesting inside another primary component. Use secondary card when nesting inside another secondary component.'
			}
		}
	},
	args: {
		title: 'Card Title',
		variant: 'primary',
		selected: false
	},
	argTypes: {
		variant: {
			description:
				'Figma: **Variant** — Primary or Secondary',
			options: ['primary', 'secondary'],
			control: { type: 'inline-radio' }
		},
		title: {
			description: 'Card header title text',
			control: { type: 'text' }
		},
		selected: {
			description:
				'Figma: **State=Selected** — Whether the card shows a selected border',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Card>;

const sampleContent = (
	<Typography
		variant='body2'
		color='text.secondary'
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
		mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
		mattis ligula consectetur, ultrices mauris.
	</Typography>
);

// ─── Primary ─────────────────────────────────────────────────────────────────

export const PrimaryDefault: Story = {
	name: 'Primary: Default',
	args: {
		variant: 'primary',
		children: sampleContent
	}
};

export const PrimarySelected: Story = {
	name: 'Primary: Selected',
	args: {
		variant: 'primary',
		selected: true,
		onClick: () => {},
		children: sampleContent
	}
};

export const PrimaryClickable: Story = {
	name: 'Primary: Clickable',
	args: {
		variant: 'primary',
		onClick: () => {},
		children: sampleContent
	}
};

// ─── Secondary ───────────────────────────────────────────────────────────────

export const SecondaryDefault: Story = {
	name: 'Secondary: Default',
	args: {
		variant: 'secondary',
		children: sampleContent
	}
};

export const SecondarySelected: Story = {
	name: 'Secondary: Selected',
	args: {
		variant: 'secondary',
		selected: true,
		onClick: () => {},
		children: sampleContent
	}
};

// ─── No Title ────────────────────────────────────────────────────────────────

export const NoTitle: Story = {
	args: {
		title: undefined,
		children: sampleContent
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Primary */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Primary
				</Typography>
				<Stack
					direction='row'
					spacing={3}
					alignItems='flex-start'
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
						<Card
							title='Card Title'
							variant='primary'
						>
							{sampleContent}
						</Card>
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
							Hover (click me)
						</Typography>
						<Card
							title='Card Title'
							variant='primary'
							onClick={() => {}}
						>
							{sampleContent}
						</Card>
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
						<Card
							title='Card Title'
							variant='primary'
							selected
							onClick={() => {}}
						>
							{sampleContent}
						</Card>
					</Stack>
				</Stack>
			</Stack>

			{/* Secondary */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Secondary
				</Typography>
				<Stack
					direction='row'
					spacing={3}
					alignItems='flex-start'
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
						<Card
							title='Card Title'
							variant='secondary'
						>
							{sampleContent}
						</Card>
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
							Hover (click me)
						</Typography>
						<Card
							title='Card Title'
							variant='secondary'
							onClick={() => {}}
						>
							{sampleContent}
						</Card>
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
						<Card
							title='Card Title'
							variant='secondary'
							selected
							onClick={() => {}}
						>
							{sampleContent}
						</Card>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
};
