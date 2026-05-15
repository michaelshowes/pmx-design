import { useState } from 'react';
import {
	Radio as MuiRadio,
	FormControlLabel,
	type RadioProps,
	Box
} from '@mui/material';

interface Props extends RadioProps {
	label?: string;
}

function CustomRadio({
	labelHovered = false,
	disabled,
	...props
}: RadioProps & { labelHovered?: boolean }) {
	const showHover = labelHovered && !disabled;

	return (
		<MuiRadio
			disabled={disabled}
			{...props}
			sx={{
				padding: '6px',
				borderRadius: '50%',
				...(showHover && { backgroundColor: '#c2ddf9' }),
				'&:not(.Mui-disabled):hover': { backgroundColor: '#c2ddf9' },
				'&&.Mui-checked:not(.Mui-disabled):hover': { backgroundColor: '#c2ddf9' }
			}}
			icon={
				<Box
					sx={{
						width: '20px',
						height: '20px',
						borderRadius: '50%',
						border: `1px solid ${disabled ? '#b4b4b4' : '#9b9b9b'}`,
						backgroundColor: 'white'
					}}
				/>
			}
			checkedIcon={
				<Box
					sx={{
						width: '20px',
						height: '20px',
						borderRadius: '50%',
						border: `2px solid ${disabled ? '#66abf0' : '#0073e6'}`,
						backgroundColor: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Box
						sx={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							backgroundColor: disabled ? '#66abf0' : '#0073e6'
						}}
					/>
				</Box>
			}
		/>
	);
}

export default function RadioButton({ label, disabled, ...props }: Props) {
	const [labelHovered, setLabelHovered] = useState(false);

	if (label) {
		return (
			<FormControlLabel
				onMouseEnter={() => setLabelHovered(true)}
				onMouseLeave={() => setLabelHovered(false)}
				control={
					<CustomRadio
						disabled={disabled}
						{...props}
						labelHovered={labelHovered}
					/>
				}
				label={label}
				disabled={disabled}
			/>
		);
	}
	return (
		<CustomRadio
			disabled={disabled}
			{...props}
		/>
	);
}
