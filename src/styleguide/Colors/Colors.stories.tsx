import type { Meta, StoryObj } from '@storybook/react-vite';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { toast, Toaster } from 'sonner';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function contrastColor(hex: string): string {
	if (!hex || !hex.startsWith('#')) return '#1a1a1a';
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#1a1a1a' : '#ffffff';
}

function copyHexToClipboard(hex: string) {
	navigator.clipboard.writeText(hex);
	toast.success(
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='space-between'
			width='100%'
			gap={1}
		>
			<p>Copied {hex} to clipboard</p>
			<Box
				sx={{
					width: 16,
					height: 16,
					backgroundColor: hex,
					borderRadius: '50%'
				}}
			/>
		</Stack>
	);
}

// ─── Swatch ───────────────────────────────────────────────────────────────────

interface SwatchToken {
	/** Full palette token path, e.g. "palette.primary.main" */
	token: string;
	/** Resolved hex value */
	value: string;
	key?: string;
}

function ColorSwatch({ token, value }: SwatchToken) {
	if (!value) return null;
	const onSwatch = contrastColor(value);
	return (
		<Box
			sx={{
				borderRadius: '4px',
				overflow: 'hidden',
				border: (theme) => `1px solid ${theme.palette.layout[11]}`,
				minWidth: 0,
				cursor: 'pointer'
			}}
			onClick={() => copyHexToClipboard(value)}
		>
			{/* Color block */}
			<Box
				sx={{
					height: 64,
					backgroundColor: value,
					display: 'flex',
					alignItems: 'flex-end',
					px: 1,
					pb: '6px'
				}}
			>
				<Typography
					sx={{
						fontSize: 10,
						fontFamily: 'monospace',
						color: onSwatch,
						opacity: 0.75,
						lineHeight: 1,
						letterSpacing: '0.02em'
					}}
				>
					{value}
				</Typography>
			</Box>
			{/* Label */}
			<Box sx={{ px: 1, py: '6px', backgroundColor: 'background.paper' }}>
				<Typography
					sx={{
						fontSize: 12,
						fontFamily: 'monospace',
						fontWeight: 600,
						lineHeight: 1.2,
						color: 'text.primary',
						mb: '2px'
					}}
				>
					{token.split('.').at(-1)}
				</Typography>
				<Typography
					sx={{
						fontSize: 10,
						fontFamily: 'monospace',
						color: 'text.disabled',
						lineHeight: 1.3,
						wordBreak: 'break-all'
					}}
				>
					{token}
				</Typography>
			</Box>
		</Box>
	);
}

// ─── Section ──────────────────────────────────────────────────────────────────

function PaletteSection({
	title,
	description,
	tokens
}: {
	title: string;
	description?: string;
	tokens: SwatchToken[];
}) {
	const visible = tokens.filter((t) => !!t.value);
	if (!visible.length) return null;

	return (
		<Stack spacing={1.5}>
			<Box>
				<Typography
					variant='overline'
					sx={{
						fontWeight: 600,
						letterSpacing: '0.08em',
						color: 'text.secondary'
					}}
				>
					{title}
				</Typography>
				{description && (
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ mt: 0.25 }}
					>
						{description}
					</Typography>
				)}
			</Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
					gap: 1
				}}
			>
				{visible.map((t) => (
					<ColorSwatch
						key={t.token}
						{...t}
					/>
				))}
			</Box>
		</Stack>
	);
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function ColorsPage() {
	const { palette: p } = useTheme();

	return (
		<Stack
			spacing={5}
			sx={{ p: 4, maxWidth: 1100 }}
		>
			{/* Header */}
			<Box>
				<Typography
					variant='h5'
					sx={{ fontWeight: 500, mb: 1 }}
				>
					Color Palette
				</Typography>
				<Typography
					variant='body1'
					color='text.secondary'
				>
					All semantic color tokens available in the current theme. Token names
					map directly to <code>theme.palette.*</code> and can be referenced in{' '}
					<code>useTheme()</code>, MUI <code>sx</code> props, and component
					overrides. Toggle themes via the toolbar to preview light and dark
					variants.
				</Typography>
			</Box>

			<Divider />

			{/* ── Semantic ──────────────────────────────────────────────────── */}

			<PaletteSection
				title='Primary'
				description='palette.primary — interactive elements, buttons, links, focus rings.'
				tokens={[
					{ token: 'palette.primary.l80', value: p.primary.l80 },
					{ token: 'palette.primary.l60', value: p.primary.l60 },
					{ token: 'palette.primary.l40', value: p.primary.l40 },
					{ token: 'palette.primary.l20', value: p.primary.l20 },
					{ token: 'palette.primary.main', value: p.primary.main },
					{ token: 'palette.primary.d20', value: p.primary.d20 },
					{ token: 'palette.primary.d40', value: p.primary.d40 },
					{ token: 'palette.primary.d60', value: p.primary.d60 },
					{ token: 'palette.primary.d80', value: p.primary.d80 }
				]}
			/>

			<PaletteSection
				title='Danger (palette.error)'
				description='Destructive actions, error states, validation failures.'
				tokens={[
					{ token: 'palette.error.l90', value: p.error.l90 ?? '' },
					{ token: 'palette.error.l80', value: p.error.l80 },
					{ token: 'palette.error.l60', value: p.error.l60 },
					{ token: 'palette.error.l40', value: p.error.l40 },
					{ token: 'palette.error.l20', value: p.error.l20 },
					{ token: 'palette.error.main', value: p.error.main },
					{ token: 'palette.error.d20', value: p.error.d20 },
					{ token: 'palette.error.d40', value: p.error.d40 },
					{ token: 'palette.error.d60', value: p.error.d60 },
					{ token: 'palette.error.d80', value: p.error.d80 }
				]}
			/>

			<PaletteSection
				title='Caution (palette.warning)'
				description='Non-blocking warnings, cautionary states.'
				tokens={[
					{ token: 'palette.warning.l80', value: p.warning.l80 },
					{ token: 'palette.warning.l60', value: p.warning.l60 },
					{ token: 'palette.warning.main', value: p.warning.main },
					{ token: 'palette.warning.d20', value: p.warning.d20 },
					{ token: 'palette.warning.d40', value: p.warning.d40 },
					{ token: 'palette.warning.d60', value: p.warning.d60 }
				]}
			/>

			<PaletteSection
				title='Info (palette.info)'
				description='Informational callouts and neutral highlights.'
				tokens={[
					{ token: 'palette.info.l80', value: p.info.l80 },
					{ token: 'palette.info.l60', value: p.info.l60 },
					{ token: 'palette.info.l40', value: p.info.l40 },
					{ token: 'palette.info.main', value: p.info.main },
					{ token: 'palette.info.d20', value: p.info.d20 },
					{ token: 'palette.info.d40', value: p.info.d40 },
					{ token: 'palette.info.d60', value: p.info.d60 }
				]}
			/>

			<PaletteSection
				title='Confirmation (palette.success)'
				description='Positive feedback, confirmed states, successful operations.'
				tokens={[
					{ token: 'palette.success.l80', value: p.success.l80 },
					{ token: 'palette.success.l60', value: p.success.l60 },
					{ token: 'palette.success.l40', value: p.success.l40 },
					{ token: 'palette.success.l20', value: p.success.l20 },
					{ token: 'palette.success.main', value: p.success.main },
					{ token: 'palette.success.d20', value: p.success.d20 },
					{ token: 'palette.success.d40', value: p.success.d40 },
					{ token: 'palette.success.d60', value: p.success.d60 }
				]}
			/>

			<Divider />

			{/* ── Neutral ───────────────────────────────────────────────────── */}

			<PaletteSection
				title='Scale (palette.scale)'
				description='Neutral grays used for text, borders, and UI structure. Aliases: text.primary = scale.d80 · text.secondary = scale.d40 · text.disabled = scale.d20.'
				tokens={[
					{ token: 'palette.scale.white', value: p.scale.white },
					{ token: 'palette.scale.l90', value: p.scale.l90 },
					{ token: 'palette.scale.l80', value: p.scale.l80 },
					{ token: 'palette.scale.l60', value: p.scale.l60 },
					{ token: 'palette.scale.l40', value: p.scale.l40 },
					{ token: 'palette.scale.l20', value: p.scale.l20 },
					{ token: 'palette.scale.main', value: p.scale.main },
					{ token: 'palette.scale.d20', value: p.scale.d20 },
					{ token: 'palette.scale.d40', value: p.scale.d40 },
					{ token: 'palette.scale.d60', value: p.scale.d60 },
					{ token: 'palette.scale.d80', value: p.scale.d80 },
					{ token: 'palette.scale.d90', value: p.scale.d90 },
					{ token: 'palette.scale.black', value: p.scale.black }
				]}
			/>

			<PaletteSection
				title='Layout (palette.layout)'
				description='Surface elevations used for backgrounds, containers, and dividers. Numbers indicate relative elevation — base is the page background, higher numbers are progressively darker (light) or lighter (dark).'
				tokens={[
					{ token: 'palette.layout.base', value: p.layout.base },
					{ token: 'palette.layout[5]', value: p.layout[5] },
					{ token: 'palette.layout[7]', value: p.layout[7] },
					{ token: 'palette.layout[8]', value: p.layout[8] },
					{ token: 'palette.layout[9]', value: p.layout[9] },
					{ token: 'palette.layout[11]', value: p.layout[11] },
					{ token: 'palette.layout[12]', value: p.layout[12] },
					{ token: 'palette.layout[14]', value: p.layout[14] },
					{ token: 'palette.layout[15]', value: p.layout[15] },
					{ token: 'palette.layout[16]', value: p.layout[16] }
				]}
			/>

			<Divider />

			{/* ── Data Visualization ────────────────────────────────────────── */}

			<PaletteSection
				title='Graph (palette.graph)'
				description='12 qualitative colors for categorical data visualization. Apply in order for accessible charts.'
				tokens={[
					{ token: 'palette.graph.purple', value: p.graph.purple },
					{ token: 'palette.graph.cyan', value: p.graph.cyan },
					{ token: 'palette.graph.teal', value: p.graph.teal },
					{ token: 'palette.graph.pink', value: p.graph.pink },
					{ token: 'palette.graph.green', value: p.graph.green ?? '' },
					{ token: 'palette.graph.blue', value: p.graph.blue },
					{ token: 'palette.graph.magenta', value: p.graph.magenta },
					{ token: 'palette.graph.yellow', value: p.graph.yellow ?? '' },
					{ token: 'palette.graph.teal2', value: p.graph.teal2 },
					{ token: 'palette.graph.cyan2', value: p.graph.cyan2 },
					{ token: 'palette.graph.orange', value: p.graph.orange },
					{ token: 'palette.graph.purple2', value: p.graph.purple2 }
				]}
			/>

			<PaletteSection
				title='Stacked Bars (palette.stackedBars)'
				description='5-color palette specifically for stacked bar charts.'
				tokens={[
					{ token: 'palette.stackedBars.blue', value: p.stackedBars.blue },
					{
						token: 'palette.stackedBars.magenta',
						value: p.stackedBars.magenta
					},
					{ token: 'palette.stackedBars.cyan', value: p.stackedBars.cyan },
					{ token: 'palette.stackedBars.teal', value: p.stackedBars.teal },
					{ token: 'palette.stackedBars.purple', value: p.stackedBars.purple }
				]}
			/>

			<Divider />

			{/* ── Domain-Specific ───────────────────────────────────────────── */}

			<PaletteSection
				title='Operational Readiness (palette.operationalReadiness)'
				description='Status colors for military equipment readiness reporting.'
				tokens={[
					{
						key: 'fmc',
						token: 'palette.operationalReadiness.fmc',
						value: p.operationalReadiness.fmc
					},
					{
						key: 'pmc',
						token: 'palette.operationalReadiness.pmc',
						value: p.operationalReadiness.pmc
					},
					{
						key: 'pmcs',
						token: 'palette.operationalReadiness.pmcs',
						value: p.operationalReadiness.pmcs
					},
					{
						key: 'pmcm',
						token: 'palette.operationalReadiness.pmcm',
						value: p.operationalReadiness.pmcm
					},
					{
						key: 'nmc',
						token: 'palette.operationalReadiness.nmc',
						value: p.operationalReadiness.nmc
					},
					{
						key: 'nmcs',
						token: 'palette.operationalReadiness.nmcs',
						value: p.operationalReadiness.nmcs
					},
					{
						key: 'nmcm',
						token: 'palette.operationalReadiness.nmcm',
						value: p.operationalReadiness.nmcm
					},
					{
						key: 'dade',
						token: 'palette.operationalReadiness.dade',
						value: p.operationalReadiness.dade
					},
					{
						key: 'unknown',
						token: 'palette.operationalReadiness.unknown',
						value: p.operationalReadiness.unknown
					}
				]}
			/>
		</Stack>
	);
}

// ─── Story ────────────────────────────────────────────────────────────────────

const meta: Meta = {
	title: 'Style Guide/Colors',
	parameters: {
		autodocs: false,
		options: { showPanel: false }
	}
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<>
			<Toaster />
			<ColorsPage />
		</>
	)
};
