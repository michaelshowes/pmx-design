import {
	ToggleButtonGroup as MuiToggleButtonGroup,
	type ToggleButtonGroupProps as MuiToggleButtonGroupProps
} from '@mui/material';

type ToggleButtonGroupBaseProps = Pick<
	MuiToggleButtonGroupProps,
	'value' | 'exclusive' | 'onChange' | 'disabled' | 'size' | 'orientation' | 'children'
>;

export interface ToggleButtonGroupProps extends ToggleButtonGroupBaseProps {}

export default function ToggleButtonGroup({ ...rest }: ToggleButtonGroupProps) {
	return <MuiToggleButtonGroup {...rest} />;
}
