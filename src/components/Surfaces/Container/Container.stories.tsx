import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Container from './Container';

const meta: Meta<typeof Container> = {
	title: 'Components/Surfaces/Container',
	component: Container,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=6642-20561'
		},
		docs: {
			description: {
				component:
					'A container is a layout component used to group related content. Use primary container when it is the main content area. Use secondary container when nesting inside another layout component. The color bar variant adds a colored indicator on the left side.'
			}
		}
	},
	args: {
		title: 'Container Title',
		variant: 'primary'
	},
	argTypes: {
		variant: {
			description: 'Primary or Secondary',
			options: ['primary', 'secondary'],
			control: { type: 'inline-radio' }
		},
		title: {
			description: 'Container header title text',
			control: { type: 'text' }
		},
		colorBar: {
			description:
				'A colored bar on the left side of the container. Pass a CSS color string. Only intended for use on the secondary variant.',
			control: { type: 'color' }
		},
		showIcon: {
			description: 'Whether to show an icon button in the title area',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Container>;

const sampleContent = (
	<Typography
		variant='body1'
		sx={{ color: (theme) => theme.palette.scale.d80 }}
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
		Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
		ligula consectetur, ultrices mauris.
	</Typography>
);

const sampleFooter = (
	<>
		<Button variant='outlined'>Cancel</Button>
		<Button variant='contained'>Save</Button>
	</>
);

// ─── Primary ─────────────────────────────────────────────────────────────────

export const PrimaryDefault: Story = {
	name: 'Primary: Default',
	args: {
		variant: 'primary',
		children: sampleContent
	}
};

export const PrimaryWithFooter: Story = {
	name: 'Primary: With Footer',
	args: {
		variant: 'primary',
		footer: sampleFooter,
		children: sampleContent
	}
};

export const PrimaryWithIcon: Story = {
	name: 'Primary: With Icon',
	args: {
		variant: 'primary',
		showIcon: true,
		onIconClick: () => {},
		children: sampleContent
	}
};

// ─── Secondary ───────────────────────────────────────────────────────────────

export const SecondaryDefault: Story = {
	name: 'Secondary: Default',
	args: {
		variant: 'secondary',
		colorBar: '#198038',
		children: sampleContent
	}
};

export const SecondaryWithFooter: Story = {
	name: 'Secondary: With Footer',
	args: {
		variant: 'secondary',
		footer: sampleFooter,
		colorBar: '#6929c4',
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
						<Container
							title='Container Title'
							variant='primary'
						>
							{sampleContent}
						</Container>
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
							With Footer
						</Typography>
						<Container
							title='Container Title'
							variant='primary'
							footer={sampleFooter}
						>
							{sampleContent}
						</Container>
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
						<Container
							title='Container Title'
							variant='secondary'
						>
							{sampleContent}
						</Container>
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
							With Footer
						</Typography>
						<Container
							title='Container Title'
							variant='secondary'
							footer={sampleFooter}
						>
							{sampleContent}
						</Container>
					</Stack>
				</Stack>
			</Stack>

			{/* Color Bar */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Color Bar
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
							Purple
						</Typography>
						<Container
							title='Container Title'
							variant='secondary'
							colorBar='#6929c4'
						>
							{sampleContent}
						</Container>
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
							Green
						</Typography>
						<Container
							title='Container Title'
							variant='secondary'
							colorBar='#198038'
						>
							{sampleContent}
						</Container>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
};
