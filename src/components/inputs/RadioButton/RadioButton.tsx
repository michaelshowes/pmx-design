import {
	Radio as MuiRadio,
	FormControlLabel,
	type RadioProps
} from '@mui/material';

interface Props extends RadioProps {
	label?: string;
}

export default function RadioButton({ label, ...props }: Props) {
	if (label) {
		return (
			<FormControlLabel
				control={<MuiRadio {...props} />}
				label={label}
				disabled={props.disabled}
			/>
		);
	}
	return <MuiRadio {...props} />;
}
