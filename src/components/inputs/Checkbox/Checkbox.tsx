import {
	Checkbox as MuiCheckbox,
	FormControlLabel,
	type CheckboxProps
} from '@mui/material';

interface Props extends CheckboxProps {
	label?: string;
}

export default function Checkbox({ label, ...props }: Props) {
	if (label) {
		return (
			<FormControlLabel
				control={<MuiCheckbox {...props} />}
				label={label}
			/>
		);
	}
	return <MuiCheckbox {...props} />;
}
