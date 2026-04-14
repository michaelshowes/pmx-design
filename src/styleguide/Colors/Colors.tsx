import palette from '../../theme/colors.json';
import css from './colors.module.css';
import { toast, Toaster } from 'sonner';

type FlatColorMap = Record<string, string>;
type ModeColorMap = { light?: FlatColorMap; dark?: FlatColorMap };
type SwatchProps = {
	value: string;
	size?: 'normal' | 'large';
};
type ColorGradientProps = {
	colors: FlatColorMap | ModeColorMap;
	mode?: 'light' | 'dark';
};

function isNested(colors: FlatColorMap | ModeColorMap): colors is ModeColorMap {
	return 'light' in colors || 'dark' in colors;
}

function copyHexToClipboard(hex: string) {
	navigator.clipboard.writeText(hex);
	toast.success(<div>Copied {hex} to clipboard</div>);
}

function Swatch({ value, size = 'normal' }: SwatchProps) {
	return (
		<div
			className={`${css.swatch} ${size === 'normal' ? css.swatchNormal : css.swatchLarge}`}
			style={{ backgroundColor: value }}
			onClick={() => copyHexToClipboard(value)}
		/>
	);
}

function ColorGradient({ colors, mode = 'light' }: ColorGradientProps) {
	const flatColors: FlatColorMap = isNested(colors)
		? ((mode === 'dark' ? colors.dark : colors.light) ??
			colors.dark ??
			colors.light ??
			{})
		: colors;

	return (
		<div className={css.colorGradient}>
			{(flatColors.main || flatColors.base) && (
				<Swatch
					value={flatColors.main || flatColors.base}
					size='large'
				/>
			)}
			<div className={css.colorGradientInner}>
				{Object.entries(flatColors).map(([key, value]) => (
					<div key={key}>
						<div className={css.colorItem}>
							<Swatch value={value} />
							<span className={css.colorValue}>{value}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Colors() {
	return (
		<>
			<Toaster />
			<div className={css.container}>
				<div>
					<h2>Primary</h2>
					{Object.entries(palette.primary).map(([key, value]) => (
						<div key={key}>
							<h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
							<ColorGradient colors={value} />
						</div>
					))}
				</div>

				<div>
					<h2>Status</h2>
					{Object.entries(palette.semantic).map(([key, value]) => (
						<div key={key}>
							<h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
							<ColorGradient colors={value} />
						</div>
					))}
				</div>

				<div>
					<h2>Neutral</h2>
					<div>
						<h3>Grayscale</h3>
						<ColorGradient colors={palette.grayscale} />
					</div>
					<div>
						<h3>Layout</h3>
						<ColorGradient colors={palette.layout} />
					</div>
				</div>

				<div>
					<h2>Plot + Indicators</h2>
					<div>
						<h3>Graph</h3>
						<ColorGradient colors={palette.graph.light} />
					</div>
					<div>
						<h3>Stacked Bars</h3>
						<ColorGradient colors={palette.stackedBars.light} />
					</div>
					<div>
						<h3>Operational Readiness</h3>
						<ColorGradient colors={palette.operationalReadiness.light} />
					</div>
				</div>
			</div>
		</>
	);
}
