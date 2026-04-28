import { useTheme } from '@mui/material';
import {
	Gauge as MuiGauge,
	type GaugeProps as MuiGaugeProps,
	gaugeClasses,
} from '@mui/x-charts/Gauge';

type GaugeBaseProps = Pick<
	MuiGaugeProps,
	'value' | 'valueMin' | 'valueMax' | 'width' | 'height'
>;

export interface GaugeProps extends GaugeBaseProps {
	type?: 'semi' | 'circle' | 'status';
	label?: boolean;
	status?: 'poor' | 'fair' | 'good';
}

export default function Gauge({
	type = 'semi',
	label = true,
	status = 'poor',
	value,
	valueMin = 0,
	valueMax = 100,
	width,
	height,
	...rest
}: GaugeProps) {
	const theme = useTheme();

	const isSemi = type === 'semi' || type === 'status';
	const startAngle = isSemi ? -90 : 0;
	const endAngle = isSemi ? 90 : 360;

	const statusColors: Record<string, string> = {
		poor: theme.palette.error.main,
		fair: theme.palette.warning.main,
		good: theme.palette.success.l20 ?? theme.palette.success.main,
	};

	const activeColor =
		type === 'status' ? statusColors[status] : theme.palette.primary.main;

	const defaultWidth = 100;
	const defaultHeight = isSemi ? 75 : 100;

	const getText =
		type === 'status'
			? () => status.charAt(0).toUpperCase() + status.slice(1)
			: ({ value: v, valueMax: max }: { value: number; valueMax: number }) =>
					`${v}/${max}`;

	const gaugeValue =
		type === 'status'
			? status === 'poor'
				? 33
				: status === 'fair'
					? 66
					: 100
			: value;

	return (
		<MuiGauge
			value={gaugeValue}
			valueMin={valueMin}
			valueMax={valueMax}
			startAngle={startAngle}
			endAngle={endAngle}
			width={width ?? defaultWidth}
			height={height ?? defaultHeight}
			innerRadius='70%'
			outerRadius='100%'
			text={label ? getText : undefined}
			sx={{
				[`& .${gaugeClasses.valueArc}`]: {
					fill: activeColor,
				},
				[`& .${gaugeClasses.referenceArc}`]: {
					fill: theme.palette.layout[11],
				},
				[`& .${gaugeClasses.valueText}`]: {
					fontSize: 16,
					fontWeight: 500,
					fontFamily: 'Roboto, sans-serif',
					fill: theme.palette.text.primary,
				},
			}}
			{...rest}
		/>
	);
}
