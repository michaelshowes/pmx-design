import {
	ToggleButton as MuiToggleButton,
	type ToggleButtonProps as MuiToggleButtonProps
} from '@mui/material';

type ToggleButtonBaseProps = Pick<
	MuiToggleButtonProps,
	'value' | 'disabled' | 'selected' | 'onChange' | 'size' | 'children'
>;

export interface ToggleButtonProps extends ToggleButtonBaseProps {}

export default function ToggleButton({ ...rest }: ToggleButtonProps) {
	return <MuiToggleButton {...rest} />;
}
