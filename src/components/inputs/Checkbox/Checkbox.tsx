import { useState } from 'react';
import {
	Checkbox as MuiCheckbox,
	FormControlLabel,
	type CheckboxProps,
	Box
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

interface Props extends CheckboxProps {
	label?: string;
}

function CustomCheckBox({
	labelHovered = false,
	...props
}: CheckboxProps & { labelHovered?: boolean }) {
	const showHover = labelHovered && !props.disabled;
	return (
		<MuiCheckbox
			{...props}
			sx={{
				...(showHover && { backgroundColor: '#c2ddf9' }),
				'&:not(.Mui-disabled):hover': { backgroundColor: '#c2ddf9' },
				'&&.Mui-checked:not(.Mui-disabled):hover': { backgroundColor: '#c2ddf9' },
				'&&.MuiCheckbox-indeterminate:not(.Mui-disabled):hover': { backgroundColor: '#c2ddf9' }
			}}
			icon={
				<Box
					sx={{
						width: '20px',
						height: '20px',
						borderRadius: '4px',
						border: props.disabled ? '1px solid #686868' : '1px solid #000'
					}}
				/>
			}
			checkedIcon={
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '20px',
						height: '20px',
						borderRadius: '4px',
						backgroundColor: props.disabled ? '#66ABF0' : 'primary.main',
						color: 'white'
					}}
				>
					<CheckIcon
						color={'inherit'}
						fontSize={'small'}
					/>
				</Box>
			}
			indeterminateIcon={
				<Box
					sx={{
						width: '20px',
						height: '20px',
						borderRadius: '4px',
						backgroundColor: props.disabled ? '#66ABF0' : 'primary.main',
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<RemoveIcon
						color={'inherit'}
						fontSize={'small'}
					/>
				</Box>
			}
		/>
	);
}

export default function Checkbox({ label, ...props }: Props) {
	const [labelHovered, setLabelHovered] = useState(false);

	if (label) {
		return (
			<FormControlLabel
				onMouseEnter={() => setLabelHovered(true)}
				onMouseLeave={() => setLabelHovered(false)}
				control={
					<CustomCheckBox
						{...props}
						labelHovered={labelHovered}
					/>
				}
				label={label}
			/>
		);
	}
	return <CustomCheckBox {...props} />;
}
