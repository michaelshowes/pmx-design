import { useTheme } from '@mui/material';
import { BarChart, type BarChartProps } from '@mui/x-charts/BarChart';
import { LineChart, type LineChartProps } from '@mui/x-charts/LineChart';
import { ScatterChart, type ScatterChartProps } from '@mui/x-charts/ScatterChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export type PlotType = 'bar' | 'line' | 'scatter' | 'stackedBars' | 'pie' | 'blank';
export type LegendPosition = 'none' | 'top' | 'bottom' | 'right' | 'left';

export interface PlotDataSeries {
	label: string;
	data: number[];
}

export interface ScatterDataPoint {
	x: number;
	y: number;
	id: number;
}

export interface ScatterSeries {
	label: string;
	data: ScatterDataPoint[];
}

export interface PieDataPoint {
	id: number;
	value: number;
	label: string;
}

export interface PlotProps {
	plotType?: PlotType;
	legend?: LegendPosition;
	series?: PlotDataSeries[];
	scatterSeries?: ScatterSeries[];
	pieData?: PieDataPoint[];
	xAxisLabels?: string[];
	xAxisLabel?: string;
	yAxisLabel?: string;
	referenceLine?: number;
	width?: number;
	height?: number;
}

export default function Plot({
	plotType = 'bar',
	legend = 'none',
	series = [],
	scatterSeries = [],
	pieData = [],
	xAxisLabels,
	xAxisLabel,
	yAxisLabel,
	referenceLine,
	width = 500,
	height = 300,
}: PlotProps) {
	const theme = useTheme();

	const graphColors = [
		theme.palette.graph.purple,
		theme.palette.graph.cyan,
		theme.palette.graph.teal,
		theme.palette.graph.pink,
		theme.palette.graph.green,
		theme.palette.graph.blue,
		theme.palette.graph.magenta,
		theme.palette.graph.yellow,
		theme.palette.graph.teal2,
		theme.palette.graph.cyan2,
		theme.palette.graph.orange,
		theme.palette.graph.purple2,
	];

	const stackedColors = [
		theme.palette.stackedBars.blue,
		theme.palette.stackedBars.magenta,
		theme.palette.stackedBars.cyan,
		theme.palette.stackedBars.teal,
		theme.palette.stackedBars.purple,
	];

	const colors = plotType === 'stackedBars' ? stackedColors : graphColors;

	const legendProps = getLegendProps(legend);

	if (plotType === 'blank') {
		return (
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{
					width,
					height,
					border: `1px dashed ${theme.palette.divider}`,
					borderRadius: 1,
				}}
			>
				<Typography
					variant='body2'
					color='text.secondary'
				>
					No data available
				</Typography>
			</Stack>
		);
	}

	const xAxis =
		xAxisLabels && plotType !== 'pie'
			? [
					{
						scaleType: 'band' as const,
						data: xAxisLabels,
						label: xAxisLabel,
					},
				]
			: xAxisLabel
				? [{ label: xAxisLabel }]
				: undefined;

	const yAxis = yAxisLabel ? [{ label: yAxisLabel }] : undefined;

	if (plotType === 'pie') {
		const pieSeries = pieData.map((d, i) => ({
			...d,
			color: colors[i % colors.length],
		}));

		return (
			<PieChart
				series={[{ data: pieSeries }]}
				width={width}
				height={height}
				slotProps={{ legend: legendProps }}
			/>
		);
	}

	if (plotType === 'scatter') {
		const chartSeries: ScatterChartProps['series'] = scatterSeries.map(
			(s, i) => ({
				label: s.label,
				data: s.data,
				color: colors[i % colors.length],
			})
		);

		return (
			<ScatterChart
				series={chartSeries}
				width={width}
				height={height}
				yAxis={yAxis}
				slotProps={{ legend: legendProps }}
			/>
		);
	}

	if (plotType === 'line') {
		const chartSeries: LineChartProps['series'] = series.map((s, i) => ({
			label: s.label,
			data: s.data,
			color: colors[i % colors.length],
		}));

		return (
			<LineChart
				series={chartSeries}
				xAxis={xAxis}
				yAxis={yAxis}
				width={width}
				height={height}
				slotProps={{ legend: legendProps }}
			>
				{referenceLine != null && (
					<ChartsReferenceLine y={referenceLine} />
				)}
			</LineChart>
		);
	}

	// bar and stackedBars
	const chartSeries: BarChartProps['series'] = series.map((s, i) => ({
		label: s.label,
		data: s.data,
		color: colors[i % colors.length],
		stack: plotType === 'stackedBars' ? 'total' : undefined,
	}));

	return (
		<BarChart
			series={chartSeries}
			xAxis={xAxis}
			yAxis={yAxis}
			width={width}
			height={height}
			slotProps={{ legend: legendProps }}
		>
			{referenceLine != null && (
				<ChartsReferenceLine y={referenceLine} />
			)}
		</BarChart>
	);
}

function getLegendProps(legend: LegendPosition) {
	if (legend === 'none') {
		return { legend: { hidden: true } };
	}

	const positionMap: Record<
		Exclude<LegendPosition, 'none'>,
		{ direction: 'row' | 'column'; position: { vertical: 'top' | 'bottom' | 'middle'; horizontal: 'left' | 'middle' | 'right' } }
	> = {
		top: {
			direction: 'row',
			position: { vertical: 'top', horizontal: 'middle' },
		},
		bottom: {
			direction: 'row',
			position: { vertical: 'bottom', horizontal: 'middle' },
		},
		right: {
			direction: 'column',
			position: { vertical: 'middle', horizontal: 'right' },
		},
		left: {
			direction: 'column',
			position: { vertical: 'middle', horizontal: 'left' },
		},
	};

	return { legend: positionMap[legend] };
}
