import { Box } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import Spacing, {
	SpacingCategories,
	SpacingScale,
	GridSystem,
	ColumnLayouts,
	ColumnLayoutsExample2,
} from './Spacing';

export default {
	title: 'Style Guide/Spacing',
	component: Spacing,
	tags: ['!autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=5374-16008',
		},
	},
} as Meta;

export const Overview: StoryObj = {};

export const SpacingScaleStory: StoryObj = {
	name: 'Spacing Scale',
	render: () => (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
			<SpacingCategories />
			<SpacingScale />
		</Box>
	),
};

export const Grid: StoryObj = {
	render: () => <GridSystem />,
};

export const ColumnLayoutsExample1: StoryObj = {
	name: 'Column Layouts — Example 1',
	render: () => <ColumnLayouts />,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=5636-16330',
		},
	},
};

export const TwoPanelSplits: StoryObj = {
	name: 'Column Layouts — Example 2',
	render: () => <ColumnLayoutsExample2 />,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=5636-16601',
		},
	},
};
