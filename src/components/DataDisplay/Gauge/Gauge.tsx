import { useTheme } from '@mui/material';
import {
	GaugeContainer,
	GaugeValueArc,
	GaugeReferenceArc,
	GaugeValueText,
	useGaugeState,
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

/**
 * Renders a dot at the tip of the active fill arc, creating a visible separator
 * between the active and inactive arc sections.
 */
function ActiveDot({ color }: { color: string }) {
	const { value, valueMin, valueMax, startAngle, endAngle, outerRadius, innerRadius, cx, cy } =
		useGaugeState();

	if (value === null) return null;

	const t = (value - valueMin) / (valueMax - valueMin);
	const angle = startAngle + t * (endAngle - startAngle);
	const angleRad = (angle * Math.PI) / 180;
	const r = (outerRadius + innerRadius) / 2;
	const x = cx + r * Math.sin(angleRad);
	const y = cy - r * Math.cos(angleRad);

	return <circle cx={x} cy={y} r={(outerRadius - innerRadius) / 2} fill={color} />;
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
}: GaugeProps) {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';

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

	// Status: layout.base (white) creates a clear separator between active and inactive arcs.
	// Semi/circle: palette.primary.l80 (light) / palette.primary.d40 (dark) per Figma spec.
	const dotColor =
		type === 'status'
			? theme.palette.layout.base
			: isDark
				? theme.palette.primary.d40
				: theme.palette.primary.l80;

	// palette.layout.11 (light) / palette.layout.16 (dark) per Figma spec
	const inactiveColor = isDark ? theme.palette.layout[16] : theme.palette.layout[11];

	const defaultWidth = 100;
	const defaultHeight = isSemi ? 75 : 100;

	const getText =
		type === 'status'
			? () => status.charAt(0).toUpperCase() + status.slice(1)
			: ({ value: v, valueMax: max }: { value: number | null; valueMax: number }) =>
					`${v ?? 0}/${max}`;

	const gaugeValue =
		type === 'status'
			? status === 'poor'
				? 33
				: status === 'fair'
					? 66
					: 100
			: value;

	return (
		<GaugeContainer
			value={gaugeValue}
			valueMin={valueMin}
			valueMax={valueMax}
			startAngle={startAngle}
			endAngle={endAngle}
			width={width ?? defaultWidth}
			height={height ?? defaultHeight}
			innerRadius='70%'
			outerRadius='100%'
			sx={{
				[`& .${gaugeClasses.valueArc}`]: { fill: activeColor },
				[`& .${gaugeClasses.referenceArc}`]: { fill: inactiveColor },
				[`& .${gaugeClasses.valueText}`]: {
					fontSize: 16,
					fontWeight: 500,
					fontFamily: 'Roboto, sans-serif',
					fill: theme.palette.text.primary,
				},
			}}
		>
			<GaugeReferenceArc />
			<GaugeValueArc />
			<ActiveDot color={dotColor} />
			{label && <GaugeValueText text={getText} />}
		</GaugeContainer>
	);
}
