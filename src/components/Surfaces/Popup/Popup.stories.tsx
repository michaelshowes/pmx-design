import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Popup from './Popup';

const meta: Meta<typeof Popup> = {
	title: 'Components/Surfaces/Popup',
	component: Popup,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=6486-23638'
		},
		docs: {
			description: {
				component:
					'A pop-up is an overlay container that opens over existing content, allowing users to view additional information without interrupting their workflow. Use to present secondary tasks to the user without cluttering the main interface.'
			}
		}
	},
	args: {
		title: 'Pop-up Title'
	},
	argTypes: {
		title: {
			description: 'Pop-up header title text',
			control: { type: 'text' }
		},
		linkText: {
			description: 'Optional link text displayed in the title area',
			control: { type: 'text' }
		},
		showCloseIcon: {
			description: 'Whether to show a close icon button in the title area',
			control: { type: 'boolean' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Popup>;

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

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
	args: {
		children: sampleContent
	}
};

// ─── With Link ───────────────────────────────────────────────────────────────

export const WithLink: Story = {
	args: {
		linkText: 'Clear Filters',
		onLinkClick: () => {},
		children: sampleContent
	}
};

// ─── With Close Icon ─────────────────────────────────────────────────────────

export const WithCloseIcon: Story = {
	args: {
		showCloseIcon: true,
		onClose: () => {},
		children: sampleContent
	}
};

// ─── With Footer ─────────────────────────────────────────────────────────────

export const WithFooter: Story = {
	args: {
		footer: sampleFooter,
		children: sampleContent
	}
};

// ─── Full Featured ───────────────────────────────────────────────────────────

export const FullFeatured: Story = {
	args: {
		linkText: 'Link',
		onLinkClick: () => {},
		showCloseIcon: true,
		onClose: () => {},
		footer: sampleFooter,
		children: sampleContent
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Pop-up Variants
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
						<Box sx={{ width: 329 }}>
							<Popup title='Pop-up Title'>{sampleContent}</Popup>
						</Box>
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
							With Link
						</Typography>
						<Box sx={{ width: 329 }}>
							<Popup
								title='Filters'
								linkText='Clear Filters'
								onLinkClick={() => {}}
							>
								{sampleContent}
							</Popup>
						</Box>
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
						<Box sx={{ width: 329 }}>
							<Popup
								title='Pop-up Title'
								footer={sampleFooter}
							>
								{sampleContent}
							</Popup>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
};
