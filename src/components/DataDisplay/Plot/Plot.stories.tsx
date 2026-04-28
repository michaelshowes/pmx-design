import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Plot from './Plot';

const sampleLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const sampleSeries = [
	{ label: 'Series 1', data: [44, 55, 41, 67, 22, 43] },
	{ label: 'Series 2', data: [13, 23, 20, 8, 13, 27] },
	{ label: 'Series 3', data: [11, 17, 15, 15, 21, 14] }
];

const sampleScatter = [
	{
		label: 'Series A',
		data: [
			{ x: 1, y: 2, id: 0 },
			{ x: 2, y: 5.5, id: 1 },
			{ x: 3, y: 2, id: 2 },
			{ x: 5, y: 8.5, id: 3 },
			{ x: 8, y: 1.5, id: 4 },
			{ x: 10, y: 5, id: 5 }
		]
	},
	{
		label: 'Series B',
		data: [
			{ x: 1, y: 6, id: 0 },
			{ x: 2, y: 3.5, id: 1 },
			{ x: 4, y: 7, id: 2 },
			{ x: 6, y: 4.5, id: 3 },
			{ x: 7, y: 9, id: 4 },
			{ x: 9, y: 3, id: 5 }
		]
	}
];

const samplePie = [
	{ id: 0, value: 35, label: 'Category A' },
	{ id: 1, value: 25, label: 'Category B' },
	{ id: 2, value: 20, label: 'Category C' },
	{ id: 3, value: 15, label: 'Category D' },
	{ id: 4, value: 5, label: 'Category E' }
];

const meta: Meta<typeof Plot> = {
	title: 'Components/Data Display/Plot',
	component: Plot,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/PYFY4V4zLUXFscdEgXrLVu/PMx-Design-System--2-?node-id=8321-14275'
		},
		docs: {
			description: {
				component:
					'Plots display data in chart form. Supports Bar, Line, Scatter, Stacked Bars, and Pie chart types with configurable legend positions and up to 12 data series using the design system graph palette.'
			}
		}
	},
	args: {
		plotType: 'bar',
		legend: 'none',
		width: 500,
		height: 300
	},
	argTypes: {
		plotType: {
			description:
				'Figma: **Type** — Chart type: Bar, Line, Scatter, Stacked Bars, Pie, or Blank State',
			options: ['bar', 'line', 'scatter', 'stackedBars', 'pie', 'blank'],
			control: { type: 'select' }
		},
		legend: {
			description:
				'Figma: **Key** — Legend position: None, Top, Bottom, Right, or Left',
			options: ['none', 'top', 'bottom', 'right', 'left'],
			control: { type: 'select' }
		},
		referenceLine: {
			description: 'Y-axis value for a horizontal reference line',
			control: { type: 'number' }
		},
		xAxisLabel: {
			description: 'Label for the X axis',
			control: { type: 'text' }
		},
		yAxisLabel: {
			description: 'Label for the Y axis',
			control: { type: 'text' }
		},
		width: {
			description: 'Chart width in pixels',
			control: { type: 'number' }
		},
		height: {
			description: 'Chart height in pixels',
			control: { type: 'number' }
		}
	}
};

export default meta;
type Story = StoryObj<typeof Plot>;

// ─── Bar ─────────────────────────────────────────────────────────────────────

export const BarWithLegend: Story = {
	name: 'Bar: With Legend',
	args: {
		plotType: 'bar',
		series: sampleSeries,
		xAxisLabels: sampleLabels,
		legend: 'bottom'
	}
};

export const BarWithReferenceLine: Story = {
	name: 'Bar: With Reference Line',
	args: {
		plotType: 'bar',
		series: sampleSeries,
		xAxisLabels: sampleLabels,
		referenceLine: 40
	}
};

export const BarWithAxisLabels: Story = {
	name: 'Bar: With Axis Labels',
	args: {
		plotType: 'bar',
		series: sampleSeries,
		xAxisLabels: sampleLabels,
		xAxisLabel: 'Month',
		yAxisLabel: 'Value'
	}
};

// ─── Line ────────────────────────────────────────────────────────────────────

export const Line: Story = {
	args: {
		plotType: 'line',
		series: sampleSeries,
		xAxisLabels: sampleLabels
	}
};

export const LineWithLegend: Story = {
	name: 'Line: With Legend',
	args: {
		plotType: 'line',
		series: sampleSeries,
		xAxisLabels: sampleLabels,
		legend: 'top'
	}
};

// ─── Scatter ─────────────────────────────────────────────────────────────────

export const Scatter: Story = {
	args: {
		plotType: 'scatter',
		scatterSeries: sampleScatter
	}
};

export const ScatterWithLegend: Story = {
	name: 'Scatter: With Legend',
	args: {
		plotType: 'scatter',
		scatterSeries: sampleScatter,
		legend: 'right'
	}
};

// ─── Stacked Bars ────────────────────────────────────────────────────────────

export const StackedBars: Story = {
	args: {
		plotType: 'stackedBars',
		series: sampleSeries,
		xAxisLabels: sampleLabels
	}
};

export const StackedBarsWithLegend: Story = {
	name: 'Stacked Bars: With Legend',
	args: {
		plotType: 'stackedBars',
		series: sampleSeries,
		xAxisLabels: sampleLabels,
		legend: 'bottom'
	}
};

// ─── Pie ─────────────────────────────────────────────────────────────────────

export const Pie: Story = {
	args: {
		plotType: 'pie',
		pieData: samplePie
	}
};

export const PieWithLegend: Story = {
	name: 'Pie: With Legend',
	args: {
		plotType: 'pie',
		pieData: samplePie,
		legend: 'right'
	}
};

// ─── Blank State ─────────────────────────────────────────────────────────────

export const BlankState: Story = {
	args: {
		plotType: 'blank'
	}
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={6}>
			{/* Bar */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Bar Chart
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
					flexWrap='wrap'
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
							No Legend
						</Typography>
						<Plot
							plotType='bar'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
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
							Bottom Legend
						</Typography>
						<Plot
							plotType='bar'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
							legend='bottom'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Line */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Line Chart
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
					flexWrap='wrap'
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
							No Legend
						</Typography>
						<Plot
							plotType='line'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
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
							Top Legend
						</Typography>
						<Plot
							plotType='line'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
							legend='top'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Scatter */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Scatter Chart
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
					flexWrap='wrap'
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
							No Legend
						</Typography>
						<Plot
							plotType='scatter'
							scatterSeries={sampleScatter}
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
							Right Legend
						</Typography>
						<Plot
							plotType='scatter'
							scatterSeries={sampleScatter}
							legend='right'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Stacked Bars */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Stacked Bars
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
					flexWrap='wrap'
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
							No Legend
						</Typography>
						<Plot
							plotType='stackedBars'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
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
							Bottom Legend
						</Typography>
						<Plot
							plotType='stackedBars'
							series={sampleSeries}
							xAxisLabels={sampleLabels}
							legend='bottom'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Pie */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Pie Chart
				</Typography>
				<Stack
					direction='row'
					spacing={4}
					alignItems='flex-start'
					flexWrap='wrap'
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
							No Legend
						</Typography>
						<Plot
							plotType='pie'
							pieData={samplePie}
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
							Right Legend
						</Typography>
						<Plot
							plotType='pie'
							pieData={samplePie}
							legend='right'
						/>
					</Stack>
				</Stack>
			</Stack>

			{/* Blank State */}
			<Stack spacing={2}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Blank State
				</Typography>
				<Plot plotType='blank' />
			</Stack>
		</Stack>
	)
};
