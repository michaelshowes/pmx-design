import { Box, Typography, useTheme } from '@mui/material';
import { spacing, spacingCategory, grid } from '../../tokens/spacing';

const spacingEntries = Object.entries(spacing)
	.map(([key, value]) => ({ label: `${key}px`, value }))
	.filter(({ value }) => value > 0);

function getCategory(value: number): 'small' | 'medium' | 'large' {
	if (value <= spacingCategory.small.max) return 'small';
	if (value <= spacingCategory.medium.max) return 'medium';
	return 'large';
}

const categoryColors: Record<string, string> = {
	small: '#0073e6',
	medium: '#7a0ce0',
	large: '#007a00',
};

export function SpacingScale() {
	const theme = useTheme();

	return (
		<Box>
			<Typography variant='h6' sx={{ mb: 4 }}>
				4px Spacing Scale
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				{spacingEntries.map(({ label, value }) => {
					const cat = getCategory(value);
					return (
						<Box
							key={label}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 3,
							}}
						>
							<Typography
								variant='body3'
								sx={{
									width: 40,
									textAlign: 'right',
									color: theme.palette.text.secondary,
									fontFamily: 'monospace',
								}}
							>
								{label}
							</Typography>
							<Box
								sx={{
									width: value,
									height: 24,
									backgroundColor: categoryColors[cat],
									borderRadius: 0.5,
									minWidth: 2,
								}}
							/>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

export function SpacingCategories() {
	return (
		<Box>
			<Typography variant='h6' sx={{ mb: 4 }}>
				Spacing Categories
			</Typography>
			<Box sx={{ display: 'flex', gap: 8 }}>
				{Object.entries(spacingCategory).map(([name, cat]) => (
					<Box key={name} sx={{ flex: 1 }}>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
							<Box
								sx={{
									width: 12,
									height: 12,
									borderRadius: '50%',
									backgroundColor: categoryColors[name],
								}}
							/>
							<Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
								{name}
							</Typography>
							<Typography variant='body3' color='text.secondary'>
								{cat.min}px – {cat.max}px
							</Typography>
						</Box>
						<Typography variant='body3' color='text.secondary'>
							{cat.description}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export function GridSystem() {
	const theme = useTheme();

	return (
		<Box>
			<Typography variant='h6' sx={{ mb: 4 }}>
				12 Column Grid
			</Typography>
			<Box sx={{ display: 'flex', gap: 6, mb: 4 }}>
				<Box>
					<Typography variant='body3' color='text.secondary'>
						Columns
					</Typography>
					<Typography variant='body1'>{grid.columns}</Typography>
				</Box>
				<Box>
					<Typography variant='body3' color='text.secondary'>
						Column Width
					</Typography>
					<Typography variant='body1'>{grid.columnWidth}px</Typography>
				</Box>
				<Box>
					<Typography variant='body3' color='text.secondary'>
						Gutter
					</Typography>
					<Typography variant='body1'>{grid.gutter}px</Typography>
				</Box>
				<Box>
					<Typography variant='body3' color='text.secondary'>
						Offset (Margin)
					</Typography>
					<Typography variant='body1'>{grid.offset}px</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: `${grid.gutter}px`,
					p: 2,
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: 1,
				}}
			>
				{Array.from({ length: grid.columns }, (_, i) => (
					<Box
						key={i}
						sx={{
							flex: 1,
							height: 48,
							backgroundColor: theme.palette.primary.main,
							opacity: 0.15,
							borderRadius: 0.5,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Typography variant='body3' color='text.secondary'>
							{i + 1}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}

// Each row defines how 12 columns are split into spans
const columnLayoutRows: number[][] = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[2, 2, 2, 2, 2, 2],
	[3, 3, 3, 3],
	[4, 4, 4],
	[5, 5, 2],
	[6, 3, 3],
	[7, 3, 2],
	[8, 2, 2],
	[9, 2, 1],
	[10, 2],
	[11, 1],
	[12],
];

export function ColumnLayouts() {
	const theme = useTheme();

	return (
		<Box>
			<Typography variant='h6' sx={{ mb: 2 }}>
				Column Layouts
			</Typography>
			<Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
				Content can span any combination of columns that totals 12. Below shows
				every common column arrangement.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: `${grid.gutter}px`,
					p: 2,
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: 1,
				}}
			>
				{columnLayoutRows.map((row, rowIdx) => (
					<Box
						key={rowIdx}
						sx={{
							display: 'flex',
							gap: `${grid.gutter}px`,
						}}
					>
						{row.map((span, colIdx) => (
							<Box
								key={colIdx}
								sx={{
									flex: span,
									height: 48,
									backgroundColor: theme.palette.primary.main,
									opacity: 0.12,
									borderRadius: 0.5,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography variant='body3' color='text.secondary'>
									{span} col{span > 1 ? 's' : ''}
								</Typography>
							</Box>
						))}
					</Box>
				))}
			</Box>
		</Box>
	);
}

// Complementary two-panel column splits
const columnLayoutRows2: number[][] = [
	[1, 11],
	[2, 10],
	[3, 9],
	[4, 8],
	[5, 7],
	[6, 6],
	[7, 5],
	[8, 4],
	[9, 3],
	[10, 2],
	[11, 1],
	[12],
];

export function ColumnLayoutsExample2() {
	const theme = useTheme();

	return (
		<Box>
			<Typography variant='h6' sx={{ mb: 2 }}>
				Column Layouts — Two-Panel Splits
			</Typography>
			<Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
				Every complementary two-panel split that totals 12 columns.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: `${grid.gutter}px`,
					p: 2,
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: 1,
				}}
			>
				{columnLayoutRows2.map((row, rowIdx) => (
					<Box
						key={rowIdx}
						sx={{
							display: 'flex',
							gap: `${grid.gutter}px`,
						}}
					>
						{row.map((span, colIdx) => (
							<Box
								key={colIdx}
								sx={{
									flex: span,
									height: 48,
									backgroundColor: theme.palette.primary.main,
									opacity: 0.12,
									borderRadius: 0.5,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography variant='body3' color='text.secondary'>
									{span} col{span > 1 ? 's' : ''}
								</Typography>
							</Box>
						))}
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default function Spacing() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
			<Box>
				<Typography variant='h5' sx={{ mb: 2 }}>
					Spacing System and Layout
				</Typography>
				<Typography variant='body1' color='text.secondary'>
					The use of a spacing system, column grids, and layouts help simplify
					the creation of pages and give predictable consistency along with
					pleasing visual hierarchies that aid readability.
				</Typography>
			</Box>
			<SpacingCategories />
			<SpacingScale />
			<GridSystem />
			<ColumnLayouts />
			<ColumnLayoutsExample2 />
		</Box>
	);
}
