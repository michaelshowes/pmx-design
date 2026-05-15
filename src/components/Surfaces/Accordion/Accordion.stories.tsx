import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
	component: Accordion,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=6312-25209'
		},
		docs: {
			description: {
				component:
					'An accordion allows users to show and hide a group of related content. Use primary accordion when it is not nested in another layout component. Use secondary accordion to nest within other layout components.'
			}
		}
	},
	args: {
		title: 'Accordion Title',
		variant: 'primary',
		defaultExpanded: false
	},
	argTypes: {
		variant: {
			description: 'Primary or Secondary',
			options: ['primary', 'secondary'],
			control: { type: 'inline-radio' }
		},
		title: {
			description: 'Accordion header title text',
			control: { type: 'text' }
		},
		defaultExpanded: {
			description: 'Whether the accordion is expanded by default',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleContent = (
	<Typography
		variant='body1'
		sx={{ color: (theme) => theme.palette.scale.d80 }}
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
		Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
		ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
		quis imperdiet augue.
	</Typography>
);

// ─── Primary ─────────────────────────────────────────────────────────────────

export const PrimaryClosed: Story = {
	name: 'Primary: Closed',
	args: {
		variant: 'primary',
		children: sampleContent
	}
};

export const PrimaryExpanded: Story = {
	name: 'Primary: Expanded',
	args: {
		variant: 'primary',
		defaultExpanded: true,
		children: sampleContent
	}
};

// ─── Secondary ───────────────────────────────────────────────────────────────

export const SecondaryClosed: Story = {
	name: 'Secondary: Closed',
	args: {
		variant: 'secondary',
		children: sampleContent
	}
};

export const SecondaryExpanded: Story = {
	name: 'Secondary: Expanded',
	args: {
		variant: 'secondary',
		defaultExpanded: true,
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
					spacing={2}
					sx={{ maxWidth: 600 }}
				>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Closed
						</Typography>
						<Accordion
							variant='primary'
							title='Accordion Title'
						>
							{sampleContent}
						</Accordion>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Expanded
						</Typography>
						<Accordion
							variant='primary'
							title='Accordion Title'
							defaultExpanded
						>
							{sampleContent}
						</Accordion>
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
					spacing={2}
					sx={{ maxWidth: 600 }}
				>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Closed
						</Typography>
						<Accordion
							variant='secondary'
							title='Accordion Title'
						>
							{sampleContent}
						</Accordion>
					</Stack>
					<Stack
						spacing={1}
						alignItems='flex-start'
					>
						<Typography
							variant='caption'
							color='text.disabled'
							fontSize={10}
						>
							Expanded
						</Typography>
						<Accordion
							variant='secondary'
							title='Accordion Title'
							defaultExpanded
						>
							{sampleContent}
						</Accordion>
					</Stack>
				</Stack>
			</Stack>

			{/* Nested Example */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Nested (Primary + Secondary)
				</Typography>
				<Stack sx={{ maxWidth: 600 }}>
					<Accordion
						variant='primary'
						title='Primary Accordion'
						defaultExpanded
					>
						<Stack sx={{ gap: 2 }}>
							<Typography
								variant='body1'
								sx={{ color: (theme) => theme.palette.scale.d80 }}
							>
								Content above the nested accordion.
							</Typography>
							<Accordion
								variant='secondary'
								title='Nested Secondary Accordion'
								defaultExpanded
							>
								{sampleContent}
							</Accordion>
						</Stack>
					</Accordion>
				</Stack>
			</Stack>
		</Stack>
	)
};
