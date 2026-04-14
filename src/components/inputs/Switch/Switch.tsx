import {
	Switch as MuiSwitch,
	FormControlLabel,
	type SwitchProps
} from '@mui/material';

interface Props extends SwitchProps {
	label?: string;
}

export default function Switch({ label, ...props }: Props) {
	if (label) {
		return (
			<FormControlLabel
				control={<MuiSwitch {...props} />}
				label={label}
				disabled={props.disabled}
			/>
		);
	}
	return <MuiSwitch {...props} />;
}
